import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import bg1 from '@/assets/backgrounds/1.png'
import { MathRenderer } from '@/components/game/MathRenderer'

const floatingSymbols = [
  { symbol: '\\int_a^b', top: '15%', left: '10%' },
  { symbol: '\\sum_{n=1}^\\infty', top: '20%', right: '15%' },
  { symbol: '\\frac{dy}{dx}', top: '60%', left: '20%' },
  { symbol: '\\mathcal{L}\\{f(t)\\}', top: '70%', right: '10%' },
  { symbol: 'e^{i\\pi} + 1 = 0', top: '85%', left: '40%' },
]

export function Home() {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center p-4 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${bg1})` }}
    >
      <div className="absolute inset-0 bg-surface/40 backdrop-blur-[2px]" />

      {/* Floating Math Symbols */}
      {floatingSymbols.map((item, i) => (
        <motion.div
          key={i}
          className="absolute text-white/20 text-3xl md:text-5xl pointer-events-none"
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
        >
          <MathRenderer expression={item.symbol} />
        </motion.div>
      ))}

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="relative z-10 text-center"
      >
        <h1 className="font-display text-primary text-5xl md:text-7xl leading-tight drop-shadow-[0_0_15px_rgba(255,200,0,0.5)]">
          Cálculo 2<br />Game
        </h1>
        <p className="mt-4 text-text-muted text-sm font-mono tracking-widest uppercase">
          Por Lucas e Pedro — UnB
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, type: 'spring' }}
        className="relative z-10 mt-16 flex flex-col sm:flex-row gap-6"
      >
        <Link
          to="/modules"
          className="group relative px-10 py-4 bg-primary text-surface font-body font-bold text-lg rounded overflow-hidden shadow-[0_0_20px_rgba(255,200,0,0.3)] hover:scale-105 active:scale-95 transition-all"
        >
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform" />
          <span className="relative">Vamos Jogar!</span>
        </Link>
        <Link
          to="/modules"
          className="px-10 py-4 glass-card text-white font-body font-bold text-lg rounded hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center"
        >
          Vamos Aprender!
        </Link>
      </motion.div>
    </div>
  )
}
