import type { TheorySlide } from '@/types/theory'

export const seriesTheory: TheorySlide[] = [
  {
    id: 'series-t1',
    title: 'O Paradoxo de Zenão 🐢',
    points: [
      "O antigo paradoxo grego desafiava o movimento: para chegar ao fim, você deve primeiro cruzar a metade do caminho (1/2), depois a metade do que falta (1/4), depois 1/8, e assim sucessivamente.",
      "A intuição diz que somar infinitos pedaços deveria resultar no infinito, tornando o movimento impossível. Porém, Zenão esbarrou sem saber no conceito do cálculo de limite.",
      "A matemática moderna resolve o paradoxo provando que **uma soma rigorosamente infinita de parcelas que diminuem rápido o suficiente pode, de fato, convergir perfeitamente para um valor numérico finito e exato**."
    ],
    latex: '\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + ... = 1'
  },
  {
    id: 'series-t2',
    title: 'Série Geométrica: A Multiplicação Infinita',
    points: [
      "A Série Geométrica é a estrutura fundacional do estudo de séries. Nela, cada termo subsequente é gerado multiplicando o anterior por uma taxa constante chamada **razão (r)**.",
      "O comportamento da série depende unicamente do módulo da razão. Se **|r| < 1**, os termos encolhem de forma exponencial e a série soma até um valor perfeitamente previsível e finito: **a / (1-r)**.",
      "Entretanto, se a taxa multiplicativa for forte demais, ou seja, **|r| ≥ 1**, os termos não diminuem em direção ao zero, e a soma expande implacavelmente, divergindo para o infinito."
    ],
    latex: '\\sum_{n=0}^{\\infty} a r^n = \\frac{a}{1-r}'
  },
  {
    id: 'series-t3',
    title: 'A Decepção Harmônica 💔',
    points: [
      "A Série Harmônica, que soma os recíprocos dos números naturais (1 + 1/2 + 1/3 + ...), é a maior armadilha intuitiva do cálculo.",
      "Embora os termos (1/n) nitidamente fiquem cada vez menores e eventualmente tendam a zero, eles **não diminuem rápido o suficiente** para frear o acúmulo da soma.",
      "A longo prazo matemático, o somatório continua crescendo implacavelmente e lentamente sem encontrar um teto numérico limitante absoluto. Resultado final: a série **diverge**."
    ],
    latex: '\\sum_{n=1}^{\\infty} \\frac{1}{n} = \\infty'
  },
  {
    id: 'series-t4',
    title: 'Teste da Integral 📐',
    points: [
      "Este elegante teste matemático cria uma ponte perfeita entre as ferramentas do Cálculo Discreto e Contínuo.",
      "Ele exige que traduzamos os termos da série discreta na representação gráfica de uma função **contínua, positiva e decrescente**.",
      "A regra é implacável: calcular o limite superior da série equivale perfeitamente a calcular a **área sob a curva através de uma integral imprópria**. Ambas sempre convergirão juntas ou divergirão juntas."
    ],
    latex: '\\int_1^{\\infty} f(x)dx \\text{ converge } \\iff \\sum_{n=1}^{\\infty} a_n \\text{ converge}'
  },
  {
    id: 'series-t5',
    title: 'Testes de Comparação 🔍',
    points: [
      "Muitas vezes avaliar diretamente a série é impossível; aplicamos então a técnica de **comparação de limites numéricos no infinito**.",
      "Confrontamos nossa série misteriosa diretamente com a anatomia de uma série de comportamento perfeitamente conhecido (como Séries P ou Geométricas).",
      "Pela lógica do encapsulamento: **se é sempre menor que uma série convergente domada, ela converge**. Se é **maior que uma série explosiva divergente, ela diverge inevitavelmente**."
    ],
    latex: '\\lim_{n \\to \\infty} \\frac{a_n}{b_n} = c > 0'
  },
  {
    id: 'series-t6',
    title: 'A Dupla Imbatível: Razão e Raiz ⚡',
    points: [
      "Os célebres Testes da Razão (d'Alembert) e da Raiz (Cauchy) procuram o 'DNA geométrico' oculto na formação da série.",
      "No Teste da Razão, extraímos a essência avaliando o limite no infinito de **|a_{n+1} / a_n|**. No Teste da Raiz, avaliamos o limite da **raiz n-ésima** do enésimo termo.",
      "A lei universal: se a taxa dominante limitante L **< 1, ela converge absolutamente**. Se L **> 1, ela escapa para o infinito**. Se for cravado L = 1, a precisão analítica **falha inconclusivamente**."
    ],
    latex: 'L = \\lim_{n \\to \\infty} \\left| \\frac{a_{n+1}}{a_n} \\right|'
  },
  {
    id: 'series-t7',
    title: 'Séries Alternadas e o Caos (+ - + -)',
    points: [
      "Uma complexa subtrama de convergência surge nas Séries Alternadas, onde os termos balançam eternamente somando e subtraindo de forma pendular ininterrupta.",
      "O Teorema rigoroso de Leibniz impõe a regra final: basta que as parcelas puramente numéricas absolutas independentes estejam descendo monotonicamente ativas limitando-se **gradualmente até 0**.",
      "Séries assim possuem uma sobreposição milagrosa de sinais opostos restritivos perfeitamente perdoando a divergência original dos termos, garantindo então a chamada salvadora **Convergência Condicional**."
    ],
    latex: '\\sum_{n=1}^{\\infty} (-1)^{n-1} b_n'
  },
  {
    id: 'series-t8',
    title: 'Série p e Teste de Comparação por Limite',
    points: [
      "A **Série p** é a métrica padrão para testes: converge estritamente para p > 1 e diverge para p ≤ 1.",
      "O **Teste de Comparação por Limite** avalia o limite de a_n / b_n no infinito para confrontar uma série com uma métrica conhecida.",
      "Se o limite resultar em um valor finito e positivo c > 0, as duas séries compartilham a mesma natureza: ou ambas convergem, ou ambas divergem."
    ],
    latex: '\\lim_{n \\to \\infty} \\frac{a_n}{b_n} = c \\quad (c > 0)'
  },
  {
    id: 'series-t9',
    title: 'Teste da Raiz de Cauchy',
    points: [
      "Um teste poderoso e complementar ao Teste da Razão é o **Teste da Raiz de Cauchy**, ideal para termos elevados a potências de n.",
      "O método consiste em extrair o limite no infinito da raiz enésima do valor absoluto do enésimo termo.",
      "Se o limite L < 1, a série converge absolutamente. Se L > 1, diverge. Se L = 1, o teste falha em concluir algo."
    ],
    latex: 'L = \\lim_{n \\to \\infty} \\sqrt[n]{|a_n|}'
  }
]
