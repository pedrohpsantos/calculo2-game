import { useParams, Link, useNavigate } from 'react-router-dom'
import { modules } from '@/data/modules'
import { BookOpen, Gamepad2, Layers, GripVertical } from 'lucide-react'
import { MathRenderer } from '@/components/game/MathRenderer'
import { Button } from '@/components/ui/Button'

export function ModuleHub() {
  const { moduleSlug } = useParams<{ moduleSlug: string }>()
  const navigate = useNavigate()
  const mod = modules.find((m) => m.slug === moduleSlug)

  if (!mod) {
    return (
      <div className="min-h-screen pt-20 px-4 text-center">
        <p className="text-text-muted">Módulo não encontrado.</p>
        <Button onClick={() => navigate('/modules')} variant="ghost" size="sm" className="mt-4">
          ← Voltar
        </Button>
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
    <div className="min-h-screen pt-24 pb-12 px-4 max-w-3xl mx-auto flex flex-col">
      <div className="text-center mb-12">
        <div className="text-5xl drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" style={{ color: mod.color }}>
          <MathRenderer expression={mod.icon} />
        </div>
        <h1 className="mt-6 font-display text-2xl text-primary drop-shadow-md [text-wrap:balance]">{mod.title}</h1>
        <p className="mt-4 text-text-muted text-base [text-wrap:balance] max-w-lg mx-auto">{mod.description}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-xl mx-auto">
        {activities
          .filter((a) => a.always || mod.features.includes(a.key as 'quiz' | 'flashcards' | 'challenge'))
          .map((activity) => (
            <Button
              key={activity.key}
              onClick={() => navigate(activity.path)}
              variant="secondary"
              size="lg"
              className="w-full text-lg justify-start px-8 shadow-lg"
              is3D={true}
            >
              <activity.icon size={28} className="text-black/70" />
              <span className="font-body font-bold text-black ml-2">{activity.label}</span>
            </Button>
          ))}
      </div>

      <div className="text-center mt-16">
        <Button onClick={() => navigate('/modules')} variant="ghost" size="md">
          ← Todos os módulos
        </Button>
      </div>
    </div>
  )
}
