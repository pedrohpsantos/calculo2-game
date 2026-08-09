import type { TheorySlide } from '@/types/theory'

export const taylorTheory: TheorySlide[] = [
  {
    id: 'taylor-t1',
    title: 'O Problema do Seno 🧮',
    points: [
      "Os computadores e processadores numéricos modernos **não têm inteligência inata** para calcular o valor de funções transcendentais diretas analíticas complexas absolutas, como o log(15) ou o exato e transcendental valor sen(37°).",
      "Máquinas dominam unicamente aritmética básica primária formidável limpa: somas ordinais e multiplicações simples diretas.",
      "Para transpor e ensinar essas operações de alto nível, os grandes analistas clássicos formaram um método monumental capaz de reescrever as funções trigonométricas e as exponenciais misteriosas de forma que as máquinas compreendessem, modelando-as como **uma soma infinita expansiva de polinômios: a reverenciada Série de Taylor**."
    ],
    latex: '\\sin(x) \\approx x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\dots'
  },
  {
    id: 'taylor-t2',
    title: 'A Fórmula de Clonagem 🧬',
    points: [
      "A grandiosidade da Série de Taylor é sua capacidade majestosa de criar um autêntico e **impecável clone matemático polinomial universal** perfeitamente equivalente que imita de forma absoluta e idêntica a função analítica mãe original alvo f(x).",
      "Para que o clone genético de forma polinomial obedeça e emule estritamente com exata perfeição a curva original nos arredores espaciais, impõe-se a regra de construção estruturadora analítica central de clonagem: **o clone avaliado tem que possuir obrigatoriamente as exatas exatas derivadas** que a função mestre exibe.",
      "Ao forçarmos o emparelhamento preciso milimétrico progressivo infinito e progressivo de suas respectivas inclinações de derivadas num determinado **ponto ancoradouro base central referencial chamado de 'a'**, nós amarramos rigidamente a exata forma aproximada em torno daquele espaço topológico contínuo focalizando rigorosamente a precisão."
    ],
    latex: 'f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!} (x-a)^n'
  },
  {
    id: 'taylor-t3',
    title: 'Maclaurin: Taylor com Preguiça',
    points: [
      "No universo vasto de possibilidades referenciais disponíveis limitadas pelas amarrações estruturadoras de clonagem funcional descritiva matemática analítica pontual central referencial livre, um ponto único estratégico e simplificador de cálculos ganha destaque óbvio: a avaliação exata limpa e isolada no zero neutro estrito do plano matemático cartesiano: **a formidável e referenciada e simples origem (a = 0)**.",
      "As expressões estruturais derivadas desta origem pura foram formalizadas escocês visionário formidável genial Colin Maclaurin que cunhou seu nome neste ramo especial particular do vasto Teorema clássico de Taylor.",
      "Essa ancoragem anula milagrosamente a subtração deslocadora espacial analítica de referência de '(x-a)^n' reduzindo perfeitamente a equação e formando a bela, limpa e elegante clássica expressiva notação exata e direta e objetiva expressiva referenciada **Série expandida analítica de Maclaurin, a favorita analítica formal estruturada** e cobrada amplamente limpa nos cadernos básicos de cálculo."
    ],
    latex: 'f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(0)}{n!} x^n'
  },
  {
    id: 'taylor-t4',
    title: 'Resto de Lagrange: O Preço do Erro',
    points: [
      "A dura e irrevogável verdade analítica estruturadora absoluta do Teorema polinomial infinito convergente de Taylor decreta exaustivamente rigorosamente categoricamente puramente formalmente que nós computadores humanos reais pragmáticos e não infinitos finitos reais finitos rigorosos faticamente reais só dispomos de recursos reais limitados e não iteramos ao infinito analítico.",
      "Parar a maravilhosa progressão formadora polinomial contínua num exato e arbitrário escolhido passo pontual ou grau polinomial discreto numérico limite máximo estipulado de avaliação polinomial limite iterativa estrita iterativa limite de limite polinomial avaliação numérico **N finito fixado analítico numérico rigoroso numérico analítico** inevitavelmente inevitavelmente provoca e resulta e introduz e gera e instaura um incontornável limite resquício limitador e gerador de resíduo limitante indesejado um incontornável analítico estrito desvio um fatal inevitável provável e conhecido desvio rigoroso formidável um esperado incontornável gerado estrutural resíduo provável gerado limite resquício desviante o formador perfeitamente inquestionável inevitavelmente inegável clássico o incontornável indesejado e famoso **Erro** numérico.",
      "O gênio rigoroso matemático e analítico brilhante analista analítico inquestionável formidável e puro genial formidável Joseph-Louis Lagrange projetou analiticamente a monumental estrutura matemática capaz de prender enquadrar estritamente aprisionar e aprisionar modelar aprisionar o Erro analiticamente exata aprisionando estritamente estimar e parametrizar o e controlar e medir prever mensurar controlar o erro aprisionado o limitante do famoso puro do analítico limitador analítico do famoso e exato **Resto analítico resíduo R_n(x)**, que assegura que o nosso erro é rigorosamente limitado, sendo o controle de qualidade do nosso clone polinomial aproximado."
    ],
    latex: 'R_n(x) = \\frac{f^{(n+1)}(c)}{(n+1)!} (x-a)^{n+1}'
  }
]
