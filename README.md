# EDO Game: A Jornada do Cálculo 2 🎮✖️

![GitHub repo size](https://img.shields.io/github/repo-size/pedrohpsantos/calculos2-game)
![GitHub Action](https://img.shields.io/github/actions/workflow/status/pedrohpsantos/calculos2-game/ci.yml?branch=main)
![React](https://img.shields.io/badge/React-18-blue)
![Express](https://img.shields.io/badge/Express-Backend-green)

Bem-vindo ao **EDO Game**, uma plataforma interativa e gamificada focada no ensino de **Cálculo 2**, cobrindo todo o edital de Equações Diferenciais Ordinárias (EDOs) e Séries, com o mesmo rigor acadêmico do aclamado livro de James Stewart.

---

## 🌟 O Projeto

O objetivo deste projeto é eliminar a ansiedade e a sobrecarga cognitiva no aprendizado de matemática avançada. Transformamos a ementa clássica em um **Roadmap estilo videogame**, onde o aluno precisa desbloquear fases consumindo pílulas curtas de teoria e resolvendo desafios interativos focados no visual e na intuição.

### 📚 Módulos Abordados (Nível Universitário)
1. **Sequências e Séries:** Teste da Integral, Razão, Raiz, Séries Alternadas e Convergência Condicional.
2. **Séries de Taylor:** Séries de Maclaurin, Resto de Lagrange.
3. **EDO de 1ª Ordem:** Separáveis, Fator Integrante, Exatas e Substituição.
4. **EDO de 2ª Ordem e Superior:** Homogêneas, Wronskiano, Teorema de Abel, Variação dos Parâmetros.
5. **Soluções em Séries para EDOs:** Pontos Ordinários/Singulares, Equação de Cauchy-Euler, Método de Frobenius.
6. **Transformada de Laplace:** Função Degrau de Heaviside, Impulso de Dirac e Convolução.
7. **Sistemas de EDOs:** Modelagem de Matrizes, Matriz Fundamental, Autovalores e Autovetores.

---

## 🏗️ Arquitetura Monorepo

O repositório é projetado seguindo as melhores práticas empresariais, dividindo responsabilidades através de um **Monorepo**:

- 🖥️ **`frontend/`**: SPA construído em React + Vite. Focado na renderização otimizada, gerenciamento de estado isolado e design visual (*Glassmorphism*).
- ⚙️ **`backend/`**: API segura desenvolvida em Node.js com Express e TypeScript. É a camada responsável por processar a lógica do jogo (avaliação de respostas, liberação de módulos e medalhas), bloqueando tentativas de fraude (*cheats*) pelo lado do cliente.
- ☁️ **Supabase**: Backend-as-a-Service utilizado para gerenciar a autenticação de usuários (OAuth/Email) e armazenamento em banco de dados PostgreSQL.

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- **[React](https://react.dev/) + [Vite](https://vitejs.dev/)**
- **[Tailwind CSS](https://tailwindcss.com/)**: Estilização robusta e totalmente responsiva.
- **[Zustand](https://github.com/pmndrs/zustand)**: Gerenciamento de estado global.
- **[Framer Motion](https://www.framer.com/motion/)**: Animações fluidas e navegação contínua.
- **[dnd-kit](https://dndkit.com/)**: Motor otimizado de *Drag and Drop*.
- **[KaTeX](https://katex.org/)**: Renderização nativa de expressões matemáticas complexas.

### Backend
- **[Node.js](https://nodejs.org/) & [Express.js](https://expressjs.com/)**
- **[TypeScript](https://www.typescriptlang.org/)**: Tipagem estática rigorosa em todos os ambientes.
- **[Jest](https://jestjs.io/)**: Suite de testes unitários para a camada de serviços.
- **[ESLint](https://eslint.org/)**: Análise de código e prevenção de anomalias sintáticas.

---

## 🚀 Como Rodar Localmente

### 1. Pré-Requisitos
- Ter o [Node.js](https://nodejs.org/) (versão 18+ recomendada) instalado.
- Conta no [Supabase](https://supabase.com/) para obter as chaves de API.

### 2. Clonando o Repositório
```bash
git clone https://github.com/pedrohpsantos/calculos2-game.git
cd calculos2-game
```

### 3. Rodando o Backend (API)
A API Node processa a validação do progresso do jogo.
```bash
cd backend
npm install
npm run dev
```
> O backend rodará por padrão em `http://localhost:3000`.

### 4. Rodando o Frontend (Web App)
Abra uma **nova janela de terminal**, configure as variáveis de ambiente e inicie o Vite.
```bash
cd frontend
npm install
```

Crie o arquivo `.env.local` dentro da pasta `/frontend`:
```env
VITE_SUPABASE_URL=sua-url-do-supabase
VITE_SUPABASE_ANON_KEY=sua-chave-anonima
```

Inicie o servidor de desenvolvimento:
```bash
npm run dev
```
> O frontend rodará por padrão em `http://localhost:5173`.

---

## 🧪 Testes e Validação de Qualidade

Este projeto possui uma esteira rigorosa. Para rodar as checagens manualmente em sua máquina:

**Testes e Lint no Frontend:**
```bash
cd frontend
npm run lint
npm run test
```

**Testes e Lint no Backend:**
```bash
cd backend
npm run lint
npm run test
```

---

## ⚙️ CI/CD (Integração Contínua)
Qualquer novo commit direcionado à branch `main` passa por um pipeline automático no **GitHub Actions** que orquestra a validação dupla:
- `lint`, `build` e `test` na raiz do `/frontend`.
- `lint`, `build` e `test` na raiz do `/backend`.

Se qualquer teste ou verificação falhar, o build do Vercel é automaticamente suspenso para preservar a saúde do ambiente de produção.

---

## 🤫 Easter Eggs

Para quem explora cada canto, o EDO Game possui algumas surpresas:
- Toque rápido e repetido (5x) no título da tela (`Cálculo 2`) ativará a comemoração *Tatiane*.
- Toque rápido (5x) na sua foto de avatar ativará a mágica do *Laplace*.
- No computador, as palavras-chave `tatiane` ou `laplace` digitadas soltas pelo teclado ativam o efeito clássico.

---
*Foco nos estudos e divirta-se!* ☕🚀
