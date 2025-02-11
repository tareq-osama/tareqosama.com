"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import { setCookie } from 'cookies-next'

export default function LoginPage() {
  const [identifier, setIdentifier] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/local`, {
        identifier,
        password,
      })
      
      const { jwt, user } = response.data

      // For debugging
      console.log('Received JWT:', !!jwt)
      console.log('User data received:', !!user)

      // Set token in cookie
      setCookie('token', jwt, {
        maxAge: 30 * 24 * 60 * 60, // 30 days
        path: '/',
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax'
      })

      // Store user info
      setCookie('user', JSON.stringify({
        id: user.id,
        username: user.username,
        email: user.email
      }))

      // Force a hard reload to ensure cookies are properly set
      window.location.href = '/vendor/proposals'
    } catch (error: any) {
      console.error("Login error:", error.response?.data || error.message)
      setError(
        error.response?.data?.error?.message || 
        "Invalid email or password. Please try again."
      )
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="grid min-h-screen lg:grid-cols-2 bg-black">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center gap-2 font-medium">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            </div>
                <Image
                    src="/corvexlogo.svg"
                    alt="CORVEX"
                    width={150}
                    height={100}
                    priority
                    className="object-contain"
                  />
            </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-sm space-y-6">
            <div className="flex flex-col items-center gap-2 text-center">
              <h1 className="text-2xl font-bold">Welcome Back</h1>
              <p className="text-sm text-muted-foreground">Please sign in to your account</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  required
                  autoComplete="email"
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a href="#" className="ml-auto text-sm underline-offset-4 hover:underline">
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  className="w-full"
                />
              </div>  
              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isLoading}
                aria-busy={isLoading}
              >
                {isLoading ? "Signing In..." : "Sign In"}
              </Button>
            </form>
            <div className="text-center text-sm">
              Don't have an account?{" "}
              <a href="/signup" className="underline underline-offset-4">
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative hidden lg:block">
        <Image
          src="/bg-login.jpg"
          alt="Login cover"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    </div>
  )
}