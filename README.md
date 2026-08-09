# EDO Game: A Jornada do Cálculo 2 🎮✖️

Bem-vindo ao **EDO Game**, uma plataforma interativa e gamificada focada no ensino de Cálculo 2, cobrindo o edital de Equações Diferenciais Ordinárias (EDOs) e Séries, no mesmo rigor do livro de James Stewart.

## 🌟 O que é o projeto?

O objetivo deste projeto é eliminar a ansiedade e a sobrecarga cognitiva no aprendizado do Cálculo 2. Transformamos a ementa clássica em um "Roadmap" estilo videogame, onde o aluno precisa desbloquear fases consumindo pílulas curtas de teoria e resolvendo desafios interativos baseados em *Drag and Drop*.

### 📚 Módulos Abordados (Nível Stewart)
1. **Sequências e Séries:** Teste da Integral, Razão, Raiz, Séries Alternadas e Convergência Condicional.
2. **Séries de Taylor:** O Problema do Seno, Séries de Maclaurin e Resto de Lagrange.
3. **EDO de 1ª Ordem:** Separáveis, Fator Integrante, Exatas e Substituição Homogênea.
4. **EDO de 2ª Ordem e Ordem Superior:** Equações Homogêneas, Wronskiano, Teorema de Abel e Variação dos Parâmetros.
5. **Soluções em Séries para EDOs:** Pontos Ordinários/Singulares, Equação de Cauchy-Euler e Método de Frobenius.
6. **Transformada de Laplace:** Função Degrau de Heaviside, Impulso de Dirac e Convolução.
7. **Sistemas de EDOs:** Modelagem de Matrizes, Matriz Fundamental e Autovalores/Autovetores.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído do zero focando em performance, legibilidade e Design Visual Moderno:
- **[React](https://react.dev/) + [Vite](https://vitejs.dev/):** O motor de renderização rápido e responsivo.
- **[Tailwind CSS](https://tailwindcss.com/):** Estilização utilitária focada em *Glassmorphism* e temas dinâmicos por módulo.
- **[Framer Motion](https://www.framer.com/motion/):** Animações suaves de transição de telas e barras de progresso.
- **[dnd-kit](https://dndkit.com/):** Biblioteca leve para as interações de *Drag and Drop* no Quiz.
- **[KaTeX](https://katex.org/):** Renderização nativa e otimizada de fórmulas matemáticas em alta resolução.
- **[Supabase](https://supabase.com/):** Backend-as-a-Service para persistência, banco de dados (PostgreSQL) e Autenticação (OAuth Google e Email/Senha).
- **[Zustand](https://github.com/pmndrs/zustand):** Gerenciamento de estados globais super eficiente.

## 🚀 Como rodar localmente

### 1. Requisitos
Você precisará do [Node.js](https://nodejs.org/) instalado em sua máquina.

### 2. Configurando o Ambiente
Crie um arquivo `.env` na raiz do projeto com as chaves do seu projeto do Supabase:
```env
VITE_SUPABASE_URL=seu-supabase-url
VITE_SUPABASE_ANON_KEY=sua-anon-key
```

### 3. Clonando e Instalando
### 1. Frontend
```bash
cd frontend
npm install
npm run dev
```

### 2. Backend
```bash
cd backend
npm install
npm run dev
```

### 3. Executando
Para iniciar o servidor de desenvolvimento:
```bash
npm run dev
```
O jogo estará rodando em `http://localhost:5173`.

### 5. Easter Eggs 🥚
Nós implementamos alguns segredos interativos para os estudantes mais curiosos:
- Digite `tatiane` ou `laplace` no teclado- `frontend/`: Aplicativo React com Vite, TailwindCSS e Zustand.
- `backend/`: API Express.js em TypeScript para validação da lógica do jogo.
- `supabase/`: Back-end como serviço para Auth e persistência de dados.ir com a fórmula de Euler na página inicial!

---
*Criado com dedicação e muito café. Foco nos estudos e divirta-se!* ☕🚀
