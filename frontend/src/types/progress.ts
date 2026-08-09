export interface UserProgress {
  moduleSlug: string
  quizScore?: number
  quizCompleted: boolean
  flashcardsCompleted: boolean
  challengeCompleted: boolean
  lastPlayedAt: string
}

export interface UserProfile {
  id: string
  displayName: string
  avatarUrl?: string
  totalScore: number
  level: number
}
