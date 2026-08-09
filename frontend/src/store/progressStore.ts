import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { supabase } from '@/lib/supabase'
import { logger } from '@/utils/logger'

export interface UserProgress {
  id?: string
  user_id?: string
  module_slug: string
  quiz_score: number
  quiz_completed: boolean
  flashcards_completed: boolean
  challenge_completed: boolean
  last_played_at: string
}

interface ProgressState {
  progress: Record<string, UserProgress>
  isLoading: boolean
  fetchProgress: (userId: string) => Promise<void>
  updateProgress: (userId: string, slug: string, data: Partial<UserProgress>) => Promise<void>
  getProgress: (slug: string) => UserProgress | undefined
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      progress: {},
  isLoading: false,
  fetchProgress: async (userId: string) => {
    if (!userId) return; // Se não tem usuário logado, apenas usa o local state
    try {
      set({ isLoading: true })
      const { data, error } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', userId)
        
      if (error) throw error
      
      if (data) {
        const localProgress = get().progress;
        const progressMap = { ...localProgress };
        data.forEach((curr) => {
          const local = progressMap[curr.module_slug];
          const remoteTime = new Date(curr.last_played_at || 0).getTime();
          const localTime = new Date(local?.last_played_at || 0).getTime();
          if (!local || remoteTime > localTime) {
            progressMap[curr.module_slug] = curr as unknown as UserProgress;
          }
        });
        set({ progress: progressMap })
      }
    } catch (error) {
      logger.error('Error fetching progress:', error)
    } finally {
      set({ isLoading: false })
    }
  },
  updateProgress: async (userId: string, slug: string, data: Partial<UserProgress>) => {
    // Optimistic update
    set((s) => ({
      progress: {
        ...s.progress,
        [slug]: { 
          ...s.progress[slug], 
          ...data, 
          module_slug: slug,
          quiz_score: data.quiz_score ?? s.progress[slug]?.quiz_score ?? 0,
          quiz_completed: data.quiz_completed ?? s.progress[slug]?.quiz_completed ?? false,
          flashcards_completed: data.flashcards_completed ?? s.progress[slug]?.flashcards_completed ?? false,
          challenge_completed: data.challenge_completed ?? s.progress[slug]?.challenge_completed ?? false,
          last_played_at: new Date().toISOString()
        } as UserProgress,
      },
    }))
    
    // Sync with Supabase using upsert
    if (!userId) return; // Não sincroniza se não estiver logado

    try {
      const current = get().progress[slug]
      const { error } = await supabase
        .from('user_progress')
        .upsert({
          user_id: userId,
          module_slug: slug,
          quiz_score: current.quiz_score,
          quiz_completed: current.quiz_completed,
          flashcards_completed: current.flashcards_completed,
          challenge_completed: current.challenge_completed,
          last_played_at: current.last_played_at
        }, { onConflict: 'user_id,module_slug' })
        
      if (error) throw error
    } catch (error) {
      logger.error('Error syncing progress:', error)
    }
  },
  getProgress: (slug) => get().progress[slug],
    }),
    {
      name: 'calc2-progress',
      partialize: (state) => ({ progress: state.progress }),
    }
  )
)
