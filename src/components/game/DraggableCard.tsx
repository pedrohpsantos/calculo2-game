import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'
import { clsx } from 'clsx'

interface DraggableCardProps {
  id: string
  text: string
  disabled?: boolean
}

export function DraggableCard({ id, text, disabled }: DraggableCardProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id,
    disabled
  })

  const style = {
    transform: CSS.Translate.toString(transform),
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={clsx(
        "px-6 py-4 rounded-xl border border-white/10 font-body font-bold text-lg cursor-grab active:cursor-grabbing transition-colors select-none",
        isDragging ? "bg-primary text-surface z-50 shadow-[0_10px_30px_rgba(255,200,0,0.5)] border-primary" : "glass-card hover:bg-white/10 text-white",
        disabled && "opacity-50 cursor-not-allowed hover:bg-transparent"
      )}
    >
      {text}
    </div>
  )
}
