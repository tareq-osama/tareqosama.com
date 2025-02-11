"use client"


import Image from "next/image"
import Link from "next/link"


export default function LoginPage() {


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
          <div className="w-full  space-y-8">
            <div className="flex flex-col items-center gap-2 text-center">
              <h1 className="text-5xl font-bold text-slate-300 ">Welcome to The All-in-One Client Portal for
              One-Person-Business CORVEX®</h1>
              <p className="text-md text-muted-foreground"></p>
            </div>
      
          
            <div className="text-center">
           
            <Link
                href="/"
                className="text-xl font-medium text-white border-slate-700 border hover:bg-slate-600 px-10 py-4 rounded-full transition-colors"
              >
                Request Early Acess
              </Link>  


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