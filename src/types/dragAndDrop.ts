export interface DragItem {
  id: string
  content: string
  latex?: string
  type: 'term' | 'operator' | 'variable'
}

export interface DropZone {
  id: string
  label: string
  acceptedItems: string[]
  currentItem?: string
}

export interface DragChallenge {
  id: string
  instruction: string
  latex?: string
  items: DragItem[]
  zones: DropZone[]
  correctOrder: string[]
}
