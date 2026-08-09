import { useEffect, useRef } from 'react'
import { useGameStore } from '@/store/gameStore'

export function useAudio(src: string) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const { isMusicPlaying, volume } = useGameStore()

  useEffect(() => {
    audioRef.current = new Audio(src)
    audioRef.current.loop = true
    return () => {
      audioRef.current?.pause()
      audioRef.current = null
    }
  }, [src])

  useEffect(() => {
    if (!audioRef.current) return
    audioRef.current.volume = volume
    if (isMusicPlaying) {
      audioRef.current.play().catch(() => {})
    } else {
      audioRef.current.pause()
    }
  }, [isMusicPlaying, volume])

  return audioRef
}
