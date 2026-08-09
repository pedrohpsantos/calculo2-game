import type { Flashcard } from '@/types/flashcard'

export const flashcards: Flashcard[] = [
  {
    id: 'ode-first-order-1',
    category: 'Conceito',
    front: 'O que uma Equação Diferencial (EDO) relaciona?',
    back: 'Uma quantidade com sua taxa de mudança no tempo (suas derivadas).'
  },
  {
    id: 'ode-first-order-2',
    category: 'Formato',
    front: 'Qual é o formato de um modelo de crescimento populacional proporcional à população atual?',
    frontLatex: '\\frac{dP}{dt} = k \\cdot P',
    back: 'É uma EDO separável onde a taxa de crescimento é o produto de uma constante pela população.'
  },
  {
    id: 'ode-first-order-3',
    category: 'Definição',
    front: 'O que caracteriza uma EDO linear?',
    back: 'Não possui potências da função incógnita ou de suas derivadas, nem produtos entre elas.'
  },
  {
    id: 'ode-first-order-4',
    category: 'Técnica',
    front: 'Como se resolvem EDOs Separáveis?',
    back: 'Joga-se todos os termos dependentes de uma variável para um lado e os da outra para o outro, e então integra-se ambos os lados.',
    backLatex: '\\int g(y) dy = \\int f(x) dx'
  },
  {
    id: 'ode-first-order-5',
    category: 'Fórmula',
    front: 'Qual é a fórmula do Fator Integrante para a equação $y\' + P(x)y = Q(x)$?',
    frontLatex: 'y\' + P(x)y = Q(x)',
    back: 'O fator integrante é a exponencial da integral de $P(x)$.',
    backLatex: '\\mu(x) = e^{\\int P(x) dx}'
  },
  {
    id: 'ode-first-order-6',
    category: 'Teste',
    front: 'Qual a condição para uma EDO na forma $M(x,y)dx + N(x,y)dy = 0$ ser Exata?',
    frontLatex: 'M(x,y)dx + N(x,y)dy = 0',
    back: 'A derivada parcial de M em relação a y deve ser igual à derivada parcial de N em relação a x.',
    backLatex: '\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}'
  },
  {
    id: 'ode-first-order-7',
    category: 'Substituição',
    front: 'Qual substituição usar para uma EDO homogênea (onde funções têm o mesmo grau)?',
    back: 'A substituição $y = vx$, que transforma a equação em uma EDO separável.',
    backLatex: 'y = vx \\implies dy = v dx + x dv'
  },
  {
    id: 'ode-first-order-8',
    category: 'Transformação',
    front: 'Qual o formato padrão de uma EDO de Bernoulli e qual sua substituição resolutiva?',
    frontLatex: 'y\' + P(x)y = Q(x)y^n',
    back: 'É resolvida através da substituição $v = y^{1-n}$, transformando-a em uma linear.',
    backLatex: 'v = y^{1-n}'
  },
  {
    id: 'ode-first-order-9',
    category: 'Teorema',
    front: 'O que assegura o Teorema de Picard-Lindelöf (Existência e Unicidade)?',
    back: 'Garante que se a função $f(x,y)$ e $\\frac{\\partial f}{\\partial y}$ forem contínuas, o PVI tem solução única, ou seja, as curvas de solução nunca se cruzam.'
  }
]
