import type { QuizQuestion } from '@/types/quiz'

export const laplaceQuestions: QuizQuestion[] = [
  {
    id: 'laplace-q1',
    question: 'O que a Transformada de Laplace converte do domínio do tempo (t) para o domínio da frequência (s)?',
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
    question: 'Complete a fórmula da Transformada de Laplace da Função Delta de Dirac (impulso no tempo c):',
    category: 'Impulso',
    difficulty: 'medium',
    mode: 'complete',
    latexPrefix: '\\mathcal{L}\\{\\delta(t-c)\\} =',
    answers: [
      { id: 'a1', text: '0', correct: false },
      { id: 'a2', text: '1/s', correct: false },
      { id: 'a3', text: 'e^{-cs}', correct: true },
      { id: 'a4', text: 'e^{cs}/s', correct: false },
    ],
  },
  {
    id: 'laplace-q3',
    question: 'No domínio "s", a qual operação equivale a Transformada de Laplace da convolução (f * g)(t)?',
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
    question: 'Complete a fórmula da Transformada de Laplace da primeira derivada y\':',
    category: 'Condições Iniciais',
    difficulty: 'medium',
    mode: 'complete',
    latexPrefix: '\\mathcal{L}\\{y^{\\prime}\\} = sY(s) -',
    answers: [
      { id: 'a1', text: 'C', correct: false },
      { id: 'a2', text: 'y(0)', correct: true },
      { id: 'a3', text: 'y^{\\prime}(0)', correct: false },
      { id: 'a4', text: 'u_c(t)', correct: false },
    ],
  },
  {
    id: 'laplace-q5',
    question: 'Para que serve a Função Degrau Unitário (Heaviside) u_c(t) na modelagem de equações?',
    category: 'Heaviside',
    difficulty: 'easy',
    answers: [
      { id: 'a1', text: 'Impactos infinitos em zero segundos', correct: false },
      { id: 'a2', text: 'Forças que são ligadas ou desligadas no tempo t = c', correct: true },
      { id: 'a3', text: 'Oscilações senoidais', correct: false },
      { id: 'a4', text: 'Decaimento radioativo constante', correct: false },
    ],
  },
  {
    id: 'laplace-q6',
    question: 'De acordo com o Teorema do Valor Final, a que limite no domínio (s) corresponde o limite de f(t) quando t tende ao infinito?',
    category: 'Limites Assintóticos',
    difficulty: 'medium',
    mode: 'complete',
    latexPrefix: '\\lim_{t \\to \\infty} f(t) = \\lim_{s \\to 0}',
    answers: [
      { id: 'a1', text: 'F(s)', correct: false },
      { id: 'a2', text: 'sF(s)', correct: true },
      { id: 'a3', text: 'F(s)/s', correct: false },
      { id: 'a4', text: 's^2F(s)', correct: false },
    ],
  }
]
