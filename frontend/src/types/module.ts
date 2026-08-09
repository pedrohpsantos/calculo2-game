export type ModuleSlug =
  | 'sequences-series'
  | 'taylor'
  | 'ode-first-order'
  | 'ode-higher-order'
  | 'laplace'
  | 'ode-systems'
  | 'power-series-method'

export interface Module {
  slug: ModuleSlug
  title: string
  description: string
  icon: string
  color: string
  unlocked: boolean
  features: ('quiz' | 'flashcards' | 'challenge')[]
}
