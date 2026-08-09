import type { QuizQuestion } from '@/types/quiz'

export const laplaceQuestions: QuizQuestion[] = [
  {
    id: 'laplace-q1',
    question: 'A Transformada de Laplace converte o que no mundo "t" para o que no mundo "s"?',
    category: 'Conceito',
    difficulty: 'easy',
    answers: [
      { id: 'a1', text: 'Geometria em Álgebra', correct: false },
      { id: 'a2', text: 'Derivadas em Multiplicações por s', correct: true },
      { id: 'a3', text: 'Integrais em Derivadas', correct: false },
      { id: 'a4', text: 'Matrizes em Vetores', correct: false },
    ],
  },
  {
    id: 'laplace-q2',
    question: 'Qual é a representação da Função Delta de Dirac (Impulso no tempo c) após aplicarmos a Transformada de Laplace?',
    category: 'Impulso',
    difficulty: 'medium',
    latex: '\\mathcal{L}\\{\\delta(t-c)\\} = \\text{???}',
    answers: [
      { id: 'a1', text: '0', correct: false },
      { id: 'a2', text: '1/s', correct: false },
      { id: 'a3', text: 'e^(-cs)', correct: true },
      { id: 'a4', text: 'e^(cs)/s', correct: false },
    ],
  },
  {
    id: 'laplace-q3',
    question: 'Segundo o Teorema da Convolução, a transformada de (f * g)(t) equivale a qual operação no domínio "s"?',
    category: 'Convolução',
    difficulty: 'hard',
    answers: [
      { id: 'a1', text: 'Soma: F(s) + G(s)', correct: false },
      { id: 'a2', text: 'Produto: F(s) * G(s)', correct: true },
      { id: 'a3', text: 'Divisão: F(s) / G(s)', correct: false },
      { id: 'a4', text: 'Derivada de F(s)G(s)', correct: false },
    ],
  },
  {
    id: 'laplace-q4',
    question: 'Se aplicarmos Laplace em y\' (a primeira derivada), a fórmula que surge JÁ INCLUI algo muito importante para EDOs. O que é?',
    category: 'Condições Iniciais',
    difficulty: 'medium',
    latex: '\\mathcal{L}\\{y^{\\prime}\\} = sY(s) - \\text{???}',
    answers: [
      { id: 'a1', text: 'A constante de integração C', correct: false },
      { id: 'a2', text: 'O valor da Condição Inicial y(0)', correct: true },
      { id: 'a3', text: 'A derivada segunda y\'\'(0)', correct: false },
      { id: 'a4', text: 'A função Degrau de Heaviside', correct: false },
    ],
  },
  {
    id: 'laplace-q5',
    question: 'A Função Degrau Unitário (Heaviside) u_c(t) é muito utilizada para modelar:',
    category: 'Heaviside',
    difficulty: 'easy',
    answers: [
      { id: 'a1', text: 'Impactos infinitos em zero segundos', correct: false },
      { id: 'a2', text: 'Forças que são "ligadas" ou "desligadas" em t=c', correct: true },
      { id: 'a3', text: 'Oscilações senoidais', correct: false },
      { id: 'a4', text: 'Decaimento radioativo', correct: false },
    ],
  }
]
