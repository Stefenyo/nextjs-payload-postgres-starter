# Next.js + Payload CMS + Postgres Starter Template

A starter template combining [Next.js 15](https://nextjs.org) with [Payload CMS](https://payloadcms.com) and PostgreSQL.

## Quick Start

### 1. Clone & Install

```bash
npm install
```

### 2. Configure Environment

```bash
cp .env.example .env.local
# Edit .env.local if needed (defaults work for local development)
```

### 3. Start Database

```bash
npm run db:up
```

This starts:

- PostgreSQL 18 (Alpine) at `localhost:5432`
- PGWeb admin UI at `http://localhost:8081`

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) - your app is ready!

## What's Included

- **Next.js 15** - React framework with App Router
- **Payload CMS** - Headless CMS with PostgreSQL
- **Docker Compose** - PostgreSQL 18 + PGWeb admin UI
- **TypeScript** - Type safety across the stack
- **ESLint** - Code quality and consistency

## Database Management

```bash
npm run db:up      # Start database
npm run db:down    # Stop database
npm run db:reset   # Reset database (removes all data)
```

**Access PGWeb:** http://localhost:8081

## Customizing for Your Project

### Option 1: Keep Generic Names (Recommended)

Leave as-is. The generic names (`payload-nextjs-*`, `app_db`) work for any project.

### Option 2: Customize Container Names

Edit `docker-compose.yml` and replace:

- `payload-nextjs` → `your-project-name`
- `app_db_data` → `your_project_db_data`
- `payload_nextjs_db` → `your_project_db`

Then run:

```bash
npm run db:reset
npm run db:up
```
