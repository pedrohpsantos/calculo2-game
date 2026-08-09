import type { Flashcard } from '@/types/flashcard'

export const flashcards: Flashcard[] = [
  {
    id: 'laplace-1',
    category: 'Definição',
    front: 'Qual a fórmula da Transformada de Laplace de uma função $f(t)$?',
    frontLatex: '\\mathcal{L}\\{f(t)\\}',
    back: 'É uma integral imprópria de zero ao infinito de $e^{-st} f(t) dt$.',
    backLatex: '\\int_{0}^{\\infty} e^{-st} f(t) dt'
  },
  {
    id: 'laplace-2',
    category: 'Propriedade',
    front: 'Como a Transformada de Laplace trata derivadas?',
    back: 'As derivadas se transformam em multiplicações por $s$ menos as condições iniciais. O cálculo vira álgebra.',
    backLatex: '\\mathcal{L}\\{y^{\\prime}\\} = sY(s) - y(0)'
  },
  {
    id: 'laplace-3',
    category: 'Função',
    front: 'O que é a Função Degrau de Heaviside $u_c(t)$?',
    back: 'Vale 0 antes do tempo $c$ e 1 depois, funcionando como um interruptor para modelos.'
  },
  {
    id: 'laplace-4',
    category: 'Fórmula',
    front: 'Qual a Transformada de Laplace do Degrau de Heaviside $u_c(t)$?',
    frontLatex: '\\mathcal{L}\\{u_c(t)\\}',
    back: 'Uma exponencial negativa no domínio $s$ dividida por $s$.',
    backLatex: '\\frac{e^{-cs}}{s}'
  },
  {
    id: 'laplace-5',
    category: 'Função',
    front: 'O que o Delta de Dirac (Função Impulso) representa?',
    back: 'Modela uma força infinita aplicada em zero segundos (um impacto), possuindo área igual a 1.'
  },
  {
    id: 'laplace-6',
    category: 'Teorema',
    front: 'Como se resolve o produto de duas transformadas de Laplace no domínio do tempo?',
    back: 'Usando a Convolução $(f * g)$, que é uma integral que mistura a história de $f$ com a reversa de $g$.',
    backLatex: '\\mathcal{L}\\{(f*g)(t)\\} = F(s)G(s)'
  },
  {
    id: 'laplace-7',
    category: 'Técnica',
    front: 'Como realizar a Transformada Inversa de Laplace de equações complexas?',
    back: 'Usualmente aplicam-se Frações Parciais para quebrar $Y(s)$ em partes mais simples e consulta-se a tabela.'
  }
]
