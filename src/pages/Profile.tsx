import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Trophy, Crown, Target, Zap, BookOpen, Footprints, Share2, Save, RefreshCw, Medal, LogOut } from 'lucide-react'
import { useAuthStore } from '@/store/authStore'
import { useProgressStore } from '@/store/progressStore'
import { ACHIEVEMENTS, getUnlockedAchievements } from '@/utils/achievements'
import type { Achievement } from '@/utils/achievements'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const ICON_MAP: Record<string, React.ElementType> = {
  'Footprints': Footprints,
  'BookOpen': BookOpen,
  'Target': Target,
  'Crown': Crown,
  'Zap': Zap,
}

export function Profile() {
  const navigate = useNavigate()
  const { user, isAnonymous, updateProfile } = useAuthStore()
  const { progress } = useProgressStore()
  
  const [name, setName] = useState(user?.display_name || 'Estudante')
  const [avatarUrl, setAvatarUrl] = useState(user?.avatar_url || `https://api.dicebear.com/9.x/pixel-art/svg?seed=${user?.id || 'anon'}`)
  const [isSaving, setIsSaving] = useState(false)
  const [unlockedIds, setUnlockedIds] = useState<string[]>([])

  useEffect(() => {
    setUnlockedIds(getUnlockedAchievements(progress))
  }, [progress])

  const handleSave = async () => {
    if (isAnonymous) {
      alert('Faça login para salvar suas configurações na nuvem!')
      return
    }
    try {
      setIsSaving(true)
      await updateProfile({ display_name: name, avatar_url: avatarUrl })
    } catch {
      alert('Erro ao salvar perfil.')
    } finally {
      setIsSaving(false)
    }
  }

  const handleRandomAvatar = () => {
    const seed = Math.random().toString(36).substring(7)
    setAvatarUrl(`https://api.dicebear.com/9.x/pixel-art/svg?seed=${seed}`)
  }

  const handleShare = async (ach: Achievement) => {
    const text = `Acabei de desbloquear a medalha '${ach.title}' no jogo Cálculo 2! 🏆 Venha aprender equações diferenciais jogando!`
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Conquista em Cálculo 2',
          text: text,
          url: window.location.origin
        })
      } catch {
        // Compartilhamento cancelado pelo usuário
      }
    } else {
      const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.origin)}`
      window.open(twitterUrl, '_blank')
    }
  }

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 max-w-4xl mx-auto space-y-8">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-display text-primary">Meu Perfil</h1>
        {!isAnonymous && (
          <Button 
            variant="danger" 
            size="sm"
            is3D={false}
            onClick={async () => {
              await useAuthStore.getState().logout()
              navigate('/')
            }}
            className="gap-2"
          >
            <LogOut className="w-4 h-4" />
            Sair da Conta
          </Button>
        )}
      </div>

      {/* Profile Card */}
      <div className="glass-card p-6 rounded-2xl grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        
        <div className="flex flex-col items-center gap-4">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 bg-surface shadow-xl relative group">
            <img src={avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
            <button 
              onClick={handleRandomAvatar}
              className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              title="Gerar Novo Avatar"
            >
              <RefreshCw className="w-8 h-8 text-white" />
            </button>
          </div>
          {!isAnonymous && (
             <Button onClick={handleRandomAvatar} variant="secondary" size="sm" is3D={false} className="text-xs">
               Trocar Avatar
             </Button>
          )}
        </div>

        <div className="col-span-1 md:col-span-2 space-y-4">
          <div>
            <label className="block text-sm font-medium text-text-muted mb-1">Nome de Exibição</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={isAnonymous}
                className="flex-1 bg-surface border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary disabled:opacity-50 min-w-0"
              />
              {!isAnonymous && (
                <Button onClick={handleSave} disabled={isSaving} size="sm" is3D={false} className="gap-2 shrink-0">
                  <Save className="w-4 h-4" />
                  {isSaving ? 'Salvando...' : 'Salvar'}
                </Button>
              )}
            </div>
            {isAnonymous && <p className="text-xs text-text-muted mt-2">Visitantes não podem editar o perfil. Faça login para personalizar!</p>}
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
            <div className="bg-surface/80 p-4 rounded-lg flex items-center gap-3">
              <Trophy className="w-8 h-8 text-yellow-400" />
              <div>
                <p className="text-sm text-text-muted font-medium">Nível</p>
                <p className="text-2xl font-bold font-display">{user?.level || 1}</p>
              </div>
            </div>
            <div className="bg-surface/80 p-4 rounded-lg flex items-center gap-3">
              <Medal className="w-8 h-8 text-blue-400" />
              <div>
                <p className="text-sm text-text-muted font-medium">XP Total</p>
                <p className="text-2xl font-bold font-display">{user?.total_score || 0}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div>
        <h2 className="text-2xl font-display text-white mb-6 flex items-center gap-3">
          <Crown className="w-6 h-6 text-yellow-400" />
          Conquistas e Medalhas
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ACHIEVEMENTS.map((ach) => {
            const isUnlocked = unlockedIds.includes(ach.id)
            const Icon = ICON_MAP[ach.icon] || Trophy

            return (
              <motion.div
                key={ach.id}
                whileHover={{ scale: 1.02 }}
                className={cn(
                  "p-4 rounded-xl border relative overflow-hidden transition-all duration-300",
                  isUnlocked 
                    ? "glass-card border-primary/30 shadow-[0_0_15px_rgba(255,200,0,0.1)]" 
                    : "bg-surface-light/20 border-white/5 opacity-60 grayscale"
                )}
              >
                <div className="flex gap-4 items-start">
                  <div className={cn("p-3 rounded-lg", isUnlocked ? "bg-surface shadow-inner" : "bg-surface-light/30")}>
                    <Icon className={cn("w-8 h-8", isUnlocked ? ach.color : "text-text-muted")} />
                  </div>
                  <div className="flex-1">
                    <h3 className={cn("font-bold", isUnlocked ? "text-white" : "text-text-muted")}>
                      {ach.title}
                    </h3>
                    <p className="text-xs text-text-muted mt-1 leading-relaxed">
                      {ach.description}
                    </p>
                  </div>
                </div>
                
                {isUnlocked && (
                  <button 
                    onClick={() => handleShare(ach)}
                    className="absolute top-2 right-2 p-2 text-text-muted hover:text-white bg-surface/50 hover:bg-surface-lighter rounded-full transition-colors"
                    title="Compartilhar"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>

    </div>
  )
}
