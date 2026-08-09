import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { DndContext, type DragEndEvent } from '@dnd-kit/core'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { odeFirstOrderQuestions } from '@/data/ode-first-order/quiz-questions'
import { seriesQuestions } from '@/data/series/quiz-questions'
import { laplaceQuestions } from '@/data/laplace/quiz-questions'
import { taylorQuestions } from '@/data/taylor/quiz-questions'
import { powerSeriesMethodQuestions } from '@/data/power-series-method/quiz-questions'
import { odeHigherOrderQuestions } from '@/data/ode-higher-order/quiz-questions'
import { odeSystemsQuestions } from '@/data/ode-systems/quiz-questions'
import { modules } from '@/data/modules'
import type { QuizQuestion } from '@/types/quiz'
import { MathRenderer } from '@/components/game/MathRenderer'
import { DraggableCard } from '@/components/game/DraggableCard'
import { Dropzone } from '@/components/game/Dropzone'
import { useProgressStore } from '@/store/progressStore'
import { useAuthStore } from '@/store/authStore'
import { useSound } from '@/hooks/useSound'

const getQuestionsBySlug = (slug?: string): QuizQuestion[] | null => {
  switch (slug) {
    case 'sequences-series': return seriesQuestions
    case 'laplace': return laplaceQuestions
    case 'ode-first-order': return odeFirstOrderQuestions
    case 'taylor': return taylorQuestions
    case 'power-series-method': return powerSeriesMethodQuestions
    case 'ode-higher-order': return odeHigherOrderQuestions
    case 'ode-systems': return odeSystemsQuestions
    default:
      return null
  }
}

export function QuizActivity() {
  const { moduleSlug } = useParams()
  const navigate = useNavigate()
  const { user } = useAuthStore()
  const updateProgress = useProgressStore((s) => s.updateProgress)
  const { playSuccess, playError } = useSound()
  
  const [currentIndex, setCurrentIndex] = useState(0)
  const [droppedId, setDroppedId] = useState<string | null>(null)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [score, setScore] = useState(0)

  const questions = getQuestionsBySlug(moduleSlug)
  const mod = modules.find(m => m.slug === moduleSlug)

  if (!questions || !mod) {
    return (
      <div className="min-h-screen pt-24 px-4 flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl font-display text-text-muted mb-6">Quiz em construção! 🚧</h2>
        <button onClick={() => navigate(-1)} className="text-primary hover:underline">Voltar</button>
      </div>
    )
  }

  const question = questions[currentIndex]
  const progressPercent = ((currentIndex) / questions.length) * 100

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    
    if (over && over.id === 'dropzone') {
      const answerId = active.id as string
      setDroppedId(answerId)
      
      const isAnswerCorrect = question.answers.find(a => a.id === answerId)?.correct || false
      setIsCorrect(isAnswerCorrect)
      
      if (isAnswerCorrect) {
        playSuccess()
        setScore(s => s + 10)
      } else {
        playError()
        setTimeout(() => {
          setDroppedId(null)
          setIsCorrect(null)
        }, 1500)
      }
    }
  }

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(i => i + 1)
      setDroppedId(null)
      setIsCorrect(null)
    } else {
      if (user && moduleSlug) {
        updateProgress(user.id, moduleSlug, { 
          quiz_completed: true, 
          quiz_score: score 
        })
      }
      navigate(`/modules/${moduleSlug}`)
    }
  }

  return (
    <div className="min-h-screen pt-8 pb-12 px-4 max-w-4xl mx-auto flex flex-col">
      {/* Top Header */}
      <div className="flex items-center justify-between mb-8">
        <button 
          onClick={() => navigate(`/modules/${moduleSlug}`)}
          className="p-3 bg-surface-light rounded-full text-text-muted hover:text-white hover:bg-white/10 transition-colors"
          title="Sair do Quiz"
        >
          <X size={24} />
        </button>
        <span className="font-display text-sm md:text-base text-text-muted">
          Questão {currentIndex + 1} de {questions.length}
        </span>
      </div>

      {/* Progress Bar (Themed) */}
      <div className="w-full bg-surface-light h-2 md:h-3 rounded-full overflow-hidden mb-12 shadow-inner">
        <motion.div 
          className="h-full"
          style={{ backgroundColor: mod.color }}
          initial={{ width: 0 }}
          animate={{ width: `${progressPercent}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={currentIndex}
          initial={{ opacity: 0, x: 20, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -20, scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="flex-1 flex flex-col"
        >
          {/* Question Header (Themed) */}
          <div 
            className="mb-10 text-center bg-surface-light/40 backdrop-blur-lg border p-6 md:p-10 rounded-3xl shadow-xl w-full"
            style={{ borderColor: `${mod.color}40` }}
          >
            <span 
              className="inline-block px-4 py-1.5 rounded-full font-mono text-xs uppercase tracking-widest font-bold mb-6"
              style={{ backgroundColor: `${mod.color}20`, color: mod.color }}
            >
              {question.category}
            </span>
            <h2 className="text-xl md:text-2xl font-display text-white mb-6 leading-relaxed [text-wrap:balance]">
              {question.question}
            </h2>
            
            {question.latex && (
              <div className="mt-2 flex justify-center w-full">
                <div 
                  className="px-6 py-8 bg-black/40 rounded-2xl text-lg md:text-xl shadow-inner border overflow-x-auto max-w-full"
                  style={{ borderColor: `${mod.color}30` }}
                >
                  <MathRenderer expression={question.latex} />
                </div>
              </div>
            )}
          </div>

          <DndContext onDragEnd={handleDragEnd}>
            <div className="mt-2 mb-12 flex justify-center">
              <Dropzone 
                id="dropzone" 
                isCorrect={isCorrect}
                droppedItem={droppedId ? question.answers.find(a => a.id === droppedId) : null}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mt-auto">
              {question.answers.map(answer => (
                <DraggableCard 
                  key={answer.id} 
                  id={answer.id} 
                  text={answer.text} 
                  disabled={droppedId === answer.id || isCorrect === true}
                />
              ))}
            </div>
          </DndContext>

          {/* Next Button */}
          <AnimatePresence>
            {isCorrect && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="mt-12 text-center"
              >
                <button 
                  onClick={handleNext}
                  className="px-8 py-4 text-white font-display text-lg md:text-xl rounded-xl hover:scale-105 active:scale-95 transition-all w-full md:w-auto"
                  style={{ backgroundColor: mod.color, boxShadow: `0 4px 20px ${mod.color}60` }}
                >
                  {currentIndex === questions.length - 1 ? 'Finalizar Quiz 🏆' : 'Próxima Questão ➔'}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
