import { Flashcard } from '@/types/flashcard'

export const flashcards: Flashcard[] = [
  {
    id: 'psm-1',
    category: 'Conceito',
    front: 'Qual a utilidade de se usar o Método das Séries de Potências?',
    back: 'Encontrar soluções para EDOs quando os coeficientes são variáveis no tempo, chutando um somatório infinito.'
  },
  {
    id: 'psm-2',
    category: 'Formato',
    front: 'Qual o formato geral da solução procurada pelo Método das Séries?',
    back: 'Um somatório infinito com coeficientes a serem determinados.',
    backLatex: 'y(x) = \\sum_{n=0}^{\\infty} c_n x^n'
  },
  {
    id: 'psm-3',
    category: 'Definição',
    front: 'Para uma EDO $P(x)y\'\' + Q(x)y\' + R(x)y = 0$, o que é um Ponto Ordinário?',
    frontLatex: 'P(x)y^{\\prime\\prime} + Q(x)y^{\\prime} + R(x)y = 0',
    back: 'É um ponto (geralmente $x=0$) onde $P(x)$ não é zero. Pode-se resolvê-la usando uma série de Taylor comum.'
  },
  {
    id: 'psm-4',
    category: 'Definição',
    front: 'O que define a Equação de Cauchy-Euler?',
    back: 'Cada derivada de y é compensada por x elevado à mesma potência, com solução mágica do tipo $y = x^r$.',
    backLatex: 'x^2 y^{\\prime\\prime} + \\alpha x y^{\\prime} + \\beta y = 0'
  },
  {
    id: 'psm-5',
    category: 'Técnica',
    front: 'O que o Método de Frobenius adiciona à série de potências?',
    back: 'Multiplica-se a série inteira por $x^r$, onde r é determinado pela Equação Indicial.',
    backLatex: 'y(x) = \\sum_{n=0}^{\\infty} c_n x^{n+r}'
  },
  {
    id: 'psm-6',
    category: 'Fórmula',
    front: 'O que é a Equação Indicial?',
    back: 'Uma quadrática formada pelos termos de menor grau no Método de Frobenius, cujas raízes definem o formato da solução.',
    backLatex: 'r(r-1) + p_0 r + q_0 = 0'
  }
]
