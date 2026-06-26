# System Architecture

This document explains the architecture of the Notes System monorepo.

Understanding this architecture is important before contributing to the project.

---

# Architecture Philosophy

The project follows a layered architecture with a strict separation of concerns.

Every package has one responsibility and communicates only with the appropriate layer.

This keeps the project:

- Easy to maintain
- Easy to test
- Easy to scale
- Easy to understand
- Easy for multiple developers to work on simultaneously

Every layer should remain independent.

---

# High-Level Architecture

```text
                        Browser
                           │
                           ▼
                 apps/notes-web
                           │
                           ▼
               packages/notes-ui
                           │
                           ▼
             packages/notes-data
                           │
                     HTTP Requests
                           │
                           ▼
                 apis/notes-api
                           │
                           ▼
                     PostgreSQL
```

Data always flows from the top layer to the bottom layer.

Reverse dependencies are not allowed.

---

# Layer Responsibilities

## Layer 1 — notes-web

Location

```text
apps/notes-web
```

Purpose

The Next.js application.

Responsibilities

- Application bootstrap
- Routing
- Layouts
- Providers
- Authentication wrappers
- Metadata
- Error pages
- Loading pages

Should NOT contain

- HTTP requests
- Business logic
- Database logic
- Reusable UI components

---

## Layer 2 — notes-ui

Location

```text
packages/notes-ui
```

Purpose

Presentation layer.

Responsibilities

- Feature pages
- Components
- Cards
- Tables
- Forms
- Dialogs
- Layout sections
- Reusable UI

Consumes

```text
notes-data
```

Should NOT contain

- fetch()
- axios
- API clients
- Business logic
- Database access

---

## Layer 3 — notes-data

Location

```text
packages/notes-data
```

Purpose

Frontend data layer.

Responsibilities

- API Clients
- React Query
- Queries
- Mutations
- Shared frontend types

Consumes

```text
notes-api
```

via HTTP only.

Should NOT contain

- UI
- Components
- Pages
- Backend logic

---

## Layer 4 — notes-api

Location

```text
apis/notes-api
```

Purpose

Backend application.

Responsibilities

- Controllers
- Services
- Modules
- DTOs
- Validation
- Authentication
- Authorization
- Database Access
- Business Logic

Should NOT contain

- React
- Frontend code
- UI Components

---

# Dependency Flow

Allowed

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

Not Allowed

```text
notes-web ─────► notes-api

notes-ui ─────► database

notes-api ─────► notes-ui

notes-data ─────► notes-ui
```

Dependencies always move downward.

---

# Feature Flow

Every feature follows the same implementation order.

```text
Backend
      ↓
Data Layer
      ↓
UI Layer
      ↓
Frontend Route
```

Example

Task Management

```
notes-api
    ↓
notes-data
    ↓
notes-ui
    ↓
notes-web
```

This workflow ensures the backend contract exists before frontend development begins.

---

# Communication Flow

## Request

```
Browser
    ↓
notes-web
    ↓
notes-ui
    ↓
notes-data
    ↓
HTTP
    ↓
notes-api
    ↓
Database
```

## Response

```
Database
    ↓
notes-api
    ↓
HTTP
    ↓
notes-data
    ↓
notes-ui
    ↓
notes-web
    ↓
Browser
```

---

# Why This Architecture?

## Separation of Concerns

Each package has a single responsibility.

No package tries to do multiple jobs.

---

## Reusability

UI can be reused.

Hooks can be reused.

API clients can be reused.

Types can be reused.

---

## Scalability

New features follow the same architecture.

Example

```
notes
users
tasks
notifications
authentication
```

Every feature uses the same layers.

---

## Team Collaboration

Backend developers can work independently.

Frontend developers can work independently.

UI developers can work independently.

The architecture minimizes merge conflicts.

---

# Future Growth

As the project grows, additional packages may be introduced.

Example

```text
packages/
│
├── notes-data
├── notes-ui
├── ui-primitives
├── database
├── auth
├── config
├── notifications
└── storage
```

Each package should have a single responsibility.

---

# Architecture Principles

The following principles must always be respected.

- Single Responsibility Principle
- Separation of Concerns
- Reusable Packages
- One Direction Dependency Flow
- Feature-Based Backend Modules
- Shared Frontend Libraries
- Thin Controllers
- Business Logic in Services
- Presentation Logic in UI
- Data Access through notes-data only

These principles are the foundation of the project and should guide every architectural decision.
