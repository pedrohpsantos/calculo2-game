import express, { Request, Response } from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import { validateProgress } from './services/progressService';

config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', message: 'Calculo 2 Game Backend is running' });
});

// Endpoint para validar e registrar progresso
app.post('/api/progress', (req: Request, res: Response) => {
  const { userId, moduleSlug, score, answers } = req.body;
  
  if (!userId || !moduleSlug) {
    return res.status(400).json({ error: 'Missing userId or moduleSlug' });
  }

  try {
    const result = validateProgress(moduleSlug, score, answers);
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
