# MrSpecks Portfolio – Built with Next.js, Tailwind, and TypeScript

Welcome to my personal portfolio—designed to showcase my technical skills, certifications, and cloud-based project work. This site is built with a scalable, modern stack and deployed to Vercel for speed and flexibility.

---

## ⚙️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) + TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)
- **Data-Driven**: JSON-first structure (for projects, certifications, etc.)

---

## ✅ Project Milestones

### **1. Project Architecture**
- Initialized clean structure using `create-next-app`
- Data-first design: `projects.json`, `certifications.json`
- Organized all static content into modular components

### **2. Pages Implemented**
- `/` – Home / Landing Page
- `/about` – Bio, journey, and professional mission
- `/projects` – Portfolio of cloud/cyber/dev work
- `/resume` – Experience, education, skills
- `/contact` – Reach out directly

### **3. Reusable Components**
- `Header.tsx` – Navigation + dark mode toggle
- `Footer.tsx` – Site footer
- `ProjectCard.tsx` – JSON-rendered project cards
- `CertificationCard.tsx` – Render certs with badges
- `DarkModeToggle.tsx` – Persisted via localStorage
- `SEO.tsx` – Dynamic `<head>` metadata (ready)

### **4. Styling & UX**
- Fully responsive with Tailwind utility classes
- Integrated **dark mode** with a toggle button
- Sun/Moon icons powered by `lucide-react`

### **5. TypeScript & Linting**
- Fixed JSX scope issues by installing `@types/react` and `@types/node`
- Added and configured `tsconfig.json` + `next.config.js`
- Cleaned up ESLint errors (e.g., `next/core-web-vitals`)

### **6. Deployment**
- Successfully deployed to [Vercel](https://vercel.com/)
- Resolved build failures (missing packages, structure)
- Live production deployment is up and running

---

## 🌍 Domain Strategy

Currently evaluating:
- [kaegee.com](https://kaegee.com) – Personal brand driven
- [kagisomfusi.com](https://kagisomfusi.com) – Name recognition

---

## ✨ Next Steps

- [ ] Dynamically render `projects.json` + `certifications.json`
- [ ] Add downloadable PDF resume with viewer
- [ ] Implement backend for `contact` form (e.g., Formspree, Azure Functions)
- [ ] Add full SEO metadata + OG images via `SEO.tsx`
- [ ] Connect custom domain via Vercel DNS

---

## 🧠 Author

**Kagiso Mfusi**  
Cloud | Cybersecurity | Systems | Sustainability  
[LinkedIn](https://www.linkedin.com/in/kagisomfusi) • [GitHub](https://github.com/MrSpecks) • [Portfolio](https://your-vercel-link.vercel.app)

---

> Built with precision, purpose, and the long game in mind.