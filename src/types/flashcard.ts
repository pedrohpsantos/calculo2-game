export interface Flashcard {
  id: string
  front: string
  frontLatex?: string
  back: string
  backLatex?: string
  category: string
}

export interface FlashcardState {
  currentIndex: number
  isFlipped: boolean
  known: string[]
  unknown: string[]
}
