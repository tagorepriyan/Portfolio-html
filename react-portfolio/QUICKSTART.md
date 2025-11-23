# Quick Start - Git Push & Deploy

## Push to GitHub (Run from Portfolio-html root)

```powershell
# Check current status
git status

# Add the react-portfolio folder
git add react-portfolio/

# Commit with message
git commit -m "Add production-ready React portfolio with Tailwind CSS and Framer Motion"

# Push to GitHub
git push origin main
```

## Deploy to Vercel (After pushing to GitHub)

1. Visit https://vercel.com/new
2. Import your `Portfolio-html` repository
3. **Important**: Set Root Directory to `react-portfolio`
4. Framework will auto-detect as Vite
5. Click Deploy

**Your portfolio will be live in ~2 minutes!**

## What's Included

✅ React 18 with Vite
✅ Tailwind CSS styling
✅ Framer Motion animations
✅ Fast Refresh enabled
✅ Light/Dark mode
✅ Smooth scroll navigation
✅ Project images
✅ Contact form with validation
✅ Production-optimized build
✅ SEO meta tags
✅ Responsive design

## Test Locally First

```powershell
cd react-portfolio
npm run dev
```

Visit http://localhost:5173

## Production Build Test

```powershell
npm run build
npm run preview
```

Visit http://localhost:4173
