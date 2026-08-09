import type { Challenge } from "@/types/challenge";

export const challenge: Challenge = {
  id: "taylor-challenge",
  title: "Desafio da Série de Maclaurin",
  instruction: "Associe a função à sua expansão em Série de Maclaurin.",
  pairs: [
    { id: "pair-1", dropzoneLatex: "e^x", draggableText: "\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}" },
    { id: "pair-2", dropzoneLatex: "\\sin x", draggableText: "\\sum_{n=0}^{\\infty} (-1)^n \\frac{x^{2n+1}}{(2n+1)!}" },
    { id: "pair-3", dropzoneLatex: "\\cos x", draggableText: "\\sum_{n=0}^{\\infty} (-1)^n \\frac{x^{2n}}{(2n)!}" },
    { id: "pair-4", dropzoneLatex: "\\frac{1}{1-x}", draggableText: "\\sum_{n=0}^{\\infty} x^n" }
  ]
};
