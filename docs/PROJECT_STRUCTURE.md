# Project Structure

This document explains the purpose of every folder inside the repository.

Every folder has a single responsibility.

Do not place code in a folder that does not match its responsibility.

---

# Repository Overview

```text id="abm3gk"
notes-system/
│
├── apps/
├── apis/
├── packages/
├── docs/
│
├── package.json
├── pnpm-workspace.yaml
├── turbo.json
├── tsconfig.base.json
├── prettier.config.mjs
└── README.md
```

---

# Root Directory

The root directory is responsible for configuring the entire monorepo.

It should only contain:

- Workspace configuration
- Tooling configuration
- Documentation
- Shared project configuration

It should **never** contain application code.

---

# apps/

```text id="34yoyg"
apps/
```

Contains runnable frontend applications.

Each application is responsible for user interaction.

Current applications:

```text id="jlwmrx"
notes-web/
```

Future examples:

```text id="sv9n4n"
admin-web/
mobile-web/
landing-page/
```

---

# apps/notes-web

```text id="w4u1v8"
apps/
└── notes-web/
```

Purpose

The main Next.js application.

Responsibilities

- Routing
- Layouts
- Providers
- Middleware
- Metadata
- Authentication wrappers
- Loading pages
- Error pages

Should contain

```text id="doyzhk"
app/
public/
next.config.ts
package.json
```

Should NOT contain

- API clients
- Business logic
- Database access
- Shared UI
- React Query hooks

Those belong in shared packages.

---

# apis/

```text id="omjzci"
apis/
```

Contains backend services.

Current services

```text id="n0tzte"
notes-api/
```

Future examples

```text id="n8ozjl"
auth-api/
notification-api/
analytics-api/
```

---

# apis/notes-api

```text id="hspqzg"
apis/
└── notes-api/
```

Purpose

NestJS backend.

Responsibilities

- Controllers
- Services
- Modules
- DTOs
- Validation
- Authentication
- Authorization
- Database
- Business logic

Example structure

```text id="q93sde"
src/

notes/

users/

tasks/

auth/

common/
```

---

# packages/

```text id="32xfoa"
packages/
```

Contains reusable libraries.

Packages must never depend on application-specific code.

Packages should be reusable across multiple applications.

---

# packages/notes-data

```text id="mpom2q"
packages/
└── notes-data/
```

Purpose

Frontend data layer.

Example structure

```text id="b4j4qv"
src/

client/

hooks/

queries/

type/

index.ts
```

Responsibilities

- API Client
- React Query
- Queries
- Mutations
- Frontend Types

Used by

```text id="vfizk8"
notes-ui

notes-web
```

---

# packages/notes-ui

```text id="jajb3i"
packages/
└── notes-ui/
```

Purpose

Reusable UI layer.

Example structure

```text id="zhxxof"
src/

notes/

users/

common/

layout/

index.ts
```

Responsibilities

- Components
- Feature Pages
- Forms
- Dialogs
- Tables
- Cards

Consumes

```text id="3mz4a6"
notes-data
```

---

# docs/

```text id="sc9l18"
docs/
```

Contains project documentation.

Example

```text id="xwq9cr"
SETUP.md

ARCHITECTURE.md

PROJECT_STRUCTURE.md

ENGINEERING_RULES.md

DEVELOPMENT_GUIDE.md

CONTRIBUTING.md
```

No application code belongs here.

---

# Configuration Files

## package.json

Workspace scripts.

Shared tooling.

Dependencies.

---

## pnpm-workspace.yaml

Defines workspace packages.

---

## turbo.json

Turbo pipeline configuration.

---

## tsconfig.base.json

Shared TypeScript configuration.

---

## prettier.config.mjs

Shared formatting rules.

---

# Package Relationships

```text id="qltkgi"
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
```

Packages should only communicate with their immediate dependency.

Never skip layers.

---

# Folder Ownership

Every folder has an owner.

| Folder   | Responsibility                 |
| -------- | ------------------------------ |
| apps     | Runnable frontend applications |
| apis     | Backend services               |
| packages | Shared reusable libraries      |
| docs     | Documentation                  |
| public   | Static assets                  |
| app      | Next.js routing                |
| src      | Application source code        |

---

# Adding a New Package

When adding a package:

1. Create the package.
2. Add `package.json`.
3. Add `tsconfig.json`.
4. Configure workspace name.
5. Run `pnpm install`.
6. Export through `index.ts`.

Every package should expose a single public API.

---

# Future Repository Growth

Expected future packages

```text id="3dnpjj"
packages/

notes-data

notes-ui

ui-primitives

database

config

auth

notifications

storage

logger
```

Expected future applications

```text id="zw7xjz"
apps/

notes-web

admin-web

mobile-web
```

Expected future backend services

```text id="jhs1qd"
apis/

notes-api

auth-api

notification-api
```

The repository should grow by adding new packages rather than making existing packages responsible for unrelated functionality.

---

# Final Notes

The repository structure is designed to make it easy for developers to locate code quickly, understand ownership, and maintain clear boundaries between frontend applications, backend services, and shared libraries.

Whenever you are unsure where a new piece of code belongs, choose the folder whose responsibility best matches that code. If no existing folder fits, discuss with the team whether a new shared package should be introduced rather than overloading an existing one.
