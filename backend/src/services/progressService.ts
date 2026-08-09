export interface Answer {
  questionId: string;
  selectedAnswerId: string;
}

export interface ProgressPayload {
  quiz_score?: number;
  quiz_completed?: boolean;
  flashcards_completed?: boolean;
  challenge_completed?: boolean;
  last_played_at?: string;
}

export function validateProgress(moduleSlug: string, progress: ProgressPayload, _answers?: Answer[]) {
  // Logic to validate the incoming progress
  
  if (progress.quiz_score !== undefined) {
    if (progress.quiz_score < 0 || progress.quiz_score > 100) {
      throw new Error('Invalid score range');
    }
  }

  const passed = (progress.quiz_score ?? 0) >= 70;
  const badgesEarned: string[] = [];

  if (progress.quiz_score === 100) {
    badgesEarned.push(`${moduleSlug}_perfect`);
  }
  
  if (progress.flashcards_completed) {
    badgesEarned.push(`${moduleSlug}_flashcards`);
  }

  return {
    isValid: true,
    passed,
    badgesEarned,
    validatedProgress: progress
  };
}
