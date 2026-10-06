# Mateo Dental Clinic — Project Overview & Tech Docs

Complete summary of what this app is, how it works, and every tool/service it uses.

---

## What Is This App?

**Mateo Dental Clinic** is a personal project — a full-stack dental clinic management and online booking platform. It is a single-tenant deployment of the **Petora Smile** platform — a multi-tenant SaaS built for dental clinics in the Philippines. Built as a solo developer project to demonstrate full-stack capabilities across booking systems, clinical records, payment integration, AI chat, and multi-role access control.

The app serves three user groups:

1. **Patients** — book appointments online, manage family members, view dental records, chat with the clinic, receive reminders via email/SMS.
2. **Clinic Staff** (owner, dentists, receptionist, cashier) — manage appointments, patients, invoices, services, schedules, equipment, supplies, and run reports.
3. **Admin** — platform-level administration (merchant approvals, feature flags, audit logs).

---

## Tech Stack

| Layer | Tool | Purpose |
|---|---|---|
| **Framework** | Next.js 15.5 (App Router) | Full-stack React framework — SSR, API routes, server actions |
| **Language** | TypeScript 5.7 | Type safety across the entire codebase |
| **UI Library** | React 19 | Component rendering |
| **Styling** | Tailwind CSS 3.4 | Utility-first CSS |
| **UI Components** | Radix UI (dialog, popover, select, tabs, toast, etc.) | Accessible, unstyled headless components |
| **Component Variants** | class-variance-authority (CVA) + tailwind-merge | Variant-based component styling via `shadcn/ui` patterns |
| **Icons** | Lucide React | SVG icon library |
| **Forms** | React Hook Form + Zod | Form state management + schema validation |
| **Auth** | NextAuth v5 (beta 25) + bcryptjs + jose | Credentials-based auth, JWT sessions, password hashing |
| **Database** | PostgreSQL 16 (via Docker) | Primary data store |
| **ORM** | Prisma 6.1 | Type-safe database access, migrations, schema management |
| **AI** | Anthropic Claude SDK (`@anthropic-ai/sdk`) | AI receptionist for patient chat |
| **Payments** | PayMongo | Online payments, booking deposits, invoice payments (PH-based) |
| **Email** | Resend | Transactional email delivery (appointment confirmations, reminders) |
| **SMS** | Semaphore | SMS notifications & reminders (PH-based provider) |
| **Dates** | date-fns + date-fns-tz | Date manipulation and timezone handling (Asia/Manila) |
| **IDs** | nanoid | Short, URL-safe unique IDs |
| **Toasts** | Sonner | Toast notification UI |
| **Deployment** | Vercel | Hosting, serverless functions, cron jobs |
| **Containerization** | Docker Compose | Local Postgres for development |

### Dev/Testing Tools

| Tool | Purpose |
|---|---|
| Vitest | Unit & integration tests |
| Playwright | End-to-end browser tests |
| Testing Library (React) | Component testing utilities |
| ESLint (Next.js config) | Linting |
| tsx | TypeScript script runner (seeds, admin scripts) |
| dotenv-cli | Environment-specific script execution |
| PostCSS + Autoprefixer | CSS processing pipeline |

---

## Project Structure

```
mateo-dental/
├── app/                    # Next.js App Router pages & API
│   ├── page.tsx            # Landing page (rewritten to /clinics/mateo-dental in single-tenant)
│   ├── auth/               # Login, register, forgot/reset password
│   ├── clinics/            # Public clinic pages + booking flow
│   ├── account/            # Patient portal (appointments, records, chat, family, settings)
│   ├── m/                  # Merchant dashboard (30+ subpages)
│   ├── admin/              # Platform admin panel
│   ├── api/                # API routes
│   │   ├── v1/             # REST API (appointments, patients, chat, invoices, etc.)
│   │   ├── cron/           # Scheduled jobs (reminders every 5 min)
│   │   ├── webhooks/       # PayMongo webhook receiver
│   │   ├── m/              # Merchant-specific API endpoints
│   │   └── health/         # Health check endpoint
│   ├── pay/                # Payment pages
│   ├── plan/               # Treatment plan acceptance (public links)
│   ├── review/             # Post-visit review submission (public links)
│   └── uploads/            # File upload handling
├── components/             # Reusable React components
│   ├── ui/                 # shadcn/ui base components (button, dialog, input, etc.)
│   ├── booking/            # Booking flow components
│   ├── dashboard/          # Merchant dashboard widgets
│   ├── merchant/           # Merchant-facing components
│   ├── account/            # Patient account components
│   ├── charts/             # Dental chart visualization
│   ├── chat/               # Chat interface
│   ├── auth/               # Auth form components
│   └── public/             # Public-facing components (landing, reviews)
├── lib/                    # Shared business logic & utilities
│   ├── ai/                 # AI receptionist (Claude-powered chat)
│   ├── api/                # API client helpers
│   ├── notifications/      # Email, SMS, push notification dispatchers
│   ├── auth.ts             # NextAuth configuration
│   ├── prisma.ts           # Prisma client singleton
│   ├── slots.ts            # Appointment slot availability engine
│   ├── schedule.ts         # Dentist schedule management
│   ├── dental-chart.ts     # Dental chart data logic
│   ├── treatment-plans.ts  # Treatment plan workflows
│   ├── paymongo.ts         # PayMongo payment integration
│   ├── recall.ts           # Overdue visit recall system
│   ├── permissions.ts      # Role-based permission checks
│   ├── tenant.ts           # Single-tenant / multi-tenant logic
│   ├── feature-flags.ts    # Feature flag system
│   ├── equipment.ts        # Equipment tracking
│   ├── storage.ts          # File storage
│   └── ...                 # 30+ more utility modules
├── prisma/
│   ├── schema.prisma       # Database schema (44 models)
│   └── seed.ts             # Database seeder
├── scripts/                # CLI utilities
│   ├── seed-mateo-dental.ts    # Seed clinic data
│   ├── create-admin.ts         # Create admin user
│   ├── dev-all.sh              # Start all dev services
│   └── stop-all.sh             # Stop all dev services
├── tests/                  # Test suites
│   ├── unit/               # Vitest unit tests
│   ├── integration/        # Vitest integration tests
│   └── e2e/                # Playwright E2E tests (if present)
├── docs/                   # Documentation
├── middleware.ts            # Auth middleware (route protection)
├── next.config.ts           # Next.js config (single-tenant rewrites)
├── docker-compose.yml       # Local Postgres container
├── vercel.json              # Vercel cron job config
└── package.json             # Dependencies & scripts
```

