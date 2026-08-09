import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface GameState {
  isMusicPlaying: boolean
  volume: number
  currentModule: string | null
  toggleMusic: () => void
  setVolume: (v: number) => void
  setCurrentModule: (slug: string | null) => void
}

export const useGameStore = create<GameState>()(
  persist(
    (set) => ({
      isMusicPlaying: true,
      volume: 0.5,
      currentModule: null,
      toggleMusic: () => set((s) => ({ isMusicPlaying: !s.isMusicPlaying })),
      setVolume: (volume) => set({ volume }),
      setCurrentModule: (currentModule) => set({ currentModule }),
    }),
    { name: 'calc2-game' }
  )
)
