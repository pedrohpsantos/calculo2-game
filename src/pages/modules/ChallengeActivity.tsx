import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { DndContext, DragOverlay, closestCenter } from '@dnd-kit/core'
import type { DragEndEvent } from '@dnd-kit/core'
import { X, CheckCircle, RotateCcw } from 'lucide-react'
import { clsx } from 'clsx'
import { modules } from '@/data/modules'
import type { Challenge, ChallengePair } from '@/types/challenge'
import { MathRenderer } from '@/components/game/MathRenderer'
import { Dropzone } from '@/components/game/Dropzone'
import { DraggableCard } from '@/components/game/DraggableCard'
import { Button } from '@/components/ui/Button'
import { useProgressStore } from '@/store/progressStore'
import { useAuthStore } from '@/store/authStore'
import { useSound } from '@/hooks/useSound'
import confetti from 'canvas-confetti'

// We will use dynamic imports or just hardcode imports for now:
import { challenge as odeFirstOrderChallenge } from '@/data/ode-first-order/challenge'
import { challenge as seriesChallenge } from '@/data/series/challenge'
import { challenge as laplaceChallenge } from '@/data/laplace/challenge'
import { challenge as taylorChallenge } from '@/data/taylor/challenge'
import { challenge as powerSeriesMethodChallenge } from '@/data/power-series-method/challenge'
import { challenge as odeHigherOrderChallenge } from '@/data/ode-higher-order/challenge'
import { challenge as odeSystemsChallenge } from '@/data/ode-systems/challenge'

const getChallengeBySlug = (slug?: string): Challenge | null => {
  try {
    switch (slug) {
      case 'ode-first-order': return odeFirstOrderChallenge
      case 'sequences-series': return seriesChallenge
      case 'laplace': return laplaceChallenge
      case 'taylor': return taylorChallenge
      case 'power-series-method': return powerSeriesMethodChallenge
      case 'ode-higher-order': return odeHigherOrderChallenge
      case 'ode-systems': return odeSystemsChallenge
      default: return null
    }
  } catch {
    return null
  }
}

