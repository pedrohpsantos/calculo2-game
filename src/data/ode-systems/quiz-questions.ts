import type { QuizQuestion } from '@/types/quiz'

export const odeSystemsQuestions: QuizQuestion[] = [
  {
    id: 'sys-q1',
    question: 'Na notação de matrizes, o que o "A" representa na equação X\' = AX ?',
    category: 'Matrizes',
    difficulty: 'easy',
    latex: '\\mathbf{X}^{\\prime} = A\\mathbf{X}',
    answers: [
      { id: 'a1', text: 'A matriz de coeficientes constantes do sistema', correct: true },
      { id: 'a2', text: 'Um vetor de condições iniciais', correct: false },
      { id: 'a3', text: 'Apenas uma constante escalar', correct: false },
      { id: 'a4', text: 'A matriz identidade', correct: false },
    ],
  },
  {
    id: 'sys-q2',
    question: 'Para encontrar os Autovalores (λ) da matriz A, precisamos resolver qual equação envolvendo determinantes?',
    category: 'Autovalores',
    difficulty: 'medium',
    answers: [
      { id: 'a1', text: 'det(A * λ) = 1', correct: false },
      { id: 'a2', text: 'det(A - λI) = 0', correct: true },
      { id: 'a3', text: 'det(A + I) = λ', correct: false },
      { id: 'a4', text: 'det(A) = 0', correct: false },
    ],
  },
  {
    id: 'sys-q3',
    question: 'Ao montar a Matriz Fundamental Φ(t) colocando as soluções do sistema lado a lado, o que o cálculo de det(Φ(t)) nos fornece?',
    category: 'Independência Linear',
    difficulty: 'medium',
    answers: [
      { id: 'a1', text: 'O Wronskiano (para checar se são LI)', correct: true },
      { id: 'a2', text: 'A Matriz Identidade', correct: false },
      { id: 'a3', text: 'O Polinômio Característico', correct: false },
      { id: 'a4', text: 'A Solução Particular do sistema', correct: false },
    ],
  },
  {
    id: 'sys-q4',
    question: 'Para resolver um Sistema Não-Homogêneo X\' = AX + F(t), a fórmula da Variação dos Parâmetros exige que você saiba calcular qual operação matricial sobre a Matriz Fundamental Φ?',
    category: 'Não-Homogêneas',
    difficulty: 'hard',
    latex: '\\mathbf{X}_p(t) = \\Phi(t) \\int \\Phi^{-1}(t) F(t) dt',
    answers: [
      { id: 'a1', text: 'A Matriz Transposta', correct: false },
      { id: 'a2', text: 'A Matriz Inversa (Φ⁻¹)', correct: true },
      { id: 'a3', text: 'A Matriz Adjunta', correct: false },
      { id: 'a4', text: 'O Traço da Matriz', correct: false },
    ],
  }
]
