// utils/auth.ts
import { deleteCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'

export const logout = () => {
  deleteCookie('token')
  window.location.href = '/login'
}


// utils/auth.ts
import { cookies } from 'next/headers'

export async function isAuthenticated() {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')
  return !!token
}

export async function getToken() {
  const cookieStore = await cookies()
  return cookieStore.get('token')?.value
}