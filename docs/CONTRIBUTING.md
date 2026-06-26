# Contributing Guide

Thank you for contributing to the Notes System.

This document explains the development workflow, Git conventions, code review process, and contribution standards followed by the team.

Every contributor is expected to read this document before opening a Pull Request.

---

# Development Workflow

Every feature should follow the standard development lifecycle.

```text
Issue
    │
    ▼
Create Branch
    │
    ▼
Implement Feature
    │
    ▼
Local Testing
    │
    ▼
Commit Changes
    │
    ▼
Push Branch
    │
    ▼
Open Pull Request
    │
    ▼
Code Review
    │
    ▼
Merge
```

---

# Branch Naming Convention

Use meaningful branch names.

## Feature

```text
feature/notes-crud
feature/user-authentication
feature/task-management
```

## Bug Fix

```text
fix/login-validation
fix/navbar-layout
fix/query-timeout
```

## Hotfix

```text
hotfix/security-patch
```

## Refactor

```text
refactor/data-layer
refactor/auth-service
```

Avoid

```text
test
new
abc
feature1
mybranch
```

---

# Commit Message Convention

Use clear commit messages.

Examples

```text
feat: add notes CRUD API

feat: implement authentication

fix: resolve login validation issue

refactor: simplify notes service

docs: update architecture guide

style: format project

test: add notes controller tests

chore: update dependencies
```

Avoid

```text
done

updated

changes

fix

test
```

---

# Pull Request Checklist

Before opening a Pull Request, verify:

- Project builds successfully
- Type checking passes
- Linting passes
- Formatting passes
- No console logs remain
- No unused imports
- Documentation updated if required
- Feature tested locally

---

# Code Review Guidelines

Reviewers should verify:

## Architecture

- Correct package used
- Responsibilities respected
- Dependency flow maintained

---

## Code Quality

- Readable code
- Meaningful variable names
- No duplicated logic
- Small focused functions

---

## Backend

Verify

- Validation exists
- Business logic in services
- Thin controllers
- Proper error handling

---

## Frontend

Verify

- Components reusable
- No API calls in UI
- Correct hooks used
- Proper loading and error states

---

## Data Layer

Verify

- API clients implemented correctly
- Queries reusable
- Mutations reusable
- Types shared

---

# Merge Rules

A Pull Request should not be merged until:

- Approved by at least one reviewer
- CI passes
- No merge conflicts
- Documentation updated
- Requested changes resolved

---

# Before Starting a Feature

Always pull the latest changes.

```bash
git checkout main

git pull origin main
```

Create a new feature branch.

```bash
git checkout -b feature/<feature-name>
```

---

# Before Opening a Pull Request

Run

```bash
pnpm typecheck

pnpm lint

pnpm format

pnpm build
```

Fix any issues before creating the Pull Request.

---

# Dependency Rules

If adding a dependency:

- Install it in the package that needs it.
- Do not install project-wide dependencies unnecessarily.
- Prefer existing shared packages before introducing new libraries.

Examples

Workspace tool

```bash
pnpm add -Dw prettier
```

Frontend

```bash
cd apps/notes-web

pnpm add axios
```

Backend

```bash
cd apis/notes-api

pnpm add @nestjs/swagger
```

---

# Documentation

Whenever a change affects:

- Architecture
- Folder structure
- Development workflow
- Setup
- Team rules

Update the corresponding document inside the `docs/` directory.

Documentation should evolve with the codebase.

---

# Communication

If a change requires:

- Breaking architecture
- Adding a new shared package
- Introducing a new dependency
- Changing project conventions

Discuss it with the team before implementation.

Avoid architectural surprises in Pull Requests.

---

# Issue Tracking

Every feature should be linked to an issue or task.

Example

```text
Issue #24

Implement Notes CRUD API
```

Pull Requests should reference the corresponding issue whenever possible.

---

# Best Practices

- Keep Pull Requests focused on a single feature or fix.
- Prefer small, reviewable changes over large batches.
- Reuse existing packages and utilities before creating new ones.
- Write self-explanatory code rather than relying on comments.
- Update tests and documentation alongside functional changes.

---

# Team Values

We value:

- Clean architecture
- Consistent code
- Simplicity
- Collaboration
- Maintainability
- Knowledge sharing
- Continuous improvement

Every contribution should make the project easier to understand and maintain.

---

# Final Note

The goal of this repository is not only to build features, but to build them in a way that any developer can understand, extend, and maintain.

When in doubt, choose the solution that is the simplest, most consistent, and easiest for the next developer to work with.
