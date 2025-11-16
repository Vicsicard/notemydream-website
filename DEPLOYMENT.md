# Cloudflare Pages Deployment Guide

This guide walks you through deploying the NoteMyDream website to Cloudflare Pages.

## 🚀 Quick Deploy

### Option 1: Connect Git Repository (Recommended)

1. **Push to Git**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: NoteMyDream landing page"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to **Pages** → **Create a project**
   - Click **Connect to Git**
   - Select your repository
   - Configure build settings:
     - **Framework preset**: Next.js
     - **Build command**: `npm run build`
     - **Build output directory**: `out`
     - **Node version**: 18 or higher

3. **Deploy**
   - Click **Save and Deploy**
   - Cloudflare will automatically build and deploy your site
   - Every push to your main branch will trigger a new deployment

### Option 2: Direct Upload (Manual)

1. **Build locally**
   ```bash
   npm run build
   ```

2. **Install Wrangler CLI**
   ```bash
   npm install -g wrangler
   ```

3. **Login to Cloudflare**
   ```bash
   wrangler login
   ```

4. **Deploy**
   ```bash
   wrangler pages deploy out --project-name=notemydream
   ```

## 🔧 Build Configuration

The project is configured for static export:

- **next.config.js**: `output: 'export'` enables static HTML export
- **Build output**: Static files generated in `out/` directory
- **No server-side rendering**: All pages are pre-rendered at build time

## 🌐 Custom Domain

1. In Cloudflare Pages dashboard, go to your project
2. Navigate to **Custom domains**
3. Click **Set up a custom domain**
4. Enter your domain (e.g., `notemydream.com`)
5. Follow DNS configuration instructions

## 📊 Environment Variables

If you need environment variables in the future:

1. Go to **Settings** → **Environment variables**
2. Add variables for Production/Preview environments
3. Rebuild to apply changes

## 🔄 Continuous Deployment

With Git integration:
- **Production**: Deploys from `main` branch
- **Preview**: Deploys from pull requests
- **Automatic**: Every push triggers a build

## 📈 Performance

Cloudflare Pages provides:
- Global CDN distribution
- Automatic HTTPS
- HTTP/2 and HTTP/3
- Brotli compression
- Edge caching

## 🛠️ Troubleshooting

### Build fails
- Check Node.js version (18+ required)
- Verify `package.json` dependencies
- Review build logs in Cloudflare dashboard

### Pages not updating
- Clear Cloudflare cache
- Force a new deployment
- Check build output directory is correct

### Custom domain not working
- Verify DNS records are correct
- Wait for DNS propagation (up to 48 hours)
- Check SSL/TLS settings

## 📝 Post-Deployment Checklist

- [ ] Verify all sections load correctly
- [ ] Test mobile responsiveness
- [ ] Check CTA buttons (update with real app store links)
- [ ] Test page load speed
- [ ] Verify SEO meta tags
- [ ] Set up analytics (optional)
- [ ] Configure custom domain
- [ ] Test on multiple devices/browsers

## 🔗 Useful Links

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)
