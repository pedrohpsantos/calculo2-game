import type { QuizQuestion } from '@/types/quiz'

export const odeFirstOrderQuestions: QuizQuestion[] = [
  {
    id: 'ode-q1',
    question: 'Qual método resolve a equação dy/dx = (x^2) * y^3?',
    category: 'Classificação',
    difficulty: 'easy',
    answers: [
      { id: 'a1', text: 'Substituição Homogênea', correct: false },
      { id: 'a2', text: 'Fator Integrante', correct: false },
      { id: 'a3', text: 'Separação de Variáveis', correct: true },
      { id: 'a4', text: 'Equação de Bernoulli', correct: false },
    ],
  },
  {
    id: 'ode-q2',
    question: 'Complete a condição para que a EDO M(x,y)dx + N(x,y)dy = 0 seja EXATA:',
    category: 'Exatas',
    difficulty: 'medium',
    mode: 'complete',
    latexPrefix: '\\frac{\\partial M}{\\partial y} =',
    answers: [
      { id: 'a1', text: '\\frac{\\partial N}{\\partial y}', correct: false },
      { id: 'a2', text: '\\frac{\\partial N}{\\partial x}', correct: true },
      { id: 'a3', text: '\\frac{\\partial M}{\\partial x}', correct: false },
      { id: 'a4', text: '0', correct: false },
    ],
  },
  {
    id: 'ode-q3',
    question: 'Na equação linear y\' + P(x)y = Q(x), aplicar o Fator Integrante μ(x) transforma o lado esquerdo em quê?',
    category: 'Linear',
    difficulty: 'medium',
    answers: [
      { id: 'a1', text: 'Na derivada da soma: (μ + y)\'', correct: false },
      { id: 'a2', text: 'Na derivada do produto: (μ * y)\'', correct: true },
      { id: 'a3', text: 'Em uma constante C', correct: false },
      { id: 'a4', text: 'Em zero', correct: false },
    ],
  },
  {
    id: 'ode-q4',
    question: 'Qual das seguintes equações é NÃO-LINEAR?',
    category: 'Classificação',
    difficulty: 'easy',
    answers: [
      { id: 'a1', text: 'y\' + x*y = 0', correct: false },
      { id: 'a2', text: 'y\' + sin(x)y = e^x', correct: false },
      { id: 'a3', text: 'y\' + y^2 = 0', correct: true },
      { id: 'a4', text: 'x^2 y\' + y = 0', correct: false },
    ],
  },
  {
    id: 'ode-q5',
    question: 'Ao resolver uma EDO homogênea usando a substituição y = vx, no que a equação se transforma?',
    category: 'Homogênea',
    difficulty: 'hard',
    answers: [
      { id: 'a1', text: 'Equação Separável', correct: true },
      { id: 'a2', text: 'Equação Exata', correct: false },
      { id: 'a3', text: 'Equação Linear Simples', correct: false },
      { id: 'a4', text: 'Equação de Bernoulli', correct: false },
    ],
  },
  {
    id: 'ode-q6',
    question: 'Qual substituição é usada para linearizar uma Equação de Bernoulli da forma y\' + P(x)y = Q(x)y^n?',
    category: 'Bernoulli',
    difficulty: 'medium',
    answers: [
      { id: 'a1', text: 'v = y^{1-n}', correct: true },
      { id: 'a2', text: 'v = y^n', correct: false },
      { id: 'a3', text: 'v = y^{n-1}', correct: false },
      { id: 'a4', text: 'v = vx', correct: false },
    ],
  },
  {
    id: 'ode-q7',
    question: 'Segundo o Teorema de Existência e Unicidade (Picard-Lindelöf), o que garante a unicidade da solução para y\' = f(x,y)?',
    category: 'Teorema',
    difficulty: 'hard',
    answers: [
      { id: 'a1', text: 'A continuidade da derivada parcial de f em relação a y.', correct: true },
      { id: 'a2', text: 'O fato de f(x,y) ser homogênea.', correct: false },
      { id: 'a3', text: 'A exatidão da equação.', correct: false },
      { id: 'a4', text: 'A função ser integrável.', correct: false },
    ],
  }
]
