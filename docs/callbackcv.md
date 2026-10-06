# CallbackCV — How It Works

> ATS-friendly resume builder for the Philippine job market. One account gives you: resume builder (76 templates), cover letters, tracked resume links, video intros, email signatures, and a PDF editor.
>
> **Status: NOT YET DEPLOYED — running locally only. No live/production site yet.**

---

## Interview Cheat Sheet

### One-Liner (Elevator Pitch)

> "CallbackCV is a full-stack resume builder I built for the Philippine job market — it lets job seekers create ATS-optimized resumes from 76 templates, generate PDFs using headless Chromium, track when recruiters open their resume, record video intros with virtual backgrounds, and pay with GCash or Maya."

### Project Summary (30 seconds)

"I built CallbackCV as a personal project to solve a real problem — most Filipino job seekers don't have access to good, ATS-friendly resume tools. It's a full-stack Next.js 15 app with React 19 and TypeScript. The resume data is stored as JSON in SQLite through Prisma, and the same React components that render the live preview are also used by Playwright to generate pixel-perfect PDFs. I implemented a real-time ATS checker with 35 deterministic rules, a three-way merge system so edits sync across multiple resumes, and a complete payment flow using PayMongo for GCash and Maya. The app also supports video intros with MediaPipe-powered virtual backgrounds, tracked resume links with view analytics, email signatures, and a client-side PDF editor."

### Why I Built This (Objective / Motivation)

"I wanted to build something end-to-end that solves a real problem. Resume builders exist, but most are expensive, don't support Philippine payment methods, and produce resumes that fail ATS scans. I used this project to deepen my skills in server-side rendering, real-time document editing, PDF generation, payment integration, and building a complete SaaS product from scratch — auth, billing, storage, email, admin, the works."

### Key Technical Decisions (Things Interviewers Ask About)

**Q: Why SQLite instead of Postgres?**
"For an early-stage single-instance app, SQLite is simpler to deploy and back up — it's just one file. The schema is designed to be swappable to Postgres later by just changing the Prisma provider."

**Q: How does the PDF generation work?**
"The same React components that render the live preview are used for the PDF. Playwright launches headless Chromium, navigates to a print route, waits for fonts to load and layout to stabilize, then calls page.pdf(). The DOM order matches reading order, which is what makes the PDFs parseable by ATS systems."

**Q: How do you handle concurrent edits / multiple resumes?**
"I implemented a three-way merge — when you save, the server compares your changes against the base version you started from. If someone else (or another tab) saved in between, it merges non-conflicting changes. Person-level facts like name and contacts also propagate across all your resumes automatically."

**Q: How does the ATS scoring work?**
"It's fully deterministic — no AI. 35 rules check structure (missing sections, headings), content (bullet quality, action verbs, measurable impact), language (cliches, AI-sounding phrases, tense), timeline (gaps, chronological order), and formatting. Each check is weighted and produces a 0-100 score."

**Q: How do payments work?**
"PayMongo handles GCash, Maya, and card payments. I create a checkout session, redirect the user to PayMongo's hosted page, then fulfillment happens from either a webhook or the success page polling — whichever fires first. The fulfill function is idempotent using an atomic database update, so it runs exactly once even if both paths trigger."

**Q: What was the hardest part?**
"The resume rendering pipeline — making one set of React components work for live preview, thumbnails, and pixel-perfect PDF output while maintaining correct reading order for ATS parsing. Getting pagination right with keep-together rules (headings can't be orphaned from their content) and two-column layouts was especially tricky."

### Features You Can Highlight

| Feature | What to say |
|---|---|
| 76 resume templates | "I built a template system where each template is a React component with its own design defaults, and they all share the same rendering pipeline" |
| Live ATS scoring | "35 deterministic checks that run on every keystroke — no AI, fully explainable, with one-click auto-fixes" |
| PDF generation | "Playwright renders the same React components to PDF via headless Chromium — what you see is what you get" |
| Three-way merge | "Multi-resume sync with three-way merge, inspired by how Git handles conflicts" |
| Video intros | "Browser-based recording with MediaPipe for virtual backgrounds and eye contact correction — all on-device" |
| Tracked links | "Recruiters open a link, the owner gets notified with device info, referrer, and time spent" |
| PayMongo payments | "GCash, Maya, and cards — idempotent fulfillment from webhook or success page, whichever fires first" |
| Scrypt auth | "No third-party auth — custom session system with scrypt hashing, hashed tokens, rate limiting, CSRF protection" |
| Content-addressed storage | "Images are SHA-hashed and deduplicated — same image stored once, URL cacheable forever" |

