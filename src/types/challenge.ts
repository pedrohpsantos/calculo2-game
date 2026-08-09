export interface ChallengePair {
  id: string
  dropzoneLatex: string
  draggableText: string
}

export interface Challenge {
  id: string
  title: string
  instruction: string
  pairs: ChallengePair[]
}

export interface ChallengeState {
  matches: Record<string, string | null> // dropzoneId -> draggableId
  isFinished: boolean
  startedAt: number
}
