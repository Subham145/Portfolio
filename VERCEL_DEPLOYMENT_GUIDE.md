# Vercel Deployment Guide

## Step 1: Push to GitHub

1. Create a new repository on GitHub (visit https://github.com/new)
2. Name it: `portfolio` or `animated-portfolio`
3. Don't initialize with README (since we already have one)
4. Copy the repository URL

5. Run these commands in your terminal:

```bash
cd /Users/hanumanjogi/Downloads/Animated-Portfolio-Website-Lightswind-UI-main

# Add remote (replace with your GitHub repo URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Rename branch to main if needed
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 2: Deploy to Vercel

### Option A: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
cd /Users/hanumanjogi/Downloads/Animated-Portfolio-Website-Lightswind-UI-main
vercel
```

3. Follow the prompts:
   - Link to existing project? (No)
   - Name your project? (e.g., "hanuman-portfolio")
   - Which scope? (Your personal account)
   - Build settings? (Accept defaults)

### Option B: Using Vercel Dashboard (Recommended)

1. Visit https://vercel.com
2. Sign up/Login with GitHub
3. Click "New Project"
4. Select your GitHub repository
5. Click "Import"
6. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: ./
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

7. Click "Deploy"
8. Wait for deployment to complete (~2-3 minutes)

## Step 3: Verify Deployment

- Check your Vercel dashboard for the live URL
- Visit the deployed site to verify everything works
- Test dark/light mode toggle
- Check all sections and links

## Step 4: Custom Domain (Optional)

1. In Vercel Dashboard → Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration steps

## Troubleshooting

**Build fails?**
- Check build logs in Vercel dashboard
- Ensure `npm run build` works locally first

**Images not loading?**
- Verify image paths in `public/` folder
- Use absolute paths starting with `/`

**Animations not working?**
- Check browser console for errors
- Ensure all npm packages installed correctly

## Environment Variables (If needed)

1. In Vercel Dashboard → Settings → Environment Variables
2. Add any required variables
3. Redeploy

---

Your portfolio is now live on Vercel! 🚀
