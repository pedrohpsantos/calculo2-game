import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AudioPlayer } from '@/components/game/AudioPlayer'
import { Button } from '@/components/ui/Button'
import { useAuthStore } from '@/store/authStore'
import { UserCircle, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function Header() {
  const { user, isAnonymous } = useAuthStore()
  const navigate = useNavigate()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [titleClicks, setTitleClicks] = useState(0)
  const [avatarClicks, setAvatarClicks] = useState(0)

  const handleTitleClick = (e: React.MouseEvent) => {
    const newClicks = titleClicks + 1
    setTitleClicks(newClicks)
    if (newClicks >= 5) {
      if ((window as any).triggerTatiane) (window as any).triggerTatiane();
      setTitleClicks(0)
    }
    setTimeout(() => setTitleClicks(0), 2000)
  }

  const handleAvatarClick = (e: React.MouseEvent) => {
    const newClicks = avatarClicks + 1
    setAvatarClicks(newClicks)
    if (newClicks >= 5) {
      if ((window as any).triggerLaplace) (window as any).triggerLaplace();
      setAvatarClicks(0)
    } else if (newClicks === 1) {
      navigate('/profile')
    }
    setTimeout(() => setAvatarClicks(0), 2000)
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-3 md:px-8 md:py-4 bg-surface/80 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center gap-3">
          <button 
            className="md:hidden text-white hover:bg-white/10 p-2 rounded-md transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
          
          <div 
            onClick={handleTitleClick}
            className="cursor-pointer font-display text-primary text-xs md:text-sm hover:scale-105 transition-transform truncate"
          >
            Cálculo 2
          </div>
        </div>
      <nav className="flex items-center gap-2 md:gap-6">
        <div className="hidden md:flex items-center gap-6">
          <Link to="/modules" className="text-sm font-bold text-text-muted hover:text-white transition-colors">
            Módulos
          </Link>
          <Link to="/leaderboard" className="text-sm font-bold text-text-muted hover:text-white transition-colors">
            Ranking
          </Link>
        </div>
        
        <AudioPlayer />
        
        <div className="h-6 w-px bg-white/20 mx-2 hidden sm:block"></div>

        {isAnonymous || !user ? (
          <Button 
            variant="math" 
            size="sm" 
            is3D={true}
            onClick={() => navigate('/login')}
          >
            Entrar
          </Button>
        ) : (
          <button 
            onClick={handleAvatarClick}
            className="flex items-center gap-2 hover:bg-white/10 p-2 rounded-full transition-colors border border-transparent hover:border-white/20"
          >
            {user.avatar_url ? (
              <img src={user.avatar_url} alt="User" className="w-8 h-8 rounded-full border border-primary" />
            ) : (
              <UserCircle size={28} className="text-primary" />
            )}
          </button>
        )}
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden"
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-0 left-0 bottom-0 w-64 bg-surface-dark border-r border-white/10 z-[70] flex flex-col p-6 shadow-2xl md:hidden"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="font-display text-primary text-xl">Cálculo 2</span>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-text-muted hover:text-white hover:bg-white/10 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="flex flex-col gap-6">
                <Link 
                  to="/modules" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-bold text-white hover:text-primary transition-colors"
                >
                  Módulos
                </Link>
                <Link 
                  to="/leaderboard" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-bold text-white hover:text-primary transition-colors"
                >
                  Ranking
                </Link>
              </div>

              <div className="mt-auto pt-6 border-t border-white/10">
                <p className="text-text-muted text-xs text-center">UnB 2024.1</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
