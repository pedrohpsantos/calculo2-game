import type { TheorySlide } from '@/types/theory'

export const powerSeriesMethodTheory: TheorySlide[] = [
  {
    id: 'psm-t1',
    title: 'O Desespero Analítico 😱',
    points: [
      "Os métodos exatos clássicos falham quando enfrentamos EDOs Lineares onde **os coeficientes variam com a variável independente (x)**, como nas famosas equações de Bessel ou Legendre.",
      "O Teorema de Existência garante que há solução; portanto, apelamos para a força bruta analítica de convergência ao invés da geometria fechada.",
      "Chutamos corajosamente que a solução global é uma **Série de Potências infinita**, transformando o problema diferencial na busca algorítmica pelos coeficientes exatos $c_n$."
    ],
    latex: 'y(x) = \\sum_{n=0}^{\\infty} c_n x^n'
  },
  {
    id: 'psm-t2',
    title: 'Pontos Ordinários',
    points: [
      "O domínio do ponto (a) define o caminho: se a função limitante P(x) **não zerar** em x=a, ele é um Ponto **ORDINÁRIO**.",
      "Nesses pontos imperturbados, uma Série de Taylor comum garante uma convergência analítica rápida e suave para a solução.",
      "Ao substituir a série, o objetivo de manipulação dos índices se resume a igualar as potências para achar a **Relação de Recorrência** (uma fórmula que vincula c_n com c_{n-1})."
    ],
    latex: 'P(x)y^{\\prime\\prime} + Q(x)y^{\\prime} + R(x)y = 0'
  },
  {
    id: 'psm-t3',
    title: 'Pontos Singulares e Equação de Cauchy-Euler',
    points: [
      "Se avaliarmos e encontrarmos **P(0) = 0**, a equação entra em colapso matemático pontual: temos um **Ponto Singular**, onde as derivadas explodem para o infinito.",
      "O arquétipo clássico desses sistemas anômalos é a **Equação de Cauchy-Euler**, onde, para manter a homogeneidade dimensional, cada derivada de ordem *n* é compensada magicamente por uma potência equivalente **x^n**.",
      "Neste cenário perfeitamente equilibrado, a intuição nos diz que a solução mágica assume o formato de monômios simples: introduzimos **y = x^r** para extrair as frequências do expoente."
    ],
    latex: 'x^2 y^{\\prime\\prime} + \\alpha x y^{\\prime} + \\beta y = 0'
  },
  {
    id: 'psm-t4',
    title: 'Método de Frobenius: O Resgate 🦸‍♂️',
    points: [
      "Quando o ponto singular é ameno (Singular REGULAR), as singularidades não explodem agressivamente.",
      "O teorema de Frobenius prova que multiplicar a Série Inteira analítica por um ajustador **x elevado a 'r'** nos resgata do precipício.",
      "Essa modificação genial garante **pelo menos uma solução** linearmente independente estrita, permitindo contornar o ponto de falha."
    ],
    latex: 'y(x) = \\sum_{n=0}^{\\infty} c_n x^{n+r}'
  },
  {
    id: 'psm-t5',
    title: 'A Equação Indicial',
    points: [
      "Ao aplicarmos Frobenius, a primeira grande etapa computacional é forçar o agrupamento e o cancelamento dos **termos da menor potência de x**.",
      "Isso zera uma constante acompanhada de 'r', revelando uma elegante equação do 2º grau chamada de **Equação Indicial**.",
      "Suas **duas raízes (r1, r2)** determinam infalivelmente não apenas o formato das soluções, mas a própria existência de oscilações ou logaritmos."
    ],
    latex: 'r(r-1) + p_0 r + q_0 = 0'
  },
  {
    id: 'psm-t6',
    title: 'Funções Especiais: Bessel e Legendre',
    points: [
      "As clássicas Equações de Legendre e de Bessel são frequentemente solucionadas pelos métodos de Séries e de Frobenius, respectivamente.",
      "Como resultado, geram famílias de funções ortogonais tão vitais para a física matemática que ganham status de 'Funções Especiais'.",
      "Os Polinômios de Legendre $P_n(x)$ e as Funções de Bessel $J_\\nu(x)$ formam a base para o estudo de vibrações, calor e potenciais esféricos/cilíndricos."
    ],
    latex: 'x^2 y^{\\prime\\prime} + x y^{\\prime} + (x^2 - \\nu^2)y = 0 \\quad \\text{(Bessel)}'
  }
]
