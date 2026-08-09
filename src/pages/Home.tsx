import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import bg1 from '@/assets/backgrounds/1.png'
import { MathRenderer } from '@/components/game/MathRenderer'
import { Button } from '@/components/ui/Button'
import confetti from 'canvas-confetti'

const floatingSymbols = [
  { symbol: '\\int_a^b', top: '15%', left: '8%' },
  { symbol: '\\sum_{n=1}^\\infty', top: '20%', right: '8%' },
  { symbol: '\\frac{dy}{dx}', top: '45%', left: '5%' },
  { symbol: '\\mathcal{L}\\{f(t)\\}', top: '60%', right: '5%' },
  { symbol: 'e^{i\\pi} + 1 = 0', top: '85%', left: '30%' },
]

export function Home() {
  const navigate = useNavigate()

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center p-4 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${bg1})` }}
    >
      <div className="absolute inset-0 bg-surface/80 backdrop-blur-[4px]" />

      {/* Floating Math Symbols */}
      {floatingSymbols.map((item, i) => (
        <motion.div
          key={i}
          className={`absolute text-white/20 text-3xl md:text-5xl ${item.symbol.includes('e^{i\\pi}') ? 'cursor-pointer hover:text-primary transition-colors pointer-events-auto' : 'pointer-events-none'}`}
          style={{ top: item.top, left: item.left, right: item.right }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          onClick={() => {
            if (item.symbol.includes('e^{i\\pi}')) {
              confetti({
                particleCount: 150,
                spread: 100,
                origin: { y: 0.8 },
                colors: ['#fff', '#ffd700']
              })
              alert("A Identidade de Euler! A equação mais bela da matemática! 🧠✨")
            }
          }}
        >
          <MathRenderer expression={item.symbol} />
        </motion.div>
      ))}

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="relative z-10 text-center mt-12 md:mt-0 px-4"
      >
        <h1 className="font-display text-primary text-3xl sm:text-5xl md:text-7xl leading-tight drop-shadow-[0_0_20px_rgba(255,200,0,0.4)]">
          Cálculo 2<br />Game
        </h1>
        <button 
          onClick={() => navigate('/credits')}
          className="mt-2 md:mt-4 text-text-muted text-[10px] md:text-sm font-mono tracking-widest uppercase bg-black/40 inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/10 backdrop-blur-md hover:bg-white/10 hover:text-white transition-colors cursor-pointer active:scale-95"
        >
          Por Lucas e Pedro — UnB
        </button>
      </motion.div>

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, type: 'spring' }}
        className="relative z-10 mt-10 md:mt-16 flex flex-col items-center w-full max-w-xs sm:max-w-md px-4 sm:px-0 sm:w-auto"
      >
        <Button 
          variant="primary" 
          size="lg" 
          className="w-full sm:w-auto text-lg md:text-xl whitespace-nowrap px-8 md:px-12"
          onClick={() => navigate('/modules')}
        >
          Vamos Jogar!
        </Button>
      </motion.div>
    </div>
  )
}

