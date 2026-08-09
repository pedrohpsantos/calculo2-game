import { Link } from 'react-router-dom'

export function Credits() {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-2xl mx-auto text-center">
      <h1 className="font-display text-primary text-2xl">Créditos</h1>
      <div className="mt-8 p-6 rounded-lg border border-white/10 bg-surface-light">
        <p className="text-text">
          Desenvolvido pelos alunos da UnB para a disciplina de Cálculo 2.
        </p>
        <p className="mt-4 text-text font-bold">
          Lucas De Paula Leal e Pedro Henrique Pereira Santos
        </p>
      </div>
      <Link to="/" className="inline-block mt-8 text-primary hover:underline">
        ← Voltar
      </Link>
    </div>
  )
}
