import type { TheorySlide } from '@/types/theory'

export const laplaceTheory: TheorySlide[] = [
  {
    id: 'laplace-t1',
    title: 'O Portal Dimensional de Laplace 🌀',
    points: [
      "Cria um **Portal Dimensional** via Integral Imprópria.",
      "Transporta funções do **Mundo do Tempo (t)**.",
      "Leva-as para o **Mundo da Frequência (s)**."
    ],
    latex: '\\mathcal{L}\\{f(t)\\} = F(s) = \\int_{0}^{\\infty} e^{-st} f(t) dt'
  },
  {
    id: 'laplace-t2',
    title: 'Cálculo vira Álgebra Básica!',
    points: [
      "No Mundo (s), Derivadas viram **multiplicações por s**.",
      "Integrais se transformam em **divisões por s**.",
      "A EDO vira uma equação algébrica que se resolve **isolando Y(s)**."
    ],
    latex: '\\mathcal{L}\\{y^{\\prime}\\} = sY(s) - y(0)'
  },
  {
    id: 'laplace-t3',
    title: 'Função Degrau de Heaviside (O Interruptor) 💡',
    points: [
      "Modela circuitos **ligando e desligando**.",
      "Vale **0 antes** do tempo c e **1 depois**.",
      "No Mundo (s), o Degrau vira uma **exponencial multiplicando**."
    ],
    latex: '\\mathcal{L}\\{u_c(t)\\} = \\frac{e^{-cs}}{s}'
  },
  {
    id: 'laplace-t4',
    title: 'Função Impulso e o Delta de Dirac 🔨',
    points: [
      "Modela uma martelada: **força infinita** em **zero segundos**.",
      "O impacto tem **área igual a 1**.",
      "É a coisa mais **fácil de transformar** para Laplace."
    ],
    latex: '\\mathcal{L}\\{\\delta(t-c)\\} = e^{-cs}'
  },
  {
    id: 'laplace-t5',
    title: 'Convolução (A Mistura das Histórias)',
    points: [
      "Não se pode apenas inverter e multiplicar no tempo.",
      "A **Convolução (f * g)** resolve esse problema.",
      "É uma integral que mistura a história de **f** com a reversa de **g**."
    ],
    latex: '\\mathcal{L}\\{(f*g)(t)\\} = F(s)G(s)'
  },
  {
    id: 'laplace-t6',
    title: 'A Viagem de Volta (Laplace Inversa) 🌌',
    points: [
      "Usamos **Frações Parciais** para quebrar a equação de Y(s).",
      "Olhamos a **Tabela de Laplace** para voltar ao Mundo (t).",
      "A solução final já vem com as **condições iniciais embutidas**!"
    ],
    latex: 'y(t) = \\mathcal{L}^{-1}\\{Y(s)\\}'
  }
]
