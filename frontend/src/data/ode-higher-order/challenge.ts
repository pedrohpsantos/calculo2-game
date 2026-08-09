import type { Challenge } from "@/types/challenge";

export const challenge: Challenge = {
  id: "ode-higher-order-challenge",
  title: "Desafio de EDOs de Ordem Superior",
  instruction: "Associe a característica da equação diferencial à sua descrição ou forma de solução.",
  pairs: [
    { id: "pair-1", dropzoneLatex: "ay'' + by' + cy = 0", draggableText: "EDO linear hom. de 2ª ordem com coef. const." },
    { id: "pair-2", dropzoneLatex: "ar^2 + br + c = 0", draggableText: "Equação Característica" },
    { id: "pair-3", dropzoneLatex: "b^2 - 4ac > 0", draggableText: "Raízes Reais Distintas: y = c_1 e^{r_1 x} + c_2 e^{r_2 x}" },
    { id: "pair-4", dropzoneLatex: "W(y_1, y_2) = y_1 y_2' - y_2 y_1' \\neq 0", draggableText: "Wronskiano de Soluções Fundamentais" }
  ]
};
