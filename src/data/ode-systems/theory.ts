import type { TheorySlide } from '@/types/theory'

export const odeSystemsTheory: TheorySlide[] = [
  {
    id: 'sys-t1',
    title: 'O Efeito Borboleta 🦋',
    points: [
      "Na natureza, um sistema biológico ou físico isolado é uma ficção analítica. Em predador-presa, correntes, ou misturas de tanques acoplados, **as variáveis dependem intimamente do estado de todas as outras**.",
      "As derivadas de múltiplas funções interagem, revelando que a **taxa de variação de um compartimento (como x1) afeta criticamente o estado do outro compartimento (x2)** e vice-versa.",
      "Para decifrar o emaranhado de interdependências simultâneas de um Sistema Linear de EDOs, organizamos essas equações acopladas em uma elegante estrutura compacta unificada de **Vetores e Matrizes**."
    ],
    latex: '\\mathbf{X}^{\\prime} = \\begin{pmatrix} x_1\' \\\\ x_2\' \\end{pmatrix} = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} \\begin{pmatrix} x_1 \\\\ x_2 \\end{pmatrix}'
  },
  {
    id: 'sys-t2',
    title: 'O Casamento com a Álgebra Linear 🤝',
    points: [
      "No cerne dos Sistemas de EDOs repousa o Teorema Espectral. Escrevemos os coeficientes do sistema diferencial linear na matriz de transição fundamental, a **Matriz A**.",
      "A intuição da exponencial (e^{λt}) se generaliza para o espaço matricial. O desafio real reside exclusivamente na geometria vetorial de encontrar os **Autovalores (λ)** e seus respectivos **Autovetores (v)** associados.",
      "Esses pares de entidades algebraicas governam o comportamento do espaço inteiro: **eles ditam as direções e taxas imutáveis (frequências naturais) para onde as trajetórias vetoriais do sistema devem fluir**."
    ],
    latex: '\\mathbf{X}^{\\prime} = A\\mathbf{X}'
  },
  {
    id: 'sys-t3',
    title: 'O Wronskiano de Matrizes',
    points: [
      "Ao reunir todas as n vetores solução individuais (colunas linearmente combinadas), nós estruturamos o alicerce principal do sistema linear: a **Matriz Fundamental (Φ(t))**.",
      "A Base Fundamental deve, invariavelmente, cobrir o espaço inteiro da solução. Para atestar que esses vetores solução **não orbitam no mesmo subespaço obsoleto, ou seja, são lineares independentes**, testamos o seu determinante.",
      "Calculando o **Wronskiano**, ou seja, o rigoroso **determinante matricial, e provando que ele é inequivocamente diferente de zero em qualquer instante**, o selo da validade teórica da base independente está formalmente validado."
    ],
    latex: 'W(t) = \\det \\Phi(t) \\neq 0'
  },
  {
    id: 'sys-t4',
    title: 'Montando o Exodia (A Solução Homogênea) 🧩',
    points: [
      "O majestoso Princípio da Superposição dita que o formato absoluto de resposta a um sistema é composto pela ampla **Combinação Linear irrestrita das infinitas soluções individuais do espaço homogêneo**.",
      "Multiplicamos elegantemente cada **direção vetorial geométrica (autovetor, v)** pelo seu decaimento ou expansão exponencial natural temporal, parametrizada através de seu respectivo **fator de escala (autovalor, λ)**.",
      "A soma das n parcelas independentes unidas pelas n constantes arbitrárias (C1, C2...) edifica, assim, o tecido estrutural matricial da **solução geral unificada homogênea completa**."
    ],
    latex: '\\mathbf{X}_h(t) = C_1 \\mathbf{v_1} e^{\\lambda_1 t} + C_2 \\mathbf{v_2} e^{\\lambda_2 t}'
  },
  {
    id: 'sys-t5',
    title: 'Sistemas Não-Homogêneos',
    points: [
      "Quando o sistema de EDOs isolado é sujeito a uma perturbação imposta no tempo (um estímulo mecânico, choque ou voltagem geradora externa), surge inevitavelmente um **Vetor Força Externa, F(t)** matrizado à equação.",
      "Para resolver o colapso matricial, recarregamos na artilharia da generalização e usamos o método magistral infalível da integração: a **Variação dos Parâmetros** operada na sua mais formidável versão matricial contínua.",
      "A **Matriz Fundamental, Φ(t)** e a sua própria função matriz inversa atuam conjuntamente num núcleo de integral multiplicador de matrizes complexo, mesclando magistralmente a memória histórica de resposta do próprio sistema nativo acoplado com a instabilidade oriunda da nova **força pertubadora externa temporal**!"
    ],
    latex: '\\mathbf{X}_p(t) = \\Phi(t) \\int \\Phi^{-1}(t) F(t) dt'
  }
]