---

## Database Schema (44 Prisma Models)

The data model covers the full clinic workflow:

| Category | Models |
|---|---|
| **Auth & Users** | User, Account, Session, VerificationToken |
| **Clinic** | Merchant, MerchantBranch, Subscription |
| **Clinical** | Service, Dentist, DentistService, DentistBlock, Patient, FamilyMember |
| **Appointments** | Appointment, WaitlistEntry |
| **Billing** | Invoice, InvoiceItem, Payment |
| **Clinical Records** | TreatmentNote, ToothRecord, OrthoRecord, OrthoAdjustment, PatientDocument, TreatmentPlan, TreatmentPlanItem, Prescription |
| **Communication** | ChatThread, ChatMessage, DeviceToken, NotificationSettings, ReminderJob, BroadcastMessage, SmsUsage |
| **Equipment & Supplies** | Equipment, EquipmentMaintenanceLog, SterilizationCycle, SupplyItem, SupplyMovement |
| **Reviews** | Review |
| **CMS** | LandingPage, PageTemplate |
| **Platform** | FeatureFlag, AuditLog, SupportRequest |

### User Roles

| Role | Access |
|---|---|
| `ADMIN` | Platform-wide admin panel (`/admin`) |
| `MERCHANT_OWNER` | Full merchant dashboard (`/m`) |
| `DENTIST` | Dashboard with clinical focus |
| `STAFF` | Dashboard with general permissions |
| `RECEPTIONIST` | Front desk: booking, patients, chat (no billing) |
| `CASHIER` | Billing only: invoices, payments, refunds |
| `PATIENT` | Patient portal (`/account`) |

---

## How the App Works — Core Flows

### 1. Online Booking
Patient visits the landing page → clicks "Book Now" → selects a service → picks a dentist → chooses an available time slot → fills in personal info → (optional: pays deposit via PayMongo) → appointment is confirmed → email/SMS confirmation sent.

### 2. Appointment Lifecycle
`PENDING` → `CONFIRMED` → `COMPLETED` (or `CANCELLED` / `NO_SHOW`). Each transition triggers notifications. Automated reminders run every 5 minutes via Vercel cron.

### 3. Patient Records
Dental chart (per-tooth status tracking), treatment notes, orthodontic records, prescriptions, medical info, and document uploads (X-rays, photos).

### 4. Invoicing & Payments
Staff creates invoices tied to appointments → adds line items (services, materials) → patient pays via PayMongo link or in-person → PayMongo webhook auto-marks payment as complete.

### 5. AI Chat (Claude Receptionist)
Patients chat with the clinic through the app. An AI receptionist (powered by Anthropic Claude) handles common questions (hours, services, pricing) and can assist with booking.

### 6. Notifications
Multi-channel: **Email** (Resend), **SMS** (Semaphore), **Push** (web push). Notification preferences are per-patient. Reminders, confirmations, recall notices, broadcast messages, and review requests are all dispatched through a unified notification bus.

### 7. Recall System
Tracks patients who are overdue for visits and sends automated outreach via email/SMS to bring them back.

### 8. Landing Page CMS
Merchant can customize their public landing page (hero, services, team, reviews, FAQ, contact) from the dashboard without touching code.

---

## Merchant Dashboard (`/m`) — All Sections

