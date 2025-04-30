---
title: "How I Built My Portfolio with Next.js and Tailwind"
date: "2025-04-28"
---

# How I Built My Portfolio Website: A Journey in Cloud Building and Digital Innovation

I built my portfolio using Next.js, Tailwind CSS, Framer Motion, and deployed it on Vercel. In this post, I’ll share my process, challenges, and key features like the dark mode toggle with a confetti Easter egg. Stay tuned for insights on creating a scalable, accessible portfolio!

## 👨🏽‍💻 Introduction

In 2025, I launched my very own portfolio website — a polished digital home to showcase my **skills, certifications, and project work**.

Built with a **dark, futuristic aesthetic**, it’s more than just a portfolio. It’s a personal milestone that reflects my commitment to creating **secure, scalable, and sustainable** solutions with impact.

---

## ⚙️ Tech Stack and Tools

To bring this vision to life, I used a modern and modular stack:

- **Next.js** — for fast, server-rendered pages with TypeScript support.
- **Tailwind CSS** — for responsive, utility-first styling.
- **Framer Motion** — to add smooth animations across the site.
- **Lucide React** — for lightweight, accessible icons.
- **Formspree** — for the backend of the contact form.
- **Vercel** — for zero-config deployment and analytics.

### Additional Tools for Blog (Coming Soon):
- `gray-matter` and `remark` for parsing Markdown.
- `tailwind-typography` plugin for beautiful prose styling.

---

## ✨ Design and Features

The entire site is crafted with a **clean, interactive, and premium-grade aesthetic**, powered by Tailwind’s `bg-gray-900` and `text-white` color foundation.

### Key Features:

- **Dark Mode Toggle**:
  - Custom toggle built using Framer Motion and Lucide.
  - Easter egg: on the **10th click**, the screen **explodes in confetti** (`canvas-confetti`) — a subtle celebration of user curiosity!

- **Contact Form**:
  - Integrated with Formspree.
  - Smooth fade-in animation using Framer Motion upon successful submission.
  - Enhanced accessibility with `label`, `aria-label`, and `focus` states.

- **Footer**:
  - Quick links to **Email**, **GitHub**, **LinkedIn**, and **Gravatar**.
  - Includes tech stack badge: “*Built with Next.js & Tailwind CSS*” and dynamic copyright.

---

## 🛠 Implementation Process

### Step-by-Step Breakdown:

- Initialized project with `create-next-app` using TypeScript.
- Installed and configured Tailwind CSS.
- Designed and structured reusable components like `Header.tsx`, `Footer.tsx`, `ScrollToTop.tsx`, `SEO.tsx`, `Carousel.tsx`, `DarkModeToggle.tsx`, `Layout.tsx`, `ProjectCard.tsx`, and `CertificationCard.tsx`.
- Created all main pages:
  - `/` (Home)
  - `/about`
  - `/projects`
  - `/resume`
  - `/contact`
- Deployed to **Vercel** and integrated **Vercel Analytics**.

### Highlights:

- Used JSON-first design: `projects.json` and `certifications.json`.
- Implemented responsive layouts and transitions throughout.
- Optimized images via Next.js `<Image>` for performance and accessibility.

---

## 🧩 Challenges and Solutions

### Challenge: Vercel Build Failure

- **Problem**: Missing type declarations for `gray-matter` in the Blog prototype caused a production build failure.
- **Solution**: Installed `@types/gray-matter` to fix the issue.

### Challenge: VS Code Schema Validation Errors

- **Problem**: Errors for `package.json` and `tsconfig.json` schema validation via `schemastore.org`.
- **Solution**: Refreshed schema fetch manually, updated VS Code settings, and cleared cache.

---

## 🧠 Improvements and Optimizations

### ✅ SEO & Social Sharing

- Added `<meta>` tags dynamically via `SEO.tsx`.
- Included **Open Graph tags** for better previews on X (Twitter), LinkedIn, and Facebook.

### ✅ Accessibility Upgrades

- All interactive elements have `aria-label`s.
- Enabled focus states using `focus:ring-*` utilities for full keyboard navigation support.

### ✅ Visual Polish

- Added hover-scale and motion fade effects to project and certification cards.
- Animated toggle interactions and form messages with Framer Motion.
- Improved mobile readability using max-width containers and refined typography.

### ✅ Performance Boosts

- Leveraged static site generation for optimized builds.
- Optimized image assets and lazy-loaded key components.
- Used Tailwind’s `container`, `px-*`, and `max-w-*` classes for tight control.

---

## 📊 Client Engagement

- Integrated **Formspree** to receive contact requests and trigger email alerts.
- Added **Vercel Analytics** to monitor traffic patterns and visitor behavior.
- Prepared tailored announcements for social media platforms like **X** and **LinkedIn**.

---

## 🌍 The Vision

This project is more than a website — it’s a digital representation of what I stand for:

> “To advance Africa’s tech frontier through innovative, ethical, and scalable digital systems.”

And this is just the beginning. I’ll be adding a **blog section** (coming soon), publishing behind-the-scenes dev articles, and showcasing *even more* exciting projects that align with my vision.

---

Let’s build the future, one elegant system at a time.
