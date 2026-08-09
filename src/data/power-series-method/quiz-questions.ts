import type { QuizQuestion } from '@/types/quiz'

export const powerSeriesMethodQuestions: QuizQuestion[] = [
  {
    id: 'psm-q1',
    question: 'Para usar o método padrão de Séries de Potências, precisamos que o ponto de expansão x0 seja um Ponto Ordinário. O que define um ponto ordinário na EDO P(x)y\'\' + Q(x)y\' + R(x)y = 0 ?',
    category: 'Pontos Ordinários',
    difficulty: 'easy',
    answers: [
      { id: 'a1', text: 'P(x) é diferente de zero naquele ponto', correct: true },
      { id: 'a2', text: 'P(x) é exatamente zero naquele ponto', correct: false },
      { id: 'a3', text: 'Q(x) e R(x) se cancelam', correct: false },
      { id: 'a4', text: 'A equação não possui derivadas', correct: false },
    ],
  },
  {
    id: 'psm-q2',
    question: 'Na Equação de Cauchy-Euler x^2 y\'\' + ax y\' + by = 0, não buscamos soluções do tipo e^(rt). Qual é o formato do "chute" correto para essa equação?',
    category: 'Equação de Euler',
    difficulty: 'medium',
    answers: [
      { id: 'a1', text: 'y = sen(rx)', correct: false },
      { id: 'a2', text: 'y = x^r', correct: true },
      { id: 'a3', text: 'y = ln(x)', correct: false },
      { id: 'a4', text: 'y = e^(x^2)', correct: false },
    ],
  },
  {
    id: 'psm-q3',
    question: 'Segundo o Método de Frobenius, como modificamos a série de potências padrão para lidar com um ponto singular regular?',
    category: 'Frobenius',
    difficulty: 'medium',
    answers: [
      { id: 'a1', text: 'Multiplicamos toda a série por x^r', correct: true },
      { id: 'a2', text: 'Dividimos tudo por n!', correct: false },
      { id: 'a3', text: 'Excluímos os termos pares', correct: false },
      { id: 'a4', text: 'Aderimos a Integrais de Linha', correct: false },
    ],
  },
  {
    id: 'psm-q4',
    question: 'No método de Frobenius, coletamos os termos de menor potência de x e os igualamos a zero. Essa equação quadrática que surge para determinar "r" chama-se:',
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
    question: 'Se, no primeiro termo, assumimos que y(x) = sum(c_n * x^n), onde a soma começa em n=0, em qual "n" começa a SEGUNDA derivada y\'\'?',
    category: 'Dança dos Índices',
    difficulty: 'hard',
    latex: 'y^{\\prime\\prime}(x) = \\sum_{n=\\text{???}}^{\\infty} n(n-1)c_n x^{n-2}',
    answers: [
      { id: 'a1', text: 'n = 0', correct: false },
      { id: 'a2', text: 'n = 1', correct: false },
      { id: 'a3', text: 'n = 2', correct: true },
      { id: 'a4', text: 'n = ∞', correct: false },
    ],
  }
]
