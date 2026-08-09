import type { TheorySlide } from '@/types/theory'

export const odeTheory: TheorySlide[] = [
  {
    id: 'ode-t1',
    title: 'A Máquina do Tempo da Natureza ⏳',
    points: [
      "Enquanto na álgebra clássica buscamos encontrar um número desconhecido, nas Equações Diferenciais Ordinárias (EDOs) nossa incógnita é uma **função inteira**. É a matemática do movimento e da mudança.",
      "Uma EDO é a linguagem fundamental da natureza: ela expressa diretamente a relação entre uma grandeza física e sua **taxa de variação instantânea (derivada)** ao longo de uma variável como o tempo.",
      "Para que uma EDO seja classificada como **Linear**, a função incógnita e suas derivadas não podem estar elevadas a potências, nem multiplicadas entre si, garantindo a validade do Princípio da Superposição."
    ],
    latex: '\\frac{dP}{dt} = k \\cdot P'
  },
  {
    id: 'ode-t2',
    title: 'EDOs Separáveis: Organizando o Caos',
    points: [
      "A técnica de **Separação de Variáveis** é a abordagem mais elegante e instintiva para EDOs de Primeira Ordem. Ela tira vantagem do poder da manipulação algébrica das diferenciais dy e dx.",
      "O método exige que você agrupe rigorosamente todos os termos dependentes de **y** junto a dy (no lado esquerdo), e todos os termos de **x** junto a dx (no lado direito).",
      "Ao conquistar essa separação limpa, o problema diferencial desmorona: basta aplicar a **integral indefinida simultaneamente aos dois lados** para recuperar a função solução, sem esquecer da constante de integração geral (C)."
    ],
    latex: '\\int g(y) dy = \\int f(x) dx'
  },
  {
    id: 'ode-t3',
    title: 'Fator Integrante: O Buff de Status ⚔️',
    points: [
      "Quando uma EDO Linear de 1ª Ordem está no formato padrão **y' + P(x)y = Q(x)** e não é separável, invocamos o poderoso **Fator Integrante, μ(x)**.",
      "Esta função multiplicadora especial, definida como a exponencial da integral de P(x), é injetada estrategicamente em toda a equação para 'forçar' a simplificação matemática.",
      "A mágica ocorre imediatamente: o lado esquerdo colapsa e se condensa perfeitamente na **Derivada do Produto** de [μ(x) · y], permitindo a solução com uma simples integração direta."
    ],
    latex: '\\mu(x) = e^{\\int P(x) dx}'
  },
  {
    id: 'ode-t4',
    title: 'EDOs Exatas e o Teste do Mago 🧙‍♂️',
    points: [
      "Apresentadas no formato diferencial de campos vetoriais: **M(x,y)dx + N(x,y)dy = 0**. Para resolver, a equação deve ser o diferencial exato (df) de uma superfície implícita.",
      "Para confirmar a 'exatidão', invocamos o **Teorema de Clairaut**: a derivada parcial de M em relação a y deve ser estritamente igual à derivada parcial de N em relação a x.",
      "Se o teste for verdadeiro, o objetivo passa a ser a reconstrução engenhosa da **Função Potencial original, f(x,y)**, integrando M e N, culminando na solução geral definida pela curva de nível f(x,y) = C."
    ],
    latex: '\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}'
  },
  {
    id: 'ode-t5',
    title: 'Substituição Homogênea (y = vx) 🔄',
    points: [
      "Quando a EDO resiste por não ser exata nem separável, mas suas funções componentes compartilham o mesmo 'grau' (são homogêneas), uma transformação de variável é a chave.",
      "Introduzimos uma nova variável dependente, **v**, fazendo a audaciosa substituição **y = vx**, o que força a aplicação da Regra do Produto: **dy = v dx + x dv**.",
      "Por um milagre algébrico garantido pelo cálculo, os termos complexos se cancelam e a EDO, agora descrita em termos de v e x, transforma-se infalivelmente em uma **Equação Separável** comum."
    ],
    latex: 'y = vx \\implies dy = v dx + x dv'
  },
  {
    id: 'ode-t6',
    title: 'Aplicações: Crescimento e Mistura ☕',
    points: [
      "As EDOs de 1ª ordem são as engrenagens de modelos vitais: elas governam desde a geometria do acúmulo financeiro com os **Juros Compostos**, até a termodinâmica da Lei do **Resfriamento de Newton**.",
      "Na química nuclear, modelam com precisão matemática o processo estatístico contínuo do decaimento radioativo, através do conceito de constante de **Meia-Vida**.",
      "No clássico e temido problema dos **Tanques de Mistura**, aplicamos diretamente a EDO linear considerando a variação do soluto como o fluxo que entra menos o fluxo que sai: **Taxa In - Taxa Out**."
    ],
    latex: '\\frac{dx}{dt} = \\text{Taxa}_{\\text{in}} - \\text{Taxa}_{\\text{out}}'
  },
  {
    id: 'ode-t7',
    title: 'EDOs de Bernoulli',
    points: [
      "Uma EDO de Bernoulli possui a forma **y' + P(x)y = Q(x)y^n**. Apesar de ser não-linear, ela esconde uma estrutura linear que pode ser revelada.",
      "A chave para resolvê-la é a engenhosa substituição **v = y^{1-n}**. Essa mudança de variável lineariza perfeitamente a equação.",
      "Após a substituição, a equação se transforma em uma EDO Linear de 1ª ordem padrão para a variável v, que pode ser resolvida usando o Fator Integrante."
    ],
    latex: 'v = y^{1-n}'
  },
  {
    id: 'ode-t8',
    title: 'Teorema de Existência e Unicidade (Picard-Lindelöf)',
    points: [
      "Antes de procurar a solução de um Problema de Valor Inicial (PVI), devemos nos perguntar: será que essa solução existe? Ela é única?",
      "O Teorema de Picard-Lindelöf garante que, se a função **f(x,y)** e sua derivada parcial em relação a **y** forem contínuas em um retângulo ao redor do ponto inicial, a existência e a unicidade estão garantidas.",
      "Isso significa que as curvas integrais (soluções) nunca se cruzam nesse domínio, estabelecendo uma ordem estrita e previsibilidade no comportamento dos sistemas determinísticos."
    ],
    latex: '\\frac{\\partial f}{\\partial y}'
  }
]
