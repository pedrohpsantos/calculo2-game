import type { TheorySlide } from '@/types/theory'

export const odeTheory: TheorySlide[] = [
  {
    id: 'ode-t1',
    title: 'A Máquina do Tempo da Natureza ⏳',
    points: [
      "Na Álgebra achamos um **número**, nas EDOs achamos uma **função escondida**.",
      "Relaciona uma quantidade com sua **mudança no tempo**.",
      "EDOs lineares **não têm potências** de y ou y'."
    ],
    latex: '\\frac{dP}{dt} = k \\cdot P'
  },
  {
    id: 'ode-t2',
    title: 'EDOs Separáveis: Organizando o Caos',
    points: [
      "Baseado na técnica de **Separação de Variáveis**.",
      "Jogue todos os **y** para a esquerda e **x** para a direita.",
      "Depois, basta **integrar os dois lados**."
    ],
    latex: '\\int g(y) dy = \\int f(x) dx'
  },
  {
    id: 'ode-t3',
    title: 'Fator Integrante: O Buff de Status ⚔️',
    points: [
      "Usado para equações lineares: **y\' + P(x)y = Q(x)**.",
      "O **Fator Integrante** multiplica a equação inteira.",
      "Transforma o lado esquerdo na **Derivada do Produto**."
    ],
    latex: '\\mu(x) = e^{\\int P(x) dx}'
  },
  {
    id: 'ode-t4',
    title: 'EDOs Exatas e o Teste do Mago 🧙‍♂️',
    points: [
      "Formato diferencial: **M(x,y)dx + N(x,y)dy = 0**.",
      "É EXATA se a **derivada de M em y** for igual a **N em x**.",
      "A solução é encontrar a **Função Potencial f(x,y)**."
    ],
    latex: '\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}'
  },
  {
    id: 'ode-t5',
    title: 'Substituição Homogênea (y = vx) 🔄',
    points: [
      "Para funções de mesmo grau que não são exatas nem separáveis.",
      "Usamos a substituição **y = vx**.",
      "A equação se transforma magicamente em uma **Equação Separável**."
    ],
    latex: 'y = vx \\implies dy = v dx + x dv'
  },
  {
    id: 'ode-t6',
    title: 'Aplicações: Crescimento e Mistura ☕',
    points: [
      "Modelam **Juros Compostos** e **Resfriamento de Newton**.",
      "Calculam decaimento de **Meia-Vida radioativa**.",
      "Resolvem problemas de **Tanques de Mistura** (Taxa In - Taxa Out)."
    ],
    latex: '\\frac{dx}{dt} = \\text{Taxa}_{\\text{in}} - \\text{Taxa}_{\\text{out}}'
  }
]
