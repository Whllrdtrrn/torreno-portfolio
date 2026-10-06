# FitPass (Anvesso) — Project Overview

AI-powered active lifestyle platform for the Philippines. Discover and book gyms, studios, courts, coaches, and recovery services nearby — then track workouts, activities, food, body progress, and recovery in one app.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Mobile | React Native + Expo SDK 57, Expo Router, TanStack Query, Zustand, MMKV |
| Web | Next.js 15 (App Router), Tailwind CSS v4, Radix primitives |
| Backend | NestJS 11, Node.js 22 LTS |
| Database | PostgreSQL 16 + PostGIS, Prisma 6 (split schema per domain) |
| Cache/Queues | Redis 7, BullMQ |
| Infra | Fly.io (API), Vercel (web), EAS (mobile), Railway/Neon (Postgres) |
| CI/CD | GitHub Actions, Playwright (E2E), Jest, Vitest |
| Monitoring | Sentry (errors), PostHog (analytics) |
| Package Manager | pnpm 10, Turbo (monorepo) |

---

## Monorepo Structure

```
anvesso-pass/
├── apps/
│   ├── mobile/        # Expo React Native app (5-tab shell)
│   ├── web/           # Next.js public website (landing, partner form, legal)
│   ├── business/      # Next.js partner portal (check-in, inventory, payouts)
│   ├── admin/         # Next.js internal admin portal (support, fraud, settings)
│   └── api/           # NestJS modular monolith (HTTP + BullMQ worker)
│
├── packages/
│   ├── contracts/     # Zod schemas — single source of truth for DTOs, enums, errors
│   ├── api-client/    # Typed HTTP client (RN + browser)
│   ├── mobile-ui/     # React Native design system (primitives, patterns, Lucide icons)
│   ├── ui/            # Web design system (React + Tailwind + Radix)
│   ├── tokens/        # Platform-agnostic design tokens (JSON + TS -> CSS vars + RN theme)
│   ├── config/        # Env schema (Zod), shared constants
│   ├── analytics/     # PostHog event wrappers (RN + web)
│   ├── auth/          # Token/permission helpers
│   ├── eslint-config/ # Shared ESLint rules
│   └── tsconfig/      # Shared TypeScript configs
│
├── infra/             # Docker Compose (Postgres, Redis, MinIO, Mailpit) + native fallback script
├── docs/              # Architecture, ADRs, product, database, security, roadmap, deployment
├── e2e/               # Playwright tests (public site, Business, Admin)
└── tools/             # Build and utility scripts
```

---

## Backend Architecture (Modular Monolith)

Two processes from one NestJS codebase:
- **`main.ts`** — HTTP API server
- **`worker.ts`** — BullMQ consumer + cron jobs

### Module Layout (per bounded context)

```
modules/<domain>/
├── http/              # Controllers, OpenAPI decorators, request mapping
├── application/       # Use-case services, transactions
├── domain/            # Pure TS (state machines, rules, domain errors, events)
├── infra/             # Prisma repos, locks, external calls
└── __tests__/         # Unit tests
```

### Key Modules (32 bounded contexts)

| Module | Purpose |
|--------|---------|
| auth | Email/password, OAuth (Google/Apple), OTP, sessions |
| users | Profiles, onboarding, devices, goals, preferences |
| partners | Brands, organizations, locations, categories, staff RBAC |
| scheduling | Services, resources, recurring rules, slot materialization |
| availability | Read-optimized slot queries (Redis-cached), capacity math |
| bookings | Hold -> pay -> confirm -> check-in state machine, waitlist schema |
| payments | PayMongo + mock adapters, webhooks, refunds, receipts |
| finance | Partner earnings, payouts, adjustments (append-only ledger) |
| discovery | Geo-search (PostGIS), filters, Home feed composition |
| reviews | Verified reviews (completed bookings only), moderation |
| activities | Manual activity logging (type, duration, intensity) |
| workouts | Exercise library, programs, sets, PRs |
| nutrition | Targets, meals, AI food scans |
| progress | Weight, measurements, photos |
| ai | Context builder, conversations, weekly reports |
| admin | User/partner/booking management, feature flags |
| notifications | Push (Expo), email (Resend), in-app templates |

---

## Key Architectural Patterns

