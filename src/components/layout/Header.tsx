import { Link } from 'react-router-dom'
import { AudioPlayer } from '@/components/game/AudioPlayer'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 bg-surface/80 backdrop-blur-md border-b border-white/10">
      <Link to="/" className="font-display text-primary text-sm hover:scale-105 transition-transform">
        Cálculo 2
      </Link>
      <nav className="flex items-center gap-4">
        <Link to="/modules" className="text-sm text-text-muted hover:text-text transition-colors">
          Módulos
        </Link>
        <Link to="/leaderboard" className="text-sm text-text-muted hover:text-text transition-colors">
          Ranking
        </Link>
        <AudioPlayer />
      </nav>
    </header>
  )
}
