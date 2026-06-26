# Notes System

A production-ready full-stack monorepo starter built with **Next.js**, **NestJS**, **TypeScript**, **PNPM Workspaces**, and **Turborepo**.

This repository provides a scalable foundation for building modern web applications by separating the frontend, backend, and shared libraries into independent packages while maintaining a single repository.

The project is designed with long-term maintainability in mind and follows a layered architecture to ensure a clean separation of responsibilities between presentation, data access, and business logic.

---

# Technology Stack

## Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

## Backend

- NestJS
- TypeScript

## Monorepo

- PNPM Workspaces
- Turborepo

## Shared Packages

- `@repo/notes-ui`
- `@repo/notes-data`

---

# Repository Structure

```text
notes-system/
│
├── apps/
│   └── notes-web/
│
├── apis/
│   └── notes-api/
│
├── packages/
│   ├── notes-data/
│   └── notes-ui/
│
├── docs/
│   ├── SETUP.md
│   ├── ARCHITECTURE.md
│   ├── DEVELOPMENT_GUIDE.md
│   ├── ENGINEERING_RULES.md
│   ├── PROJECT_STRUCTURE.md
│   └── CONTRIBUTING.md
│
├── package.json
├── pnpm-workspace.yaml
├── turbo.json
└── tsconfig.base.json
```

---

# Quick Start

## Prerequisites

- Node.js 22+
- PNPM 11+
- Nest CLI

## Install

```bash
git clone <repository-url>

cd notes-system

pnpm install
```

## Start Development

```bash
pnpm dev
```

By default:

| Application | URL                   |
| ----------- | --------------------- |
| Frontend    | http://localhost:3000 |
| Backend     | http://localhost:4000 |

---

# Project Architecture

The project follows a layered architecture.

```text
Browser
    │
    ▼
notes-web
    │
    ▼
notes-ui
    │
    ▼
notes-data
    │
HTTP
    │
    ▼
notes-api
    │
    ▼
Database
```

Each layer has a single responsibility.

For a detailed explanation, see:

**docs/ARCHITECTURE.md**

---

# Package Overview

## `apps/notes-web`

The Next.js application.

Responsible for:

- Routing
- Layouts
- Providers
- Application bootstrap

---

## `apis/notes-api`

The NestJS backend.

Responsible for:

- Controllers
- Services
- Business Logic
- Database Access
- Authentication

---

## `packages/notes-ui`

Shared UI layer.

Responsible for:

- Pages
- Components
- Forms
- Layout Sections

---

## `packages/notes-data`

Shared data layer.

Responsible for:

- API Clients
- React Query Hooks
- Queries
- Mutations
- Shared Frontend Types

---

# Documentation

Detailed documentation is available in the `docs` directory.

| Document             | Description                              |
| -------------------- | ---------------------------------------- |
| SETUP.md             | Installation and project setup           |
| ARCHITECTURE.md      | Complete architecture explanation        |
| DEVELOPMENT_GUIDE.md | How to implement new features            |
| ENGINEERING_RULES.md | Team standards and architectural rules   |
| PROJECT_STRUCTURE.md | Detailed folder and package explanations |
| CONTRIBUTING.md      | Git workflow and contribution guidelines |

---

# Development Workflow

Every feature should follow the same implementation order.

1. Backend (`notes-api`)
2. Data Layer (`notes-data`)
3. UI Layer (`notes-ui`)
4. Frontend Route (`notes-web`)

Following this workflow keeps responsibilities separated and maintains consistency across the project.

---

# Scripts

Run all applications:

```bash
pnpm dev
```

Build the workspace:

```bash
pnpm build
```

Run type checking:

```bash
pnpm typecheck
```

Run linting:

```bash
pnpm lint
```

Format the project:

```bash
pnpm format
```

---

# Next Steps

If you're new to the project, read the documentation in the following order:

1. `docs/SETUP.md`
2. `docs/ARCHITECTURE.md`
3. `docs/PROJECT_STRUCTURE.md`
4. `docs/ENGINEERING_RULES.md`
5. `docs/DEVELOPMENT_GUIDE.md`

Following this order will give you a complete understanding of how the project is structured and how new features should be implemented.
