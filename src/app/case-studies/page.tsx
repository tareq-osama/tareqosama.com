"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

const caseStudies = [
  {
    company: "Velocity Digital",
    founder: "Marcus Rodriguez",
    title: "From $500K Chaos to $2.1M Professional Powerhouse",
    results: [
      { metric: "+320%", label: "Revenue Growth" },
      { metric: "23 days", label: "Faster Payments" },
      { metric: "87%", label: "Fewer Status Emails" },
      { metric: "4.9★", label: "Client Satisfaction" }
    ],
    quote: "Corvex didn't just organize our chaos—it transformed us into the professional agency we always wanted to be. Our clients actually thank us for the experience now.",
    image: "/corvex-dashboard.jpg",
    featured: true
  },
  {
    company: "Digital Spark",
    founder: "Sarah Chen",
    title: "Doubling Team Productivity While Scaling to $1.2M",
    results: [
      { metric: "+240%", label: "Team Productivity" },
      { metric: "$1.2M", label: "Annual Revenue" }
    ],
    quote: "The day I switched to Corvex was the day I stopped losing sleep over client management.",
    image: "/corvex-dashboard.jpg"
  },
  {
    company: "Growth Labs",
    founder: "Jessica Thompson",
    title: "From Near Bankruptcy to 7-Figure Success",
    results: [
      { metric: "$1.8M", label: "Annual Revenue" },
      { metric: "95%", label: "On-Time Delivery" }
    ],
    quote: "This platform literally saved my business from failure. 6 months later: $1.8M revenue, 95% on-time delivery.",
    image: "/corvex-dashboard.jpg"
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-300 tracking-wide">
                Real transformations
              </span>
            </div>
            
            <h1 className="text-h1 font-bold leading-tight tracking-tight">
              From chaos to excellence:
              <span className="block mt-2 text-emerald-300">Real agency success stories</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              See how agencies like yours transformed their operations, delighted clients, and 
              <span className="text-white font-semibold"> multiplied their revenue</span> with Corvex.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border-emerald-500/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-8 lg:p-12 space-y-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        <span className="text-emerald-400 font-semibold text-sm tracking-wider">
                          Featured success story
                        </span>
                      </div>
                      
                      <h2 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
                        {caseStudies[0].title}
                      </h2>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {caseStudies[0].results.map((result, index) => (
                        <div key={index} className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-emerald-400">{result.metric}</div>
                          <div className="text-sm text-zinc-400">{result.label}</div>
                        </div>
                      ))}
                    </div>

                    <blockquote className="text-lg text-zinc-300 italic border-l-4 border-emerald-500 pl-6">
                      "{caseStudies[0].quote}"
                    </blockquote>

                    <div className="flex items-center gap-4">
                      <div>
                        <div className="font-semibold text-white">{caseStudies[0].founder}</div>
                        <div className="text-sm text-zinc-400">Founder, {caseStudies[0].company}</div>
                      </div>
                    </div>
                  </div>

                  <div className="relative min-h-[400px] lg:min-h-full">
                    <Image
                      src={caseStudies[0].image}
                      alt={`${caseStudies[0].company} dashboard`}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Other Case Studies */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.slice(1).map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-zinc-900/50 border-zinc-700 h-full">
                  <CardContent className="p-8 space-y-6">
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-white leading-tight">
                        {study.title}
                      </h3>
                      <div className="text-emerald-400 font-medium">{study.company}</div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="bg-zinc-800/50 rounded-lg p-3 text-center">
                          <div className="text-lg font-bold text-emerald-400">{result.metric}</div>
                          <div className="text-xs text-zinc-400">{result.label}</div>
                        </div>
                      ))}
                    </div>

                    <blockquote className="text-sm text-zinc-300 italic">
                      "{study.quote}"
                    </blockquote>

                    <div className="flex items-center justify-between">
                      <div className="text-sm font-semibold text-white">{study.founder}</div>
                      <Button size="sm" variant="outline" className="border-zinc-600 text-white hover:bg-zinc-800/50">
                        Read More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <Card className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border-emerald-500/20 max-w-4xl mx-auto">
              <CardContent className="p-12 text-center space-y-8">
                <div className="space-y-4">
                  <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                    Ready to write your success story?
                  </h3>
                  <p className="text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
                    Join these successful agencies and transform your operations from chaos to excellence.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Button 
                    size="lg"
                    className="bg-emerald-500 text-white hover:bg-emerald-400 font-semibold px-8 py-6 text-lg h-auto rounded-xl group shadow-lg"
                    asChild
                  >
                    <Link href="/#pricing">
                      Start Your Transformation FREE
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-zinc-600 text-white hover:bg-zinc-800/50 px-8 py-6 text-lg h-auto rounded-xl"
                    asChild
                  >
                    <Link href="/contact">
                      Schedule a Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 