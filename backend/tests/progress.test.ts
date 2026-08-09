import { validateProgress } from '../src/services/progressService';

describe('Progress Service', () => {
  it('should validate a passing score correctly', () => {
    const result = validateProgress('laplace', 80, []);
    expect(result.isValid).toBe(true);
    expect(result.passed).toBe(true);
    expect(result.badgesEarned).toHaveLength(0);
  });

  it('should validate a failing score correctly', () => {
    const result = validateProgress('laplace', 50, []);
    expect(result.isValid).toBe(true);
    expect(result.passed).toBe(false);
    expect(result.badgesEarned).toHaveLength(0);
  });

  it('should award a perfect badge for score 100', () => {
    const result = validateProgress('taylor', 100, []);
    expect(result.isValid).toBe(true);
    expect(result.passed).toBe(true);
    expect(result.badgesEarned).toContain('taylor_perfect');
  });

  it('should throw an error for invalid scores', () => {
    expect(() => validateProgress('taylor', 150, [])).toThrow('Invalid score range');
    expect(() => validateProgress('taylor', -10, [])).toThrow('Invalid score range');
  });
});
