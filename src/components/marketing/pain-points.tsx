"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { X, CheckCircle, ArrowRight, AlertTriangle, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const painPoints = [
  {
    problem: "Clients constantly asking 'What's the status?' because you have no professional way to show project progress",
    solution: "Real-time client portals where clients see every update, milestone, and deliverable—without a single email",
    impact: "87% reduction in status update emails"
  },
  {
    problem: "Chasing late payments while juggling spreadsheets, losing thousands in cash flow every month",
    solution: "Automated invoicing with built-in payment reminders and one-click Stripe integration that gets you paid faster",
    impact: "Average 23-day faster payment collection"
  },
  {
    problem: "Projects spiraling out of scope because there's no clear system for managing deliverables and timelines",
    solution: "Crystal-clear project management with automated workflows that keep everyone accountable and on-track",
    impact: "95% of projects delivered on-time"
  },
  {
    problem: "Looking unprofessional with Gmail, Google Docs, and generic tools that scream 'small operation'",
    solution: "White-labeled client experience with YOUR domain, YOUR branding that makes you look like a $10M agency",
    impact: "3x higher client retention rate"
  }
];

const costOfInaction = [
  { metric: "$47,000", description: "Average annual revenue lost to poor client experience" },
  { metric: "31 hours", description: "Wasted per week on manual admin tasks" },
  { metric: "68%", description: "Of clients leave due to poor communication" },
  { metric: "40%", description: "Higher prices agencies charge with professional systems" }
];

export default function PainPoints() {
  return (
    <section className="py-32 bg-gradient-to-b from-black via-zinc-900 to-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-6 mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20">
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <span className="text-sm font-medium text-red-300 tracking-wide uppercase">THE HIDDEN COST OF CHAOS</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            Your agency is bleeding money
            <span className="block mt-2 text-red-300">while you sleep</span>
          </h2>
          
          <p className="text-lg lg:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Every day without a professional system costs you clients, revenue, and your sanity. 
            <span className="text-white font-semibold"> Here's what's really happening behind the scenes.</span>
          </p>
        </motion.div>

        {/* Cost of Inaction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          {costOfInaction.map((cost, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-red-500/5 border-red-500/20 text-center p-6">
                <CardContent className="p-0 space-y-3">
                  <div className="text-3xl lg:text-4xl font-bold text-red-400">{cost.metric}</div>
                  <div className="text-sm text-zinc-400 leading-tight">{cost.description}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Problem vs Solution */}
        <div className="space-y-16 mb-20">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
            >
              {/* Problem Card */}
              <Card className="bg-red-500/5 border-red-500/20 relative overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center">
                      <X className="w-4 h-4 text-red-400" />
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-sm font-medium text-red-400 uppercase tracking-wider">
                        COSTING YOU RIGHT NOW
                      </h4>
                      <p className="text-lg text-zinc-300 leading-relaxed font-medium">
                        {point.problem}
                      </p>
                      <div className="text-sm text-red-300 font-semibold">
                        💸 This is expensive chaos
                      </div>
                    </div>
                  </div>
                  
                  {/* Background pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                    <div className="w-full h-full bg-gradient-to-br from-red-500 to-transparent rounded-full blur-2xl" />
                  </div>
                </CardContent>
              </Card>

              {/* Solution Card */}
              <Card className="bg-emerald-500/5 border-emerald-500/20 relative overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-sm font-medium text-emerald-400 uppercase tracking-wider">
                        CORVEX SOLUTION
                      </h4>
                      <p className="text-lg text-white leading-relaxed font-medium">
                        {point.solution}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-emerald-300 font-semibold">
                        <TrendingUp className="w-4 h-4" />
                        <span>📈 {point.impact}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Background pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                    <div className="w-full h-full bg-gradient-to-br from-emerald-500 to-transparent rounded-full blur-2xl" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Visual Comparison Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20"
        >
          {/* Before Image */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <h3 className="text-2xl lg:text-3xl font-bold text-white">
                Your Agency Today
              </h3>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-red-500/20 opacity-60">
              <Image
                src="/corvex-dashboard.jpg"
                alt="Chaotic agency workflow - scattered tools and confused clients"
                fill
                className="object-cover grayscale"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/60 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-red-500/20 border border-red-500/30 rounded-lg px-6 py-3 text-center">
                  <span className="text-red-300 font-bold text-lg">Expensive Chaos</span>
                  <div className="text-red-400 text-sm mt-1">Losing $47K+ annually</div>
                </div>
              </div>
            </div>
            <div className="space-y-2 text-sm text-zinc-400">
              <div className="flex items-center gap-2">
                <X className="w-4 h-4 text-red-400" />
                <span>Clients constantly asking for updates</span>
              </div>
              <div className="flex items-center gap-2">
                <X className="w-4 h-4 text-red-400" />
                <span>Late payments killing cash flow</span>
              </div>
              <div className="flex items-center gap-2">
                <X className="w-4 h-4 text-red-400" />
                <span>Looking unprofessional vs competitors</span>
              </div>
            </div>
          </div>

          {/* After Image */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
              <h3 className="text-2xl lg:text-3xl font-bold text-white">
                Your Agency with Corvex
              </h3>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-emerald-500/20 shadow-2xl">
              <Image
                src="/corvex-dashboard.jpg"
                alt="Professional agency workflow with Corvex - organized and profitable"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent" />
              <div className="absolute top-6 right-6 bg-emerald-500/20 border border-emerald-500/30 rounded-lg px-4 py-2">
                <span className="text-emerald-300 font-bold">Professional Powerhouse</span>
              </div>
              <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-sm border border-emerald-500/30 rounded-lg px-4 py-2">
                <div className="text-emerald-400 font-bold text-lg">+289% Revenue</div>
                <div className="text-emerald-300 text-sm">In first 6 months</div>
              </div>
            </div>
            <div className="space-y-2 text-sm text-zinc-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Clients praising your professionalism</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Payments arriving 23 days faster</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Charging 40% higher rates confidently</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Urgency CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <Card className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border-emerald-500/20 max-w-4xl mx-auto">
            <CardContent className="p-12 text-center space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                  Every day you wait costs you $128
                </h3>
                <div className="text-red-400 font-semibold text-lg">
                  ⏰ That's $47,000 per year in lost revenue
                </div>
              </div>
              
              <p className="text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
                While you're reading this, your competitors with professional systems are 
                <span className="text-white font-semibold"> stealing your potential clients</span>. 
                Stop the bleeding today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Button 
                  size="lg"
                  className="bg-emerald-500 text-white hover:bg-emerald-400 font-semibold px-8 py-6 text-lg h-auto rounded-xl group shadow-lg"
                >
                  Stop Losing Money - Start FREE Today
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-zinc-600 text-white hover:bg-zinc-800/50 px-8 py-6 text-lg h-auto rounded-xl"
                >
                  See 2-Minute Demo
                </Button>
              </div>
              
              <div className="flex items-center justify-center gap-6 text-sm text-zinc-400 pt-4 border-t border-zinc-800">
                <span>✓ Setup in 5 minutes</span>
                <span>✓ Free until first client</span>
                <span>✓ Cancel anytime</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

