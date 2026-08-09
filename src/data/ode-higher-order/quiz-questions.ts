import type { QuizQuestion } from '@/types/quiz'

export const odeHigherOrderQuestions: QuizQuestion[] = [
  {
    id: 'ho-q1',
    question: 'Para uma EDO linear homogênea de coeficientes constantes como y\'\' - 5y\' + 6y = 0, a Equação Característica associada será:',
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
    question: 'Segundo o Teorema de Abel, para a equação y\'\' + P(x)y\' + Q(x)y = 0, o Wronskiano W(x) é dado por qual expressão?',
    category: 'Teorema de Abel',
    difficulty: 'medium',
    answers: [
      { id: 'a1', text: 'W(x) = C * e^(∫Q(x)dx)', correct: false },
      { id: 'a2', text: 'W(x) = C * e^(-∫P(x)dx)', correct: true },
      { id: 'a3', text: 'W(x) = P(x) - Q(x)', correct: false },
      { id: 'a4', text: 'W(x) = 0', correct: false },
    ],
  },
  {
    id: 'ho-q3',
    question: 'Para resolver uma EDO Não-Homogênea com termo fonte F(t) = tan(t), qual método DEVE ser utilizado?',
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
    question: 'Na Variação dos Parâmetros, nós transformamos y_h = C_1*y_1 + C_2*y_2 substituindo C_1 e C_2 por funções u_1(t) e u_2(t). Qual determinante fica no DENOMINADOR da fórmula para encontrar u_1\' e u_2\'?',
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
    question: 'Se a equação característica tiver raízes reais iguais (r1 = r2), a segunda solução da EDO recebe qual "multiplicador" extra para garantir independência linear?',
    category: 'Raízes',
    difficulty: 'easy',
    answers: [
      { id: 'a1', text: 'Multiplica por x (ou t)', correct: true },
      { id: 'a2', text: 'Multiplica por sen(t)', correct: false },
      { id: 'a3', text: 'Divide por t', correct: false },
      { id: 'a4', text: 'Tira a raiz quadrada', correct: false },
    ],
  }
]
