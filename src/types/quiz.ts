export interface QuizQuestion {
  id: string
  question: string
  latex?: string
  answers: QuizAnswer[]
  category: string
  difficulty: 'easy' | 'medium' | 'hard'
  timeLimit?: number
}

export interface QuizAnswer {
  id: string
  text: string
  latex?: string
  correct: boolean
}

export interface QuizState {
  currentIndex: number
  totalCorrect: number
  answers: Record<string, string>
  isFinished: boolean
  startedAt: number
}
