// app/layout.tsx
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: "Corvex - All-in-One Client Portal for One-Person Businesses",
  description: "Corvex simplifies client communication, invoicing, and project tracking—so you can focus on growing your business.",
  keywords: ["client portal", "business management", "freelancer tools", "project tracking"],
  authors: [{ name: "Corvex Team" }],
  creator: "Corvex",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://corvex.com",
    title: "Corvex - All-in-One Client Portal",
    description: "Simplify client communication, invoicing, and project tracking for one-person businesses.",
    siteName: "Corvex",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corvex - All-in-One Client Portal",
    description: "Simplify client communication, invoicing, and project tracking for one-person businesses.",
    creator: "@corvex",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}