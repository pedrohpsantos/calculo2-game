import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { UserCircle, ArrowLeft } from 'lucide-react'
import { useAuthStore } from '@/store/authStore'

export function Login() {
  const navigate = useNavigate()
  const { user, isAnonymous, loginWithGoogle, logout, isLoading } = useAuthStore()
  
  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="min-h-screen pt-20 px-4 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Background decorations */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] pointer-events-none" />

      <button 
        onClick={() => navigate(-1)}
        className="absolute top-8 left-8 p-3 bg-surface-light/50 hover:bg-surface-light rounded-full text-text-muted hover:text-white transition-all backdrop-blur-md border border-white/5"
      >
        <ArrowLeft size={24} />
      </button>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md p-10 rounded-3xl border border-white/10 bg-surface-light/40 backdrop-blur-xl text-center shadow-2xl relative z-10"
      >
        {isAnonymous ? (
          <>
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner border border-primary/30">
              <UserCircle size={40} className="text-primary" />
            </div>
            
            <h1 className="font-display text-3xl text-white mb-2">Salvar Progresso</h1>
            <p className="text-text-muted text-base mb-10 leading-relaxed [text-wrap:balance]">
              Atualmente você está jogando como <strong>Visitante</strong>. Faça login para entrar no Ranking Oficial e não perder suas conquistas!
            </p>

            <button
              onClick={handleGoogleLogin}
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-4 px-6 py-4 bg-white hover:bg-gray-100 text-gray-900 rounded-2xl font-body font-bold text-lg transition-all active:scale-95 shadow-lg disabled:opacity-50"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              {isLoading ? 'Conectando...' : 'Entrar com Google'}
            </button>

            <p className="mt-8 text-xs text-text-muted/60">
              *Ao fazer login, seu progresso anônimo atual será transferido para a sua nova conta automaticamente.
            </p>
          </>
        ) : (
          <>
            {user?.avatar_url ? (
              <img src={user.avatar_url} alt="Avatar" className="w-20 h-20 rounded-full mx-auto mb-6 border-2 border-primary" />
            ) : (
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner border border-primary/30">
                <UserCircle size={40} className="text-primary" />
              </div>
            )}
            
            <h1 className="font-display text-2xl text-white mb-2">Olá, {user?.display_name || 'Estudante'}!</h1>
            <p className="text-text-muted text-base mb-10 leading-relaxed">
              Você está conectado e seu progresso está sendo salvo na nuvem.
            </p>

            <button
              onClick={() => logout()}
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-4 px-6 py-4 bg-surface-dark border border-white/10 hover:bg-white/5 text-white rounded-2xl font-body font-bold text-lg transition-all active:scale-95 shadow-lg disabled:opacity-50"
            >
              {isLoading ? 'Saindo...' : 'Sair da Conta'}
            </button>
          </>
        )}
      </motion.div>
    </div>
  )
}

