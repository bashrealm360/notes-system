# Engineering Rules

This document defines the engineering standards for the repository.

Every developer working on this project is expected to follow these rules.

These rules exist to keep the architecture maintainable, scalable, and consistent.

If a change requires breaking one of these rules, discuss it with the team before implementation.

---

# Engineering Principles

Every piece of code should follow these principles.

- Single Responsibility Principle
- Separation of Concerns
- Reusability
- Maintainability
- Readability
- Scalability
- Consistency

If multiple implementations are possible, choose the one that best satisfies these principles.

---

# Architecture Rules

## Rule 1

Every package has a single responsibility.

Never mix responsibilities.

Correct

```text
notes-web
    Routing

notes-ui
    UI

notes-data
    Data Layer

notes-api
    Backend
```

Incorrect

```text
notes-ui
    UI
    API Calls
```

---

## Rule 2

Dependencies always move downward.

Correct

```text
notes-web
    │
    ▼
notes-ui
    │
    ▼
notes-data
    │
    ▼
notes-api
```

Never reverse dependencies.

---

## Rule 3

Never skip a layer.

Incorrect

```text
notes-web
      │
      ▼
notes-api
```

Correct

```text
notes-web

↓

notes-ui

↓

notes-data

↓

notes-api
```

---

# Frontend Rules

The frontend should remain as thin as possible.

Pages should mainly compose components.

Example

Good

```tsx
export default function Page() {
  return <NotesPage />;
}
```

Avoid large pages containing business logic.

---

# UI Rules

UI components should be reusable.

A component should not know how data is fetched.

Correct

```tsx
<NotesTable notes={notes} />
```

Incorrect

```tsx
function NotesTable() {
    fetch(...)
}
```

---

# Data Layer Rules

All communication with the backend must go through **notes-data**.

Never call

```ts
fetch(...)
```

inside

```text
notes-ui

notes-web
```

API clients belong only inside

```text
packages/notes-data
```

---

# Backend Rules

Controllers should remain thin.

Controllers should

- Validate requests
- Call services
- Return responses

Controllers should NOT

- Access database directly
- Implement business rules
- Perform complex calculations

Business logic belongs inside services.

---

# Database Rules

Database access should remain isolated.

Avoid writing SQL inside controllers.

Repositories should handle persistence.

Services should coordinate business logic.

---

# Package Rules

Packages should expose a public API.

Always export through

```text
index.ts
```

Do not import internal files directly.

Correct

```ts
import { NotesPage } from '@repo/notes-ui';
```

Incorrect

```ts
import { NotesPage } from '@repo/notes-ui/src/notes/NotesPage';
```

---

# Import Rules

Always use workspace imports.

Correct

```ts
@repo/notes-data
```

Avoid

```ts
../../../../packages/notes-data
```

---

# Naming Rules

Use singular feature names.

Good

```text
note

user

task
```

Avoid

```text
notesFeature

userModule

taskStuff
```

---

# File Naming

Controllers

```text
note.controller.ts
```

Services

```text
note.service.ts
```

DTOs

```text
create-note.dto.ts

update-note.dto.ts
```

Hooks

```text
useNotesQuery.ts
```

Queries

```text
note.ts
```

---

# Code Quality Rules

Code should be

- Readable
- Predictable
- Consistent

Avoid clever code.

Prefer code that another developer can understand immediately.

---

# Reusability Rules

Before writing code ask:

Can this be reused?

If yes,

move it into

```text
packages/
```

rather than duplicating it.

---

# Feature Rules

Every feature follows the same lifecycle.

Backend

↓

Data Layer

↓

UI Layer

↓

Frontend

Never implement features in random order.

---

# Pull Request Rules

Every Pull Request should

- Pass type checking
- Pass linting
- Pass formatting
- Remove debugging code
- Remove unused imports
- Update documentation if necessary

---

# Code Review Checklist

Before approving a Pull Request ask

- Is architecture respected?
- Are responsibilities separated?
- Is business logic in services?
- Are imports correct?
- Is duplication avoided?
- Is the code readable?
- Are package boundaries respected?

---

# Performance Guidelines

Prefer

- Memoization when necessary
- Lazy loading
- Pagination
- Caching
- Optimized queries

Avoid premature optimization.

Optimize only after identifying bottlenecks.

---

# Security Guidelines

Always

- Validate user input
- Sanitize data
- Protect sensitive information
- Use environment variables
- Avoid exposing internal implementation details

Never trust client-side input.

---

# Logging Rules

Log useful information.

Do not log

- Passwords
- Tokens
- Secrets
- Personal information

---

# Error Handling

Errors should be meaningful.

Backend should return consistent error responses.

Frontend should display user-friendly messages.

Avoid exposing stack traces to users.

---

# Documentation Rules

Every major feature should include:

- API documentation
- Folder structure updates (if applicable)
- README updates when architecture changes

Documentation is part of the feature—not an optional task.

---

# When to Create a New Package

Create a new package only when:

- It can be reused across multiple applications.
- It has a clearly defined responsibility.
- It does not belong to an existing package.

Avoid creating packages for small or highly specific features.

---

# Final Principle

The repository is designed for long-term maintainability.

When making architectural decisions, optimize for:

- Simplicity
- Consistency
- Readability
- Scalability
- Team collaboration

Code is written once but maintained for years.

Always choose the solution that makes future maintenance easier.
