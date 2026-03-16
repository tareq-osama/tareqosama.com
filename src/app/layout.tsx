import type { Metadata } from "next"
import { IBM_Plex_Sans_Arabic } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Footer from "@/components/marketing/footer"
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'
import GoogleTagManager from '@/components/seo/google-tag-manager'
import "./globals.css"
import Navigation from "@/components/marketing/navigation"

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: 'swap',
  variable: '--font-ibm-plex-arabic',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://tareqosama.com'),
  title: {
    default: "طارق أسامة - مصمم رقمي ومطوّر ويب",
    template: "%s | طارق أسامة"
  },
  description: "طارق مصمم رقمي ومطوّر ويب يجمع بين تقنيات الويب والذكاء الاصطناعي واستراتيجيات التسويق والعلامة التجارية لبناء حلول مبتكرة تدفع نمو الأعمال وترفع مستوى حضور العلامات التجارية.",
  keywords: [
    "مصمم رقمي",
    "مطوّر ويب",
    "تصميم ويب",
    "تصميم UI/UX",
    "هوية بصرية",
    "استراتيجية تسويق",
    "تقنيات ويب",
    "تكامل الذكاء الاصطناعي",
    "تطوير الواجهة الأمامية",
    "تصميم متجاوب",
    "تصميم إبداعي",
    "هوية العلامة التجارية"
  ],
  authors: [{ name: "طارق أسامة", url: "https://tareqosama.com" }],
  creator: "طارق أسامة",
  publisher: "طارق أسامة",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ar_AE",
    url: "https://tareqosama.com",
    title: "طارق أسامة - مصمم رقمي ومطوّر ويب",
    description: "مصمم رقمي ومطوّر ويب يجمع بين تقنيات الويب والذكاء الاصطناعي واستراتيجيات التسويق والعلامة التجارية لبناء حلول مبتكرة تدفع نمو الأعمال وترفع مستوى حضور العلامات التجارية.",
    siteName: "طارق أسامة",
    images: [
      {
        url: "https://tareqosama.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "طارق أسامة",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "طارق أسامة - مصمم رقمي ومطوّر ويب",
    description: "مصمم رقمي ومطوّر ويب يجمع بين تقنيات الويب والذكاء الاصطناعي واستراتيجيات التسويق والعلامة التجارية لبناء حلول مبتكرة.",
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
  category: "Portfolio شخصي",
  classification: "التصميم الرقمي وتطوير الويب",
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
      "ar-AE": "https://tareqosama.com",
    },
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "طارق أسامة",
  jobTitle: "مصمم رقمي ومطوّر ويب",
  description: "مصمم رقمي ومطوّر ويب يجمع بين تقنيات الويب والذكاء الاصطناعي واستراتيجيات التسويق والعلامة التجارية لبناء حلول مبتكرة تدفع نمو الأعمال وترفع مستوى حضور العلامات التجارية.",
  url: "https://tareqosama.com",
  sameAs: [
    "https://tareqosama.com"
  ],
  knowsAbout: [
    "تصميم الويب",
    "تطوير الويب",
    "تصميم UI/UX",
    "هوية بصرية",
    "استراتيجية تسويق",
    "تكامل الذكاء الاصطناعي",
    "تطوير الواجهة الأمامية"
  ],
  alumniOf: {
    "@type": "Organization",
    name: "تطوير الويب والتصميم"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning className={ibmPlexSansArabic.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <GoogleTagManager />
        <meta name="google-site-verification" content="your-google-verification-code-here" />
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
      <body className={`${ibmPlexSansArabic.className} antialiased`} suppressHydrationWarning>
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
          defaultTheme="system"
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
