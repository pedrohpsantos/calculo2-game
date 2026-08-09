import type { QuizQuestion } from '@/types/quiz'

export const odeSystemsQuestions: QuizQuestion[] = [
  {
    id: 'sys-q1',
    question: 'Na notação matricial da equação X\' = AX, o que representa a matriz "A"?',
    category: 'Matrizes',
    difficulty: 'easy',
    latex: '\\mathbf{X}^{\\prime} = A\\mathbf{X}',
    answers: [
      { id: 'a1', text: 'A matriz de coeficientes constantes do sistema', correct: true },
      { id: 'a2', text: 'Um vetor de condições iniciais', correct: false },
      { id: 'a3', text: 'Apenas uma constante escalar', correct: false },
      { id: 'a4', text: 'A matriz identidade', correct: false },
    ],
  },
  {
    id: 'sys-q2',
    question: 'Complete a equação determinante necessária para encontrar os autovalores (λ) de uma matriz A:',
    category: 'Autovalores',
    difficulty: 'medium',
    mode: 'complete',
    latexPrefix: '\\det(',
    latexSuffix: ') = 0',
    answers: [
      { id: 'a1', text: 'A \\cdot \\lambda', correct: false },
      { id: 'a2', text: 'A - \\lambda I', correct: true },
      { id: 'a3', text: 'A + I', correct: false },
      { id: 'a4', text: 'A', correct: false },
    ],
  },
  {
    id: 'sys-q3',
    question: 'O que o determinante da Matriz Fundamental Φ(t) nos fornece?',
    category: 'Independência Linear',
    difficulty: 'medium',
    answers: [
      { id: 'a1', text: 'O Wronskiano (para checar se são LI)', correct: true },
      { id: 'a2', text: 'A Matriz Identidade', correct: false },
      { id: 'a3', text: 'O Polinômio Característico', correct: false },
      { id: 'a4', text: 'A Solução Particular do sistema', correct: false },
    ],
  },
  {
    id: 'sys-q4',
    question: 'Complete a fórmula da solução particular pela Variação dos Parâmetros para um sistema não-homogêneo:',
    category: 'Não-Homogêneas',
    difficulty: 'hard',
    mode: 'complete',
    latexPrefix: '\\mathbf{X}_p(t) = \\Phi(t) \\int',
    latexSuffix: 'F(t) dt',
    answers: [
      { id: 'a1', text: '\\Phi^T(t)', correct: false },
      { id: 'a2', text: '\\Phi^{-1}(t)', correct: true },
      { id: 'a3', text: '\\text{adj}(\\Phi(t))', correct: false },
      { id: 'a4', text: '\\text{tr}(\\Phi(t))', correct: false },
    ],
  }
]