| Section | What It Does |
|---|---|
| `/m` (home) | Overview dashboard with stats |
| `/m/calendar` | Visual appointment calendar |
| `/m/appointments` | Appointment list + management |
| `/m/patients` | Patient directory + records |
| `/m/dentists` | Dentist profiles + schedules |
| `/m/services` | Service catalog management |
| `/m/invoices` | Invoice creation + payment tracking |
| `/m/billing` | Billing overview |
| `/m/schedule` | Clinic schedule configuration |
| `/m/staff` | Staff member management |
| `/m/chat` | Patient chat threads |
| `/m/reviews` | Patient review management |
| `/m/prescriptions` | Prescription management |
| `/m/recall` | Overdue patient outreach |
| `/m/waitlist` | Waitlist management |
| `/m/broadcasts` | Bulk message broadcasting |
| `/m/equipment` | Equipment tracking + maintenance logs |
| `/m/supplies` | Supply inventory management |
| `/m/landing` | Landing page editor (CMS) |
| `/m/settings` | Clinic settings |
| `/m/branches` | Multi-branch management |
| `/m/reports` | Reports & analytics |
| `/m/analytics` | Analytics dashboard |
| `/m/audit` | Audit log viewer |
| `/m/notifications` | Notification settings |
| `/m/sms-usage` | SMS usage tracking + billing |
| `/m/support` | Support & feedback |

---

## API Routes

### REST API (`/api/v1/`)
- `/api/v1/appointments` — CRUD appointments
- `/api/v1/patients` — Patient management
- `/api/v1/chat` — Chat messages
- `/api/v1/invoices` — Invoice operations
- `/api/v1/clinics` — Clinic info
- `/api/v1/auth` — Auth endpoints
- `/api/v1/devices` — Push notification device tokens
- `/api/v1/overview` — Dashboard overview data

### Internal APIs
- `/api/cron/reminders` — Runs every 5 min (Vercel cron), dispatches upcoming appointment reminders
- `/api/webhooks/paymongo` — Receives PayMongo payment events, auto-marks invoices as paid
- `/api/health` — Health check endpoint

---

## Environment & Ports

| Port | Service |
|---|---|
| **4848** | Next.js dev server |
| **4855** | Prisma Studio (DB browser) |
| **4859** | Playwright test report |
| **5544** | PostgreSQL (Docker) |

---

## Key npm Scripts

```bash
# Development
npm run dev              # Start dev server on :4848
npm run dev:all          # Start all services (app + DB)

# Database
npm run db:up            # Start Postgres container
npm run db:push          # Push schema to database
npm run db:studio        # Open Prisma Studio
npm run db:seed          # Seed database

# Testing
npm test                 # Run Vitest in watch mode
npm run test:unit        # Unit tests only
npm run test:integration # Integration tests only
npm run test:e2e         # Playwright E2E tests
npm run test:coverage    # Coverage report

# Build & Deploy
npm run build            # Production build
npm run lint             # ESLint
npm run typecheck        # TypeScript type check
```

---

## Deployment

- Hosted on **Vercel** — auto-deploys from `main` branch
- Database on **Railway / Neon / Supabase** (PostgreSQL)
- Single-tenant mode via `SINGLE_TENANT_SLUG=mateo-dental` env var
- Cron job configured in `vercel.json` (reminders every 5 min)
- PayMongo webhook URL configured in PayMongo dashboard

---

## Single-Tenant Mode

When `SINGLE_TENANT_SLUG=mateo-dental` is set:
- `/` shows Mateo Dental's landing page directly (not a marketplace)
- `/clinics` directory and `/onboard` redirect to `/`
- Header/footer show Mateo Dental branding instead of "Petora Smile"
- Unset the env var to go back to multi-tenant marketplace mode

---

## Third-Party Integrations

| Service | What For | Config |
|---|---|---|
| **PayMongo** | Online payments (deposits, invoices) — PH payment gateway | `PAYMONGO_SECRET_KEY`, `PAYMONGO_WEBHOOK_SECRET` |
| **Resend** | Transactional emails (confirmations, reminders, password reset) | `RESEND_API_KEY`, `EMAIL_FROM` |
| **Semaphore** | SMS notifications (PH carrier) | `SEMAPHORE_API_KEY`, `SEMAPHORE_SENDER_NAME` |
| **Anthropic Claude** | AI receptionist chatbot | `@anthropic-ai/sdk` in dependencies |
| **Vercel** | Hosting + serverless + cron | `vercel.json` |
| **Cloudinary** | Image hosting (allowed in `next.config.ts`) | Remote pattern configured |
| **Docker** | Local Postgres container | `docker-compose.yml` |

---

## Quick Setup (Local Dev)

```bash
# 1. Install dependencies
npm install

# 2. Start Postgres
docker compose up -d postgres

# 3. Create .env file with required vars:
#    DATABASE_URL=postgresql://petora:petora@localhost:5544/petora_smile
#    AUTH_SECRET=<random-32-char-string>
#    NEXTAUTH_URL=http://localhost:4848
#    NEXT_PUBLIC_APP_URL=http://localhost:4848
#    SINGLE_TENANT_SLUG=mateo-dental

# 4. Push schema to database
npm run db:push

# 5. Seed clinic data
npx tsx scripts/seed-mateo-dental.ts

# 6. Start dev server
npm run dev
# → http://localhost:4848
```

Default dev login: `owner@mateodental.local` / `owner1234`
