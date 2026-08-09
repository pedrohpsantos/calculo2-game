import type { QuizQuestion } from '@/types/quiz'

export const taylorQuestions: QuizQuestion[] = [
  {
    id: 'taylor-q1',
    question: 'A principal diferença entre uma Série de Taylor e uma Série de Maclaurin é que:',
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
    question: 'Olhando para a fórmula mágica da expansão, o que fica no denominador de cada termo da série para normalizar as derivadas?',
    category: 'Fórmula',
    difficulty: 'medium',
    latex: '\\frac{f^{(n)}(a)}{\\text{???}} (x-a)^n',
    answers: [
      { id: 'a1', text: 'n', correct: false },
      { id: 'a2', text: 'n^2', correct: false },
      { id: 'a3', text: 'n! (n fatorial)', correct: true },
      { id: 'a4', text: '\\sqrt{n}', correct: false },
    ],
  },
  {
    id: 'taylor-q3',
    question: 'O Resto (ou Erro) de Lagrange R_n(x) é calculado usando um ponto misterioso "c". Onde esse ponto "c" fica?',
    category: 'Erro',
    difficulty: 'hard',
    answers: [
      { id: 'a1', text: 'É exatamente igual a zero sempre', correct: false },
      { id: 'a2', text: 'Fica em algum lugar no intervalo entre o centro "a" e o ponto "x"', correct: true },
      { id: 'a3', text: 'Fica no infinito positivo', correct: false },
      { id: 'a4', text: 'É o raio de convergência', correct: false },
    ],
  }
]
