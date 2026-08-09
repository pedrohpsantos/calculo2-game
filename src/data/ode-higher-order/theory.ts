import type { TheorySlide } from '@/types/theory'

export const odeHigherOrderTheory: TheorySlide[] = [
  {
    id: 'ho-t1',
    title: 'EDOs Lineares Homogêneas',
    points: [
      "Adicionam o conceito de **Aceleração (y\'\')** na equação.",
      "Uma EDO homogênea (igual a 0) descreve **molas e circuitos**.",
      "A solução assume o formato de uma exponencial **e^{rt}**."
    ],
    latex: 'ay^{\\prime\\prime} + by^{\\prime} + cy = 0'
  },
  {
    id: 'ho-t2',
    title: 'A Equação Característica',
    points: [
      "Transformamos a EDO em um **polinômio de 2º grau**.",
      "Trocamos as derivadas por **potências de r** e usamos Bhaskara.",
      "O valor do **Delta** cria 3 mundos diferentes de soluções."
    ],
    latex: 'ar^2 + br + c = 0'
  },
  {
    id: 'ho-t3',
    title: 'O Wronskiano e a Independência',
    points: [
      "EDOs de 2ª ordem precisam de **2 soluções independentes**.",
      "O **Wronskiano** testa a independência usando determinantes.",
      "Se **W ≠ 0**, você achou a Base Fundamental!"
    ],
    latex: 'W(y_1, y_2) = \\det \\begin{pmatrix} y_1 & y_2 \\\\ y_1\' & y_2\' \\end{pmatrix} \\neq 0'
  },
  {
    id: 'ho-t4',
    title: 'Teorema de Abel 🧠',
    points: [
      "Calcula o Wronskiano de forma **rápida e direta**.",
      "Usa apenas uma **exponencial da integral de -P(x)**.",
      "Prova que o Wronskiano **nunca cruza o eixo zero**."
    ],
    latex: 'W(x) = C e^{-\\int P(x) dx}'
  },
  {
    id: 'ho-t5',
    title: 'Não-Homogêneas: A Força Externa 💪',
    points: [
      "Ocorre quando a equação iguala a uma **Força F(t)** (não zero).",
      "A resposta é a soma da **Solução Homogênea** e **Particular**.",
      "O universo das soluções **gosta de somar as partes**."
    ],
    latex: 'y(t) = y_h(t) + y_p(t)'
  },
  {
    id: 'ho-t6',
    title: 'Coeficientes a Determinar',
    points: [
      "Chutamos o formato de **y_p** baseado em uma F(t) simples.",
      "Derivamos para tentar **descobrir os coeficientes**.",
      "É um **chute educado** que exige coeficientes constantes."
    ],
    latex: 'F(t) = e^{2t} \\implies y_p(t) = A e^{2t}'
  },
  {
    id: 'ho-t7',
    title: 'Variação dos Parâmetros',
    points: [
      "Usado para **funções difíceis** ou **coeficientes variáveis**.",
      "Troca as constantes por **funções u_1(t) e u_2(t)**.",
      "Usa o **Wronskiano** na fórmula para encontrar as funções!"
    ],
    latex: 'u_1^{\\prime} = \\frac{-y_2 F(t)}{W} \\quad \\text{e} \\quad u_2^{\\prime} = \\frac{y_1 F(t)}{W}'
  }
]
