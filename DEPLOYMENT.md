# 🚀 Deployment Guide - GitHub Pages

## ✅ Your Repository
**GitHub Repo**: https://github.com/SHANNUTHOTA/Portfolio

**Live Website**: https://shannuthota.github.io/Portfolio/

---

## 📋 Prerequisites (Already Completed ✅)

- ✅ gh-pages package installed
- ✅ Deploy script added to package.json
- ✅ Base path set to '/Portfolio/' in vite.config.ts
- ✅ Build tested successfully

---

## 🎯 Deploy Your Portfolio Now!

### Quick Deploy (One Command):

```bash
npm run deploy
```

This will automatically:
1. Build your project for production
2. Create/update the `gh-pages` branch
3. Push the built files to GitHub

---

## ⚙️ Enable GitHub Pages (First Time Only)

After running `npm run deploy`, you need to enable GitHub Pages:

1. Go to your repository: https://github.com/SHANNUTHOTA/Portfolio
2. Click on **Settings** tab
3. In the left sidebar, click **Pages**
4. Under **Source**, select:
   - Branch: `gh-pages`
   - Folder: `/(root)`
5. Click **Save**
6. Wait 1-2 minutes for deployment

---

## 🌐 Access Your Live Site

After GitHub Pages is enabled, your site will be live at:

👉 **https://shannuthota.github.io/Portfolio/**

---

## 🔄 Update Your Live Site

Whenever you make changes and want to update the live site:

```bash
# 1. Make your changes
# 2. Test locally
npm run dev

# 3. Deploy to GitHub Pages
npm run deploy
```

The live site will update automatically in 1-2 minutes!

---

## 📝 What Got Configured

### 1. **package.json** - Added deploy script:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

### 2. **vite.config.ts** - Set base path:
```typescript
export default defineConfig(() => ({
  base: '/Portfolio/',  // Must match your repo name
  // ...
}));
```

### 3. **gh-pages package** - Installed for deployment

---

## 🎉 You're All Set!

Just run `npm run deploy` and your portfolio will be live on the internet! 🌍

---

## 🆘 Troubleshooting

### Site shows 404 error:
- Make sure GitHub Pages is enabled in repository settings
- Verify the branch is set to `gh-pages`
- Wait a few minutes for deployment to complete

### Assets not loading:
- Check that `base: '/Portfolio/'` matches your repo name exactly
- Rebuild and redeploy: `npm run deploy`

### Changes not reflecting:
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Wait 2-3 minutes for GitHub Pages to update
- Check the Actions tab in your repo for deployment status

---

Made with ❤️ by Shanmukha Sai Nuthota