1. **Shared Contracts** — `@fitpass/contracts` is the single source of truth for all DTOs, enums, error codes. Zod schemas define; TypeScript types are inferred. Shared across all apps.

2. **Outbox + BullMQ** — Domain events written to `outbox_events` table inside the same transaction. Relay publishes to BullMQ. All consumers are idempotent.

3. **Provider Abstraction** — Every external dependency (payment, maps, email, push, AI, storage) is behind an interface with real + mock adapters. Swap via config.

4. **PostGIS Geo-search** — `locations.geog` as `geography(Point,4326)` with GIST index. Raw SQL confined to discovery module.

5. **Server-Driven Home** — `GET /home` returns ordered typed modules; client renders known types, ignores unknown.

6. **Financial Immutability** — Money as integer minor units (centavos). Prices/terms snapshotted into booking at creation. Earnings are append-only.

7. **Prisma Split Schema** — One `.prisma` file per domain (24 files in `apps/api/prisma/schema/`). Single migration history.

---

## Design System: "Quiet Premium"

- **Typography:** Geist (UI/numbers), Instrument Serif (editorial accents)
- **Color:** Minimalist palette, single accent color (Volt)
- **Direction:** Photography + numbers carry energy; UI stays quiet
- **Pipeline:** Tokens -> Primitives -> Patterns -> Screens

---

## Development

### Local Setup

```bash
# With Docker
pnpm infra:up

# Without Docker (native Postgres + Redis)
bash infra/scripts/local-db.sh start

# Install, migrate, seed, start
pnpm install
pnpm --filter @fitpass/api prisma:migrate
pnpm --filter @fitpass/api prisma:seed
pnpm dev
```

### Quality Gates

```bash
pnpm check        # lint + typecheck + test + build
pnpm test          # Jest (API) + Vitest (packages)
pnpm test:e2e      # Playwright (public site, Business, Admin)
```

### CI Pipeline (GitHub Actions)

1. **Quality** — lint, typecheck, unit tests, build
2. **API Integration** — Jest against real Postgres + Redis
3. **E2E** — Playwright with live API/web apps

---

## Deployment

| Target | Platform | Trigger |
|--------|----------|---------|
| API (staging) | Fly.io (`fitpass-api-staging`) | `deploy-staging.yml` |
| API (production) | Fly.io | `deploy-production.yml` |
| Web apps | Vercel | Auto-deploy on push |
| Mobile | EAS (Expo) | `mobile-build.yml` |

API runs 2 process groups on Fly.io: `api` (HTTP) and `worker` (BullMQ).

---

## Pricing (Phase 1)

| Plan | Price | Credits |
|------|-------|---------|
| Free | PHP 0 | Pay-per-booking |
| Active | PHP 499/mo | 6 credits |
| Pro | PHP 899/mo | 12 credits |
| Max | PHP 1,399/mo | 20 credits |

All paid plans unlock all features.

---

## Roadmap (16 Phases)

| Phase | Focus |
|-------|-------|
| 1 | Marketplace MVP (bookings, payments, check-in, discovery) |
| 2 | Public venue pages, non-partner discovery |
| 3 | Workout tracking, exercise library, PRs |
| 4 | Social features |
| 5 | Nutrition tracking, AI food scans |
| 6 | Body progress tracking |
| 7 | AI coach, weekly reports |
| 8 | Wearable integrations |
| 9 | Credits & subscriptions |
| 10-16 | Corporate, referrals, rewards, SaaS tools, and more |

---

## Documentation

| File | Content |
|------|---------|
| `docs/ARCHITECTURE.md` | System context, apps, modules, request pipeline |
| `docs/DECISIONS.md` | 30+ ADRs (architecture decision records) |
| `docs/DATABASE.md` | Schema conventions, domain boundaries, entities |
| `docs/PRODUCT.md` | Personas, feature map, Phase 1 scope, success metrics |
| `docs/DESIGN_SYSTEM.md` | Tokens, primitives, patterns, "Quiet Premium" direction |
| `docs/BUILD_PROGRESS.md` | Phase 1 task breakdown and completion tracking |
| `docs/DEPLOY.md` | Fly.io setup, CI/CD, secrets, environment promotion |
| `docs/SECURITY.md` | Privacy, encryption, 2FA, audit logs |
| `docs/ROADMAP.md` | 16-phase roadmap |
