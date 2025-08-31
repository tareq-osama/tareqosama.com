import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/marketing/site-nav"
import Footer from "@/components/marketing/footer"
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'
import GoogleTagManager from '@/components/seo/google-tag-manager'
import "./globals.css"
import Navigation from "@/components/marketing/navigation"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://tareqosama.com'),
  title: {
    default: "Tareq - All-in-One Client Portal for One-Person Businesses",
    template: "%s | Tareq"
  },
  description: "Tareq is the complete client management platform for one-person businesses. Streamline client communication, automate invoicing, track projects, and grow your revenue with our all-in-one solution.",
  keywords: [
    "client portal",
    "business management software",
    "freelancer tools",
    "project tracking",
    "client communication",
    "invoice management",
    "one-person business",
    "small business software",
    "client management system",
    "professional services platform",
    "business automation",
    "client dashboard"
  ],
  authors: [{ name: "Tareq Team", url: "https://tareqosama.com" }],
  creator: "Tareq",
  publisher: "Tareq Inc.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tareqosama.com",
    title: "Tareq - All-in-One Client Portal for One-Person Businesses",
    description: "Transform your one-person business with Tareq's complete client management platform. Streamline communication, automate billing, and grow your revenue.",
    siteName: "Tareq",
    images: [
      {
        url: "https://tareqosama.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tareq - Client Portal Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tareq - All-in-One Client Portal",
    description: "Transform your one-person business with our complete client management platform.",
    creator: "@tareq",
    images: ["https://tareqosama.com/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "manifest", url: "/site.webmanifest" },
    ],
  },
  manifest: "/site.webmanifest",
  category: "Business Software",
  classification: "Business Management Platform",
  referrer: "origin-when-cross-origin",
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: "your-google-verification-code-here",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code",
    },
  },
  alternates: {
    canonical: "https://tareqosama.com",
    languages: {
      "en-US": "https://tareqosama.com",
    },
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Tareq",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: "All-in-one client portal and business management platform for one-person businesses",
  url: "https://tareqosama.com",
  screenshot: "https://tareqosama.com/screenshot.jpg",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "2847"
  },
  offers: {
    "@type": "Offer",
    price: "29",
    priceCurrency: "USD",
    priceValidUntil: "2025-12-31",
    availability: "https://schema.org/InStock"
  },
  creator: {
    "@type": "Organization",
    name: "Tareq Inc.",
    url: "https://tareqosama.com"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>

     {/* Tailwind CSS */}
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />


        {/* Google Tag Manager - HEAD */}
        <GoogleTagManager />
        
        {/* Google Search Console Verification */}
        <meta  name="google-site-verification" content="your-google-verification-code-here" />
        

     
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Google Tag Manager (noscript) - BODY */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-KKQSBJLP"
            height="0" 
            width="0" 
            style={{display: 'none', visibility: 'hidden'}}
          />
        </noscript>
        
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}