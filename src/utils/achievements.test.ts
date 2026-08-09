import { describe, it, expect } from 'vitest'
import { getUnlockedAchievements } from './achievements'
import type { UserProgress } from '@/store/progressStore'

describe('getUnlockedAchievements', () => {
  it('should unlock First Steps when one module is completed', () => {
    const progress: Record<string, UserProgress> = {
      'ode-first-order': {
        module_slug: 'ode-first-order',
        quiz_score: 100,
        quiz_completed: true
      }
    }
    
    const unlocked = getUnlockedAchievements(progress)
    expect(unlocked).toContain('first_steps')
  })

  it('should unlock Master when score is 100 on a quiz', () => {
    const progress: Record<string, UserProgress> = {
      'ode-first-order': {
        module_slug: 'ode-first-order',
        quiz_score: 100,
        quiz_completed: true
      }
    }
    
    const unlocked = getUnlockedAchievements(progress)
    expect(unlocked).toContain('perfection')
  })

  it('should not unlock achievements if requirements are not met', () => {
    const progress: Record<string, UserProgress> = {}
    
    const unlocked = getUnlockedAchievements(progress)
    expect(unlocked).toHaveLength(0)
  })
})
