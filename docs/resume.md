# Resume — Full Stack Developer

## Personal Information

**Name:** William Torreno
**Role:** Full Stack Developer
**Location:** Philippines
**Education:** BS Computer Science - Major in Application Development, University of Makati (2019-2023)

---

## Professional Summary

Full Stack Developer with 3+ years of experience building web applications and platforms for enterprise clients, startups, and personal projects. Experienced in React, Next.js, Vue.js/Nuxt.js, Laravel, Node.js, Express.js, WordPress, and PostgreSQL/MySQL. Strong background in e-commerce platforms, SaaS products, payment integrations (Stripe, PayMongo), real-time features (Socket.io, Firebase), and cloud deployments (DigitalOcean, Vercel, Railway).

---

## Work Experience

### 1. Full Stack Developer — Razza Consulting (Project-Based)
**Period:** Oct 2025 - Oct 2026 | Remote
**Project:** RideWrap (ridewrap.com)
**Doc:** [razza.md](./razza.md)

Production e-commerce platform for bike protection products. Two integrated apps — WordPress/WooCommerce storefront + Laravel internal team management system — connected via REST APIs and OAuth2.

**Key achievements:**
- Maintained and enhanced a production e-commerce platform built on WordPress and Laravel within a monorepo architecture with Docker
- Developed and integrated REST APIs between WordPress and Laravel using OAuth2 (Passport) for cross-platform communication
- Built a real-time session tracking and event logging system (Super Agent) using Firebase, TypeScript, and Service Workers
- Developed custom WordPress plugins for service logging, quality checking, and design file management
- Integrated WooCommerce REST API with Laravel for order processing, shipping, and inventory management
- Deployed updates to production via SiteGround and Bitbucket Pipelines CI/CD

**Tech:** PHP, Laravel, WordPress, WooCommerce, TypeScript, JavaScript, jQuery, SCSS, MySQL, Firebase, Docker, Bitbucket Pipelines, OAuth2 (Passport), Service Workers, Parcel, PHPUnit

---

### 2. Web Developer — DesignBlue Manila Corp
**Period:** Oct 2023 - Oct 2025
**Doc:** [designblue.md](./designblue.md)

Digital agency building corporate websites for major Philippine companies. Delivered 9+ enterprise client websites.

**Key achievements:**
- Developed responsive web interfaces using Tailwind CSS and JavaScript
- Built web applications using Laravel and Nuxt 3
- Converted Adobe XD designs into responsive and functional web pages
- Developed and integrated databases and APIs
- Optimized SQL queries and application performance
- Managed DigitalOcean deployments and performed debugging, code reviews, and performance improvements

**Clients delivered:**
| Client | Category | URL |
|---|---|---|
| Robinsons Department Store | Retail | robinsonsdepartmentstore.com.ph |
| St. Luke's Medical Center | Healthcare | — |
| Megaworld Corporation | Real Estate | megaworldcorp.com |
| Asian Development Bank | Finance | — |
| Cebu Landmasters, Inc. | Real Estate | cebulandmasters.com |
| Aboitiz Land | Real Estate | aboitizland.com |
| Aboitiz Equity Ventures | Conglomerate | — |
| SN Aboitiz Power | Energy & Power | snaboitiz.com |
| Suntrust Properties Inc. | Real Estate | suntrust.com.ph |

**Tech:** Laravel, Nuxt 3, Vue.js, Tailwind CSS, JavaScript, jQuery, MySQL, PostgreSQL, DigitalOcean, Nginx, Git, GitLab, Bitbucket, Jira

---

### 3. Web Developer — Sun Moon Technology
**Period:** May 2022 - Mar 2023
**Doc:** [sunmoon.md](./sunmoon.md)

Technology company providing web development and IT solutions.

**Key achievements:**
- Developed full-stack solutions, including database design and API development
- Designed normalized database schemas and implemented optimized SQL queries
- Managed DigitalOcean deployments for secure and reliable hosting
- Conducted code reviews, debugging, and performance tuning

**Tech:** Laravel, PHP, JavaScript, jQuery, Vue.js, Bootstrap, MySQL, DigitalOcean, Nginx, Git, GitLab, Postman

---

## Personal / Freelance Projects

### 1. CallbackCV — ATS Resume Builder
**Doc:** [callbackcv.md](./callbackcv.md)
**Status:** Not yet deployed (local only)

Full-stack ATS-friendly resume builder for the Philippine job market. 76 designer templates, live ATS scoring (35 deterministic rules), tracked resume links, video intros with virtual backgrounds, cover letters, email signatures, and a built-in PDF editor.

**Tech:** Next.js 15, React 19, TypeScript, Tailwind CSS, Prisma, SQLite, Playwright (PDF generation), PayMongo, Zustand, Zod, Vitest (208 tests), Docker

