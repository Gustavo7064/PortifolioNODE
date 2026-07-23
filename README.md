# Gustavo Lima — Portfólio

Portfólio de desenvolvedor Back-end com front-end em **React + TypeScript + Vite + TailwindCSS + Framer Motion** e API em **Node + Express + TypeScript + Prisma + PostgreSQL**.

## Estrutura

```
portfolio/
├── frontend/     # React + Vite + Tailwind + Framer Motion
└── backend/      # Express + Prisma + PostgreSQL (formulário de contato)
```

## 1. Rodando o front-end

```bash
cd frontend
npm install
cp .env.example .env      # ajuste VITE_API_URL se necessário
npm run dev
```

Abre em `http://localhost:5173`.

**Antes de publicar**, edite `src/data/content.ts` com seus dados reais (nome, links, projetos, stack) e troque as imagens em `public/projects/`.

## 2. Rodando o back-end

Pré-requisito: um PostgreSQL rodando localmente (ou em algum provedor, ex: Supabase, Neon, Railway).

```bash
cd backend
npm install
cp .env.example .env      # configure DATABASE_URL e CORS_ORIGIN
npm run prisma:migrate    # cria a tabela contact_messages
npm run dev                # inicia em http://localhost:3333
```

Endpoints:

- `GET /health` — healthcheck
- `POST /api/contact` — recebe `{ name, email, message }` e salva no banco
- `GET /api/contact` — lista as últimas mensagens recebidas

## 3. Build de produção

```bash
# frontend
cd frontend && npm run build   # gera /dist estático

# backend
cd backend && npm run build && npm start
```

## Notas

- A seção **GitHub** consome a API pública do GitHub diretamente do navegador (`useGithub` hook) — não precisa de token para dados públicos, mas está sujeita ao rate limit de requisições anônimas do GitHub.
- O formulário de **Contato** envia os dados para o back-end Express, que valida com Zod e persiste via Prisma no PostgreSQL.
- Substitua o link do CV em `profile.cvUrl` (`src/data/content.ts`) por um PDF real em `public/`.
