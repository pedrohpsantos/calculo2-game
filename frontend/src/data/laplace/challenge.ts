import type { Challenge } from "@/types/challenge";

export const challenge: Challenge = {
  id: "laplace-challenge",
  title: "Desafio de Transformada de Laplace",
  instruction: "Associe a função f(t) à sua Transformada de Laplace F(s).",
  pairs: [
    { id: "pair-1", dropzoneLatex: "\\mathcal{L}\\{1\\}", draggableText: "1/s, s > 0" },
    { id: "pair-2", dropzoneLatex: "\\mathcal{L}\\{e^{at}\\}", draggableText: "1/(s - a), s > a" },
    { id: "pair-3", dropzoneLatex: "\\mathcal{L}\\{\\sin(kt)\\}", draggableText: "k/(s^2 + k^2)" },
    { id: "pair-4", dropzoneLatex: "\\mathcal{L}\\{t^n\\}", draggableText: "n!/s^{n+1}, s > 0" }
  ]
};
