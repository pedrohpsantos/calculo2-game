import { useCallback } from 'react'

const createAudioContext = () => {
  if (typeof window !== 'undefined') {
    return new (window.AudioContext || (window as any).webkitAudioContext)()
  }
  return null
}

const audioCtx = createAudioContext()

export function useSound() {
  const playTone = useCallback((frequency: number, type: OscillatorType, duration: number, startTime: number) => {
    if (!audioCtx) return

    const osc = audioCtx.createOscillator()
    const gainNode = audioCtx.createGain()

    osc.type = type
    osc.frequency.setValueAtTime(frequency, startTime)

    // Envelope (ADSR)
    gainNode.gain.setValueAtTime(0, startTime)
    gainNode.gain.linearRampToValueAtTime(0.2, startTime + 0.05) // Attack
    gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration - 0.05) // Decay
    
    osc.connect(gainNode)
    gainNode.connect(audioCtx.destination)

    osc.start(startTime)
    osc.stop(startTime + duration)
  }, [])

  const playSuccess = useCallback(() => {
    if (!audioCtx) return
    const now = audioCtx.currentTime
    
    // 8-bit success arpeggio (C5, E5, G5, C6) using square wave
    playTone(523.25, 'square', 0.1, now)
    playTone(659.25, 'square', 0.1, now + 0.1)
    playTone(783.99, 'square', 0.1, now + 0.2)
    playTone(1046.50, 'square', 0.2, now + 0.3)
  }, [playTone])

  const playError = useCallback(() => {
    if (!audioCtx) return
    const now = audioCtx.currentTime
    
    // 8-bit error descending tone using sawtooth
    playTone(300, 'sawtooth', 0.15, now)
    playTone(250, 'sawtooth', 0.15, now + 0.15)
    playTone(200, 'sawtooth', 0.3, now + 0.3)
  }, [playTone])

  return { playSuccess, playError }
}