### Tech Stack Quick Reference (for interviews)

**Frontend:** Next.js 15, React 19, TypeScript, Tailwind CSS, Zustand + Immer, dnd-kit
**Backend:** Next.js Route Handlers, Prisma 5, SQLite
**PDF:** Playwright (headless Chromium)
**Video:** MediaRecorder, MediaPipe, ffmpeg
**AI:** OpenAI SDK → Gemini or GPT-4o-mini (optional)
**Payments:** PayMongo (GCash, Maya, cards)
**Email:** Resend
**Storage:** Cloudflare R2 (S3-compatible) or local disk
**Testing:** Vitest (208 tests)
**Deploy-ready:** Docker + Railway (not yet deployed)

---

## Table of Contents

1. [What is CallbackCV?](#1-what-is-callbackcv)
2. [Tech Stack & Tools Used](#2-tech-stack--tools-used)
3. [Project Structure](#3-project-structure)
4. [How the App Starts](#4-how-the-app-starts)
5. [Authentication Flow](#5-authentication-flow)
6. [Resume Builder — Core Feature](#6-resume-builder--core-feature)
7. [PDF Generation](#7-pdf-generation)
8. [ATS Scoring](#8-ats-scoring)
9. [Template System](#9-template-system)
10. [Multi-Resume Sync](#10-multi-resume-sync)
11. [Cover Letters](#11-cover-letters)
12. [Tracked Resume Links](#12-tracked-resume-links)
13. [Video Intros](#13-video-intros)
14. [Email Signatures](#14-email-signatures)
15. [PDF Editor](#15-pdf-editor)
16. [AI Features](#16-ai-features)
17. [Billing & Payments](#17-billing--payments)
18. [File Storage](#18-file-storage)
19. [Email System](#19-email-system)
20. [Database & Backups](#20-database--backups)
21. [Admin Console](#21-admin-console)
22. [Security](#22-security)
23. [Deployment](#23-deployment)
24. [Local Development Setup](#24-local-development-setup)

---

## 1. What is CallbackCV?

CallbackCV is a web app na tumutulong sa job seekers (lalo na sa Philippines) na gumawa ng professional, ATS-friendly resume. Hindi lang siya resume builder — may kasamang:

- **Resume Builder** — 76 designer templates, live ATS score, drag-and-drop sections
- **Cover Letters** — matches the design ng resume mo
- **Tracked Resume Links** — makikita mo kung kailan binuksan ng recruiter yung resume mo
- **Video Intros** — record mo sarili mo sa browser, may virtual background at teleprompter
- **Email Signatures** — table-based HTML na gumagana sa Gmail, Outlook, Apple Mail
- **PDF Editor** — edit text ng existing PDF sa browser (never leaves your device)
- **AI Writing** — AI-powered bullet points, summaries, captions (optional)

**Business model:** Free plan (1 resume, 12 templates) + prepaid Pro passes (7 days to 1 year), paid via GCash, Maya, or card through PayMongo. No auto-renew.

---

## 2. Tech Stack & Tools Used

### Core Framework & Language

| Tool | Version | What it does |
|---|---|---|
| **Next.js** | 15 (App Router) | Full-stack React framework — server components for pages, route handlers for APIs |
| **React** | 19 | UI library — server and client components |
| **TypeScript** | Throughout | Type safety across the entire codebase |

### Frontend / UI

| Tool | What it does |
|---|---|
| **Tailwind CSS 3** | Utility-first CSS framework for all styling |
| **Zustand + Immer** | State management for the resume editor (with undo/redo history) |
| **dnd-kit** | Drag-and-drop for sections, entries, and bullets |
| **Inter** (font) | UI font |
| **Playfair Display** (font) | Heading font for marketing pages |

### Database

| Tool | What it does |
|---|---|
| **Prisma 5** | ORM — schema definition, queries, migrations |
| **SQLite** | Database engine — single file (`dev.db` locally, `/data/app.db` in production) |

### PDF & Document Processing

| Tool | What it does |
|---|---|
| **Playwright** | Headless Chromium browser — renders resume pages to PDF |
| **pdf-lib** | In-browser PDF editing (text layer manipulation) |
| **pdfjs-dist** (PDF.js) | PDF rendering and text extraction in the browser |
| **mammoth** | DOCX file parsing for resume import |

### Video & Media

| Tool | What it does |
|---|---|
| **MediaRecorder API** | Browser-native video recording |
| **MediaPipe Tasks Vision** | AI-powered person segmentation for virtual backgrounds |
| **MediaPipe Face Landmarks** | Eye contact correction (moves pupils toward camera) |
| **Web Speech API** | Live captions during recording |
| **ffmpeg** (optional) | Video remuxing, trimming, format conversion |

### AI

| Tool | What it does |
|---|---|
| **OpenAI SDK** (`openai` npm package) | Unified client for AI calls |
| **Google Gemini** (preferred) | AI writing — summaries, bullet points, captions. Uses OpenAI-compatible endpoint |
| **OpenAI GPT-4o-mini** (fallback) | Fallback when Gemini key not set |

### Payments

| Tool | What it does |
|---|---|
| **PayMongo** | Philippine payment gateway — GCash, Maya, credit/debit cards |

### Email

| Tool | What it does |
|---|---|
| **Resend** | Transactional email API (verification, receipts, product updates) |

### File Storage

| Tool | What it does |
|---|---|
| **Cloudflare R2** | S3-compatible object storage for videos and images (production) |
| **Local disk** (`uploads/`) | Default file storage for development |
| **AWS SigV4** (custom impl) | R2 request signing — no AWS SDK needed |

### Validation & Schema

| Tool | What it does |
|---|---|
| **Zod** | Runtime validation — every API body, every JSON document from the database |

### Testing

| Tool | What it does |
|---|---|
| **Vitest** | Test runner — 208 tests covering schema, pagination, sync, ATS, auth, billing, storage, etc. |

### Deployment & Infrastructure

| Tool | What it does |
|---|---|
| **Docker** | Container image based on `mcr.microsoft.com/playwright` (includes Node + Chromium) |
| **Railway** | Cloud hosting — auto-deploys on push to `master` |
| **GitHub** | Source control — repo `tdhenmark1999/callbackcv` |

### Development Tools

| Tool | What it does |
|---|---|
| **ESLint** | Code linting |
| **PostCSS** | CSS processing (required by Tailwind) |
| **tsx** | TypeScript execution for scripts |

---

## 3. Project Structure

```
callbackcv/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── (marketing)/          # Landing page, SEO feature pages (public)
│   │   ├── (auth)/               # /login, /signup, /verify, /forgot, /reset
│   │   ├── (app)/                # Authenticated app: /home, /builder, /videos, etc.
│   │   ├── editor/[id]/          # Resume editor (full screen)
│   │   ├── letters/[id]/         # Cover letter editor
│   │   ├── signatures/[id]/      # Signature editor
│   │   ├── videos/new/           # Video recorder
│   │   ├── pdf-editor/           # In-browser PDF editor
│   │   ├── print/[id]/           # Print page (Chromium renders this to PDF)
│   │   ├── r/[slug]/             # Public shared resume (tracked link)
│   │   ├── v/[id]/               # Public video player
│   │   ├── admin/                # Admin console
│   │   └── api/                  # All API route handlers
│   │
│   ├── resume/                   # Resume engine
│   │   ├── schema/               # ResumeData types, Zod validation, defaults
│   │   ├── templates/            # 76 templates + registry + certification
│   │   ├── blocks/               # Content compiler (ResumeData -> blocks)
│   │   ├── pagination/           # Block packing into pages
│   │   ├── renderer/             # React components: ResumeDocument, PageView
│   │   ├── ats/                  # ATS analyzer (35 checks) + auto-fixes
│   │   ├── design/               # Design resolution (3-layer merge)
│   │   ├── store/                # Zustand editor store + actions
│   │   ├── sync.ts               # Three-way merge + cross-resume propagation
│   │   └── server/               # Server-side CRUD + PDF rendering
│   │
│   ├── letter/                   # Cover letter types, rendering, service
│   ├── signature/                # Signature types, HTML renderer, service
│   ├── video/                    # Video service, captions, ffmpeg wrapper
│   ├── share/                    # Tracked links and view analytics
│   ├── pdfedit/                  # In-browser PDF editing
│   ├── writing/                  # Writing checks (AI "tells", weak phrases)
│   ├── marketing/                # Feature page content
│   │
│   ├── components/               # UI components by feature
│   │   ├── resume-builder/       # Editor shell, panels, section editors
│   │   ├── documents/            # Dashboard, thumbnails
│   │   ├── auth/                 # Login/signup forms
│   │   ├── billing/              # Upgrade page, payment flow
│   │   ├── share/                # Tracked links UI
│   │   ├── video/                # Recorder, player, backgrounds
│   │   ├── signature/            # Signature editor UI
│   │   ├── marketing/            # Landing page sections
│   │   └── admin/                # Admin dashboard
│   │
│   ├── lib/
│   │   ├── auth/                 # Sessions, passwords, rate limit, email, verification
│   │   ├── billing/              # PayMongo client and fulfillment
│   │   ├── storage/              # Local/R2 object storage, image externalizing
│   │   ├── email/                # Branded HTML email template builder
│   │   ├── backup/               # SQLite backup service + scheduler
│   │   ├── ai/                   # AI provider config, prompts, resume generation
│   │   ├── admin/                # Admin stats and user management
│   │   ├── account/              # Account settings
│   │   ├── announcements/        # Product update email campaigns
│   │   ├── plans.ts              # Plans, prices, limits (single source of truth)
│   │   └── site.ts               # Site name, URLs, SEO constants
│   │
│   └── middleware.ts             # Edge: CSRF check, auth gate, admin gate
│
├── prisma/
│   ├── schema.prisma             # Database schema (all models)
│   └── dev.db                    # SQLite database file (local)
│
├── scripts/
│   ├── start.sh                  # Production container startup
│   ├── storage-migrate.ts        # Move embedded images to storage
│   └── copy-pdfjs-assets.mjs     # Copy PDF.js WASM to public/
│
├── tests/                        # Vitest test suites
├── public/mediapipe/             # MediaPipe WASM + models
├── Dockerfile                    # Production Docker image
├── railway.json                  # Railway deployment config
└── package.json
```

---

## 4. How the App Starts

### Local Development

```bash
npm install                  # Install deps + prisma generate + copy pdf.js assets
npx playwright install chromium  # Download headless browser for PDF
cp .env.example .env.local   # Set DATABASE_URL="file:./dev.db"
npx prisma db push           # Create SQLite database
npm run dev -- -p 3100       # Start at http://localhost:3100
```

### Production (Docker on Railway)

1. Docker image builds from `mcr.microsoft.com/playwright` (Node + Chromium + ffmpeg)
2. `npm ci` + `next build` creates the production bundle
3. On container start, `scripts/start.sh`:
   - Symlinks `uploads/` to the persistent volume (`/data/uploads/`)
   - Sets `DATABASE_URL=file:/data/app.db`
   - Sets `INTERNAL_BASE_URL=http://127.0.0.1:$PORT` (so Playwright connects locally)
   - Takes a pre-deploy database backup
   - Runs `prisma db push` (apply schema changes, additive only)
   - Starts `next start`

---

## 5. Authentication Flow

### Signup

1. User submits name, email, password at `/signup`
2. `POST /api/auth/signup` validates with Zod, rate-limits by IP
3. Password is hashed with **scrypt** (N=32768, r=8, p=1)
4. User row created — **first user becomes owner** (admin)
5. Session started: 32 random bytes → base64url token → SHA-256 hash stored in DB → `rs_session` cookie set
6. Verification email sent (or link shown in dev mode)

### Login

1. `POST /api/auth/login` — rate-limited per IP+email
2. Looks up user, verifies scrypt hash with `timingSafeEqual` (constant-time)
3. If user not found, still runs dummy hash (prevents timing attacks)
4. Session started, cookie set

### Session Validation (every request)

1. `middleware.ts` (Edge) checks cookie exists, blocks cross-site POST (CSRF via Origin header)
2. Page/API calls `getCurrentUser()` → reads cookie → SHA-256 hash → DB lookup → returns user
3. `requireUser()` redirects to `/login` if no session, `/verify` if email not verified

### Password Reset

1. `POST /api/auth/forgot` — always returns success (prevents account enumeration)
2. Emails a one-hour, single-use reset link
3. `POST /api/auth/reset` — sets new password, signs out all devices, marks email verified

---

## 6. Resume Builder — Core Feature

### The Resume Data Model

A resume is a single JSON blob (`ResumeData`) stored in the `Resume.dataJson` column:

```
ResumeData:
  schemaVersion: 1
  personal:        name, headline, contacts, links, photo, video
  summary:         string
  experience[]:    title, employer, location, dates, bullets
  education[]:     degree, school, dates, bullets
  skills[]:        group name + skill list
  projects[]:      name, url, bullets
  + certifications, courses, languages, awards, publications, volunteer, references
  customSections[]
  layout:          sectionOrder, hiddenSections, sectionTitles, columns, sectionStyles
  templateId:      which of the 76 templates
  design:          only user-changed values (merged over template defaults)
  images[]:        free-positioned pictures (page, x/y/w as fractions)
```

### The Editor

The editor at `/editor/[id]` has:

- **Left sidebar** — content panel (edit sections), design panel, ATS panel, job match panel, saved content
- **Right side** — live preview (same React components as the final PDF)
- **Zustand store** — holds resume data + undo/redo history (100 steps)
- Every edit goes through `update(recipe, coalesceKey)` — rapid edits with the same key merge into one undo step (1.2s window)

### Autosave

- Fires 800ms after the last edit
- `PUT /api/builder/resumes/[id]` sends `{data, base}` (base = last server-confirmed copy)
- Server does a **three-way merge** if the stored data changed (another tab saved)
- Server also **propagates** person-level changes to the user's other resumes

### Resume Rendering Pipeline

```
ResumeData
    ↓
buildBlocks()          → ResumeBlock[] (header, headings, entries, bullets, tags)
    ↓
measure off-screen     → each block rendered hidden, height measured via getBoundingClientRect
    ↓
paginate()             → blocks packed into fixed-size pages (A4 or Letter)
    ↓
PageView × N           → final render, one component per page
```

This same pipeline is used for:
- Live editor preview
- Dashboard thumbnails (`maxPages=1`)
- Print route (Playwright turns this into PDF)
- Public share page

---

## 7. PDF Generation

1. User clicks "Download PDF"
2. `GET /api/builder/resumes/[id]/pdf` checks auth + template tier
3. Server launches **Playwright Chromium** (`chromium.launch()`)
4. Navigates to `/print/[id]` with the user's session cookie
5. The print page renders `ResumeDocument` in `mode="print"`:
   - Measures all blocks
   - Waits for all fonts to load (`document.fonts.ready`)
   - Freezes layout
   - Sets `html[data-resume-ready='1']`
6. Playwright waits for that selector, then calls `page.pdf()`:
   - `preferCSSPageSize: true` (respects A4/Letter)
   - `printBackground: true` (colored sidebars, backgrounds)
   - `margin: 0` (the resume handles its own margins)
7. Returns the PDF buffer as a download

**Key insight:** DOM order = reading order = PDF text order. This is what makes the PDFs ATS-parseable. Headers first, then columns left-to-right.

---

## 8. ATS Scoring

`analyzeResume(data, {pageCount})` runs **35 deterministic checks** (no AI, no randomness):

**Structure:** name completeness, email/phone/location present, essential sections exist, standard section headings

**Content:** summary length (20-110 words), job titles + employers present, bullets per role (2+), bullet length (5-35 words), action verbs, measurable impact (numbers/% in 30%+ of bullets)

**Language:** no first-person pronouns, no cliches (30+ banned phrases), no AI-sounding language, active voice, past tense for past roles, verb variety, no duplicate bullets

**Timeline:** valid date ranges, reverse-chronological order, employment gap detection (>6 months)

**Formatting:** consistent bullet punctuation, skill count warnings, photo warning

**Length:** page count (1-2 = pass), word count (150-1000 = pass)

Returns a **score (0-100)** and a list of checks with pass/warn/fail status. Some checks have **auto-fixes** (punctuation, ordering, duplicates) that apply through the store and are undoable.

---

## 9. Template System

76 templates organized in 7 groups: Professional, Elegant, Creative, Photo & Banner, Sidebar, Full-height Column, Split & Magazine.

A `TemplateDefinition` has:
- **meta** — name, categories, ATS level (`optimized` or `visual`)
- **defaults** — base design settings (fonts, colors, margins)
- **spacing** — vertical rhythm in pt
- **layout** — `single` or `columns` (sidebar templates)
- **Block component** — renders one resume block
- **Chrome component** — decorative background (sidebars, shapes), `aria-hidden`

### ATS Certification

`npm run certify` renders every template to a real PDF, extracts text with pdfjs-dist, and checks that all resume content appears in correct reading order. Results saved in `certification.json`. A template only shows the "ATS Verified" badge if it passed.

### Free vs Pro Templates

12 templates are free (`FREE_TEMPLATES` in `plans.ts`). Free users can preview and edit with all 76 templates, but PDF download of a Pro template requires a Pro pass.

---

## 10. Multi-Resume Sync

When you update a resume, person-level facts (name, contacts, jobs, schools, skills) propagate to your other resumes:

- **`merge3(current, base, next)`** — three-way merge on save. Only applies what actually changed since `base`, so a stale editor tab never overwrites newer data.
- **`propagate(other, before, next)`** — if a field in another resume still has the old value, it gets the new one. Deliberately tailored content is left alone.

This means: update your phone number in one resume, it updates everywhere.

---

## 11. Cover Letters

- Created from `/builder`, linked to a resume
- Inherits the resume's template design
- Data stored as `CoverLetterData` JSON in `CoverLetter.dataJson`
- PDF generated via the same Playwright pipeline (`/print/letter/[id]`)
- Pro feature (1 free)

---

## 12. Tracked Resume Links

1. Create a link per company (`POST /api/links`) — Pro feature
2. Recruiter opens `/r/[slug]` — public page showing the resume
3. `POST /api/r/[slug]/view` records the visit (hashed visitor ID, device, referrer)
4. `POST /api/r/[slug]/beat` heartbeats report time on page (capped at 30 min)
5. First open emails the resume owner ("Your resume was just opened")
6. Dashboard shows: views, unique viewers, time spent, PDF downloads

---

## 13. Video Intros

1. `/videos/new` — record in browser (camera, screen+camera, or screen only)
2. **Virtual backgrounds** — MediaPipe segments the person, composites blur/color/image/drawn room
3. **Eye contact correction** — MediaPipe face landmarks move irises toward the camera lens
4. **Teleprompter** — scrolls a script generated from your resume
5. **Live captions** — browser speech recognition
6. Upload as multipart (`POST /api/videos`, 200 MB / 5 min max)
7. Server remuxes with ffmpeg if available (adds duration/seek index)
8. Share at `/v/[id]` — public, private (owner only), or password-protected
9. Byte-range streaming (`/api/v/[id]/stream`) for video seeking
10. Non-destructive trim — player enforces trim points; downloads cut with ffmpeg

---

## 14. Email Signatures

1. Created pre-filled from your latest resume
2. Edit in 4 tabs: Design, Style, Details, Images
3. Renders as **table-based, inline-styled HTML** (no classes, no scripts, no SVG)
4. Photos/logos served from public URLs (mail clients block data URLs)
5. "Copy signature" puts rich HTML on clipboard for Gmail/Outlook/Apple Mail

---

## 15. PDF Editor

- Edit text in an existing PDF directly in the browser
- Uses **pdf-lib** for manipulation and **pdfjs-dist** for rendering
- The PDF file **never leaves the device** — everything runs client-side
- Available to both free and Pro users

---

## 16. AI Features

AI is **optional** — the app works fully without it. When configured:

- **Provider priority:** Gemini (free key from aistudio.google.com) > OpenAI (fallback)
- Gemini uses the OpenAI-compatible endpoint, so the same `openai` npm package handles both
- **Features:** generate bullet points, rewrite/shorten/strengthen text, write summaries, generate captions
- **Writing checks** (non-AI): flags AI-sounding phrases and filler words

---

## 17. Billing & Payments

### Flow

1. User picks a Pro pass on `/upgrade` (7 days to 1 year)
2. `POST /api/billing/checkout` creates a `Payment` row (status=pending)
3. With PayMongo: redirects to hosted checkout (GCash/Maya/card)
4. Without PayMongo (dev): redirects to built-in test checkout page

### Fulfillment (idempotent, race-safe)

Two paths, whichever fires first:
- **Webhook** (`POST /api/billing/webhook`) — PayMongo sends event, signature verified with HMAC-SHA256
- **Success page** — polls PayMongo directly (webhooks can't reach localhost)

`fulfill()` uses atomic `updateMany` with status filter — runs exactly once even if both paths fire.

### Plan Enforcement

- `requirePro(user, feature)` → returns 402 JSON that triggers the upgrade dialog
- `checkLimit(user, kind)` → counts documents, returns 402 at free limits
- Pro time is **stackable** — buying a new pass adds days on top of remaining time

---

## 18. File Storage

Dual-mode storage with one API (`putObject`, `getObjectStream`, `deleteObject`, etc.):

- **Local** (default): files saved to `uploads/` directory
- **Cloudflare R2** (production): S3-compatible API, signed with custom SigV4 implementation (no AWS SDK)

**Content-addressed images:** On save, `externalizeImages()` replaces data URLs with `/assets/img/<sha>.<ext>`. Same image = stored once, URL cacheable forever.

What's stored:
- `videos/<id>.webm` — original recordings
- `videos/<id>.cut-<start>-<end>.webm` — cached trimmed downloads
- `img/<sha>.jpg` — pictures from resumes, signatures, video posters

---

## 19. Email System

`sendEmail()` posts to Resend's HTTP API. In dev without keys, emails print to console.

| Email | When |
|---|---|
| Verify your email | Signup, resend |
| Your resume was opened | First view of a tracked link |
| Payment receipt | Pro pass fulfilled |
| Product update | Sent from admin console |

All emails built with `renderEmail()` — table-based HTML template with both HTML and plain text versions. Product updates include `List-Unsubscribe` headers.

---

## 20. Database & Backups

### SQLite via Prisma

Single file database. Key models:

| Model | Purpose |
|---|---|
| `User` | Account, role (owner/admin/user), plan (free/pro), `proUntil` |
| `Session` | Hashed session tokens, scope (user/admin), expiry |
| `Resume` | `dataJson` (full ResumeData), `templateId`, `title` |
| `CoverLetter` | `dataJson`, linked to a resume |
| `Video` | Metadata, trim points, captions, password hash |
| `ShareLink` / `ShareView` | Tracked links and each visitor |
| `EmailSignature` | `dataJson` (SignatureData) |
| `Payment` | Pass purchases, status (pending/paid/expired/failed) |
| `SavedSnippet` | Reusable bullets and entries |

### Backups

- **Daily automatic** — `VACUUM INTO` (consistent copy while app runs), keeps newest 14
- **Pre-deploy** — `start.sh` backs up before schema changes (keeps 5)
- **Off-site** — uploaded to R2 `backups/` when configured
- **Admin console** — list, "Back up now", download
- **Restore** — stop app, replace DB file, restart

---

## 21. Admin Console

Separate login (`/admin`), separate cookie (`rs_admin`, 8-hour session).

- User management — list, search, grant Pro, sign out, resend verification
- Template usage stats (from `UsageEvent`)
- Database backups — list, create, download
- Product update emails — composer with live preview, test send, bulk send to opted-in users

---

## 22. Security

- **Passwords:** scrypt (N=32768, r=8, p=1), constant-time comparison
- **Sessions:** 32 random bytes, only SHA-256 hash stored (DB leak doesn't leak sessions)
- **CSRF:** Origin header check on all state-changing API calls (middleware)
- **Rate limiting:** in-memory sliding window (login, signup, resend, checkout)
- **Cookies:** `httpOnly`, `SameSite=Lax`, `Secure` in production
- **Uploads:** validated as JPEG/PNG/WebP with size caps, storage keys checked against path traversal
- **Headers:** `frame-ancestors 'self'` (except video embeds)
- **No open redirects:** `safeNext()` validates redirect targets

---

## 23. Deployment

### Current Status: LOCAL ONLY

This project is **not yet deployed**. It runs on the developer's local machine only. There is no live production site at this time.

### Railway (ready but not active)

The project is pre-configured for Railway deployment but has not been deployed yet:

- Docker image: `mcr.microsoft.com/playwright` + ffmpeg
- Persistent volume at `/data` (database + uploads + backups)
- Auto-deploy on push to `master` is available once Railway is connected

### Environment Variables

| Variable | Required | Purpose |
|---|---|---|
| `DATABASE_URL` | Yes | SQLite path (e.g. `file:./dev.db`) |
| `RESEND_API_KEY` + `EMAIL_FROM` | For deployment | Email sending |
| `GEMINI_API_KEY` or `OPENAI_API_KEY` | Optional | AI features |
| `PAYMONGO_SECRET_KEY` | Optional | Real payments |
| `R2_*` (4 vars) | Optional | Cloud file storage |
| `APP_URL` | For deployment | Absolute URLs in emails |
| `INTERNAL_BASE_URL` | For deployment | Playwright connects to app inside container |

Features **gracefully degrade** when their keys are missing — no AI key means AI buttons hidden, no PayMongo means test checkout, no R2 means local disk, no Resend means console output.

---

## 24. Local Development Setup

### Requirements

- **Node.js 20+** (check: `node --version`)
- **npm** (comes with Node)
- **ffmpeg** (optional, for video trimming/remux)

### Step-by-Step Setup

```bash
# 1. Install all dependencies (also generates Prisma client and copies PDF.js assets)
npm install

# 2. Install headless Chromium for PDF generation
npx playwright install chromium

# 3. Create your local environment file
cp .env.example .env.local
# The default DATABASE_URL="file:./dev.db" is enough to start

# 4. Create the SQLite database
DATABASE_URL="file:./dev.db" npx prisma db push

# 5. Start the dev server
npm run dev -- -p 3100
```

Then open **http://localhost:3100** in your browser.

### First Login

- Walang existing account sa fresh database — kailangan mo munang mag-**Create account** (signup)
- Kahit anong email/password pwede (e.g. `admin@test.com` / `password123`)
- **First account to signup = owner/admin** automatically
- Walang email provider sa local, so verification link will show directly on the `/verify` page — click mo lang yung "Verify my email" link
- After verification, makakapasok ka na sa app

### Database Location

Ang database file ay nasa: `prisma/dev.db` (SQLite file sa loob ng project folder).

Para makita ang data visually:
```bash
npx prisma studio
# Opens a visual DB browser at http://localhost:5555
```

### Useful Commands

| Command | What it does |
|---|---|
| `npm run dev` | Start development server |
| `npm run dev -- -p 3100` | Start on a specific port (3100) |
| `npm run build` | Production build |
| `npm test` | Run all 208 tests |
| `npm run certify` | Test all 76 templates for ATS compatibility |
| `npm run lint` | ESLint check |
| `npm run typecheck` | TypeScript check (`tsc --noEmit`) |
| `npx prisma studio` | Visual database browser |
| `npx prisma db push` | Apply schema changes to database |

### Troubleshooting

| Problem | Solution |
|---|---|
| `Environment variable not found: DATABASE_URL` | Run with `DATABASE_URL="file:./dev.db"` prefix, or make sure `.env.local` exists |
| PDF download not working | Make sure Chromium is installed: `npx playwright install chromium` |
| AI features disabled | Set `GEMINI_API_KEY` or `OPENAI_API_KEY` in `.env.local` (optional) |
| Video trimming not working | Install ffmpeg: `brew install ffmpeg` (optional) |
| Can't login | You need to signup first — fresh DB has no users |
| Verification email not arriving | No email provider in local — use the dev link shown on `/verify` page |
