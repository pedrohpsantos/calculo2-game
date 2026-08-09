import type { QuizQuestion } from '@/types/quiz'

export const seriesQuestions: QuizQuestion[] = [
  {
    id: 'series-q1',
    question: 'Complete a condição para que a Série Geométrica infinita de razão r convirja:',
    category: 'Série Geométrica',
    difficulty: 'easy',
    mode: 'complete',
    latexPrefix: '\\text{Converge se }',
    answers: [
      { id: 'a1', text: '|r| > 1', correct: false },
      { id: 'a2', text: 'r = 1', correct: false },
      { id: 'a3', text: '|r| < 1', correct: true },
      { id: 'a4', text: 'r > 0', correct: false },
    ],
  },
  {
    id: 'series-q2',
    question: 'O que o Teste da Razão conclui quando o limite L = 1?',
    category: 'Teste da Razão',
    difficulty: 'medium',
    latex: 'L = \\lim_{n \\to \\infty} \\left| \\frac{a_{n+1}}{a_n} \\right| = 1',
    answers: [
      { id: 'a1', text: 'A série converge absolutamente', correct: false },
      { id: 'a2', text: 'O teste é inconclusivo (falha)', correct: true },
      { id: 'a3', text: 'A série diverge ao infinito', correct: false },
      { id: 'a4', text: 'A série converge condicionalmente', correct: false },
    ],
  },
  {
    id: 'series-q3',
    question: 'Para quais valores de p a p-série converge?',
    category: 'Séries p',
    difficulty: 'easy',
    latex: '\\sum_{n=1}^{\\infty} \\frac{1}{n^p}',
    answers: [
      { id: 'a1', text: 'p > 1', correct: true },
      { id: 'a2', text: 'p = 1', correct: false },
      { id: 'a3', text: 'p < 1', correct: false },
      { id: 'a4', text: 'p = 0', correct: false },
    ],
  },
  {
    id: 'series-q4',
    question: 'Como é classificada a convergência da série harmônica alternada, sabendo que a harmônica pura diverge?',
    category: 'Convergência',
    difficulty: 'hard',
    latex: '\\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}}{n}',
    answers: [
      { id: 'a1', text: 'Convergência Absoluta', correct: false },
      { id: 'a2', text: 'Divergente em média', correct: false },
      { id: 'a3', text: 'Convergência Uniforme', correct: false },
      { id: 'a4', text: 'Convergência Condicional', correct: true },
    ],
  },
  {
    id: 'series-q5',
    question: 'Quais são as condições obrigatórias da função f(x) para aplicarmos o Teste da Integral?',
    category: 'Teste da Integral',
    difficulty: 'medium',
    answers: [
      { id: 'a1', text: 'Ímpar e crescente', correct: false },
      { id: 'a2', text: 'Positiva e decrescente', correct: true },
      { id: 'a3', text: 'Negativa e oscilante', correct: false },
      { id: 'a4', text: 'Diferenciável e periódica', correct: false },
    ],
  },
  {
    id: 'series-q6',
    question: 'No Teste de Comparação por Limite entre a_n e b_n, se o limite for c > 0, qual a conclusão?',
    category: 'Testes de Comparação',
    difficulty: 'medium',
    answers: [
      { id: 'a1', text: 'Sempre convergem para o valor c', correct: false },
      { id: 'a2', text: 'Ambas convergem ou ambas divergem', correct: true },
      { id: 'a3', text: 'O teste é inconclusivo', correct: false },
      { id: 'a4', text: 'a_n converge e b_n diverge', correct: false },
    ],
  },
  {
    id: 'series-q7',
    question: 'Determine o limite a ser calculado no Teste da Raiz de Cauchy:',
    category: 'Teste da Raiz',
    difficulty: 'easy',
    mode: 'complete',
    latexPrefix: 'L = \\lim_{n \\to \\infty} ',
    answers: [
      { id: 'a1', text: '\\sqrt[n]{|a_{n+1}|}', correct: false },
      { id: 'a2', text: '\\sqrt[n]{|a_n|}', correct: true },
      { id: 'a3', text: '|\\frac{a_{n+1}}{a_n}|', correct: false },
      { id: 'a4', text: 'a_n^{1/2}', correct: false },
    ],
  }
]
