import { useParams, Link } from 'react-router-dom'

export function PlaceholderActivity({ activity }: { activity: string }) {
  const { moduleSlug } = useParams<{ moduleSlug: string }>()

  return (
    <div className="min-h-screen pt-20 px-4 max-w-3xl mx-auto text-center">
      <h1 className="font-display text-primary text-xl capitalize">{activity}</h1>
      <p className="text-text-muted mt-4">
        Conteúdo do módulo <strong>{moduleSlug}</strong> em desenvolvimento...
      </p>
      <Link
        to={`/modules/${moduleSlug}`}
        className="inline-block mt-8 text-primary hover:underline"
      >
        ← Voltar ao módulo
      </Link>
    </div>
  )
}
