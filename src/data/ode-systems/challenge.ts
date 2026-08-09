import type { Challenge } from "@/types/challenge";

export const challenge: Challenge = {
  id: "ode-systems-challenge",
  title: "Desafio de Sistemas de EDOs",
  instruction: "Associe a representação do sistema ou propriedade à sua terminologia correta.",
  pairs: [
    { id: "pair-1", dropzoneLatex: "\\mathbf{X}' = \\mathbf{A}\\mathbf{X}", draggableText: "Homogeneous Linear System" },
    { id: "pair-2", dropzoneLatex: "\\det(\\mathbf{A} - \\lambda\\mathbf{I}) = 0", draggableText: "Characteristic Equation for Eigenvalues" },
    { id: "pair-3", dropzoneLatex: "(\\mathbf{A} - \\lambda\\mathbf{I})\\mathbf{K} = \\mathbf{0}", draggableText: "Eigenvector Equation" },
    { id: "pair-4", dropzoneLatex: "\\mathbf{X} = \\mathbf{X}_c + \\mathbf{X}_p", draggableText: "General Solution to a Nonhomogeneous System" }
  ]
};
