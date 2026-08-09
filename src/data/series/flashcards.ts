import type { Flashcard } from '@/types/flashcard'

export const flashcards: Flashcard[] = [
  {
    id: 'series-1',
    category: 'Conceito',
    front: 'O que fundamenta matematicamente o Paradoxo de Zenão?',
    back: 'O conceito de Séries, onde uma soma de infinitos pedaços (termos) pode convergir para um valor finito.'
  },
  {
    id: 'series-2',
    category: 'Série Geométrica',
    front: 'Qual a condição para a convergência de uma Série Geométrica?',
    frontLatex: '\\sum_{n=0}^{\\infty} a r^n',
    back: 'A razão deve ter valor absoluto menor que 1.'
  },
  {
    id: 'series-3',
    category: 'Fórmula',
    front: 'Qual o valor da soma de uma Série Geométrica convergente?',
    back: 'O primeiro termo dividido por $1 - r$.',
    backLatex: '\\frac{a}{1-r}'
  },
  {
    id: 'series-4',
    category: 'Série Harmônica',
    front: 'A Série Harmônica converge ou diverge?',
    frontLatex: '\\sum_{n=1}^{\\infty} \\frac{1}{n}',
    back: 'Diverge para o infinito, mesmo crescendo muito lentamente.'
  },
  {
    id: 'series-5',
    category: 'Teste',
    front: 'O que diz o Teste da Integral para séries?',
    back: 'Se a integral imprópria associada convergir, a série converge. Se a integral divergir, a série também diverge.',
    backLatex: '\\int_1^{\\infty} f(x)dx \\text{ converge } \\iff \\sum_{n=1}^{\\infty} a_n \\text{ converge}'
  },
  {
    id: 'series-6',
    category: 'Teste',
    front: 'Como aplicar o Teste da Razão em uma série?',
    back: 'Calcula-se o limite de $|a_{n+1}/a_n|$ quando n tende ao infinito. Se for menor que 1, converge absolutamente; maior que 1, diverge.',
    backLatex: 'L = \\lim_{n \\to \\infty} \\left| \\frac{a_{n+1}}{a_n} \\right|'
  },
  {
    id: 'series-7',
    category: 'Série Alternada',
    front: 'Qual a diferença entre Convergência Absoluta e Condicional numa Série Alternada?',
    back: 'É absoluta se convergir mesmo ignorando os sinais alternados. É condicional se converge com os sinais, mas diverge sem eles.'
  },
  {
    id: 'series-8',
    category: 'Teste da Raiz',
    front: 'O que avalia o Teste da Raiz de Cauchy?',
    back: 'Avalia o limite da raiz enésima de $|a_n|$. Se $L < 1$ converge, se $L > 1$ diverge.',
    backLatex: 'L = \\lim_{n \\to \\infty} \\sqrt[n]{|a_n|}'
  },
  {
    id: 'series-9',
    category: 'Teste',
    front: 'O que diz o Teste de Comparação por Limite quando o limite de $a_n/b_n$ for $c > 0$?',
    frontLatex: '\\lim_{n \\to \\infty} \\frac{a_n}{b_n} = c > 0',
    back: 'Garante que ambas as séries compartilham o mesmo comportamento: ou as duas convergem, ou as duas divergem.'
  }
]
