import { Volume2, VolumeX } from 'lucide-react'
import { useGameStore } from '@/store/gameStore'
import { useAudio } from '@/hooks/useAudio'

export function AudioPlayer() {
  const { isMusicPlaying, toggleMusic } = useGameStore()
  useAudio('/audio/background-music.mp3')

  return (
    <button
      onClick={toggleMusic}
      className="flex items-center gap-2 px-3 py-2 text-sm text-text-muted hover:text-text transition-colors"
      aria-label={isMusicPlaying ? 'Pausar música' : 'Tocar música'}
    >
      {isMusicPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
    </button>
  )
}
