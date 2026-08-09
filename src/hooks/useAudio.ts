import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { useGameStore } from '@/store/gameStore'

export function useAudio(src: string) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const { isMusicPlaying, volume } = useGameStore()
  const location = useLocation()

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
    
    const isModuleActivity = location.pathname.startsWith('/modules/') && location.pathname.length > '/modules/'.length;
    const shouldPlayRoute = !isModuleActivity;
    
    if (isMusicPlaying && shouldPlayRoute) {
      const playPromise = audioRef.current.play()
      
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay was prevented by the browser. 
          // We wait for the first user interaction to start playing.
          const startAudioOnInteract = () => {
            if (audioRef.current && isMusicPlaying) {
              audioRef.current.play().catch(() => {})
            }
            window.removeEventListener('click', startAudioOnInteract)
            window.removeEventListener('keydown', startAudioOnInteract)
          }
          
          window.addEventListener('click', startAudioOnInteract)
          window.addEventListener('keydown', startAudioOnInteract)
        })
      }
    } else {
      audioRef.current.pause()
    }
  }, [isMusicPlaying, volume, location.pathname])

  return audioRef
}
