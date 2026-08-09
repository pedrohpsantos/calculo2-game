import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Code, GraduationCap } from 'lucide-react'
import bg9 from '@/assets/backgrounds/9.png'
import { Button } from '@/components/ui/Button'

export function Credits() {
  const navigate = useNavigate()

  return (
    <div 
      className="min-h-screen pt-20 px-4 flex flex-col items-center justify-center relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg9})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-surface/90 backdrop-blur-sm" />

      {/* Back Button */}
      <button 
        onClick={() => navigate('/')}
        className="absolute top-24 md:top-8 left-4 md:left-8 p-3 bg-surface-light/50 hover:bg-surface-light rounded-full text-text-muted hover:text-white transition-all backdrop-blur-md border border-white/5 z-20"
        title="Voltar"
      >
        <ArrowLeft size={24} />
      </button>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="w-full max-w-lg p-8 md:p-12 rounded-3xl border border-white/10 bg-surface-light/40 backdrop-blur-xl text-center shadow-[0_10px_40px_rgba(0,0,0,0.5)] relative z-10"
      >
        <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner border border-primary/30">
          <GraduationCap size={40} className="text-primary" />
        </div>

        <h1 className="font-display text-4xl text-primary mb-8 drop-shadow-md">
          Créditos
        </h1>
        
        <div className="space-y-6 text-base md:text-lg text-white font-body leading-relaxed [text-wrap:pretty]">
          <p>
            Site desenvolvido pelos alunos da <strong className="text-primary">UNB</strong> (Universidade de Brasília), para o Trabalho da disciplina de <strong>Cálculo 2</strong> da professora Tatiane, 2024.1.
          </p>
          
          <div className="pt-6 border-t border-white/10">
            <p className="flex items-center justify-center gap-2 text-text-muted mb-2 font-bold uppercase tracking-widest text-sm">
              <Code size={16} /> Desenvolvedores
            </p>
            <p className="text-xl font-display text-white">
              Lucas De Paula Leal
            </p>
            <p className="text-xl font-display text-white">
              & 
            </p>
            <p className="text-xl font-display text-white">
              Pedro Henrique Pereira Santos
            </p>
          </div>
        </div>

        <div className="mt-10">
          <Button 
            onClick={() => navigate(-1)} 
            variant="ghost" 
            size="lg" 
            is3D={false}
            className="w-full"
          >
            Voltar
          </Button>
        </div>
      </motion.div>
    </div>
  )
}
