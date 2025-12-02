# Hero Landing Page - Deployment Guide for GitHub Pages

## Quick Start

This folder contains all files needed to deploy your hero landing page to GitHub Pages.

### Step 1: Download & Setup
1. Extract this folder on your computer
2. Navigate to the folder: `cd hero-site-deploy`
3. Install dependencies: `npm install`

### Step 2: Build
```bash
npm run build
```
This creates a `dist/` folder with production-ready files.

### Step 3: Deploy to GitHub Pages

#### Option A: Automatic (Recommended)
1. Push this code to GitHub
2. Create `.github/workflows/deploy.yml` in your repo:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

3. Enable GitHub Pages in repo settings (Deploy from gh-pages branch)

#### Option B: Manual
1. Run `npm run build`
2. Copy entire `dist/` folder content
3. Go to your GitHub Pages hosting location
4. Paste the files

### File Structure

```
├── src/                      # React source code
├── attached_assets/          # Generated images & assets
├── index.html               # Main HTML file
├── package.json             # Dependencies
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript config
├── postcss.config.js        # PostCSS config
└── .gitignore              # Git ignore rules
```

### Important Notes

✅ All required files are included
✅ Images are pre-generated and included
✅ Configuration is production-ready
✅ No backend server needed (static site)

### Troubleshooting

**Problem**: Build fails
- Solution: Make sure Node.js 16+ is installed (`node --version`)

**Problem**: Images not showing on GitHub Pages
- Solution: Ensure `vite.config.ts` has correct base path for your domain

**Problem**: Styles look broken
- Solution: Clear browser cache or do a hard refresh (Ctrl+Shift+R)

### Need to Modify?
- Edit components in `src/components/`
- Update text in `src/pages/home.tsx`
- Rebuild: `npm run build`
- Redeploy following steps above

---

**Questions?** Check GitHub Pages documentation: https://pages.github.com/
