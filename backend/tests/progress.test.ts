import { validateProgress } from '../src/services/progressService';

describe('Progress Service', () => {
  it('should validate a passing score correctly', () => {
    const result = validateProgress('laplace', { quiz_score: 80 });
    expect(result.isValid).toBe(true);
    expect(result.passed).toBe(true);
    expect(result.badgesEarned).toHaveLength(0);
  });

  it('should validate a failing score correctly', () => {
    const result = validateProgress('laplace', { quiz_score: 50 });
    expect(result.isValid).toBe(true);
    expect(result.passed).toBe(false);
    expect(result.badgesEarned).toHaveLength(0);
  });

  it('should award a perfect badge for score 100', () => {
    const result = validateProgress('taylor', { quiz_score: 100 });
    expect(result.isValid).toBe(true);
    expect(result.passed).toBe(true);
    expect(result.badgesEarned).toContain('taylor_perfect');
  });

  it('should throw an error for invalid scores', () => {
    expect(() => validateProgress('taylor', { quiz_score: 150 })).toThrow('Invalid score range');
    expect(() => validateProgress('taylor', { quiz_score: -10 })).toThrow('Invalid score range');
  });
});
