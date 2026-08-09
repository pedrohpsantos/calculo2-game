import katex from 'katex'

export function renderLatex(expression: string): string {
  return katex.renderToString(expression, {
    throwOnError: false,
    displayMode: false,
  })
}

export function renderLatexBlock(expression: string): string {
  return katex.renderToString(expression, {
    throwOnError: false,
    displayMode: true,
  })
}
