import type { Challenge } from "@/types/challenge";

export const challenge: Challenge = {
  id: "series-challenge",
  title: "Infinite Series Matching Challenge",
  instruction: "Match the series test or property to its defining condition.",
  pairs: [
    { id: "pair-1", dropzoneLatex: "\\lim_{n \\to \\infty} a_n \\neq 0", draggableText: "Divergence Test" },
    { id: "pair-2", dropzoneLatex: "\\sum_{n=1}^{\\infty} a r^{n-1}, \\quad |r| < 1", draggableText: "Geometric Series (Convergent)" },
    { id: "pair-3", dropzoneLatex: "\\sum_{n=1}^{\\infty} \\frac{1}{n^p}, \\quad p > 1", draggableText: "p-Series (Convergent)" },
    { id: "pair-4", dropzoneLatex: "\\lim_{n \\to \\infty} \\left| \\frac{a_{n+1}}{a_n} \\right| < 1", draggableText: "Ratio Test (Converges absolutely)" }
  ]
};
