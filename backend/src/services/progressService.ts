export interface Answer {
  questionId: string;
  selectedAnswerId: string;
}

export function validateProgress(moduleSlug: string, score: number, answers: Answer[]) {
  // Simple logic to simulate backend validation
  // In a real scenario, this would fetch the correct answers from DB and calculate the score
  
  if (score < 0 || score > 100) {
    throw new Error('Invalid score range');
  }

  // Assuming passing score is 70
  const passed = score >= 70;
  const badgesEarned: string[] = [];

  if (score === 100) {
    badgesEarned.push(`${moduleSlug}_perfect`);
  }

  return {
    isValid: true,
    passed,
    badgesEarned,
    validatedScore: score
  };
}
