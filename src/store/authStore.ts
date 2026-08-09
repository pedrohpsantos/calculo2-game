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
  isLoading: boolean
  setUser: (user: UserProfile | null) => void
  initializeAuth: () => Promise<void>
}

export const useAuthStore = create<AuthState>()((set) => ({
  user: null,
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
        if (authError) throw authError
        user = authData.user
      }

      if (user) {
        // Fetch or create profile
        const { data: profile, error: profileError } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single()

        if (profileError && profileError.code === 'PGRST116') {
          // No profile, create it
          const { data: newProfile, error: insertError } = await supabase
            .from('profiles')
            .insert([{ id: user.id, display_name: 'Aluno Anônimo' }])
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
}))
