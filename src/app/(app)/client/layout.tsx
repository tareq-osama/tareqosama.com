// src/app/(app)/client/layout.tsx
import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { cookies } from 'next/headers'

export const metadata: Metadata = {
  title: "Corvex® Client Portal",
  description: "Client Portal Dashboard",
}

export default async function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Check if user is authenticated and is a client
  const cookieStore = await cookies()
  const token = cookieStore.get('token')

  if (!token) {
    redirect('/client-login')
  }

  return (
    <div className="flex min-h-screen">
      <main className="flex-1 overflow-auto p-4">
        {children}
      </main>
    </div>
  )
}