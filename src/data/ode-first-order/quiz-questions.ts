import type { QuizQuestion } from '@/types/quiz'

export const odeFirstOrderQuestions: QuizQuestion[] = [
  {
    id: 'ode-q1',
    question: 'Qual método deve ser usado para resolver a equação dy/dx = (x^2) * y^3 ?',
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
    question: 'Para a EDO M(x,y)dx + N(x,y)dy = 0 ser considerada EXATA, qual condição é necessária e suficiente (em um domínio simples)?',
    category: 'Exatas',
    difficulty: 'medium',
    latex: '\\frac{\\partial M}{\\partial y} = \\text{???}',
    answers: [
      { id: 'a1', text: 'Derivada parcial de N em relação a y', correct: false },
      { id: 'a2', text: 'Derivada parcial de N em relação a x', correct: true },
      { id: 'a3', text: 'Derivada de N em relação a t', correct: false },
      { id: 'a4', text: '0', correct: false },
    ],
  },
  {
    id: 'ode-q3',
    question: 'Quando aplicamos o Fator Integrante μ(x) = e^(∫P(x)dx) na equação y\' + P(x)y = Q(x), o lado esquerdo da equação se transforma no quê?',
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
    question: 'Qual destas equações é classificada como NÃO-LINEAR?',
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
    question: 'Na substituição para EDOs de forma homogênea (fração de polinômios de mesmo grau), usamos a substituição y = vx. O que essa substituição faz?',
    category: 'Homogênea',
    difficulty: 'hard',
    answers: [
      { id: 'a1', text: 'Transforma a EDO em Separável', correct: true },
      { id: 'a2', text: 'Transforma a EDO em Exata', correct: false },
      { id: 'a3', text: 'Zera as derivadas segundas', correct: false },
      { id: 'a4', text: 'Resolve a EDO imediatamente sem integrais', correct: false },
    ],
  }
]
