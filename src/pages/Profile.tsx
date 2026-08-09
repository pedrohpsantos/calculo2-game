import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { UserCircle, Trophy, Crown, Target, Zap, BookOpen, Footprints, Share2, ArrowLeft, Save, RefreshCw, Medal } from 'lucide-react'
import { useAuthStore } from '@/store/authStore'
import { useProgressStore } from '@/store/progressStore'
import { ACHIEVEMENTS, getUnlockedAchievements, Achievement } from '@/utils/achievements'
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
    } catch (error) {
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
      } catch (err) {
        console.log('Compartilhamento cancelado ou falhou', err)
      }
    } else {
      // Fallback para Twitter
      const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.origin)}`
      window.open(twitterUrl, '_blank')
    }
  }

  return (
    <div className="min-h-screen bg-brand-900 text-brand-50 p-4 font-sans selection:bg-brand-500/30 pt-20">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={() => navigate('/')} className="px-2">
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <h1 className="text-3xl font-pixel text-yellow-400">Meu Perfil</h1>
        </div>

        {/* Profile Card */}
        <div className="bg-brand-800/50 p-6 rounded-xl border border-brand-700/50 backdrop-blur-sm grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          <div className="flex flex-col items-center gap-4">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-brand-700 bg-brand-900 shadow-xl relative group">
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
               <Button onClick={handleRandomAvatar} variant="secondary" className="text-xs py-1 px-3">
                 Trocar Avatar
               </Button>
            )}
          </div>

          <div className="col-span-1 md:col-span-2 space-y-4">
            <div>
              <label className="block text-sm font-medium text-brand-300 mb-1">Nome de Exibição</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={isAnonymous}
                  className="flex-1 bg-brand-900 border border-brand-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-brand-500 disabled:opacity-50"
                />
                {!isAnonymous && (
                  <Button onClick={handleSave} disabled={isSaving} className="gap-2">
                    <Save className="w-4 h-4" />
                    {isSaving ? 'Salvando...' : 'Salvar'}
                  </Button>
                )}
              </div>
              {isAnonymous && <p className="text-xs text-brand-400 mt-2">Visitantes não podem editar o perfil. Faça login para personalizar!</p>}
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-brand-700/50">
              <div className="bg-brand-900/50 p-4 rounded-lg flex items-center gap-3">
                <Trophy className="w-8 h-8 text-yellow-400" />
                <div>
                  <p className="text-sm text-brand-400 font-medium">Nível</p>
                  <p className="text-2xl font-bold font-pixel">{user?.level || 1}</p>
                </div>
              </div>
              <div className="bg-brand-900/50 p-4 rounded-lg flex items-center gap-3">
                <Medal className="w-8 h-8 text-blue-400" />
                <div>
                  <p className="text-sm text-brand-400 font-medium">XP Total</p>
                  <p className="text-2xl font-bold font-pixel">{user?.total_score || 0}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h2 className="text-2xl font-pixel text-brand-200 mb-6 flex items-center gap-3">
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
                      ? "bg-brand-800/80 border-brand-600 shadow-[0_0_15px_rgba(255,255,255,0.1)]" 
                      : "bg-brand-900/50 border-brand-800/50 opacity-60 grayscale"
                  )}
                >
                  <div className="flex gap-4 items-start">
                    <div className={cn("p-3 rounded-lg", isUnlocked ? "bg-brand-900 shadow-inner" : "bg-brand-800")}>
                      <Icon className={cn("w-8 h-8", isUnlocked ? ach.color : "text-brand-500")} />
                    </div>
                    <div className="flex-1">
                      <h3 className={cn("font-bold", isUnlocked ? "text-white" : "text-brand-400")}>
                        {ach.title}
                      </h3>
                      <p className="text-xs text-brand-300 mt-1 leading-relaxed">
                        {ach.description}
                      </p>
                    </div>
                  </div>
                  
                  {isUnlocked && (
                    <button 
                      onClick={() => handleShare(ach)}
                      className="absolute top-2 right-2 p-2 text-brand-400 hover:text-white bg-brand-900/50 hover:bg-brand-700 rounded-full transition-colors"
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
    </div>
  )
}
