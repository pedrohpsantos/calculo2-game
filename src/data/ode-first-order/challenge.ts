import type { Challenge } from "@/types/challenge";

export const challenge: Challenge = {
  id: "ode-first-order-challenge",
  title: "Desafio de EDOs de 1ª Ordem",
  instruction: "Arraste e solte a terminologia ou método de solução correto para cada formato de EDO.",
  pairs: [
    { id: "pair-1", dropzoneLatex: "\\frac{dy}{dx} = f(x)g(y)", draggableText: "Separable Equation" },
    { id: "pair-2", dropzoneLatex: "\\frac{dy}{dx} + P(x)y = Q(x)", draggableText: "Linear Equation" },
    { id: "pair-3", dropzoneLatex: "M(x,y)dx + N(x,y)dy = 0, \\quad \\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}", draggableText: "Exact Equation" },
    { id: "pair-4", dropzoneLatex: "\\frac{dy}{dx} = f\\left(\\frac{y}{x}\\right)", draggableText: "Homogeneous Equation" }
  ]
};
