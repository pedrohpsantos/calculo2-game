import type { TheorySlide } from '@/types/theory'

export const powerSeriesMethodTheory: TheorySlide[] = [
  {
    id: 'psm-t1',
    title: 'O Desespero Analítico 😱',
    points: [
      "Métodos normais falham quando **coeficientes variam com o tempo**.",
      "A solução é apelar para a **Força Bruta**.",
      "Chutamos que a resposta é um **Somatório Infinito** e procuramos os coeficientes."
    ],
    latex: 'y(x) = \\sum_{n=0}^{\\infty} c_n x^n'
  },
  {
    id: 'psm-t2',
    title: 'Pontos Ordinários',
    points: [
      "Se P(x) **não zerar** em x=0, o ponto é **ORDINÁRIO**.",
      "Uma Série de Taylor comum (Maclaurin) resolve facilmente.",
      "O objetivo final é achar a **Relação de Recorrência** dos coeficientes."
    ],
    latex: 'P(x)y^{\\prime\\prime} + Q(x)y^{\\prime} + R(x)y = 0'
  },
  {
    id: 'psm-t3',
    title: 'Pontos Singulares e Equação de Cauchy-Euler',
    points: [
      "Se **P(0) = 0**, temos um **Ponto Singular**.",
      "Na **Equação de Cauchy-Euler**, cada derivada é compensada por um x.",
      "A solução mágica assume o formato de potências: **y = x^r**."
    ],
    latex: 'x^2 y^{\\prime\\prime} + \\alpha x y^{\\prime} + \\beta y = 0'
  },
  {
    id: 'psm-t4',
    title: 'Método de Frobenius: O Resgate 🦸‍♂️',
    points: [
      "Usado quando o ponto é **Singular REGULAR**.",
      "Multiplicamos a série inteira por **x elevado a 'r'**.",
      "Garante **pelo menos uma solução** nesse formato modificado."
    ],
    latex: 'y(x) = \\sum_{n=0}^{\\infty} c_n x^{n+r}'
  },
  {
    id: 'psm-t5',
    title: 'A Equação Indicial',
    points: [
      "Para achar o 'r' de Frobenius, coletamos os **termos de menor grau**.",
      "Isso gera uma quadrática chamada **Equação Indicial**.",
      "Suas **duas raízes** determinam o formato final da solução!"
    ],
    latex: 'r(r-1) + p_0 r + q_0 = 0'
  }
]
