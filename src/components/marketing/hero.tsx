"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from "next/link";
import Sitenav from "./site-nav";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/20 via-black to-zinc-900/40" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-zinc-800/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-zinc-700/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Navigation */}
        <div className="py-6">
          <Sitenav />
        </div>

        <div className="flex flex-col lg:flex-row items-center min-h-screen py-24 gap-16">
          {/* Left Column - Content */}
          <div className="flex-1 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800/60 border border-zinc-700 backdrop-blur-sm">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-zinc-300 tracking-wide">
                  🚀 USED BY 800+ AGENCIES WORLDWIDE
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight tracking-tight">
                Stop losing clients to
                <span className="block text-zinc-300 mt-2">
                  unprofessional chaos
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-xl lg:text-2xl text-zinc-400 leading-relaxed max-w-2xl">
                The #1 white-label platform that transforms scattered agencies into 
                <span className="text-white font-semibold"> professional powerhouses</span>. 
                Watch your revenue grow 3x while working 50% less.
              </p>

              {/* Value Props */}
              <div className="grid grid-cols-2 gap-4 text-sm text-zinc-300">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                  <span>Setup in 5 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                  <span>Free until first client</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                  <span>No long-term contracts</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                  <span>Cancel anytime</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <Button 
                  size="lg"
                  className="bg-white text-black hover:bg-zinc-100 font-semibold px-8 py-6 text-lg h-auto rounded-xl group transition-all duration-200"
                  asChild
                >
                  <Link href="#pricing">
                    Get Your Agency Portal FREE
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-zinc-600 text-white hover:bg-zinc-800/50 px-8 py-6 text-lg h-auto rounded-xl backdrop-blur-sm group"
                  asChild
                >
                  <Link href="#features">
                    <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                    See 2-Min Demo
                  </Link>
                </Button>
              </div>

              {/* Social Proof Stats */}
              <div className="grid grid-cols-3 gap-8 pt-12 border-t border-zinc-800">
                <div className="text-center lg:text-left">
                  <div className="text-3xl lg:text-4xl font-bold text-white">289%</div>
                  <div className="text-sm text-zinc-400 uppercase tracking-wider">Average Revenue Increase</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl lg:text-4xl font-bold text-white">4.9★</div>
                  <div className="text-sm text-zinc-400 uppercase tracking-wider">Customer Rating</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl lg:text-4xl font-bold text-white">$4.2M</div>
                  <div className="text-sm text-zinc-400 uppercase tracking-wider">Revenue Processed</div>
                </div>
              </div>

              {/* Testimonial Quote */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <p className="text-zinc-300 italic mb-3">
                  "Corvex transformed my chaotic 6-figure agency into a streamlined 7-figure operation. 
                  My clients actually thank me for the professional experience now."
                </p>
                <div className="text-sm">
                  <span className="text-white font-semibold">Sarah Chen</span>
                  <span className="text-zinc-400"> — $1.2M ARR, Digital Spark Agency</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1"
          >
            <div className="relative">
              {/* Main Dashboard Image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
                <Image
                  src="/corvex-dashboard.jpg"
                  alt="Corvex Agency Dashboard - See how professional agencies manage clients"
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-4 -left-4 bg-zinc-900/90 backdrop-blur-sm border border-zinc-700 rounded-xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-white">Live Client Portal</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -top-4 -right-4 bg-zinc-900/90 backdrop-blur-sm border border-zinc-700 rounded-xl p-4 shadow-xl"
              >
                <div className="text-center">
                  <div className="text-lg font-bold text-emerald-400">289%</div>
                  <div className="text-xs text-zinc-400">Revenue Growth</div>
                </div>
              </motion.div>

              {/* ROI Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute top-1/2 -right-8 bg-white text-black rounded-full p-4 shadow-xl"
              >
                <div className="text-center">
                  <div className="text-sm font-bold">3x ROI</div>
                  <div className="text-xs">In 30 Days</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-zinc-500 uppercase tracking-wider">See how it works</span>
          <div className="w-px h-8 bg-gradient-to-b from-zinc-500 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}