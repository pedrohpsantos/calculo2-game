import { create } from 'zustand'
import { supabase } from '@/lib/supabase'

export interface UserProfile {
  id: string
  display_name: string | null
  avatar_url: string | null
  total_score: number
  level: number
}

interface AuthState {
  user: UserProfile | null
  isAnonymous: boolean
  isLoading: boolean
  setUser: (user: UserProfile | null) => void
  initializeAuth: () => Promise<void>
  loginWithEmail: (email: string, pass: string) => Promise<void>
  signUpWithEmail: (email: string, pass: string, name: string) => Promise<void>
  loginWithGoogle: () => Promise<void>
  logout: () => Promise<void>
  updateProfile: (updates: Partial<UserProfile>) => Promise<void>
}

export const useAuthStore = create<AuthState>()((set, get) => ({
  user: null,
  isAnonymous: true,
  isLoading: true,
  setUser: (user) => set({ user }),
  initializeAuth: async () => {
    try {
      set({ isLoading: true })
      const { data: { session }, error: sessionError } = await supabase.auth.getSession()

      if (sessionError) throw sessionError

      let user = session?.user || null

      if (!user) {
        // Create anonymous user
        const { data: authData, error: authError } = await supabase.auth.signInAnonymously()
        if (authError) {
          console.warn('Anonymous auth disabled or failed. Operating as guest.')
          set({ user: null, isAnonymous: true })
          return
        }
        user = authData.user
      }

      const isAnon = user?.is_anonymous ?? false
      set({ isAnonymous: isAnon })

      if (user) {
        // Fetch or create profile
        const { data: profile, error: profileError } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single()

        if (profileError && profileError.code === 'PGRST116') {
          // No profile, create it
          const defaultName = user.user_metadata?.full_name || user.user_metadata?.name || user.user_metadata?.display_name || user.email?.split('@')[0] || 'Estudante'
          const { data: newProfile, error: insertError } = await supabase
            .from('profiles')
            .insert([{ id: user.id, display_name: defaultName }])
            .select()
            .single()
            
          if (insertError) throw insertError
          set({ user: { ...newProfile, total_score: newProfile.total_score || 0, level: newProfile.level || 1 } })
        } else if (profile) {
          set({ user: { ...profile, total_score: profile.total_score || 0, level: profile.level || 1 } })
        }
      }
    } catch (error) {
      console.error('Error initializing auth:', error)
    } finally {
      set({ isLoading: false })
    }
  },
  loginWithEmail: async (email, password) => {
    try {
      set({ isLoading: true })
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) throw error
      await useAuthStore.getState().initializeAuth()
    } catch (error) {
      console.error('Email login error:', error)
      throw error
    } finally {
      set({ isLoading: false })
    }
  },
  signUpWithEmail: async (email, password, displayName) => {
    try {
      set({ isLoading: true })
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            display_name: displayName,
          },
        },
      })
      if (error) throw error
      
      // Se não precisa confirmar email, já inicializa
      if (data.session) {
        await useAuthStore.getState().initializeAuth()
      } else {
        alert('Cadastro realizado! Verifique seu email para confirmar.')
      }
    } catch (error) {
      console.error('Email signup error:', error)
      throw error
    } finally {
      set({ isLoading: false })
    }
  },
  loginWithGoogle: async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin,
        },
      })
      if (error) throw error
    } catch (error) {
      console.error('Google login error:', error)
      throw error
    }
  },
  logout: async () => {
    try {
      set({ isLoading: true })
      await supabase.auth.signOut()
      set({ user: null, isAnonymous: true })
      // Re-initialize to get a new anonymous user immediately
      await useAuthStore.getState().initializeAuth()
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      set({ isLoading: false })
    }
  },
  updateProfile: async (updates) => {
    try {
      set({ isLoading: true })
      const currentUser = get().user
      if (!currentUser) return

      const { data, error } = await supabase
        .from('profiles')
        .update(updates)
        .eq('id', currentUser.id)
        .select()
        .single()
        
      if (error) throw error
      set({ user: { ...currentUser, ...data } })
    } catch (error) {
      console.error('Error updating profile:', error)
      throw error
    } finally {
      set({ isLoading: false })
    }
  }
}))
