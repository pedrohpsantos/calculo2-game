import type { TheorySlide } from '@/types/theory'

export const odeSystemsTheory: TheorySlide[] = [
  {
    id: 'sys-t1',
    title: 'Quando Variáveis Colidem',
    points: [
      "Modela **populações**, misturas múltiplas e redes elétricas.",
      "A taxa de crescimento de uma **afeta a outra**.",
      "É o Caos da natureza organizado elegantemente em **Matrizes**!"
    ],
    latex: '\\mathbf{X}^{\\prime} = \\begin{pmatrix} x_1\' \\\\ x_2\' \\end{pmatrix} = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} \\begin{pmatrix} x_1 \\\\ x_2 \\end{pmatrix}'
  },
  {
    id: 'sys-t2',
    title: 'O Casamento com a Álgebra Linear 💍',
    points: [
      "Compactamos as equações em uma grande **Matriz A**.",
      "A chave é achar os **Autovalores** e **Autovetores**.",
      "Eles ditam a direção para onde o sistema vai **fluir**."
    ],
    latex: '\\mathbf{X}^{\\prime} = A\\mathbf{X}'
  },
  {
    id: 'sys-t3',
    title: 'O Wronskiano de Matrizes',
    points: [
      "Colocamos os vetores solução lado a lado na **Matriz Fundamental**.",
      "Garante que as soluções **não são redundantes**.",
      "Se o **Wronskiano (determinante)** for diferente de zero, deu certo!"
    ],
    latex: 'W(t) = \\det \\Phi(t) \\neq 0'
  },
  {
    id: 'sys-t4',
    title: 'Montando o Exodia (A Solução Homogênea) 🧩',
    points: [
      "Combinação linear das soluções individuais.",
      "Junta cada **autovetor** com a exponencial do seu **autovalor**.",
      "Forma a **solução geral** do sistema homogêneo."
    ],
    latex: '\\mathbf{X}_h(t) = C_1 \\mathbf{v_1} e^{\\lambda_1 t} + C_2 \\mathbf{v_2} e^{\\lambda_2 t}'
  },
  {
    id: 'sys-t5',
    title: 'Sistemas Não-Homogêneos',
    points: [
      "Usado quando há uma **força externa F(t)** no sistema.",
      "Aplica a **Variação dos Parâmetros** versão hardcore matricial.",
      "A **Matriz Fundamental** integra a força externa na solução!"
    ],
    latex: '\\mathbf{X}_p(t) = \\Phi(t) \\int \\Phi^{-1}(t) F(t) dt'
  }
]
