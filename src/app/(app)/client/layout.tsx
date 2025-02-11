// src/app/(app)/client/layout.tsx
import { type ReactNode } from 'react'
import type { Metadata } from "next"
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: "Corvex® Client Portal",
  description: "Client Portal Dashboard",
}

interface ClientLayoutProps {
  children: ReactNode
}

export default async function ClientLayout({ children }: ClientLayoutProps) {
  // Auth check
  const cookieStore = await cookies()
  const token = cookieStore.get('token')

  if (!token) {
    redirect('/login')
  }

  return (
    <div className="flex min-h-screen">
      <main className="flex-1 overflow-auto p-4">
        {children}
      </main>
    </div>
  )
}