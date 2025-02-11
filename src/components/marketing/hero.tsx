"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Sitenav from "./site-nav";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden ">
      {/* Gradient Orbs */}
      <div className="absolute -left-1/4 top-1/4 w-[600px] h-[600px] rounded-full bg-blue-500/20 blur-[120px]" />
      <div className="absolute -right-1/4 bottom-1/4 w-[600px] h-[600px] rounded-full bg-slate-700 blur-[120px]" />
      
      <div className="container mx-auto px-4 relative z-10">
      
      <div className="my-10">
      <Sitenav/>
      </div>

        <div className="min-h-screen flex flex-col items-center justify-center text-center py-20">
          {/* Main Content */}


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-12"
          >
            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
              The All-in-One Client Portal for
              <span className="block mt-2"> One-Person-Business</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
              Corvex simplifies client communication, invoicing, and project tracking—so you can focus on growing your
              business.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-6 rounded-full min-w-[200px]"
                asChild
              >
                <Link href="/login">Start for free</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-slate-300 bg-slate-700 hover:bg-slate-300 hover:text-slate-900 text-lg px-8 py-6 rounded-full min-w-[200px]"
              >
                Watch video
              </Button>
            </div>
          </motion.div>

          {/* App Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-6xl mt-16"
          >
            <div className="relative w-full h-[600px] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/corvex-dashboard.png"
                alt="Corvex Dashboard"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}