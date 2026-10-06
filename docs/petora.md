# Petora — Project Overview

> A full-stack pet platform for the Philippines with marketplace, vet booking, pet hotel reservations, adoption system, community feed, and real-time chat. Powered by Stripe payments and Socket.io.

---

## Interview Cheat Sheet

### One-Liner (Elevator Pitch)

> "Petora is a full-stack pet platform I built from scratch — it has a marketplace where pet shops and individual sellers can list products, a vet booking system, pet hotel reservations, a pet adoption board, a community feed, events, and real-time chat between buyers and sellers. Payments go through Stripe with support for subscriptions and marketplace commissions."

### Project Summary (30 seconds)

"I built Petora as a personal project to create an all-in-one platform for pet owners in the Philippines. The frontend is React with Vite and Tailwind CSS. The backend runs on Express.js with Prisma ORM and PostgreSQL. I integrated Stripe for payments — including marketplace commissions where Petora takes a percentage from each seller transaction via Stripe Connect. Real-time features like chat and notifications use Socket.io. The app also has a community feed, pet adoption system, vet booking, pet hotel reservations, and an events section."

### Why I Built This (Motivation)

"I wanted to build a complex, multi-feature platform from scratch to push my full-stack skills. The Philippines has a growing pet industry but no unified digital platform — pet owners need separate apps for shopping, booking vets, finding pet hotels, and adoption. Petora brings all of that into one place."

---

## About the Project

**Role:** Full Stack Developer (Personal Project)
**Duration:** Nov 2025 - Aug 2026
**Type:** Personal / Freelance Project
**Live:** https://www.petora.com.ph/

---

## Tech Stack

| Layer | Technologies |
|---|---|
| **Frontend** | React 18, Vite, TypeScript, Tailwind CSS |
| **Backend** | Node.js, Express.js, TypeScript |
| **Database** | PostgreSQL |
| **ORM** | Prisma |
| **Authentication** | JWT (access + refresh tokens), bcrypt password hashing |
| **Real-time** | Socket.io (chat, notifications) |
| **Payments** | Stripe (Checkout, Connect, Subscriptions, Webhooks) |
| **File Storage** | Cloudinary (images, videos) |
| **Email** | Nodemailer / Resend |
| **Deployment** | Railway (backend), Vercel (frontend) |
| **Version Control** | Git, GitHub |

---

## Architecture

```
[React + Vite Frontend]  <--- REST API --->  [Express.js Backend]
    (Vercel)                                     (Railway)
        |                                            |
        |--- Tailwind CSS                            |--- Prisma ORM
        |--- Zustand (state)                         |--- JWT Auth
        |--- Socket.io Client                        |--- Socket.io Server
        |--- Stripe.js                               |--- Stripe API
        |                                            |--- Cloudinary
        |                                            |--- Nodemailer
        |                                            |
        +---------------------> [PostgreSQL] <-------+
                                 (Railway)
```

---

## Core Features

### 1. Marketplace
- Pet shops and individual sellers can list products (food, accessories, medicine, etc.)
- Product categories, search, and filtering
- Shopping cart and checkout via Stripe
- Seller dashboard with sales analytics, order management, and inventory
- **Stripe Connect** — Petora takes a commission from each sale (platform fee)
- Order tracking and status updates
- Product reviews and ratings

### 2. Veterinary Booking
- Vet clinics register and list their services
- Pet owners browse vets by location, specialty, and availability
- Online appointment booking with time slot selection
- Appointment reminders via email/notification
- Appointment history and records

### 3. Pet Hotel Reservations
- Pet hotels list their facilities, rates, and availability
- Pet owners can book stays for their pets
- Check-in/check-out system
- Calendar-based availability management
- Booking confirmation and reminders

### 4. Pet Adoption
- Shelters and individuals can post pets for adoption
- Adoption listings with photos, breed info, health status, and story
- Adoption application/inquiry system
- Messaging between adopters and posters

### 5. Community Feed
- Social feed where users can post photos, stories, and updates about their pets
- Like, comment, and share functionality
- Follow other pet owners
- Hashtags and content discovery

