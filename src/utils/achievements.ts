import { UserProgress } from '../store/progressStore'

export interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  color: string
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first_steps',
    title: 'Primeiros Passos',
    description: 'Completou sua primeira atividade (Quiz, Flashcards ou Desafio).',
    icon: 'Footprints',
    color: 'text-blue-400'
  },
  {
    id: 'bookworm',
    title: 'Rato de Biblioteca',
    description: 'Finalizou os Flashcards de pelo menos 3 módulos diferentes.',
    icon: 'BookOpen',
    color: 'text-purple-400'
  },
  {
    id: 'perfection',
    title: 'Perfeição',
    description: 'Alcançou a pontuação máxima (100) em algum Quiz.',
    icon: 'Target',
    color: 'text-red-400'
  },
  {
    id: 'ode_dominator',
    title: 'Dominador de EDOs',
    description: 'Concluiu os Quizzes dos 4 módulos principais de Equações Diferenciais.',
    icon: 'Crown',
    color: 'text-yellow-400'
  },
  {
    id: 'laplace_king',
    title: 'Rei de Laplace',
    description: 'Concluiu todas as 3 atividades (Quiz, Flashcards, Desafio) do módulo de Laplace.',
    icon: 'Zap',
    color: 'text-orange-400'
  },
]

export function getUnlockedAchievements(progress: Record<string, UserProgress>): string[] {
  const unlocked = new Set<string>()
  const modules = Object.values(progress)
  
  if (modules.length === 0) return []

  // Primeiros Passos
  if (modules.some(m => m.quiz_completed || m.flashcards_completed || m.challenge_completed)) {
    unlocked.add('first_steps')
  }

  // Rato de Biblioteca
  const flashcardCount = modules.filter(m => m.flashcards_completed).length
  if (flashcardCount >= 3) {
    unlocked.add('bookworm')
  }

  // Perfeição
  if (modules.some(m => m.quiz_score === 100)) {
    unlocked.add('perfection')
  }

  // Dominador de EDOs
  const odeSlugs = ['ode-first-order', 'ode-higher-order', 'ode-systems', 'power-series-method']
  const completedOdes = odeSlugs.filter(slug => progress[slug]?.quiz_completed)
  if (completedOdes.length === 4) {
    unlocked.add('ode_dominator')
  }

  // Rei de Laplace
  const laplace = progress['laplace']
  if (laplace?.quiz_completed && laplace?.flashcards_completed && laplace?.challenge_completed) {
    unlocked.add('laplace_king')
  }

  return Array.from(unlocked)
}
