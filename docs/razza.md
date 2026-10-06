# RideWrap - Project Overview

## About the Project

RideWrap is a production e-commerce platform for a company that sells vehicle protection film products. The platform consists of two integrated web applications — a public-facing WordPress/WooCommerce storefront and an internal Laravel-based team management system — connected through REST APIs and OAuth2 authentication.

**Company:** Razza Consulting Group, Inc.
**Role:** Full Stack Developer (Remote)
**Duration:** Oct 2025 - Oct 2026

---

## Tech Stack

| Layer | Technologies |
|---|---|
| **Frontend** | HTML5, CSS3, SCSS, JavaScript, TypeScript, jQuery |
| **Backend** | PHP, Laravel 9, WordPress, WooCommerce |
| **Database** | MySQL (two schemas: `wordpress`, `superteam`) |
| **Authentication** | OAuth2 via Laravel Passport |
| **Real-time/Logging** | Firebase (Firestore, Anonymous Auth), Service Workers |
| **Build Tools** | Parcel (TypeScript micro-frontends), Laravel Mix (Webpack) |
| **DevOps** | Docker, Bitbucket Pipelines (CI/CD), SiteGround (production hosting) |
| **Testing** | PHPUnit |
| **Project Management** | Jira, Bitbucket |

---

## Architecture

### System Overview

```
[WordPress/WooCommerce]  <--- OAuth2 / REST API --->  [Laravel Teams App]
   (Public Storefront)                                 (Internal Team Tools)
         |                                                     |
         |--- Custom Plugins (18+)                             |--- Custom Packages
         |--- Custom Theme                                     |--- 55+ Eloquent Models
         |--- WooCommerce Overrides                            |--- Queue Jobs
         |                                                     |--- Event-Driven Observers
         |                                                     |
         +-------------------> [Shared MySQL Server] <---------+
                            (separate schemas)
```

### WordPress Site (Public-Facing)
- Full e-commerce storefront powered by WooCommerce
- Custom theme with 44 page templates and 26 template-part directories
- 18+ custom RideWrap plugins for specialized functionality
- Service Worker for PWA capabilities
- ACF (Advanced Custom Fields) for dynamic content management

### Laravel Teams App (Internal)
- Internal team management and order processing platform
- 55+ Eloquent models for business entities (orders, kits, shipping, inventory)
- Event-driven audit logging via 13 model observers
- Background job processing via Laravel Queues
- Three TypeScript micro-frontend applications (Identity, Search, View) built with Parcel
- RESTful API endpoints for WordPress integration

### Cross-Platform Integration
- WordPress calls Laravel APIs using OAuth2 (Passport) tokens
- WooCommerce REST API used by Laravel for order/product data (strict architectural boundary — no direct DB access)
- Shared MySQL server with separate schemas
- API responses cached in `order_meta` table to minimize external API calls

---

## Key Features & Systems

### Super Agent (Session Tracking & Event Logging)
A real-time user tracking and event logging system built with:
- **Firebase Anonymous Auth** — generates unique session UIDs per browser
- **Service Workers** — handles background communication between page and Firebase
- **Identity System** — links email addresses to anonymous sessions
- **Event Logging** — tracks user interactions to Firestore (`/sessions/{uid}/events/`)
- **Role-Based Access Control** — blocks specific user roles from tracking

### Custom WordPress Plugins
| Plugin | Purpose |
|---|---|
| `ridewrap-utilities` | Shared utility functions (dependency for most plugins) |
| `ridewrap-super-cutter` | Design file management (TypeScript) |
| `ridewrap-super-checker` | Quality checking system |
| `ridewrap-service-logging` | Service logging with Firebase |
| `ridewrap-faq` / `faq-react-app` | FAQ system (React) |
| `ridewrap-block-library` | Custom Gutenberg blocks |
| `ridewrap-booking` | Booking management |
| `ridewrap-job-listing` | Job postings |

### Laravel Custom Packages
| Package | Purpose |
|---|---|
| `packages/shipping/` | Shipping calculation engine |
| `packages/woocommerce/` | WooCommerce API integration |

### Order Processing & Inventory
- WooCommerce handles public-facing orders
- Laravel manages internal order processing, production tracking, and fulfillment
- Shipping calculations via custom shipping package
- Inventory management integrated with WooCommerce API

---

## Development Environment

- **Dockerized setup** with 4 containers: WordPress, Laravel, MySQL, Proxy
- **Local domains:** `local.ridewrap.com:8080` (WordPress), `superteam.local.ridewrap.com:8081` (Laravel)
- **PHPMyAdmin** for database management
- **Bitbucket Pipelines** for CI/CD (master = production, staging branch)
- **PSR-12** coding standard enforced

---

## My Contributions

- Maintained and enhanced the production e-commerce platform across both WordPress and Laravel
- Developed and integrated REST APIs between WordPress and Laravel using OAuth2 (Passport)
- Built the real-time session tracking and event logging system (Super Agent) using Firebase, TypeScript, and Service Workers
- Developed custom WordPress plugins for service logging, quality checking, and design file management
- Implemented role-based access control and user identity management
- Integrated WooCommerce REST API with Laravel for order processing, shipping, and inventory
- Wrote database migrations, Eloquent models, and observers for audit logging
- Deployed updates to production via SiteGround and Bitbucket Pipelines CI/CD
- Followed ticket-based development discipline with documentation for every change

---

## Project Scale

- **WordPress:** 18+ custom plugins, 60+ third-party plugins, complex custom theme
- **Laravel:** 55+ models, 13 observers, custom packages, 3 TypeScript micro-frontends
- **Database:** Two schemas with extensive migrations
- **Codebase:** Monorepo with WordPress, Laravel, and Docker configurations
