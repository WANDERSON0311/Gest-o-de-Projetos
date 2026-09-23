# Pulse — Gestão de Demandas e Projetos

Sistema web inicial para gestão de projetos, demandas, tasks, subtasks e produtividade.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Deploy na Vercel

1. Suba esta pasta para um repositório no GitHub.
2. Importe o repositório na Vercel.
3. Framework: Next.js.
4. Build: `next build`.

## Próxima etapa recomendada

O front-end já possui dashboard, semáforo, filtros, criação de demanda e visão de equipe. Para produção, conecte um banco PostgreSQL/Supabase e autenticação, persistindo projetos, demandas, tasks, subtasks, usuários, dependências, histórico e apontamentos de tempo.
