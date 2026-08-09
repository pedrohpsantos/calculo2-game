import { useCallback } from 'react';
import { useGameStore } from '@/store/gameStore';

export function useSound() {
  const { isMusicPlaying, volume } = useGameStore();

  const playRetroSound = useCallback((type: 'success' | 'error') => {
    if (!isMusicPlaying) return;

    // Use Web Audio API for 8-bit style retro sounds
    const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    if (type === 'success') {
      // Mario-style coin/success sound
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      
      oscillator.type = 'square';
      oscillator.frequency.setValueAtTime(987.77, audioCtx.currentTime); // B5
      oscillator.frequency.setValueAtTime(1318.51, audioCtx.currentTime + 0.1); // E6
      
      gainNode.gain.setValueAtTime(volume * 0.5, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);
      
      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      
      oscillator.start();
      oscillator.stop(audioCtx.currentTime + 0.4);
    } else {
      // Retro error/buzz sound
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      
      oscillator.type = 'sawtooth';
      oscillator.frequency.setValueAtTime(150, audioCtx.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(80, audioCtx.currentTime + 0.3);
      
      gainNode.gain.setValueAtTime(volume * 0.5, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
      
      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      
      oscillator.start();
      oscillator.stop(audioCtx.currentTime + 0.3);
    }
  }, [isMusicPlaying, volume]);

  const playSuccess = useCallback(() => playRetroSound('success'), [playRetroSound]);
  const playError = useCallback(() => playRetroSound('error'), [playRetroSound]);

  return { playSuccess, playError };
}