### 6. Events
- Pet-related events listing (pet shows, adoption drives, vet clinics)
- Event registration and RSVP
- Event details with location, date, and description

### 7. Real-time Chat
- One-on-one messaging between buyers and sellers
- Chat between pet adopters and posters
- Real-time messaging via Socket.io
- Message read receipts
- Image sharing in chat

### 8. Notifications
- Real-time push notifications via Socket.io
- Email notifications for orders, bookings, and messages
- In-app notification center

---

## Payment System (Stripe)

### Stripe Connect (Marketplace Payments)
- Sellers onboard via **Stripe Connect Express** accounts
- When a buyer purchases, Stripe splits the payment:
  - Seller receives their portion
  - Petora collects the platform commission
- Webhook listeners handle payment confirmations, refunds, and disputes

### Stripe Subscriptions
- Premium seller plans for enhanced visibility and lower commission rates
- Subscription management (upgrade, downgrade, cancel)
- Webhook-driven billing lifecycle

### Stripe Checkout
- Secure hosted checkout for product purchases
- Support for cards, GCash (via Stripe PH), and other methods

---

## Authentication & Authorization

- **JWT-based auth** with access tokens (short-lived) and refresh tokens (long-lived)
- Password hashing with **bcrypt**
- Role-based access control:
  - `BUYER` — browse, purchase, book, adopt, chat
  - `SELLER` — list products, manage orders, seller dashboard
  - `VET` — manage vet profile and appointments
  - `PET_HOTEL` — manage hotel listings and reservations
  - `ADMIN` — platform management
- Email verification flow
- Password reset via email link

---

## Database Schema (Key Models)

| Category | Models |
|---|---|
| **Users** | User, UserProfile, UserRole |
| **Marketplace** | Product, ProductCategory, CartItem, Order, OrderItem, Review |
| **Vet Booking** | VetClinic, VetService, Appointment |
| **Pet Hotel** | PetHotel, HotelRoom, Reservation |
| **Adoption** | AdoptionListing, AdoptionInquiry |
| **Community** | Post, Comment, Like, Follow |
| **Events** | Event, EventRegistration |
| **Chat** | Conversation, Message |
| **Notifications** | Notification |
| **Payments** | StripeAccount, Payment, Subscription |

---

## Key Technical Decisions

**Q: Why Express.js instead of Next.js API routes?**
"The backend is a separate service because it handles WebSocket connections (Socket.io), background jobs, and complex payment flows. Keeping it separate lets me scale the API independently and gives clearer separation of concerns."

**Q: Why Prisma?**
"Prisma gives type-safe database queries out of the box with TypeScript. Migrations are straightforward, and the schema file serves as living documentation for the data model."

**Q: How does the marketplace commission work?**
"Stripe Connect Express handles the split. When a buyer pays, Stripe automatically routes the seller's share to their connected account and retains Petora's platform fee. Everything is handled server-side via the Stripe API — no manual calculations."

**Q: How does real-time chat work?**
"Socket.io on both client and server. When a user sends a message, it's saved to the database via the API, then broadcast to the recipient's socket room. If the recipient is offline, they see it when they next load the conversation."

---

## My Contributions

- Designed and built the entire platform from scratch (frontend + backend + database)
- Developed a full marketplace with Stripe Connect for split payments and seller commissions
- Built real-time chat and notification system using Socket.io
- Implemented vet booking, pet hotel reservation, and adoption systems
- Created a social community feed with posts, comments, likes, and follows
- Integrated Stripe for payments, subscriptions, and webhooks
- Set up JWT authentication with role-based access control
- Deployed frontend to Vercel and backend to Railway with PostgreSQL

---

## Project Scale

- **Frontend:** 100+ React components, 30+ pages/routes
- **Backend:** 50+ API endpoints, 20+ Prisma models
- **Real-time:** Socket.io rooms for chat and notifications
- **Payments:** Stripe Connect, Checkout, Subscriptions, Webhooks
- **Full CRUD** across marketplace, booking, hotel, adoption, feed, and events
