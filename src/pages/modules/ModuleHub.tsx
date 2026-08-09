import { useParams, Link } from 'react-router-dom'
import { modules } from '@/data/modules'
import { BookOpen, Gamepad2, Layers, GripVertical } from 'lucide-react'
import { MathRenderer } from '@/components/game/MathRenderer'

export function ModuleHub() {
  const { moduleSlug } = useParams<{ moduleSlug: string }>()
  const mod = modules.find((m) => m.slug === moduleSlug)

  if (!mod) {
    return (
      <div className="min-h-screen pt-20 px-4 text-center">
        <p className="text-text-muted">Módulo não encontrado.</p>
        <Link to="/modules" className="text-primary hover:underline">← Voltar</Link>
      </div>
    )
  }

  const activities = [
    { key: 'theory', label: 'Teoria', icon: BookOpen, path: 'theory', always: true },
    { key: 'quiz', label: 'Quiz', icon: Gamepad2, path: 'quiz', always: true },
    { key: 'flashcards', label: 'Flashcards', icon: Layers, path: 'flashcards', always: false },
    { key: 'challenge', label: 'Desafio DnD', icon: GripVertical, path: 'challenge', always: false },
  ]

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <div className="text-5xl" style={{ color: mod.color }}>
          <MathRenderer expression={mod.icon} />
        </div>
        <h1 className="mt-4 font-display text-xl text-primary">{mod.title}</h1>
        <p className="mt-2 text-text-muted">{mod.description}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {activities
          .filter((a) => a.always || mod.features.includes(a.key as 'quiz' | 'flashcards' | 'challenge'))
          .map((activity) => (
            <Link
              key={activity.key}
              to={activity.path}
              className="flex items-center gap-4 p-5 rounded-lg border border-white/10 bg-surface-light hover:bg-surface-lighter hover:border-white/20 transition-all"
            >
              <activity.icon size={24} style={{ color: mod.color }} />
              <span className="font-body font-bold text-text">{activity.label}</span>
            </Link>
          ))}
      </div>

      <div className="text-center mt-8">
        <Link to="/modules" className="text-text-muted hover:text-primary transition-colors text-sm">
          ← Todos os módulos
        </Link>
      </div>
    </div>
  )
}
