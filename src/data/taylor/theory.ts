import type { TheorySlide } from '@/types/theory'

export const taylorTheory: TheorySlide[] = [
  {
    id: 'taylor-t1',
    title: 'O Problema do Seno 🤔',
    points: [
      "Calculadoras **não sabem** o valor de sen(37°).",
      "Elas aproximam funções usando uma **soma infinita de polinômios**.",
      "Essa técnica é chamada de **Série de Taylor**."
    ],
    latex: '\\sin(x) \\approx x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\dots'
  },
  {
    id: 'taylor-t2',
    title: 'A Fórmula de Clonagem 🧬',
    points: [
      "Cria um **clone polinomial** de qualquer função f(x).",
      "O clone precisa ter as **mesmas derivadas** que a função original.",
      "A aproximação é feita **ao redor de um ponto 'a'**."
    ],
    latex: 'f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!} (x-a)^n'
  },
  {
    id: 'taylor-t3',
    title: 'Maclaurin: Taylor com Preguiça',
    points: [
      "Ocorre quando o ponto de clonagem é a **origem (a = 0)**.",
      "Ganha o nome especial de **Série de Maclaurin**.",
      "É a versão **mais limpa** e frequente nas provas!"
    ],
    latex: 'f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(0)}{n!} x^n'
  },
  {
    id: 'taylor-t4',
    title: 'Resto de Lagrange: O Preço do Erro',
    points: [
      "Parar a soma no grau N gera um **erro de aproximação**.",
      "O **Resto R_n(x)** nos diz exatamente esse ERRO máximo.",
      "É a **garantia de qualidade** do nosso clone polinomial."
    ],
    latex: 'R_n(x) = \\frac{f^{(n+1)}(c)}{(n+1)!} (x-a)^{n+1}'
  }
]
