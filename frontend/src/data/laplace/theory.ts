import type { TheorySlide } from '@/types/theory'

export const laplaceTheory: TheorySlide[] = [
  {
    id: 'laplace-t1',
    title: 'O Portal Dimensional de Laplace 🌀',
    points: [
      "A Transformada de Laplace é um **operador integral linear** que age como um verdadeiro portal dimensional matemático.",
      "Ela transporta funções do **Domínio do Tempo (t)** para o **Domínio da Frequência Complexa (s)**, simplificando radicalmente sua estrutura.",
      "Seu núcleo de transformação, a exponencial **e^{-st}**, atua como um 'fator de amortecimento', garantindo que a integral convirja para funções de crescimento exponencial.",
      "O grande poder desse portal é **converter problemas de cálculo** (EDOs) em **problemas algébricos** clássicos."
    ],
    latex: '\\mathcal{L}\\{f(t)\\} = F(s) = \\int_{0}^{\\infty} e^{-st} f(t) dt'
  },
  {
    id: 'laplace-t2',
    title: 'Cálculo vira Álgebra Básica!',
    points: [
      "No Domínio (s), as complexas **derivadas no tempo** se transformam em simples **multiplicações algébricas pela variável s**.",
      "A transformação de uma derivada já **incorpora automaticamente as condições iniciais** (como y(0)), eliminando a necessidade de encontrá-las no final.",
      "Da mesma forma, as **integrais** no tempo se convertem elegantemente em **divisões por s** no domínio da frequência.",
      "Assim, resolver a EDO reduz-se a isolar algebricamente a função transformada **Y(s)**."
    ],
    latex: '\\mathcal{L}\\{y^{\\prime}\\} = sY(s) - y(0)'
  },
  {
    id: 'laplace-t3',
    title: 'Função Degrau de Heaviside (O Interruptor) 💡',
    points: [
      "A **Função Degrau Unitário, u_c(t)**, atua como um interruptor matemático perfeito para modelar fenômenos descontínuos, como circuitos ligando ou forças mecânicas abruptas.",
      "Ela vale estritamente **0 antes do instante t = c** e assume o valor **1 para todo instante após c**.",
      "No Domínio de Laplace, transladar uma função no tempo (multiplicando pelo degrau) equivale a multiplicá-la por uma **exponencial decrescente e^{-cs}**.",
      "Essa propriedade (Segundo Teorema do Deslocamento) é vital para resolver EDOs com funções forçantes fragmentadas."
    ],
    latex: '\\mathcal{L}\\{u_c(t)\\} = \\frac{e^{-cs}}{s}'
  },
  {
    id: 'laplace-t4',
    title: 'Função Impulso e o Delta de Dirac 🔨',
    points: [
      "A função **Delta de Dirac, δ(t-c)**, não é uma função clássica, mas uma *distribuição* que modela fenômenos instantâneos: uma martelada, uma força infinita aplicada em **tempo zero**.",
      "Apesar de ser infinitamente alta e estreita no instante c, sua propriedade mais notável é que a **área total sob o impulso é exatamente 1**.",
      "A Transformada de Laplace dessa 'martelada' é incrivelmente simples: resulta apenas na exponencial **e^{-cs}**, capturando perfeitamente o instante do impacto.",
      "Para sistemas mecânicos ou elétricos, o impulso Delta é fundamental para calcular a *resposta ao impulso* do sistema."
    ],
    latex: '\\mathcal{L}\\{\\delta(t-c)\\} = e^{-cs}'
  },
  {
    id: 'laplace-t5',
    title: 'Convolução (A Mistura das Histórias)',
    points: [
      "A transformada de um produto no Domínio (t) **não é** o produto das transformadas. Para multiplicar funções, precisamos da **Convolução (f * g)**.",
      "A convolução é uma integral definida que representa a **interseção contínua da história** da função f com o reflexo temporal da função g.",
      "No mundo do tempo, a convolução é uma operação complexa; contudo, o grande milagre de Laplace é que **a convolução no Domínio (t)** equivale à simples **multiplicação F(s)G(s)** no Domínio (s).",
      "Isso nos permite resolver EDOs nâo-homogêneas expressando a solução como a convolução da resposta do sistema com a força externa."
    ],
    latex: '\\mathcal{L}\\{(f*g)(t)\\} = F(s)G(s)'
  },
  {
    id: 'laplace-t6',
    title: 'A Viagem de Volta (Laplace Inversa) 🌌',
    points: [
      "Após resolver a equação no Domínio (s), utilizamos a **Transformada de Laplace Inversa** para retornar a solução verdadeira ao Domínio do Tempo (t).",
      "Como Y(s) geralmente é uma função racional complexa, aplicamos a expansão em **Frações Parciais** para decompô-la em termos simples.",
      "Com a função desmembrada, usamos a **Tabela de Transformadas de Laplace** de forma reversa, associando cada pedaço algébrico a funções trigonométricas, exponenciais ou polinomiais conhecidas.",
      "A beleza do método é que a resposta final, y(t), surge magicamente completa, já englobando as **condições de contorno iniciais**."
    ],
    latex: 'y(t) = \\mathcal{L}^{-1}\\{Y(s)\\}'
  },
  {
    id: 'laplace-t7',
    title: 'Teorema do Valor Inicial e Final 🏁',
    points: [
      "O **Teorema do Valor Inicial** permite descobrir o comportamento de uma função no instante inicial $t \\to 0^+$ analisando o limite da sua transformada $sF(s)$ para $s \\to \\infty$.",
      "O **Teorema do Valor Final** é a contraparte para o regime estacionário: prevemos o comportamento assintótico de $f(t)$ quando $t \\to \\infty$ tomando o limite de $sF(s)$ quando $s \\to 0$.",
      "Estes teoremas são extremamente poderosos na engenharia de controle, pois permitem prever a resposta do sistema nos extremos de tempo sem a necessidade de calcular a Transformada Inversa."
    ],
    latex: '\\lim_{t \\to \\infty} f(t) = \\lim_{s \\to 0} sF(s)'
  }
]
