import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { UserCircle, ArrowLeft } from 'lucide-react'
import { useAuthStore } from '@/store/authStore'
import { logger } from '@/utils/logger'

export function Login() {
  const navigate = useNavigate()
  const { user, isAnonymous, loginWithGoogle, loginWithEmail, signUpWithEmail, logout, isLoading } = useAuthStore()
  
  const [isRegistering, setIsRegistering] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle()
    } catch (error) {
      logger.error('Google login error:', error)
      setErrorMsg('Erro ao logar com Google.')
    }
  }

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMsg('')
    try {
      if (isRegistering) {
        await signUpWithEmail(email, password, name || 'Estudante')
      } else {
        await loginWithEmail(email, password)
      }
    } catch (error: any) {
      logger.error('Email auth error:', error)
      setErrorMsg('Email ou senha incorretos.')
    }
  }

  return (
    <div className="min-h-screen pt-20 px-4 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Background decorations */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md p-6 md:p-10 rounded-3xl border border-white/10 bg-surface-light/40 backdrop-blur-xl text-center shadow-2xl relative z-10"
      >
        {isAnonymous ? (
          <>
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner border border-primary/30">
              <UserCircle size={40} className="text-primary" />
            </div>
            
            <h1 className="font-display text-3xl text-white mb-2">{isRegistering ? 'Criar Conta' : 'Acessar Conta'}</h1>
            <p className="text-text-muted text-base mb-6 leading-relaxed [text-wrap:balance]">
              {isRegistering 
                ? 'Cadastre-se para entrar no Ranking Oficial e salvar seu progresso.'
                : 'Faça login para continuar sua jornada no Cálculo 2.'}
            </p>

            <form onSubmit={handleEmailAuth} className="space-y-4 mb-6 text-left">
              {isRegistering && (
                <div>
                  <label className="block text-sm font-bold text-text-muted mb-1">Nome de Exibição</label>
                  <input 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-surface-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="Ex: Gauss Silva"
                    required
                  />
                </div>
              )}
              <div>
                <label className="block text-sm font-bold text-text-muted mb-1">Email</label>
                <input 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-surface-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="seu@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-text-muted mb-1">Senha</label>
                <input 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-surface-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="******"
                  required
                  minLength={6}
                />
              </div>
              {errorMsg && <p className="text-red-400 text-sm mt-2">{errorMsg}</p>}
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary hover:bg-primary-dark text-black rounded-2xl font-body font-bold text-lg transition-all active:scale-95 shadow-[0_4px_15px_rgba(255,200,0,0.4)] disabled:opacity-50 mt-2"
              >
                {isLoading ? 'Carregando...' : (isRegistering ? 'Criar Conta' : 'Entrar')}
              </button>
            </form>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 h-px bg-white/10"></div>
              <span className="text-text-muted text-sm">OU</span>
              <div className="flex-1 h-px bg-white/10"></div>
            </div>

            <button
              type="button"
              onClick={handleGoogleLogin}
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-4 px-6 py-3 bg-white hover:bg-gray-100 text-gray-900 rounded-xl font-body font-bold text-base transition-all active:scale-95 shadow-lg disabled:opacity-50"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google
            </button>

            <div className="mt-6 text-sm text-text-muted">
              {isRegistering ? 'Já tem uma conta? ' : 'Não tem uma conta? '}
              <button 
                type="button" 
                onClick={() => {
                  setIsRegistering(!isRegistering)
                  setErrorMsg('')
                }} 
                className="text-primary hover:underline font-bold"
              >
                {isRegistering ? 'Faça login' : 'Cadastre-se'}
              </button>
            </div>
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

