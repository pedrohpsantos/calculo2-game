import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { ModuleLayout } from '@/components/layout/ModuleLayout'
import { Home } from '@/pages/Home'
import { Login } from '@/pages/Login'
import { Dashboard } from '@/pages/Dashboard'
import { Credits } from '@/pages/Credits'
import { Leaderboard } from '@/pages/Leaderboard'
import { ModuleSelector } from '@/pages/modules/ModuleSelector'
import { ModuleHub } from '@/pages/modules/ModuleHub'
import { ChallengeActivity } from '@/pages/modules/ChallengeActivity'
import { QuizActivity } from '@/pages/modules/QuizActivity'
import { TheoryActivity } from '@/pages/modules/TheoryActivity'
import { FlashcardActivity } from '@/pages/modules/FlashcardActivity'
import { Profile } from '@/pages/Profile'
import { useAuthStore } from '@/store/authStore'
import { useProgressStore } from '@/store/progressStore'
import { EasterEggs } from '@/components/game/EasterEggs'

export default function App() {
  const { initializeAuth, user } = useAuthStore()
  const fetchProgress = useProgressStore((s) => s.fetchProgress)

  useEffect(() => {
    initializeAuth()
  }, [initializeAuth])

  useEffect(() => {
    if (user) {
      fetchProgress(user.id)
    }
  }, [user, fetchProgress])

  return (
    <BrowserRouter>
      <Header />
      <EasterEggs />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/profile" element={<Profile />} />

        <Route element={<ModuleLayout />}>
          <Route path="/modules" element={<ModuleSelector />} />
          <Route path="/modules/:moduleSlug" element={<ModuleHub />} />
          <Route path="/modules/:moduleSlug/theory" element={<TheoryActivity />} />
          <Route path="/modules/:moduleSlug/quiz" element={<QuizActivity />} />
          <Route path="/modules/:moduleSlug/flashcards" element={<FlashcardActivity />} />
          <Route path="/modules/:moduleSlug/challenge" element={<ChallengeActivity />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
