# Project Setup Guide

This document explains how to set up the project on a new machine.

If you are new to the repository, complete every step in the order listed below.

---

# Prerequisites

Install the following software before cloning the repository.

## Node.js

Version:

```text
22.x or later
```

Verify installation:

```bash
node -v
```

---

## PNPM

Install globally:

```bash
npm install -g pnpm
```

Verify:

```bash
pnpm -v
```

---

## Git

Verify:

```bash
git --version
```

---

## NestJS CLI

Install globally:

```bash
npm install -g @nestjs/cli
```

Verify:

```bash
nest --version
```

---

## Visual Studio Code

Recommended Extensions:

- ESLint
- Prettier
- Error Lens
- GitLens
- Docker
- Tailwind CSS IntelliSense

---

# Clone the Repository

```bash
git clone <repository-url>

cd notes-system
```

---

# Install Dependencies

Install all workspace dependencies.

```bash
pnpm install
```

PNPM automatically installs dependencies for every workspace package.

---

# Repository Layout

```text
notes-system/
│
├── apps/
│   └── notes-web
│
├── apis/
│   └── notes-api
│
├── packages/
│   ├── notes-data
│   └── notes-ui
│
├── docs/
├── turbo.json
├── package.json
└── pnpm-workspace.yaml
```

---

# Run the Project

Start every application.

```bash
pnpm dev
```

Expected:

Frontend

```text
http://localhost:3000
```

Backend

```text
http://localhost:4000
```

---

# Individual Applications

## Run Frontend Only

```bash
cd apps/notes-web

pnpm dev
```

---

## Run Backend Only

```bash
cd apis/notes-api

pnpm dev
```

---

# Common Workspace Commands

Start all applications

```bash
pnpm dev
```

Build every package

```bash
pnpm build
```

Run linting

```bash
pnpm lint
```

Run type checking

```bash
pnpm typecheck
```

Format entire repository

```bash
pnpm format
```

---

# Installing a New Dependency

Always install dependencies in the correct workspace.

## Root Dependencies

Used for tools shared by the entire repository.

Example:

```bash
pnpm add -Dw turbo
```

Examples:

- Turbo
- ESLint
- Prettier

---

## Frontend Dependencies

Install inside:

```text
apps/notes-web
```

Example:

```bash
pnpm add axios
```

---

## Backend Dependencies

Install inside:

```text
apis/notes-api
```

Example:

```bash
pnpm add @nestjs/swagger
```

---

## Shared Package Dependencies

Example:

```text
packages/notes-data
```

Install:

```bash
pnpm add @tanstack/react-query
```

---

# Workspace Packages

Internal packages are referenced using:

```json
"workspace:*"
```

Example:

```json
{
  "dependencies": {
    "@repo/notes-data": "workspace:*"
  }
}
```

Never use relative paths between packages.

---

# Creating a New Workspace Package

Example:

```text
packages/
    notifications/
```

Steps

1. Create the folder.

2. Initialize package.

```bash
pnpm init
```

3. Configure package name.

```json
"name": "@repo/notifications"
```

4. Add tsconfig.

5. Add package to workspace.

6. Run

```bash
pnpm install
```

---

# Troubleshooting

## PNPM refuses to install at root

Use

```bash
pnpm add -Dw <package>
```

---

## Ignored Build Scripts

Run

```bash
pnpm approve-builds
```

Approve requested packages.

---

## Port Already In Use

Check whether another application is using:

Frontend

```text
3000
```

Backend

```text
4000
```

Stop the conflicting process or change the port.

---

## Workspace Package Not Found

Run

```bash
pnpm install
```

Verify package names.

Verify

```json
"workspace:*"
```

---

## TypeScript Import Errors

Run

```bash
pnpm typecheck
```

Verify package exports.

Verify package names.

---

# Before Starting Development

Every developer should verify:

- Repository cloned successfully
- Dependencies installed
- Frontend running
- Backend running
- Workspace packages linked
- Type checking passes
- Lint passes

Only after completing these checks should feature development begin.
