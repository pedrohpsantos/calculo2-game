import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Check, XCircle } from 'lucide-react'
import { modules } from '@/data/modules'
import type { Flashcard } from '@/types/flashcard'
import { MathRenderer } from '@/components/game/MathRenderer'
import { useProgressStore } from '@/store/progressStore'
import { useAuthStore } from '@/store/authStore'
import { useSound } from '@/hooks/useSound'

function stripLatex(text: string) {
  return text.replace(/\$([^\$]+)\$/g, '$1')
}

// Temporarily define empty arrays until subagent generates them. 
// We will use dynamic imports or just hardcode imports later.
// For now, we'll try to import them but handle if they don't exist yet.
import { flashcards as seriesFlashcards } from '@/data/series/flashcards'
import { flashcards as laplaceFlashcards } from '@/data/laplace/flashcards'
import { flashcards as odeFirstOrderFlashcards } from '@/data/ode-first-order/flashcards'
import { flashcards as taylorFlashcards } from '@/data/taylor/flashcards'
import { flashcards as powerSeriesMethodFlashcards } from '@/data/power-series-method/flashcards'
import { flashcards as odeHigherOrderFlashcards } from '@/data/ode-higher-order/flashcards'
import { flashcards as odeSystemsFlashcards } from '@/data/ode-systems/flashcards'

const getFlashcardsBySlug = (slug?: string): Flashcard[] | null => {
  try {
    switch (slug) {
      case 'sequences-series': return seriesFlashcards || []
      case 'laplace': return laplaceFlashcards || []
      case 'ode-first-order': return odeFirstOrderFlashcards || []
      case 'taylor': return taylorFlashcards || []
      case 'power-series-method': return powerSeriesMethodFlashcards || []
      case 'ode-higher-order': return odeHigherOrderFlashcards || []
      case 'ode-systems': return odeSystemsFlashcards || []
      default: return null
    }
  } catch {
    return [] // In case the subagent hasn't created the files yet, we won't crash
  }
}

export function FlashcardActivity() {
  const { moduleSlug } = useParams()
  const navigate = useNavigate()
  const { user } = useAuthStore()
  const updateProgress = useProgressStore((s) => s.updateProgress)
  const { playSuccess, playError } = useSound()

  const flashcards = getFlashcardsBySlug(moduleSlug)
  const mod = modules.find(m => m.slug === moduleSlug)

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [known, setKnown] = useState<string[]>([])
  const [unknown, setUnknown] = useState<string[]>([])
  
  if (!flashcards || flashcards.length === 0 || !mod) {
    return (
      <div className="min-h-screen pt-24 px-4 flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl font-display text-text-muted mb-6">Flashcards em construção! 🚧</h2>
        <button onClick={() => navigate(-1)} className="text-primary hover:underline">Voltar</button>
      </div>
    )
  }

  const isFinished = currentIndex >= flashcards.length

  const handleFlip = () => {
    if (!isFlipped) setIsFlipped(true)
  }

  const handleNext = (knewIt: boolean) => {
    const card = flashcards[currentIndex]
    if (knewIt) {
      setKnown([...known, card.id])
      playSuccess()
    } else {
      setUnknown([...unknown, card.id])
      playError()
    }
    
    setIsFlipped(false)
    setCurrentIndex(i => i + 1)

    if (currentIndex === flashcards.length - 1) {
      // Finished
      if (user && moduleSlug) {
        updateProgress(user.id, moduleSlug, { flashcards_completed: true })
      }
    }
  }

  return (
    <div className="min-h-screen pt-8 pb-12 px-4 max-w-2xl mx-auto flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <button 
          onClick={() => navigate(`/modules/${moduleSlug}`)}
          className="p-3 bg-surface-light rounded-full text-text-muted hover:text-white hover:bg-white/10 transition-colors"
        >
          <X size={24} />
        </button>
        <span className="font-display text-text-muted">
          {isFinished ? 'Resumo' : `Carta ${currentIndex + 1} de ${flashcards.length}`}
        </span>
      </div>

      {isFinished ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-surface-light border border-white/10 rounded-3xl p-10 text-center shadow-2xl"
        >
          <h2 className="text-3xl font-display text-white mb-6">Sessão Concluída!</h2>
          <div className="flex justify-center gap-12 mb-10">
            <div className="text-center">
              <div className="text-4xl font-display text-green-400 mb-2">{known.length}</div>
              <div className="text-text-muted uppercase text-sm font-bold tracking-wider">Lembrei</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display text-red-400 mb-2">{unknown.length}</div>
              <div className="text-text-muted uppercase text-sm font-bold tracking-wider">Esqueci</div>
            </div>
          </div>
          <button 
            onClick={() => navigate(`/modules/${moduleSlug}`)}
            className="w-full py-4 bg-primary hover:bg-primary-dark text-black font-bold rounded-xl transition-colors"
          >
            Concluir e Voltar
          </button>
        </motion.div>
      ) : (
        <div className="flex-1 flex flex-col">
          <div className="flex-1 relative" style={{ perspective: 1000 }}>
            <motion.div 
              className="w-full h-96 relative cursor-pointer"
              style={{ transformStyle: 'preserve-3d' }}
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              onClick={handleFlip}
            >
              {/* Front */}
              <div 
                className="absolute inset-0 bg-surface-light border border-white/10 rounded-3xl p-8 flex flex-col shadow-2xl"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <div className="text-center mb-auto">
                  <span className="inline-block px-3 py-1 rounded-full text-xs uppercase tracking-widest font-bold" style={{ backgroundColor: `${mod.color}20`, color: mod.color }}>
                    {flashcards[currentIndex].category}
                  </span>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center text-center w-full overflow-hidden">
                  <h3 className="text-lg md:text-xl text-white font-bold leading-relaxed [text-wrap:balance] break-words hyphens-auto w-full">
                    {stripLatex(flashcards[currentIndex].front)}
                  </h3>
                  {flashcards[currentIndex].frontLatex && (
                    <div className="mt-6 p-4 bg-black/40 rounded-xl w-full border border-white/5">
                      <MathRenderer expression={flashcards[currentIndex].frontLatex!} />
                    </div>
                  )}
                </div>
                <div className="text-center text-text-muted text-sm mt-auto">
                  Clique para virar
                </div>
              </div>

              {/* Back */}
              <div 
                className="absolute inset-0 bg-white rounded-3xl p-8 flex flex-col shadow-2xl"
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
              >
                <div className="flex-1 flex flex-col items-center justify-center text-center w-full overflow-hidden">
                  <h3 className="text-lg md:text-xl text-gray-900 font-bold leading-relaxed [text-wrap:balance] break-words hyphens-auto w-full">
                    {stripLatex(flashcards[currentIndex].back)}
                  </h3>
                  {flashcards[currentIndex].backLatex && (
                    <div className="mt-6 p-4 bg-gray-100 rounded-xl w-full border border-gray-200 text-gray-900">
                      <MathRenderer expression={flashcards[currentIndex].backLatex!} />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          <AnimatePresence>
            {isFlipped && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 flex gap-4"
              >
                <button 
                  onClick={() => handleNext(false)}
                  className="flex-1 py-4 bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/50 rounded-2xl font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <XCircle size={24} /> Esqueci
                </button>
                <button 
                  onClick={() => handleNext(true)}
                  className="flex-1 py-4 bg-green-500/20 hover:bg-green-500/30 text-green-400 border border-green-500/50 rounded-2xl font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <Check size={24} /> Lembrei
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  )
}
