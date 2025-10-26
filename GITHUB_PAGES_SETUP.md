# 🔧 GitHub Pages Setup Instructions

## ⚠️ Important: GitHub Pages Configuration

You're using the `gh-pages` npm package to deploy, which creates a `gh-pages` branch automatically.

### 📋 Steps to Configure GitHub Pages:

1. **Go to your repository settings:**
   - Visit: https://github.com/SHANNUTHOTA/Personal-Portfolio/settings/pages

2. **Configure the source:**
   - Under "Build and deployment"
   - **Source:** Deploy from a branch
   - **Branch:** Select `gh-pages` (NOT `main`)
   - **Folder:** Select `/(root)`
   - Click **Save**

3. **Wait for deployment:**
   - GitHub will deploy your site from the `gh-pages` branch
   - This takes 1-2 minutes
   - Your site will be live at: https://shannuthota.github.io/Personal-Portfolio/

## 🚀 How Deployment Works

When you run `npm run deploy`:
1. Builds your project (`npm run build`)
2. Creates/updates the `gh-pages` branch
3. Pushes the `dist` folder to that branch
4. GitHub Pages serves from the `gh-pages` branch

## ✅ What Was Fixed

- ❌ Removed GitHub Actions workflow (was conflicting)
- ✅ Using `gh-pages` npm package for deployment
- ✅ Configure Pages to use `gh-pages` branch

## 📝 To Deploy Updates

```bash
npm run deploy
```

## 🔍 Check Deployment Status

After running `npm run deploy`:
1. Go to: https://github.com/SHANNUTHOTA/Personal-Portfolio/actions
2. Wait for the Pages deployment to complete
3. Visit: https://shannuthota.github.io/Personal-Portfolio/

---

**Note:** The build error was caused by GitHub Actions trying to deploy from the `main` branch while `gh-pages` package deploys to the `gh-pages` branch. Now only `gh-pages` package is handling deployment.
