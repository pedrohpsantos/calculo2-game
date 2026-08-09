import { Link } from 'react-router-dom'
import { motion, type Variants } from 'framer-motion'
import { useEffect } from 'react'
import { modules } from '@/data/modules'
import { Lock, CheckCircle2 } from 'lucide-react'
import { MathRenderer } from '@/components/game/MathRenderer'
import { useProgressStore } from '@/store/progressStore'
import { useAuthStore } from '@/store/authStore'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
}

export function ModuleSelector() {
  const { user } = useAuthStore()
  const { progress, fetchProgress } = useProgressStore()

  useEffect(() => {
    if (user) {
      fetchProgress(user.id)
    }
  }, [user, fetchProgress])

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 max-w-3xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="font-display text-primary text-4xl drop-shadow-[0_0_15px_rgba(255,200,0,0.3)] mb-4">
          A Jornada
        </h1>
        <p className="text-text-muted font-body text-lg">
          Avance pelos módulos de Cálculo 2 para dominar o caos.
        </p>
      </motion.div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative flex flex-col items-center gap-12"
      >
        {/* Linha vertical que conecta os módulos */}
        <div className="absolute top-10 bottom-10 left-1/2 w-1 -translate-x-1/2 bg-white/5 rounded-full hidden sm:block" />

        {modules.map((mod, index) => {
          const isFirst = index === 0
          const previousMod = index > 0 ? modules[index - 1] : null
          const isPreviousCompleted = previousMod ? progress[previousMod.slug]?.quiz_completed : false
          const isUnlocked = mod.unlocked || isFirst || isPreviousCompleted
          const isCompleted = progress[mod.slug]?.quiz_completed

          return (
            <motion.div key={mod.slug} variants={itemVariants} className="relative z-10 w-full max-w-lg">
              {isUnlocked ? (
              <Link
                to={`/modules/${mod.slug}`}
                className={`block p-8 rounded-2xl transition-all group overflow-hidden relative shadow-lg ${
                  isCompleted 
                    ? 'bg-surface-light/80 border border-primary/40 hover:border-primary/80 hover:shadow-[0_0_30px_rgba(255,200,0,0.2)]'
                    : 'glass-card hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] hover:border-white/20'
                }`}
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500" 
                  style={{ backgroundColor: mod.color }} 
                />
                
                {isCompleted && (
                  <div className="absolute top-4 right-4 text-primary opacity-80" title="Módulo Concluído">
                    <CheckCircle2 size={24} />
                  </div>
                )}

                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
                  <div 
                    className="flex items-center justify-center min-w-[80px] px-6 h-20 rounded-2xl bg-surface-dark/50 border border-white/10 shrink-0 text-2xl md:text-3xl drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                    style={{ color: mod.color }}
                  >
                    <MathRenderer expression={mod.icon} />
                  </div>
                  
                  <div>
                    <h2 className="font-body font-bold text-2xl text-text group-hover:text-primary transition-colors">
                      {index + 1}. {mod.title}
                    </h2>
                    <p className="mt-2 text-base text-text-muted leading-relaxed">
                      {mod.description}
                    </p>
                  </div>
                </div>
              </Link>
            ) : (
              <div className="p-8 rounded-2xl border border-white/5 bg-surface-light/20 backdrop-blur-sm opacity-50 cursor-not-allowed grayscale relative overflow-hidden flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
                <div className="flex items-center justify-center min-w-[80px] px-6 h-20 rounded-2xl bg-black/40 border border-white/5 shrink-0 text-3xl">
                  <Lock size={24} className="text-white/40" />
                </div>
                
                <div>
                  <h2 className="font-body font-bold text-2xl text-text/60">
                    {index + 1}. {mod.title}
                  </h2>
                  <p className="mt-2 text-base text-text-muted/60 leading-relaxed">
                    Complete o módulo anterior para desbloquear.
                  </p>
                </div>
              </div>
            )}
          </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
