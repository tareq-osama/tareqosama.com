


// app/layout.tsx
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {

  icons:{

    icon:"/favicon.ico",
    apple:"/favicon.ico",

  },
  title: "Corvex",
  description: "Client Portal Dashboard",
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen">
              <main className="flex-1 overflow-auto min-w-full ">
                {children}
              </main>
          </div>
          
        </ThemeProvider>
      </body>
    </html>
  )
}