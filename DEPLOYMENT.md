# Deployment Guide

## Deployment Options

### 1. Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### 2. Netlify
1. Connect repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Set environment variables in Netlify dashboard

### 3. AWS S3 + CloudFront
1. Build the project: `npm run build`
2. Upload `dist/` contents to S3 bucket
3. Configure CloudFront for SPA routing
4. Set up custom domain with Route 53

### 4. Docker Deployment

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Environment Variables
- Copy `.env.example` to `.env.local`
- Set `GEMINI_API_KEY` if using AI features
- Configure contact information variables

### Performance Optimization
- Enable gzip compression
- Set up CDN for static assets
- Configure caching headers
- Monitor Core Web Vitals

### Security Headers
Implement these security headers:
- Content-Security-Policy
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy