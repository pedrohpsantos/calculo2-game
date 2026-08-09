import type { Challenge } from "@/types/challenge";

export const challenge: Challenge = {
  id: "series-challenge",
  title: "Desafio de Séries Infinitas",
  instruction: "Associe o teste de convergência ou propriedade à sua condição.",
  pairs: [
    { id: "pair-1", dropzoneLatex: "\\lim_{n \\to \\infty} a_n \\neq 0", draggableText: "Teste da Divergência" },
    { id: "pair-2", dropzoneLatex: "\\sum_{n=1}^{\\infty} a r^{n-1}, \\quad |r| < 1", draggableText: "Série Geométrica (Convergente)" },
    { id: "pair-3", dropzoneLatex: "\\sum_{n=1}^{\\infty} \\frac{1}{n^p}, \\quad p > 1", draggableText: "Série-p (Convergente)" },
    { id: "pair-4", dropzoneLatex: "\\lim_{n \\to \\infty} \\left| \\frac{a_{n+1}}{a_n} \\right| < 1", draggableText: "Teste da Razão (Converge abs.)" }
  ]
};
