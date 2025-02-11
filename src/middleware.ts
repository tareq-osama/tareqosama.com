// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Get token from cookies
  const token = request.cookies.get('token')?.value
  const isLoginPage = request.nextUrl.pathname === '/login'

  // For debugging
  console.log('Current path:', request.nextUrl.pathname)
  console.log('Token exists:', !!token)

  if (isLoginPage && token) {
    return NextResponse.redirect(new URL('/vendor/proposals', request.url))
  }
  
  // Protect all /vendor routes
  if (request.nextUrl.pathname.startsWith('/vendor')) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/login',
    '/vendor/:path*'
  ]
}