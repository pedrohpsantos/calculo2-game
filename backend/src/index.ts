import express, { Request, Response } from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import { validateProgress } from './services/progressService';
import { supabase } from './lib/supabase';

config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', message: 'Calculo 2 Game Backend is running' });
});

// Endpoint para validar e registrar progresso
app.post('/api/progress', async (req: Request, res: Response): Promise<void> => {
  const { userId, moduleSlug, progress, answers } = req.body;
  
  if (!userId || !moduleSlug || !progress) {
    res.status(400).json({ error: 'Missing userId, moduleSlug, or progress data' });
    return;
  }

  try {
    const result = validateProgress(moduleSlug, progress, answers);
    
    // Agora salvamos de forma autoritativa no banco usando o Service Role do backend
    const { error: upsertError } = await supabase
      .from('user_progress')
      .upsert({
        user_id: userId,
        module_slug: moduleSlug,
        quiz_score: result.validatedProgress.quiz_score,
        quiz_completed: result.validatedProgress.quiz_completed,
        flashcards_completed: result.validatedProgress.flashcards_completed,
        challenge_completed: result.validatedProgress.challenge_completed,
        last_played_at: result.validatedProgress.last_played_at || new Date().toISOString()
      }, { onConflict: 'user_id,module_slug' });

    if (upsertError) throw upsertError;

    res.json({ success: true, result });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Backend server listening at http://localhost:${port}`);
  });
}

export default app;
