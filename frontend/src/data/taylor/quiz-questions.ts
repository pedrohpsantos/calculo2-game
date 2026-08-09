import type { QuizQuestion } from '@/types/quiz'

export const taylorQuestions: QuizQuestion[] = [
  {
    id: 'taylor-q1',
    question: 'Qual é a principal diferença entre uma Série de Taylor e uma Série de Maclaurin?',
    category: 'Conceito',
    difficulty: 'easy',
    answers: [
      { id: 'a1', text: 'Maclaurin usa integrais, Taylor usa derivadas', correct: false },
      { id: 'a2', text: 'Maclaurin é centrada especificamente em a = 0', correct: true },
      { id: 'a3', text: 'Taylor não usa fatoriais (n!)', correct: false },
      { id: 'a4', text: 'Maclaurin é usada apenas para logaritmos', correct: false },
    ],
  },
  {
    id: 'taylor-q2',
    question: 'Complete o que fica no denominador de cada termo na expansão em Série de Taylor:',
    category: 'Fórmula',
    difficulty: 'medium',
    mode: 'complete',
    latexPrefix: '\\frac{f^{(n)}(a)}{',
    latexSuffix: '} (x-a)^n',
    answers: [
      { id: 'a1', text: 'n', correct: false },
      { id: 'a2', text: 'n^2', correct: false },
      { id: 'a3', text: 'n!', correct: true },
      { id: 'a4', text: '\\sqrt{n}', correct: false },
    ],
  },
  {
    id: 'taylor-q3',
    question: 'No cálculo do Erro de Lagrange R_n(x), em qual intervalo o ponto "c" deve estar?',
    category: 'Erro',
    difficulty: 'hard',
    answers: [
      { id: 'a1', text: 'Sempre igual a zero', correct: false },
      { id: 'a2', text: 'Em algum lugar entre o centro "a" e o ponto "x"', correct: true },
      { id: 'a3', text: 'No infinito positivo', correct: false },
      { id: 'a4', text: 'Fora do raio de convergência', correct: false },
    ],
  }
]
