import type { QuizQuestion } from '@/types/quiz'

export const powerSeriesMethodQuestions: QuizQuestion[] = [
  {
    id: 'psm-q1',
    question: 'O que define um ponto ordinário x_0 na EDO P(x)y\'\' + Q(x)y\' + R(x)y = 0?',
    category: 'Pontos Ordinários',
    difficulty: 'easy',
    answers: [
      { id: 'a1', text: 'P(x_0) é diferente de zero', correct: true },
      { id: 'a2', text: 'P(x_0) é exatamente zero', correct: false },
      { id: 'a3', text: 'Q(x_0) e R(x_0) se cancelam', correct: false },
      { id: 'a4', text: 'A equação não possui derivadas', correct: false },
    ],
  },
  {
    id: 'psm-q2',
    question: 'Na Equação de Cauchy-Euler x^2 y\'\' + ax y\' + by = 0, qual é o formato correto da solução proposta ("chute")?',
    category: 'Equação de Euler',
    difficulty: 'medium',
    answers: [
      { id: 'a1', text: 'y = sen(rx)', correct: false },
      { id: 'a2', text: 'y = x^r', correct: true },
      { id: 'a3', text: 'y = ln(x)', correct: false },
      { id: 'a4', text: 'y = e^{(x^2)}', correct: false },
    ],
  },
  {
    id: 'psm-q3',
    question: 'No Método de Frobenius, como a série de potências padrão é modificada para um ponto singular regular?',
    category: 'Frobenius',
    difficulty: 'medium',
    answers: [
      { id: 'a1', text: 'Multiplicamos a série toda por x^r', correct: true },
      { id: 'a2', text: 'Dividimos tudo por n!', correct: false },
      { id: 'a3', text: 'Excluímos os termos pares', correct: false },
      { id: 'a4', text: 'Aderimos a Integrais de Linha', correct: false },
    ],
  },
  {
    id: 'psm-q4',
    question: 'No método de Frobenius, qual é o nome da equação que determina os valores de "r" ao igualar a zero os termos de menor potência?',
    category: 'Terminologia',
    difficulty: 'hard',
    answers: [
      { id: 'a1', text: 'Equação de Lagrange', correct: false },
      { id: 'a2', text: 'Equação Indicial', correct: true },
      { id: 'a3', text: 'Determinante Jacobiano', correct: false },
      { id: 'a4', text: 'Equação Característica Básica', correct: false },
    ],
  },
  {
    id: 'psm-q5',
    question: 'Complete o limite inferior (valor inicial de n) na somatória da segunda derivada y\'\':',
    category: 'Dança dos Índices',
    difficulty: 'hard',
    mode: 'complete',
    latexPrefix: 'y^{\\prime\\prime}(x) = \\sum_{n=',
    latexSuffix: '}^{\\infty} n(n-1)c_n x^{n-2}',
    answers: [
      { id: 'a1', text: '0', correct: false },
      { id: 'a2', text: '1', correct: false },
      { id: 'a3', text: '2', correct: true },
      { id: 'a4', text: '\\infty', correct: false },
    ],
  },
  {
    id: 'psm-q6',
    question: 'Qual importante família de funções especiais surge como solução da EDO x^2 y\'\' + x y\' + (x^2 - \\nu^2)y = 0 pelo Método de Frobenius?',
    category: 'Funções Especiais',
    difficulty: 'hard',
    answers: [
      { id: 'a1', text: 'Polinômios de Hermite', correct: false },
      { id: 'a2', text: 'Funções de Bessel', correct: true },
      { id: 'a3', text: 'Série de Maclaurin', correct: false },
      { id: 'a4', text: 'Polinômios de Legendre', correct: false },
    ],
  },
  {
    id: 'psm-q7',
    question: 'Qual equação diferencial linear tem como soluções típicas os Polinômios de Legendre P_n(x)?',
    category: 'Equações Clássicas',
    difficulty: 'medium',
    answers: [
      { id: 'a1', text: '(1-x^2)y\'\' - 2xy\' + n(n+1)y = 0', correct: true },
      { id: 'a2', text: 'y\'\' + y = 0', correct: false },
      { id: 'a3', text: 'x^2 y\'\' + x y\' + (x^2 - \\nu^2)y = 0', correct: false },
      { id: 'a4', text: 'y\'\' - xy = 0', correct: false },
    ],
  }
]