export function ChallengeActivity() {
  const { moduleSlug } = useParams()
  const navigate = useNavigate()
  const { playSuccess, playError } = useSound()
  const mod = modules.find(m => m.slug === moduleSlug)
  const challenge = getChallengeBySlug(moduleSlug)

  const [matches, setMatches] = useState<Record<string, string>>({}) // dropzoneId -> draggableId
  const [activeDragItem, setActiveDragItem] = useState<ChallengePair | null>(null)
  const [hasValidated, setHasValidated] = useState(false)
  const [shuffledCards, setShuffledCards] = useState<ChallengePair[]>([])

  const updateProgress = useProgressStore(s => s.updateProgress)
  const getProgress = useProgressStore(s => s.getProgress)
  const { user } = useAuthStore()

  useEffect(() => {
    if (challenge?.pairs) {
      // Shuffle the cards on load
      setShuffledCards([...challenge.pairs].sort(() => Math.random() - 0.5))
    }
  }, [challenge])

  if (!mod || !challenge) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Módulo ou desafio não encontrado.
      </div>
    )
  }

  const handleDragStart = (event: any) => {
    const { active } = event
    const item = challenge.pairs.find(p => p.id === active.id)
    if (item) setActiveDragItem(item)
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    setActiveDragItem(null)

    if (hasValidated) return // don't allow drags after validation

    if (over) {
      const dropzoneId = over.id as string
      const draggableId = active.id as string

      setMatches(prev => {
        const newMatches = { ...prev }
        
        // If this draggable is already in another dropzone, remove it from there
        for (const [dz, dr] of Object.entries(newMatches)) {
          if (dr === draggableId) {
            delete newMatches[dz]
          }
        }
        
        newMatches[dropzoneId] = draggableId
        return newMatches
      })
    } else {
      // If dropped outside, remove it from any dropzone
      const draggableId = active.id as string
      setMatches(prev => {
        const newMatches = { ...prev }
        for (const [dz, dr] of Object.entries(newMatches)) {
          if (dr === draggableId) {
            delete newMatches[dz]
          }
        }
        return newMatches
      })
    }
  }

  const handleValidate = () => {
    setHasValidated(true)
    let allCorrect = true
    
    // Check if every dropzone has the CORRECT draggable ID (they share the same ID)
    for (const pair of challenge.pairs) {
      if (matches[pair.id] !== pair.id) {
        allCorrect = false
        break
      }
    }

    if (allCorrect) {
      playSuccess()
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 }
      })

      // Update progress
      if (user && mod.slug) {
        const progress = getProgress(mod.slug)
        if (!progress?.challenge_completed) {
          updateProgress(user.id, mod.slug, {
            challenge_completed: true
          })
        }
      }
    } else {
      playError()
    }
  }

  const resetChallenge = () => {
    setMatches({})
    setHasValidated(false)
  }

  const allFilled = Object.keys(matches).length === challenge.pairs.length
  
  // Calculate how many are correct right now (for UI highlighting when validated)
  const getIsCorrect = (dropzoneId: string) => {
    if (!hasValidated) return null
    return matches[dropzoneId] === dropzoneId
  }

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 flex flex-col">
      <div className="max-w-6xl mx-auto w-full flex flex-col flex-grow">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-sm font-bold uppercase tracking-wider mb-2 block" style={{ color: mod.color }}>
              Desafio Final • {mod.title}
            </span>
            <h1 className="text-3xl font-display text-white">{challenge.title}</h1>
            <p className="text-text-muted mt-2">{challenge.instruction}</p>
          </div>
          <button 
            onClick={() => navigate('/')}
            className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* DND Layout */}
        <DndContext 
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 flex-grow">
            {/* Left Column: Dropzones */}
            <div className="space-y-6 flex flex-col justify-center">
              {challenge.pairs.map(pair => (
                <div key={pair.id} className="flex flex-col xl:flex-row xl:items-center gap-4 bg-surface-light/30 p-4 md:p-6 rounded-2xl border border-white/5">
                  <div className="xl:w-1/2 flex items-center justify-center bg-black/40 p-4 rounded-xl border border-white/5 overflow-x-auto">
                    <div className="text-lg text-white">
                      <MathRenderer expression={pair.dropzoneLatex} />
                    </div>
                  </div>
                  <div className="xl:w-1/2">
                    <Dropzone 
                      id={pair.id}
                      isCorrect={getIsCorrect(pair.id)}
                      droppedItem={
                        matches[pair.id] 
                          ? { id: matches[pair.id], text: challenge.pairs.find(p => p.id === matches[pair.id])!.draggableText }
                          : null
                      }
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Draggable Cards & Validation */}
            <div className="flex flex-col bg-surface-light/10 border border-white/10 rounded-3xl p-6 md:p-8">
              <h3 className="text-white font-display text-xl mb-6 flex items-center gap-2">
                Opções
                <span className="text-xs bg-white/10 px-2 py-1 rounded-full text-white/70">
                  Arraste para as lacunas
                </span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-max flex-grow content-start">
                {shuffledCards.map(card => {
                  // Hide if this card is currently placed in any dropzone
                  const isPlaced = Object.values(matches).includes(card.id)
                  if (isPlaced) return <div key={card.id} className="hidden" />

                  return (
                    <DraggableCard 
                      key={card.id}
                      id={card.id}
                      text={card.draggableText}
                      disabled={hasValidated}
                    />
                  )
                })}
              </div>

              {/* Action Area */}
              <div className="mt-12">
                <AnimatePresence mode="wait">
                  {!hasValidated ? (
                    <motion.div 
                      key="validate-btn"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                    >
                      <Button
                        variant={allFilled ? "primary" : "ghost"}
                        size="lg"
                        is3D={allFilled}
                        onClick={handleValidate}
                        disabled={!allFilled}
                        className={clsx(
                          "w-full text-lg",
                          !allFilled && "bg-surface-light/50 text-white/30 border-white/5 cursor-not-allowed"
                        )}
                      >
                        Verificar Respostas
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="result-area"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="space-y-4"
                    >
                      {Object.keys(matches).every(dz => matches[dz] === dz) ? (
                        <div className="text-center p-6 rounded-2xl bg-green-500/20 border border-green-500/50">
                          <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-3" />
                          <h3 className="text-xl font-display text-white mb-2">Desafio Concluído!</h3>
                          <p className="text-green-300 font-body mb-6">+300 XP ganhos!</p>
                          <Button
                            variant="primary"
                            size="md"
                            is3D={true}
                            onClick={() => navigate('/')}
                            className="bg-green-500 hover:bg-green-400 border-green-600 text-white"
                          >
                            Voltar ao Mapa
                          </Button>
                        </div>
                      ) : (
                        <div className="text-center p-6 rounded-2xl bg-red-500/20 border border-red-500/50">
                          <RotateCcw className="w-12 h-12 text-red-400 mx-auto mb-3" />
                          <h3 className="text-xl font-display text-white mb-2">Alguns estão errados!</h3>
                          <p className="text-red-300 font-body mb-6">Revise as lacunas que ficaram vermelhas e tente novamente.</p>
                          <Button
                            variant="ghost"
                            size="md"
                            onClick={resetChallenge}
                            className="w-full bg-white/10 hover:bg-white/20"
                          >
                            Tentar Novamente
                          </Button>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
          
          <DragOverlay>
            {activeDragItem ? (
              <div className="px-6 py-4 rounded-xl border border-primary bg-primary text-surface font-body font-bold text-lg shadow-[0_10px_30px_rgba(255,200,0,0.5)] rotate-3">
                {activeDragItem.draggableText}
              </div>
            ) : null}
          </DragOverlay>
        </DndContext>
      </div>
    </div>
  )
}
