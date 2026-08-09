import type { QuizQuestion } from '@/types/quiz'

export const odeHigherOrderQuestions: QuizQuestion[] = [
  {
    id: 'ho-q1',
    question: 'Qual é a Equação Característica da EDO linear homogênea com coeficientes constantes y\'\' - 5y\' + 6y = 0?',
    category: 'Equação Característica',
    difficulty: 'easy',
    latex: 'y^{\\prime\\prime} - 5y^{\\prime} + 6y = 0',
    answers: [
      { id: 'a1', text: 'r^2 - 5r + 6 = 0', correct: true },
      { id: 'a2', text: '2r - 5 = 0', correct: false },
      { id: 'a3', text: 'r^2 + 5r - 6 = 0', correct: false },
      { id: 'a4', text: 'y^2 - 5y + 6 = 0', correct: false },
    ],
  },
  {
    id: 'ho-q2',
    question: 'Complete a fórmula do Wronskiano W(x) dada pelo Teorema de Abel para a equação y\'\' + P(x)y\' + Q(x)y = 0:',
    category: 'Teorema de Abel',
    difficulty: 'medium',
    mode: 'complete',
    latexPrefix: 'W(x) = C e^{',
    latexSuffix: '}',
    answers: [
      { id: 'a1', text: '\\int Q(x)dx', correct: false },
      { id: 'a2', text: '- \\int P(x)dx', correct: true },
      { id: 'a3', text: 'P(x) - Q(x)', correct: false },
      { id: 'a4', text: '0', correct: false },
    ],
  },
  {
    id: 'ho-q3',
    question: 'Qual método resolve uma EDO não-homogênea cujo termo fonte é F(t) = tan(t)?',
    category: 'Não-Homogêneas',
    difficulty: 'medium',
    answers: [
      { id: 'a1', text: 'Coeficientes a Determinar', correct: false },
      { id: 'a2', text: 'Separação de Variáveis', correct: false },
      { id: 'a3', text: 'Variação dos Parâmetros', correct: true },
      { id: 'a4', text: 'Fator Integrante Simples', correct: false },
    ],
  },
  {
    id: 'ho-q4',
    question: 'No método de Variação dos Parâmetros, qual determinante fica no denominador da fórmula de u_1\' e u_2\'?',
    category: 'Variação dos Parâmetros',
    difficulty: 'hard',
    answers: [
      { id: 'a1', text: 'O Jacobiano', correct: false },
      { id: 'a2', text: 'O Hessiano', correct: false },
      { id: 'a3', text: 'O Wronskiano (W)', correct: true },
      { id: 'a4', text: 'O discriminante Delta', correct: false },
    ],
  },
  {
    id: 'ho-q5',
    question: 'Se a equação característica possui raízes reais e iguais, pelo que devemos multiplicar a segunda solução para garantir independência linear?',
    category: 'Raízes',
    difficulty: 'easy',
    answers: [
      { id: 'a1', text: 'Multiplica por x (ou t)', correct: true },
      { id: 'a2', text: 'Multiplica por sen(t)', correct: false },
      { id: 'a3', text: 'Divide por t', correct: false },
      { id: 'a4', text: 'Tira a raiz quadrada', correct: false },
    ],
  },
  {
    id: 'ho-q6',
    question: 'No método de Redução de Ordem, sabendo que y_1(t) é solução, procuramos y_2(t) em que forma?',
    category: 'Redução de Ordem',
    difficulty: 'medium',
    answers: [
      { id: 'a1', text: 'y_2(t) = v(t) \\cdot y_1(t)', correct: true },
      { id: 'a2', text: 'y_2(t) = y_1(t) + v(t)', correct: false },
      { id: 'a3', text: 'y_2(t) = e^{y_1(t)}', correct: false },
      { id: 'a4', text: 'y_2(t) = v(t) / y_1(t)', correct: false },
    ],
  },
  {
    id: 'ho-q7',
    question: 'O fenômeno matemático da ressonância pura exige multiplicar a solução particular pelo quê?',
    category: 'Aplicações',
    difficulty: 'medium',
    answers: [
      { id: 'a1', text: 'Por um fator de t', correct: true },
      { id: 'a2', text: '\\text{Por } e^t', correct: false },
      { id: 'a3', text: 'Pela frequência omega', correct: false },
      { id: 'a4', text: 'Por zero', correct: false },
    ],
  }
]
