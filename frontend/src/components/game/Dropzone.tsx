import { useDroppable } from '@dnd-kit/core'
import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import { MathRenderer } from '@/components/game/MathRenderer'

interface DropzoneProps {
  id: string
  isCorrect?: boolean | null
  droppedItem?: { id: string; text: string } | null
}

export function Dropzone({ id, isCorrect, droppedItem }: DropzoneProps) {
  const { isOver, setNodeRef } = useDroppable({
    id,
  })

  return (
    <motion.div
      ref={setNodeRef}
      animate={
        isCorrect === true
          ? { scale: [1, 1.05, 1], boxShadow: "0 0 30px rgba(74,222,128,0.5)", borderColor: "#4ade80" }
          : isCorrect === false
          ? { x: [-10, 10, -10, 10, 0], borderColor: "#f87171" }
          : {}
      }
      className={clsx(
        "min-h-[80px] w-full max-w-md mx-auto rounded-xl border-2 border-dashed flex items-center justify-center p-4 transition-colors",
        isOver && !droppedItem ? "border-primary bg-primary/10" : "border-white/20 bg-surface-light/30",
        isCorrect === true && "border-green-400 bg-green-400/20 text-green-400",
        isCorrect === false && "border-red-400 bg-red-400/20 text-red-400"
      )}
    >
      {droppedItem ? (
        <div className="font-body font-bold text-lg text-white">
          {/[\\]|[_^]/.test(droppedItem.text) ? <MathRenderer expression={droppedItem.text} /> : droppedItem.text}
        </div>
      ) : (
        <span className="text-text-muted font-body font-medium">Arraste a resposta aqui</span>
      )}
    </motion.div>
  )
}
