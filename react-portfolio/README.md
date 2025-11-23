# React Portfolio (Tagorepriyan S P)

Modern minimal developer portfolio built with React + Vite + Tailwind CSS, Framer Motion animations, Lucide icons, and a custom theme system (light/dark). Styled with shadcn/ui inspired primitives.

## ✨ Features

- ⚡ **Fast Refresh** - Instant updates during development with @vitejs/plugin-react
- 🎨 **Light/Dark Mode** - Toggle theme with localStorage persistence
- 🎭 **Smooth Animations** - Framer Motion entrance and interaction effects
- 📱 **Responsive Design** - Fluid layouts for all screen sizes
- 🎯 **Smart Navigation** - Active section highlighting with IntersectionObserver
- 🖼️ **Project Showcase** - Image cards with tech stack and links
- 📬 **Contact Form** - Client-side validation with mailto fallback
- 🎯 **Data-Driven** - JSON-based content for easy updates
- 🚀 **Production Ready** - Optimized builds with code splitting
- 🔍 **SEO Friendly** - Meta tags and semantic HTML

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Code Quality**: ESLint

## 📦 Getting Started

### Prerequisites
- Node.js >= 18
- npm (bundled with Node)

### Install Dependencies
```powershell
npm install
```

### Development Server
```powershell
npm run dev
```
Open http://localhost:5173

### Production Build
```powershell
npm run build
```
Dist output in `dist/` ready for deployment.

### Preview Production Build
```powershell
npm run preview
```
Test at http://localhost:4173

### Lint Code
```powershell
npm run lint
```

## 🚀 Deployment

### Vercel (Recommended)

**Quick Deploy:**
1. Push to GitHub
2. Import on [Vercel](https://vercel.com/new)
3. Set **Root Directory** to `react-portfolio`
4. Framework auto-detects as Vite
5. Deploy!

**Settings:**
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

### Other Platforms
- **Netlify**: Drag & drop the `dist` folder or connect GitHub
- **GitHub Pages**: Use `gh-pages` package
- **Railway/Render**: Auto-deploy from repo

## 📁 Project Structure

```
react-portfolio/
├── public/
│   ├── assets/
│   │   └── images/        # Project screenshots & images
│   └── resume.pdf         # Resume download
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── SectionHeader.jsx
│   │   ├── SkillCategory.jsx
│   │   ├── ThemeToggle.jsx
│   │   └── ScrollToTop.jsx
│   ├── data/              # JSON content files
│   │   ├── skills.json
│   │   ├── projects.json
│   │   ├── achievements.json
│   │   ├── education.json
│   │   └── experience.json
│   ├── hooks/             # Custom React hooks
│   │   ├── useTheme.jsx
│   │   └── useActiveSection.js
│   ├── sections/          # Page sections
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Achievements.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── styles/
│   │   └── globals.css    # Tailwind + custom styles
│   ├── utils/
│   │   └── cn.js          # Class name utility
│   ├── App.jsx            # Main app component
│   └── main.jsx           # Entry point
├── .eslintrc.cjs          # ESLint configuration
├── .gitignore
├── index.html             # HTML template with SEO
├── package.json
├── postcss.config.cjs
├── tailwind.config.cjs
├── vercel.json            # Vercel config
└── vite.config.js         # Vite with React plugin
```

## 🎨 Customization

### Update Content
Edit JSON files in `src/data/`:
- `skills.json` - Add/remove skills by category
- `projects.json` - Add projects with images, stack, links
- `achievements.json` - List awards and recognitions
- `education.json` - Academic background
- `experience.json` - Work experience

### Change Colors
Edit `tailwind.config.cjs`:
```js
colors: {
  accent: {
    DEFAULT: '#6366f1',  // Change primary color
    foreground: '#ffffff'
  }
}
```

### Add Images
Place images in `public/assets/images/` and reference with `/assets/images/filename.ext`

### Update Resume
Replace `public/resume.pdf` with your resume

## 🏆 Build Performance

Current production build:
- **Total Size**: ~285 KB (uncompressed)
- **Gzipped**: ~86 KB
- **Code Split**: React vendor, Animation vendor, Main bundle
- **Build Time**: ~8-10 seconds

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Lint code with ESLint |

## 🐛 Troubleshooting

### Build Errors
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Clear Vite cache: Delete `.vite` folder

### Theme Not Persisting
- Check browser localStorage is enabled
- Clear site data and reload

### Images Not Loading
- Ensure paths start with `/assets/` (not `./assets/`)
- Verify images exist in `public/assets/images/`

## 🔮 Future Enhancements

- [ ] Add blog section with MDX
- [ ] Implement real-time contact form backend
- [ ] Add unit tests (Vitest + React Testing Library)
- [ ] Integrate analytics (Vercel Analytics or Google Analytics)
- [ ] Add CMS integration (Sanity/Contentful)
- [ ] Implement i18n for multiple languages
- [ ] Add accessibility audit tools

## 📄 License

Personal portfolio project. All rights reserved.

## 👤 Author

**Tagorepriyan S P**
- Email: tagorepriyanofficial@gmail.com
- GitHub: [@tagorepriyan](https://github.com/tagorepriyan)
- LinkedIn: [tagorepriyan](https://www.linkedin.com/in/tagorepriyan)

---

**Status**: Production Ready ✅ | **Last Updated**: November 2025
