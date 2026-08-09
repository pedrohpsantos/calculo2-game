import type { Flashcard } from '@/types/flashcard'

export const flashcards: Flashcard[] = [
  {
    id: 'ode-systems-1',
    category: 'Conceito',
    front: 'Para que se utiliza Sistemas de EDOs?',
    back: 'Modelar variáveis que se influenciam mutuamente, como populações interativas (presa-predador) e redes complexas.'
  },
  {
    id: 'ode-systems-2',
    category: 'Formato',
    front: 'Como representar matricialmente um Sistema Linear de EDOs de primeira ordem?',
    back: 'Usando um vetor coluna de derivadas $\\mathbf{X}\'$ igual à matriz de coeficientes $A$ multiplicada pelo vetor $\\mathbf{X}$.',
    backLatex: '\\mathbf{X}^{\\prime} = A\\mathbf{X}'
  },
  {
    id: 'ode-systems-3',
    category: 'Matrizes',
    front: 'O que o Wronskiano de Matrizes e a Matriz Fundamental avaliam?',
    back: 'Avaliam a independência das soluções colocando os vetores solução lado a lado; garante-se independência se o determinante é não nulo.',
    backLatex: 'W(t) = \\det \\Phi(t) \\neq 0'
  },
  {
    id: 'ode-systems-4',
    category: 'Fórmula',
    front: 'Qual a forma geral da Solução Homogênea para um sistema $\\mathbf{X}\' = A\\mathbf{X}$?',
    back: 'Combinação linear conectando cada autovetor de $A$ à exponencial do seu respectivo autovalor no tempo.',
    backLatex: '\\mathbf{X}_h(t) = C_1 \\mathbf{v_1} e^{\\lambda_1 t} + C_2 \\mathbf{v_2} e^{\\lambda_2 t}'
  },
  {
    id: 'ode-systems-5',
    category: 'Técnica',
    front: 'O que rege a determinação da trajetória do sistema na Matriz $A$?',
    back: 'Os Autovalores e Autovetores de $A$, que ditam as direções para onde as forças (o sistema) fluem no plano.'
  },
  {
    id: 'ode-systems-6',
    category: 'Fórmula',
    front: 'Como solucionar Sistemas Não-Homogêneos que contêm força externa $F(t)$?',
    back: 'Usando a Matriz Fundamental $\\Phi(t)$ em uma variação dos parâmetros para matrizes.',
    backLatex: '\\mathbf{X}_p(t) = \\Phi(t) \\int \\Phi^{-1}(t) F(t) dt'
  },
  {
    id: 'ode-systems-7',
    category: 'Estabilidade',
    front: 'No Plano de Fase, o que indica que a origem é um Ponto de Sela (Saddle Point)?',
    back: 'A matriz possui autovalores reais com sinais opostos (um $\\lambda > 0$ e um $\\lambda < 0$).'
  },
  {
    id: 'ode-systems-8',
    category: 'Estabilidade',
    front: 'O que geram autovalores complexos puros ($\\lambda = \\pm i\\beta$) no Plano de Fase?',
    back: 'Geram um Centro (Center), indicando trajetórias fechadas e circulares em torno da origem, uma estabilidade neutra.',
    backLatex: '\\lambda = \\pm i\\beta'
  }
]
