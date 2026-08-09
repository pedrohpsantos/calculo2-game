import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Trophy, ArrowLeft, UserCircle, Medal } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import type { UserProfile } from '@/store/authStore'
import { useAuthStore } from '@/store/authStore'

export function Leaderboard() {
  const navigate = useNavigate()
  const { user } = useAuthStore()
  const [leaders, setLeaders] = useState<UserProfile[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchLeaderboard() {
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .order('total_score', { ascending: false })
          .limit(50)

        if (error) throw error
        // Filter out completely new anonymous users with 0 score and default name
        const filtered = data.filter(p => p.total_score > 0 || p.display_name !== 'Aluno Anônimo')
        setLeaders(filtered)
      } catch (error) {
        console.error('Error fetching leaderboard:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchLeaderboard()
  }, [])

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 max-w-3xl mx-auto flex flex-col relative">
      <button 
        onClick={() => navigate(-1)}
        className="absolute top-8 left-4 p-3 bg-surface-light/50 hover:bg-surface-light rounded-full text-text-muted hover:text-white transition-all backdrop-blur-md border border-white/5"
      >
        <ArrowLeft size={24} />
      </button>

      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-500/20 rounded-full border border-yellow-500/30 mb-6">
          <Trophy size={40} className="text-yellow-400" />
        </div>
        <h1 className="font-display text-3xl md:text-4xl text-white mb-2">Hall da Fama</h1>
        <p className="text-text-muted text-base md:text-lg">
          Os maiores estudiosos de Equações Diferenciais.
        </p>
      </div>

      <div className="flex-1 bg-surface-light/30 backdrop-blur-md border border-white/10 rounded-3xl p-4 md:p-8 overflow-hidden relative">
        {isLoading ? (
          <div className="flex justify-center py-20">
            <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        ) : leaders.length === 0 ? (
          <div className="text-center py-20 text-text-muted">
            Nenhum jogador registrado ainda. Seja o primeiro!
          </div>
        ) : (
          <div className="space-y-4">
            {leaders.map((leader, index) => {
              const isCurrentUser = user?.id === leader.id
              const isTop3 = index < 3
              
              let MedalIcon = null
              if (index === 0) MedalIcon = <Medal size={24} className="text-yellow-400" />
              if (index === 1) MedalIcon = <Medal size={24} className="text-gray-300" />
              if (index === 2) MedalIcon = <Medal size={24} className="text-amber-600" />

              return (
                <motion.div
                  key={leader.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`flex items-center gap-4 p-4 rounded-2xl border transition-all ${
                    isCurrentUser 
                      ? 'bg-primary/20 border-primary/40 shadow-[0_0_15px_rgba(78,205,196,0.2)]' 
                      : 'bg-black/20 border-white/5 hover:bg-black/40'
                  }`}
                >
                  <div className="w-10 text-center font-display text-xl text-text-muted">
                    {isTop3 ? MedalIcon : `#${index + 1}`}
                  </div>
                  
                  {leader.avatar_url ? (
                    <img src={leader.avatar_url} alt={leader.display_name || ''} className="w-12 h-12 rounded-full border border-white/20" />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-surface-dark flex items-center justify-center border border-white/10">
                      <UserCircle size={28} className="text-text-muted" />
                    </div>
                  )}

                  <div className="flex-1 min-w-0">
                    <h3 className={`font-display text-lg truncate ${isCurrentUser ? 'text-white' : 'text-gray-200'}`}>
                      {leader.display_name || 'Visitante Anônimo'}
                    </h3>
                    <p className="text-sm text-text-muted">Nível {leader.level}</p>
                  </div>

                  <div className="text-right">
                    <span className="font-display text-xl text-primary">{leader.total_score}</span>
                    <span className="text-xs text-text-muted block">XP</span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
