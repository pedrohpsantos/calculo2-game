import type { QuizQuestion } from '@/types/quiz'

export const seriesQuestions: QuizQuestion[] = [
  {
    id: 'series-q1',
    question: 'Para qual intervalo a Série Geométrica infinita de razão r converge?',
    category: 'Série Geométrica',
    difficulty: 'easy',
    latex: '\\sum_{n=0}^{\\infty} a r^n',
    answers: [
      { id: 'a1', text: '|r| > 1', correct: false },
      { id: 'a2', text: 'r = 1', correct: false },
      { id: 'a3', text: '|r| < 1', correct: true },
      { id: 'a4', text: 'r > 0', correct: false },
    ],
  },
  {
    id: 'series-q2',
    question: 'De acordo com o Teste da Razão, se calcularmos L = limite de |a(n+1)/a(n)| e obtivermos L = 1, o que podemos concluir?',
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
    question: 'Uma p-série tem o formato sum(1/n^p). Para quais valores de p a série CONVERGE?',
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
    question: 'A série harmônica alternada converge, mas a série harmônica pura diverge. Como classificamos a convergência da harmônica alternada?',
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
    question: 'Para aplicar o Teste da Integral em uma série, a função contínua f(x) associada deve ser OBRIGATORIAMENTE:',
    category: 'Teste da Integral',
    difficulty: 'medium',
    answers: [
      { id: 'a1', text: 'Ímpar e crescente', correct: false },
      { id: 'a2', text: 'Positiva e decrescente', correct: true },
      { id: 'a3', text: 'Negativa e oscilante', correct: false },
      { id: 'a4', text: 'Diferenciável e periódica', correct: false },
    ],
  }
]
