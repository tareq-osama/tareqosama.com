# Corvex - Client Portal Marketing Site

A modern, performant marketing website for Corvex, the all-in-one client portal designed for one-person businesses.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15.4, React 19, and TypeScript
- **Performance Optimized**: Image optimization, lazy loading, and bundle optimization
- **SEO Ready**: Built-in sitemap, robots.txt, and meta tags
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Theme**: Elegant dark theme with smooth animations
- **Component Library**: shadcn/ui components with Radix UI primitives

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4 with App Router
- **Runtime**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + Radix UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Smooth Scrolling**: Lenis

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   ├── sitemap.ts         # SEO sitemap
│   └── robots.ts          # Robots.txt
├── components/
│   ├── marketing/         # Marketing page components
│   │   ├── hero.tsx       # Hero section
│   │   ├── features.tsx   # Features showcase
│   │   ├── pricing.tsx    # Pricing section
│   │   └── ...
│   └── ui/                # Reusable UI components
├── lib/                   # Utility functions
└── utility/               # Helper utilities
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd corvex-frontend
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## ⚡ Performance Features

- **Image Optimization**: WebP/AVIF formats with blur placeholders
- **Bundle Optimization**: Package imports optimization for common libraries
- **Code Splitting**: Automatic code splitting with Next.js
- **SEO Optimization**: Meta tags, sitemap, and robots.txt
- **Security Headers**: CSP and security headers configured

## 🎨 Customization

### Theme
The project uses a dark theme by default. To customize:
- Modify `src/app/globals.css` for global styles
- Update `tailwind.config.ts` for theme configuration

### Components
- UI components are in `src/components/ui/`
- Marketing components are in `src/components/marketing/`
- All components use TypeScript and are fully typed

## 📦 Bundle Analysis

To analyze the bundle size:

```bash
ANALYZE=true npm run build
```

## 🔧 Configuration

### Next.js Config
- Image optimization settings
- Security headers
- Performance optimizations
- SVG handling

### ESLint & TypeScript
- Strict TypeScript configuration
- Next.js ESLint rules
- Path aliases configured (`@/` points to `src/`)

## 📄 License

This project is proprietary software for Corvex.

## 🤝 Contributing

This is a private project for Corvex. Please follow the established patterns and ensure all changes maintain performance and accessibility standards.

---

Built with ❤️ for Corvex
