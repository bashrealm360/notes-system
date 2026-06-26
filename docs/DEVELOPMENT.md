# Development Guide

This document defines the standard workflow for implementing new features.

Every feature in this repository should follow the same development lifecycle.

Following a consistent workflow makes the project easier to maintain, review, and extend.

---

# Feature Development Order

Every feature must be developed in the following order.

```text
Backend
    │
    ▼
Data Layer
    │
    ▼
UI Layer
    │
    ▼
Frontend
```

Never start with the frontend first.

---

# Example Feature

Suppose we want to create a **Task Management** feature.

The implementation order should be:

```text
notes-api
    ↓
notes-data
    ↓
notes-ui
    ↓
notes-web
```

---

# Step 1 — Backend Development

Location

```text
apis/notes-api
```

Generate the feature.

Example

```bash
nest g module tasks
nest g controller tasks
nest g service tasks
```

Create:

```text
tasks/
│
├── dto/
├── entities/
├── tasks.controller.ts
├── tasks.service.ts
├── tasks.module.ts
└── repository/
```

Implement

- DTOs
- Validation
- Business logic
- Database queries
- API endpoints

Finish backend completely before moving to the next layer.

---

# Step 2 — Data Layer

Location

```text
packages/notes-data
```

Create

```text
src/

client/

hooks/

queries/

type/

task.ts
```

Example

```text
client/
    taskClient.ts

queries/
    task.ts

hooks/
    task.ts

type/
    task.ts
```

Responsibilities

- API Client
- React Query
- Mutations
- Queries
- Shared Types

No UI belongs here.

---

# Step 3 — UI Layer

Location

```text
packages/notes-ui
```

Create

```text
task/

TaskCard.tsx

TaskForm.tsx

TaskTable.tsx

TaskPage.tsx

index.ts
```

Responsibilities

- Components
- Forms
- Tables
- Dialogs
- Layout

UI consumes hooks from

```text
notes-data
```

No API calls here.

---

# Step 4 — Frontend Route

Location

```text
apps/notes-web
```

Example

```text
app/

tasks/

page.tsx
```

Example

```tsx
import { TaskPage } from '@repo/notes-ui';

export default function Page() {
  return <TaskPage />;
}
```

Routes should remain minimal.

---

# Folder Naming Convention

Use singular feature names.

Example

```text
note

task

user

role

permission
```

Avoid

```text
notesFeature

taskModule

userStuff
```

---

# File Naming Convention

Controllers

```text
notes.controller.ts
```

Services

```text
notes.service.ts
```

DTOs

```text
create-note.dto.ts

update-note.dto.ts
```

Hooks

```text
useNotesQuery.ts

useCreateNoteMutation.ts
```

Queries

```text
note.ts
```

---

# Export Pattern

Every package should export through

```text
index.ts
```

Example

```text
task/

index.ts

TaskPage.tsx

TaskCard.tsx
```

Never import deeply into package folders.

Correct

```ts
import { TaskPage } from '@repo/notes-ui';
```

Avoid

```ts
import { TaskPage } from '@repo/notes-ui/src/task/TaskPage';
```

---

# Dependency Flow

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
HTTP
      │
      ▼
notes-api
```

Never skip layers.

---

# Testing Checklist

Before creating a Pull Request verify:

Backend

- API returns correct response
- Validation works
- Error handling works

Data Layer

- Queries work
- Mutations work
- Types are correct

UI

- Components render
- Forms validate
- Loading states work

Frontend

- Route loads
- Navigation works
- Error page works

---

# Pull Request Checklist

Every Pull Request should include:

- Feature implemented
- Type checking passes
- Lint passes
- Formatting passes
- No console logs
- No unused imports
- Documentation updated if required

---

# Common Mistakes

Do not:

- Call APIs directly from UI components.
- Put business logic in controllers.
- Duplicate API clients.
- Duplicate React Query hooks.
- Use relative imports between packages.
- Skip the data layer.

---

# Feature Completion Checklist

Before marking a feature complete:

- Backend implemented
- DTOs created
- Validation completed
- Data layer completed
- UI components completed
- Route added
- Tested locally
- Documentation updated
- Code reviewed

Only after completing every item should the feature be considered complete.

---

# Development Philosophy

Every feature should be built incrementally.

Do not implement multiple layers simultaneously.

Complete one layer, verify it works, then move to the next.

This approach reduces debugging complexity, improves code reviews, and keeps the architecture consistent across the project.
