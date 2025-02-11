// app/(auth)/login/layout.tsx
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Login to Corvex®",
  description: "Agencies Long Waited Client Portal",
}

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {  
  return (
          <ThemeProvider 
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange
        >
          <div className="min-h-screen">
            {children}
          </div>
        </ThemeProvider>
  )
}