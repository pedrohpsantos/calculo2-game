import katex from 'katex'
import { useRef, useEffect } from 'react'

interface MathRendererProps {
  expression: string
  display?: boolean
  className?: string
}

export function MathRenderer({ expression, display = false, className }: MathRendererProps) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (ref.current) {
      katex.render(expression, ref.current, {
        throwOnError: false,
        displayMode: display,
      })
    }
  }, [expression, display])

  return <span ref={ref} className={className} />
}
