import type { Flashcard } from '@/types/flashcard'

export const flashcards: Flashcard[] = [
  {
    id: 'taylor-1',
    category: 'Conceito',
    front: 'Para que serve uma Série de Taylor?',
    back: 'Para aproximar funções complexas usando uma soma infinita de polinômios.'
  },
  {
    id: 'taylor-2',
    category: 'Fórmula',
    front: 'Qual é a fórmula geral da Série de Taylor para uma função f(x) ao redor de x = a?',
    back: 'É um somatório envolvendo as derivadas de f(x) em a.',
    backLatex: '\\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!} (x-a)^n'
  },
  {
    id: 'taylor-3',
    category: 'Definição',
    front: 'O que é uma Série de Maclaurin?',
    back: 'É simplesmente uma Série de Taylor calculada ao redor da origem, ou seja, $a = 0$.'
  },
  {
    id: 'taylor-4',
    category: 'Fórmula',
    front: 'Qual a expansão de Maclaurin para $\\sin(x)$?',
    frontLatex: '\\sin(x)',
    back: 'É uma soma com os termos de potências ímpares e sinais alternados.',
    backLatex: 'x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\dots'
  },
  {
    id: 'taylor-5',
    category: 'Erro',
    front: 'O que é o Resto de Lagrange numa Série de Taylor?',
    back: 'É a fórmula que nos diz o erro máximo de aproximação se pararmos o somatório em um grau n.'
  },
  {
    id: 'taylor-6',
    category: 'Fórmula',
    front: 'Qual a fórmula para o Resto de Lagrange $R_n(x)$?',
    frontLatex: 'R_n(x)',
    back: 'Envolve a (n+1)-ésima derivada num ponto c entre x e a.',
    backLatex: '\\frac{f^{(n+1)}(c)}{(n+1)!} (x-a)^{n+1}'
  }
]
