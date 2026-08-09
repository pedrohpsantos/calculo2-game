import type { TheorySlide } from '@/types/theory'

export const seriesTheory: TheorySlide[] = [
  {
    id: 'series-t1',
    title: 'O Paradoxo de Zenão 🐢',
    points: [
      "Uma soma de **infinitos pedaços** pode ter valor finito.",
      "Você sempre anda uma fração do caminho e chega do outro lado.",
      "Isso fundamenta o conceito matemático de **Séries**."
    ],
    latex: '\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + ... = 1'
  },
  {
    id: 'series-t2',
    title: 'Série Geométrica: A Multiplicação Infinita',
    points: [
      "Cada termo atinge uma fração **(r)** do anterior.",
      "Se **|r| < 1**, a série CONVERGE para um número.",
      "Se **|r| ≥ 1**, ela DIVERGE para o infinito."
    ],
    latex: '\\sum_{n=0}^{\\infty} a r^n = \\frac{a}{1-r}'
  },
  {
    id: 'series-t3',
    title: 'A Decepção Harmônica 💔',
    points: [
      "A soma de **1/n** parece ficar muito pequena.",
      "Ela cresce de forma muito, muito lenta.",
      "No fim, ela explode e **DIVERGE para o infinito**."
    ],
    latex: '\\sum_{n=1}^{\\infty} \\frac{1}{n} = \\infty'
  },
  {
    id: 'series-t4',
    title: 'Teste da Integral 📐',
    points: [
      "Trata a série como **área embaixo de uma curva**.",
      "Se a integral imprópria **converge**, a série converge.",
      "Se a integral **diverge**, a série também explode."
    ],
    latex: '\\int_1^{\\infty} f(x)dx \\text{ converge } \\iff \\sum_{n=1}^{\\infty} a_n \\text{ converge}'
  },
  {
    id: 'series-t5',
    title: 'Testes de Comparação 🔍',
    points: [
      "Compara sua série com **Séries p** ou **Geométricas**.",
      "Se é **menor que uma que converge**, ela converge.",
      "Se é **maior que uma que diverge**, ela diverge."
    ],
    latex: '\\lim_{n \\to \\infty} \\frac{a_n}{b_n} = c > 0'
  },
  {
    id: 'series-t6',
    title: 'A Dupla Imbatível: Razão e Raiz ⚡',
    points: [
      "Calcula limite de **|a_{n+1}/a_n|** ou **raiz n-ésima**.",
      "Se limite **< 1**, Converge Absolutamente.",
      "Se limite **> 1**, Diverge. Se for 1, o teste **falha**."
    ],
    latex: 'L = \\lim_{n \\to \\infty} \\left| \\frac{a_{n+1}}{a_n} \\right|'
  },
  {
    id: 'series-t7',
    title: 'Séries Alternadas e o Caos (+ - + -)',
    points: [
      "Sinais alternam, e exige termos **decrescendo até 0**.",
      "Pode convergir assim, mas divergir sem os sinais (**Convergência Condicional**).",
      "Se converge com e sem sinais, é **Convergência Absoluta**."
    ],
    latex: '\\sum_{n=1}^{\\infty} (-1)^{n-1} b_n'
  }
]