**Highlights:**
- 76 resume templates with ATS certification pipeline
- Playwright renders same React components to PDF via headless Chromium
- Three-way merge for multi-resume sync
- Idempotent payment fulfillment (webhook + success page race)
- Custom auth with scrypt hashing, session tokens, CSRF protection
- Content-addressed image storage (SHA dedup)

---

### 2. Mateo Dental Clinic — Dental SaaS Platform
**Doc:** [mateo-dental-clinic.md](./mateo-dental-clinic.md)
**URL:** https://mateo-dental.vercel.app/

Full-stack dental clinic management and online booking platform. Single-tenant deployment of the Petora Smile SaaS platform. 44 Prisma models, 7 user roles, AI-powered chat receptionist.

**Tech:** Next.js 15, React 19, TypeScript, Tailwind CSS, Prisma, PostgreSQL, NextAuth v5, Anthropic Claude AI, PayMongo, Resend, Semaphore (SMS), Docker, Vercel

**Highlights:**
- AI receptionist powered by Anthropic Claude
- Online booking with slot availability engine
- Dental charting with per-tooth status tracking
- Multi-channel notifications (email, SMS, push)
- PayMongo payment integration for invoices and deposits
- 7 user roles with granular permissions
- Landing page CMS for clinic customization

---

### 3. FitPass (Anvesso) — Active Lifestyle Platform
**Doc:** [anvesso.md](./anvesso.md)
**URL:** https://fitpass-web-jade.vercel.app/

AI-powered active lifestyle platform for the Philippines. Discover and book gyms, studios, courts, coaches, and recovery services nearby. Track workouts, nutrition, and body progress.

**Tech:** NestJS 11, React Native (Expo), Next.js 15, TypeScript, PostgreSQL + PostGIS, Prisma 6, Redis, BullMQ, pnpm + Turbo (monorepo), PayMongo, Sentry, PostHog

**Highlights:**
- Modular monolith with 32 bounded contexts
- PostGIS geo-search for nearby venue discovery
- Outbox + BullMQ event-driven architecture
- Split Prisma schema (24 .prisma files per domain)
- 5 apps in monorepo (mobile, web, business portal, admin, API)
- Provider abstraction for all external dependencies

---

### 4. Petora — Pet Platform
**Doc:** [petora.md](./petora.md)
**URL:** https://www.petora.com.ph/

Full-stack pet platform with marketplace (Stripe Connect commissions), vet booking, pet hotel reservations, adoption system, community feed, and real-time chat.

**Tech:** React 18, Vite, TypeScript, Tailwind CSS, Express.js, Prisma, PostgreSQL, Stripe (Connect, Checkout, Subscriptions), Socket.io, Cloudinary, JWT auth

**Highlights:**
- Marketplace with Stripe Connect for split payments and seller commissions
- Real-time chat and notifications via Socket.io
- Vet booking, pet hotel reservations, and adoption system
- Community feed with posts, comments, likes, follows
- JWT auth with role-based access control (5 roles)

---

## Skills

### Programming Languages
- JavaScript, TypeScript, PHP, Python, Java, C#

### Frontend
- React, Next.js, Vue.js, Nuxt.js, Angular, Tailwind CSS, SCSS, Bootstrap, Material UI, jQuery

### Backend
- Laravel, Node.js, Express.js, NestJS, WordPress, Django, Spring Boot

### Database
- PostgreSQL, MySQL, SQLite, PostGIS, Prisma, Eloquent

### Payment Integrations
- Stripe (Connect, Checkout, Subscriptions, Webhooks)
- PayMongo (GCash, Maya, Cards, Webhooks)

### Real-time & APIs
- REST APIs, Socket.io, Firebase (Firestore, Auth), Service Workers, OAuth2

### DevOps & Tools
- Docker, Git, GitHub, GitLab, Bitbucket, DigitalOcean, Vercel, Railway, Netlify, Nginx
- Bitbucket Pipelines, GitHub Actions (CI/CD)
- Postman, Jira, Sentry, PostHog

### Testing
- Vitest, Jest, Playwright, PHPUnit

---

## Education

### BS Computer Science - Major in Application Development
**University of Makati** | 2019 - 2023 | Makati City, Philippines

### Senior High School
**University of Makati** | 2017 - 2019 | Makati City, Philippines

---

## Documentation Index

| File | Project / Topic |
|---|---|
| [resume.md](./resume.md) | This file — master resume overview |
| [razza.md](./razza.md) | RideWrap / Razza Consulting — full project details |
| [designblue.md](./designblue.md) | DesignBlue Manila — work experience & all client projects |
| [sunmoon.md](./sunmoon.md) | Sun Moon Technology — work experience |
| [callbackcv.md](./callbackcv.md) | CallbackCV — ATS resume builder (full technical docs) |
| [mateo-dental-clinic.md](./mateo-dental-clinic.md) | Mateo Dental Clinic — dental SaaS platform |
| [anvesso.md](./anvesso.md) | FitPass (Anvesso) — active lifestyle platform |
| [petora.md](./petora.md) | Petora — pet platform |
