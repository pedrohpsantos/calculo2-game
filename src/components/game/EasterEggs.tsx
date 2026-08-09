import { useEffect, useState } from 'react'
import confetti from 'canvas-confetti'
import { motion, AnimatePresence } from 'framer-motion'

function useKeySequence(sequence: string, callback: () => void) {
  const [keyBuffer, setKeyBuffer] = useState('')

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase()
      setKeyBuffer((prev) => {
        const newBuffer = (prev + key).slice(-sequence.length)
        if (newBuffer === sequence) {
          callback()
          return ''
        }
        return newBuffer
      })
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [sequence, callback])
}

export function EasterEggs() {
  const [activeEgg, setActiveEgg] = useState<string | null>(null)

  const triggerEgg = (eggName: string, duration = 4000) => {
    setActiveEgg(eggName)
    setTimeout(() => setActiveEgg(null), duration)
  }

  // Easter Egg 1: "tatiane" - The teacher
  useKeySequence('tatiane', () => {
    confetti({
      particleCount: 200,
      spread: 160,
      origin: { y: 0.6 },
      colors: ['#FFD700', '#FFA500', '#FF8C00']
    })
    triggerEgg('tatiane')
  })

  // Easter Egg 2: "laplace" - The Magic
  useKeySequence('laplace', () => {
    const duration = 3000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#a864fd', '#29cdff', '#78ff44']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#a864fd', '#29cdff', '#78ff44']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
    triggerEgg('laplace')
  })

  return (
    <AnimatePresence>
      {activeEgg === 'tatiane' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -50 }}
          className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] bg-surface-light border-2 border-primary p-6 rounded-2xl shadow-[0_0_40px_rgba(255,215,0,0.5)] text-center backdrop-blur-md"
        >
          <h2 className="text-3xl font-display text-primary mb-2">SS Garantido! 🎓</h2>
          <p className="text-white font-bold">Aprovado com louvor em Cálculo 2!</p>
        </motion.div>
      )}

      {activeEgg === 'laplace' && (
        <motion.div
          initial={{ opacity: 0, rotate: -180, scale: 0 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="fixed inset-0 z-[100] pointer-events-none flex items-center justify-center"
        >
          <div className="bg-black/60 backdrop-blur-sm p-12 rounded-full border border-purple-500 shadow-[0_0_100px_rgba(168,100,253,0.8)]">
            <h1 className="text-6xl font-display text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 animate-pulse">
              🎩 MAGIC! ✨
            </h1>
            <p className="text-white text-center mt-4 font-mono">Do domínio t para o domínio s...</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
