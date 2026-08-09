import type { Challenge } from "@/types/challenge";

export const challenge: Challenge = {
  id: "power-series-method-challenge",
  title: "Desafio de Séries de Potências",
  instruction: "Associe o conceito ou equação à sua descrição (soluções em séries de potências).",
  pairs: [
    { id: "pair-1", dropzoneLatex: "y = \\sum_{n=0}^{\\infty} c_n x^n", draggableText: "Power Series Solution centered at x=0" },
    { id: "pair-2", dropzoneLatex: "P(x)y'' + Q(x)y' + R(x)y = 0, \\quad P(0) \\neq 0", draggableText: "Ordinary Point at x=0" },
    { id: "pair-3", dropzoneLatex: "P(x)y'' + Q(x)y' + R(x)y = 0, \\quad P(0) = 0", draggableText: "Singular Point at x=0" },
    { id: "pair-4", dropzoneLatex: "c_{n+2} = f(c_{n}, c_{n+1})", draggableText: "Recurrence Relation" }
  ]
};
