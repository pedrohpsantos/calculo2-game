import type { Flashcard } from '@/types/flashcard'

export const flashcards: Flashcard[] = [
  {
    id: 'ode-higher-order-1',
    category: 'Definição',
    front: 'O que descrevem EDOs Lineares Homogêneas de ordem 2?',
    frontLatex: 'ay^{\\prime\\prime} + by^{\\prime} + cy = 0',
    back: 'Sistemas que possuem aceleração ($y\'\'$), como sistemas massa-mola ou circuitos elétricos.'
  },
  {
    id: 'ode-higher-order-2',
    category: 'Técnica',
    front: 'O que é a Equação Característica de uma EDO de ordem 2?',
    back: 'Transforma as derivadas numa equação algébrica polinomial substituindo as derivadas por potências de $r$.',
    backLatex: 'ar^2 + br + c = 0'
  },
  {
    id: 'ode-higher-order-3',
    category: 'Teste',
    front: 'Para que serve o Wronskiano?',
    back: 'Testar a independência linear de duas ou mais soluções usando um determinante. Se $W \\neq 0$, formam uma Base Fundamental.',
    backLatex: 'W(y_1, y_2) = \\det \\begin{pmatrix} y_1 & y_2 \\\\ y_1\' & y_2\' \\end{pmatrix}'
  },
  {
    id: 'ode-higher-order-4',
    category: 'Teorema',
    front: 'O que diz o Teorema de Abel sobre o Wronskiano?',
    back: 'Permite calcular o Wronskiano rapidamente usando apenas uma exponencial da integral de $-P(x)$, provando que $W$ nunca cruza o zero.',
    backLatex: 'W(x) = C e^{-\\int P(x) dx}'
  },
  {
    id: 'ode-higher-order-5',
    category: 'Fórmula',
    front: 'Como se compõe a solução geral de uma EDO Não-Homogênea?',
    back: 'A solução geral é a soma da Solução Homogênea (ignorando a força externa) com a Solução Particular.',
    backLatex: 'y(t) = y_h(t) + y_p(t)'
  },
  {
    id: 'ode-higher-order-6',
    category: 'Técnica',
    front: 'No Método dos Coeficientes a Determinar, como a Solução Particular $y_p$ é encontrada?',
    back: 'Gera-se um chute educado para $y_p$ com coeficientes a determinar baseados no formato da função externa $F(t)$.'
  },
  {
    id: 'ode-higher-order-7',
    category: 'Fórmula',
    front: 'Quais as derivadas dos parâmetros na Variação dos Parâmetros?',
    back: 'Expressam as derivadas $u_1\'$ e $u_2\'$ em função de $y_1$, $y_2$, $F(t)$ e o Wronskiano.',
    backLatex: 'u_1^{\\prime} = \\frac{-y_2 F(t)}{W} \\quad \\text{e} \\quad u_2^{\\prime} = \\frac{y_1 F(t)}{W}'
  },
  {
    id: 'ode-higher-order-8',
    category: 'Técnica',
    front: 'Qual é o pressuposto fundamental do método de Redução de Ordem?',
    back: 'Que uma segunda solução linearmente independente pode ser obtida multiplicando-se a solução conhecida por uma função $v(t)$.',
    backLatex: 'y_2(t) = v(t) y_1(t)'
  },
  {
    id: 'ode-higher-order-9',
    category: 'Física',
    front: 'O que caracteriza matematicamente a Ressonância em um sistema massa-mola?',
    back: 'Ocorre quando a frequência da força externa coincide com a frequência natural do sistema, levando a soluções particulares multiplicadas por $t$.'
  }
]
