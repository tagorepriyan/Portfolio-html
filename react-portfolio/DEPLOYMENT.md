# Deployment Guide - Vercel

## Prerequisites
- GitHub account
- Vercel account (sign up at vercel.com using GitHub)
- Git installed locally

## Step 1: Push to GitHub

### If this is a new repository:
```powershell
# Navigate to the react-portfolio directory
cd react-portfolio

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - React portfolio with Tailwind, Framer Motion, and Fast Refresh"

# Add remote (replace with your actual GitHub repo URL)
git remote add origin https://github.com/tagorepriyan/Portfolio-html.git

# Push to main branch
git push -u origin main
```

### If adding to existing repository:
```powershell
# From the Portfolio-html root directory
cd c:\Users\tagor\Documents\GitHub\Portfolio-html

# Add all new files
git add react-portfolio/

# Commit
git commit -m "Add React portfolio with modern stack"

# Push
git push origin main
```

## Step 2: Deploy to Vercel

### Option A: Using Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New Project"**
3. Select **"Import Git Repository"**
4. Choose your `Portfolio-html` repository
5. Configure project settings:
   - **Framework Preset**: Vite
   - **Root Directory**: `react-portfolio` (important!)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. Click **"Deploy"**

### Option B: Using Vercel CLI

```powershell
# Install Vercel CLI globally
npm install -g vercel

# Navigate to react-portfolio
cd react-portfolio

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (your account)
# - Link to existing project? No
# - What's your project's name? react-portfolio
# - In which directory is your code located? ./
# - Want to override settings? Yes
#   - Build Command: npm run build
#   - Output Directory: dist
#   - Development Command: npm run dev
```

## Step 3: Post-Deployment Configuration

### Custom Domain (Optional)
1. In Vercel dashboard, go to your project
2. Navigate to **Settings** → **Domains**
3. Add your custom domain
4. Update DNS records as instructed by Vercel

### Environment Variables (If needed later)
1. Go to **Settings** → **Environment Variables**
2. Add any required variables
3. Redeploy for changes to take effect

## Build Verification Checklist

✅ Dependencies installed (`npm install`)
✅ Development server runs (`npm run dev`)
✅ Production build succeeds (`npm run build`)
✅ ESLint passes (warnings only, no errors)
✅ All sections render correctly
✅ Light/Dark mode toggle works
✅ Smooth scroll and active nav highlighting
✅ Project images display
✅ Contact form validation works
✅ Responsive on mobile/tablet/desktop

## Vercel Auto-Deployments

Once connected, Vercel automatically:
- Builds and deploys on every push to `main` branch
- Creates preview deployments for pull requests
- Provides unique URLs for each deployment
- Offers instant rollback capability

## Performance Tips

The current build is optimized with:
- Code splitting (React and animation vendors separated)
- Tree shaking via Vite
- Production minification
- Fast Refresh for development

## Troubleshooting

### Build fails on Vercel
- Check Node version (Vercel uses Node 18 by default)
- Verify all dependencies in `package.json`
- Check build logs in Vercel dashboard

### Images not loading
- Ensure images are in `public/assets/images/`
- Verify paths start with `/assets/images/` (not `./`)

### 404 on navigation
- Vercel handles SPA routing automatically for Vite
- No additional config needed (already handled)

## Local Testing Production Build

```powershell
# Build
npm run build

# Preview production build locally
npm run preview
```

Visit http://localhost:4173 to test production build locally.

---

**Deployment Status**: Ready ✅
**Framework**: Vite + React
**Styling**: Tailwind CSS
**Animations**: Framer Motion
**Fast Refresh**: Enabled
