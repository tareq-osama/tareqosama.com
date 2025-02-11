// app/(vendor)/layout.tsx
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { redirect } from "next/navigation"
import { cookies } from 'next/headers'

import { ThemeProvider } from "@/components/theme-provider"
import AppSidebar from "@/components/sidebar"
import { AppHeader } from "@/components/app-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import "../../globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Corvex® Vendor",
  description: "Vendor Portal Dashboard",
}


export default async function VendorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')

  if (!token) {
    redirect('/login')
  } 

  // Server-side session check
  return (
    <div lang="en" suppressHydrationWarning >
      <div className={inter.className} suppressHydrationWarning >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <div className="flex h-screen w-screen">
              <AppSidebar />
              <SidebarInset className="flex flex-col flex-1 overflow-hidden">
                <AppHeader
                  currentPage="Vendor Dashboard"
                  parentPage={{
                    title: "Corvex",
                    href: "/"
                  }}
                />
                <div className="flex-1 overflow-auto p-4">
                  {children}
                </div>
              </SidebarInset>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </div>
    </div>
  )
}