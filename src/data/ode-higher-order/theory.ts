import type { TheorySlide } from '@/types/theory'

export const odeHigherOrderTheory: TheorySlide[] = [
  {
    id: 'ho-t1',
    title: 'EDOs Lineares Homogêneas',
    points: [
      "Avançando para ordens superiores, equações de Segunda Ordem introduzem a **Aceleração (y\'\')** matemática, essencial para entender a inércia e a força de restauração na física clássica.",
      "Uma EDO é dita **homogênea** quando o lado direito é estritamente zero, modelando sistemas autônomos fechados, como osciladores harmônicos, circuitos RLC não alimentados ou sistemas massa-mola soltos.",
      "A fundação teórica dessas EDOs repousa sobre a intuição genial de Euler: a função que é proporcional às suas próprias derivadas é a Exponencial. Assim, a solução procurada assume rigidamente a forma **e^{rt}**."
    ],
    latex: 'ay^{\\prime\\prime} + by^{\\prime} + cy = 0'
  },
  {
    id: 'ho-t2',
    title: 'A Equação Característica',
    points: [
      "Substituindo a 'resposta exponencial' **y = e^{rt}** na EDO, os termos exponenciais em comum são isolados, reduzindo o cálculo diferencial complexo a um simples **polinômio de grau n**.",
      "As derivadas transformam-se em **potências da raiz r**, gerando a Equação Característica, onde a busca pelas soluções torna-se um exercício clássico de aplicação da Fórmula de Bhaskara ou fatoração.",
      "A natureza das raízes (o Discriminante Δ) forja três mundos distintos: **Raízes Reais Distintas** (superamortecimento), **Raízes Reais Iguais** (amortecimento crítico) e o belo reino das **Raízes Complexas** (oscilação de seno e cosseno)."
    ],
    latex: 'ar^2 + br + c = 0'
  },
  {
    id: 'ho-t3',
    title: 'O Wronskiano e a Independência',
    points: [
      "O Teorema da Existência e Unicidade exige que EDOs de ordem *n* possuam exatamente **n soluções Linearmente Independentes** para formar o Conjunto Fundamental de Soluções.",
      "Para garantir que uma solução não seja mero múltiplo algébrico da outra (que elas abranjam o espaço vetorial de soluções), invocamos a matriz **Wronskiana**, construída pelas funções e suas derivadas graduais.",
      "Se e somente se o determinante **Wronskiano, W, for estritamente diferente de zero** em qualquer ponto do intervalo, provamos incontestavelmente a independência linear da nossa Base Fundamental!"
    ],
    latex: 'W(y_1, y_2) = \\det \\begin{pmatrix} y_1 & y_2 \\\\ y_1\' & y_2\' \\end{pmatrix} \\neq 0'
  },
  {
    id: 'ho-t4',
    title: 'Teorema de Abel 🧠',
    points: [
      "A fórmula matemática magistral de Abel revela que é possível conhecer o Wronskiano, W(x), **sem sequer conhecer as funções soluções (y1, y2)** da EDO, calculando-o diretamente dos coeficientes da equação.",
      "A identidade de Abel demonstra que o Wronskiano evolui governado exclusivamente por uma função exponencial da integral definida do coeficiente de arrasto, **-P(x)**.",
      "Uma conclusão teórica monumental é derivada disto: como a função exponencial nunca atinge o valor zero real, o Wronskiano ou é zero em todos os pontos (dependência linear fatal), ou **nunca cruza o eixo zero** (independência perene)."
    ],
    latex: 'W(x) = C e^{-\\int P(x) dx}'
  },
  {
    id: 'ho-t5',
    title: 'Não-Homogêneas: A Força Externa 💪',
    points: [
      "Quando o sistema é perturbado, a EDO linear abandona a homogeneidade; a equação se iguala a uma **função forçante externa F(t)** contínua e ativa (força motriz, voltagem aplicada, etc).",
      "Pela majestade da linearidade, a Estrutura Geral da solução separa a resposta ao caos em duas: a resposta natural do sistema (a **Solução Homogênea**) somada ao estado estacionário forçado (a **Solução Particular**).",
      "Assim, a Solução Geral final prova que **o universo das soluções lineares é aditivo**: a resposta total y(t) é a perfeitamente harmônica superposição das dinâmicas internas e perturbações externas."
    ],
    latex: 'y(t) = y_h(t) + y_p(t)'
  },
  {
    id: 'ho-t6',
    title: 'Coeficientes a Determinar',
    points: [
      "Uma técnica de 'reconhecimento de padrões'. Se a Força Externa, F(t), for simples (como polinômios, exponenciais ou senoides), sabemos pela teoria do cálculo que as derivadas **preservam suas formas funcionais**.",
      "O método exige construir corajosamente a Solução Particular **y_p** como uma combinação genérica da forma geométrica de F(t) e suas sucessivas derivadas, carregando coeficientes desconhecidos (A, B, C...).",
      "Em seguida, inserimos **y_p** de volta na EDO original e igualamos termos equivalentes em ambos os lados, resolvendo um trivial sistema linear algebraico para encontrar definitivamente e **descobrir os coeficientes**."
    ],
    latex: 'F(t) = e^{2t} \\implies y_p(t) = A e^{2t}'
  },
  {
    id: 'ho-t7',
    title: 'Variação dos Parâmetros',
    points: [
      "Quando a força externa F(t) escapa dos limites polinomiais ou exponenciais (como logaritmos ou tangentes), o 'Chute Educado' falha tragicamente. A **Variação dos Parâmetros** surge como o método generalizado analítico absoluto.",
      "Idealizado por Lagrange, a engenhosa premissa flexibiliza a Base Fundamental (y1, y2): substituímos as rígidas constantes da solução homogênea (C1, C2) por **funções dinâmicas de tempo u_1(t) e u_2(t)**.",
      "Através da construção de um delicado sistema, o determinante **Wronskiano, W**, assume a responsabilidade central de encontrar, através da integração estrita, o perfil exato dessas novas funções variáveis de parâmetros."
    ],
    latex: 'u_1^{\\prime} = \\frac{-y_2 F(t)}{W} \\quad \\text{e} \\quad u_2^{\\prime} = \\frac{y_1 F(t)}{W}'
  }
]
