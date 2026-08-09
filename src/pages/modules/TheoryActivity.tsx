import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { MathRenderer } from '@/components/game/MathRenderer'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { odeTheory } from '@/data/ode-first-order/theory'
import { seriesTheory } from '@/data/series/theory'
import { laplaceTheory } from '@/data/laplace/theory'
import { taylorTheory } from '@/data/taylor/theory'
import { powerSeriesMethodTheory } from '@/data/power-series-method/theory'
import { odeHigherOrderTheory } from '@/data/ode-higher-order/theory'
import { odeSystemsTheory } from '@/data/ode-systems/theory'
import { modules } from '@/data/modules'
import type { TheorySlide } from '@/types/theory'
import { Button } from '@/components/ui/Button'

const getTheoryBySlug = (slug?: string): TheorySlide[] | null => {
  switch (slug) {
    case 'sequences-series': return seriesTheory
    case 'laplace': return laplaceTheory
    case 'ode-first-order': return odeTheory
    case 'taylor': return taylorTheory
    case 'power-series-method': return powerSeriesMethodTheory
    case 'ode-higher-order': return odeHigherOrderTheory
    case 'ode-systems': return odeSystemsTheory
    default:
      return null
  }
}

export function TheoryActivity() {
  const { moduleSlug } = useParams()
  const navigate = useNavigate()
  
  const [currentIndex, setCurrentIndex] = useState(0)
  const slides = getTheoryBySlug(moduleSlug)
  const mod = modules.find(m => m.slug === moduleSlug)

  if (!slides || !mod) {
    return (
      <div className="min-h-screen pt-24 px-4 flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl font-display text-text-muted mb-6">Teoria em construção! 🚧</h2>
        <Button onClick={() => navigate(-1)} variant="ghost" size="md">Voltar</Button>
      </div>
    )
  }

  const slide = slides[currentIndex]
  const progressPercent = ((currentIndex + 1) / slides.length) * 100

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(i => i + 1)
    } else {
      navigate(`/modules/${moduleSlug}/quiz`)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(i => i - 1)
    }
  }

  return (
    <div className="min-h-screen pt-8 pb-12 px-4 max-w-4xl mx-auto flex flex-col">
      {/* Top Header com Botão Sair */}
      <div className="flex items-center justify-between mb-8">
        <Button 
          variant="ghost"
          size="icon"
          is3D={false}
          onClick={() => navigate(`/modules/${moduleSlug}`)}
          className="bg-surface-light text-text-muted hover:text-white"
          title="Sair da Teoria"
        >
          <X size={24} />
        </Button>
        <span className="font-display text-sm md:text-base text-text-muted">
          Slide {currentIndex + 1} de {slides.length}
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

      {/* Slide Content */}
      <div className="flex-1 flex flex-col relative justify-center">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.98, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.98, x: -20 }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            className="bg-surface-light/40 backdrop-blur-lg border p-6 md:p-12 rounded-3xl text-center shadow-[0_10px_40px_rgba(0,0,0,0.3)] w-full"
            style={{ borderColor: `${mod.color}40` }} // Themed subtle border
          >
            {/* Themed Title with text-wrap: balance */}
            <h2 
              className="text-xl md:text-2xl font-display mb-8 tracking-wide leading-relaxed [text-wrap:balance]"
              style={{ color: mod.color }}
            >
              {slide.title}
            </h2>
            
            {/* Body Text (Optional) */}
            {slide.content && (
              <p className="text-base md:text-lg text-white font-body leading-loose mb-10 max-w-3xl mx-auto [text-wrap:pretty]">
                {slide.content}
              </p>
            )}

            {/* Bullet Points */}
            {slide.points && slide.points.length > 0 && (
              <ul className="text-left text-base md:text-lg text-white font-body leading-relaxed max-w-3xl mx-auto space-y-4 mb-10 list-disc list-outside ml-6">
                {slide.points.map((point, i) => (
                  <li key={i} className="pl-2" dangerouslySetInnerHTML={{ __html: point.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                ))}
              </ul>
            )}
            
            {/* Responsive LaTeX Container */}
            {slide.latex && (
              <div className="mt-4 flex justify-center w-full">
                <div 
                  className="px-6 py-8 bg-black/40 rounded-2xl text-lg md:text-xl shadow-inner border overflow-x-auto max-w-full"
                  style={{ borderColor: `${mod.color}30` }}
                >
                  <MathRenderer expression={slide.latex} />
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="mt-12 flex justify-between items-center gap-4">
        <Button 
          onClick={handlePrev}
          disabled={currentIndex === 0}
          variant="ghost"
          size="lg"
          is3D={false}
          className="px-4 md:px-6 disabled:opacity-20 hover:bg-white/10"
        >
          <ChevronLeft size={24} />
          <span className="hidden sm:inline ml-2">Anterior</span>
        </Button>
        
        <Button 
          onClick={handleNext}
          variant="primary"
          size="lg"
          is3D={true}
          className="px-6 md:px-8"
          style={{ backgroundColor: mod.color, boxShadow: `0 6px 0 ${mod.color}80, 0 15px 20px rgba(0,0,0,0.4)` }}
        >
          {currentIndex === slides.length - 1 ? 'Ir para o Quiz! 🚀' : (
            <div className="flex items-center">
              <span className="hidden sm:inline mr-2">Próximo</span>
              <ChevronRight size={24} />
            </div>
          )}
        </Button>
      </div>
    </div>
  )
}
