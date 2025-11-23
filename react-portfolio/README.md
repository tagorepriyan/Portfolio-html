# React Portfolio (Tagorepriyan S P)

Modern minimal developer portfolio built with React + Vite + Tailwind CSS, Framer Motion animations, Lucide icons, and a custom theme system (light/dark). Styled with shadcn/ui inspired primitives.

## Features
- Light/Dark mode toggle (persisted)
- Smooth scroll navigation (in progress)
- Responsive layout + fluid typography
- Framer Motion entrance animations
- Reusable UI components (buttons, cards, etc.)
- Rounded 2xl corners + soft shadows
- SEO meta tags
- Data-driven sections (JSON) — upcoming

## Getting Started

### Prerequisites
- Node.js >= 18
- npm (bundled with Node) or pnpm/yarn (optional)

### Install
```powershell
npm install
```

### Run Dev Server
```powershell
npm run dev
```
Open http://localhost:5173

### Build
```powershell
npm run build
```
Dist output in `dist/` ready for deployment.

## Deployment (Vercel)
1. Push repository to GitHub.
2. In Vercel dashboard: New Project → Import GitHub repo.
3. Framework preset: Vite.
4. Build Command: `npm run build` Output Directory: `dist`.
5. Enable Environment Variables if needed later (none yet).
6. Deploy.

## Roadmap
- Add remaining sections (About, Skills, Projects, Achievements, Experience, Education, Contact)
- Implement IntersectionObserver for active nav highlight
- JSON data layer for skills/projects/achievements
- Contact form (client-side validation + mailto fallback)
- ESLint configuration

## License
Personal portfolio project. All rights reserved.
