"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Heart, Award, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

const values = [
  {
    icon: <Target className="w-8 h-8" />,
    title: "Agency-First Approach",
    description: "Everything we build is designed specifically for agency workflows and challenges. We don't compromise."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Client Success Obsession", 
    description: "Your success is our success. We measure ourselves by the growth and satisfaction of agencies using Corvex."
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Simplicity Over Features",
    description: "We prioritize intuitive design and workflows over feature bloat. Powerful doesn't have to mean complicated."
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Professional Excellence",
    description: "We help agencies present their absolute best to clients, elevating the entire industry standard."
  }
];

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Founder",
    bio: "Former agency owner who scaled from $0 to $2M ARR. Built Corvex to solve the exact problems she faced.",
    image: "/api/placeholder/300/300"
  },
  {
    name: "Marcus Rodriguez", 
    role: "CTO & Co-Founder",
    bio: "Ex-Google engineer with 10 years building scalable platforms. Passionate about clean, intuitive software.",
    image: "/api/placeholder/300/300"
  },
  {
    name: "Emily Watson",
    role: "Head of Product",
    bio: "Former agency operations director. Understands the daily challenges agencies face and how to solve them.",
    image: "/api/placeholder/300/300"
  },
  {
    name: "David Kim",
    role: "Head of Customer Success",
    bio: "Helped 500+ agencies transform their operations. Expert in agency growth and client management.",
    image: "/api/placeholder/300/300"
  }
];

const stats = [
  { number: "800+", label: "Agencies Transformed" },
  { number: "289%", label: "Average Revenue Growth" },
  { number: "$4.2M", label: "Revenue Processed Monthly" },
  { number: "4.9★", label: "Customer Satisfaction" }
];

export default function AboutPage() {
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
              <Users className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-300 tracking-wide uppercase">
                OUR MISSION
              </span>
            </div>
            
            <h1 className="text-h1 font-bold leading-tight tracking-tight">
              Transforming agencies from
              <span className="block mt-2 text-emerald-300">chaos to excellence</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              We started Corvex because we lived through the pain of running an unorganized agency. 
              <span className="text-white font-semibold"> Now we're helping thousands of agencies build professional, 
              scalable operations that clients love</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl lg:text-5xl font-bold text-emerald-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm lg:text-base text-zinc-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                  Built by agency owners,
                  <span className="block text-emerald-300">for agency owners</span>
                </h2>
                
                <p className="text-lg text-zinc-400 leading-relaxed">
                  Our founder Sarah ran a digital agency that grew from $0 to $2M ARR. But growth came with chaos: 
                  scattered client communications, manual processes, and constant firefighting that nearly burned her out.
                </p>
                
                <p className="text-lg text-zinc-400 leading-relaxed">
                  After trying dozens of tools that didn't understand agency workflows, she decided to build the 
                  platform she wished existed. Today, Corvex helps 800+ agencies operate professionally and scale 
                  without the stress.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-white">2019</div>
                  <div className="text-sm text-zinc-400">Corvex founded</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-white">$10M+</div>
                  <div className="text-sm text-zinc-400">Agency revenue managed</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-emerald-500/20">
                <Image
                  src="/corvex-dashboard.jpg"
                  alt="Corvex platform dashboard"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-6 mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
              Our core values
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              These principles guide every decision we make and every feature we build
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-zinc-900/50 border-zinc-700 h-full">
                  <CardContent className="p-8 text-center space-y-6">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto text-emerald-400">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{value.title}</h3>
                    <p className="text-zinc-400 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-6 mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
              Meet the team
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Agency veterans and tech experts working together to transform your operations
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-zinc-900/30 border-zinc-800 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative aspect-square">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="text-lg font-bold text-white">{member.name}</h3>
                        <p className="text-emerald-400 font-medium">{member.role}</p>
                      </div>
                      <p className="text-sm text-zinc-400 leading-relaxed">{member.bio}</p>
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
                    Ready to transform your agency?
                  </h3>
                  <p className="text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
                    Join 800+ agencies that have already transformed their operations and 
                    <span className="text-white font-semibold"> tripled their revenue</span> with Corvex.
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
                      Talk to Our Team
                    </Link>
                  </Button>
                </div>
                
                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-zinc-800 text-sm text-zinc-400">
                  <div>✓ 5-minute setup</div>
                  <div>✓ Free until first client</div>
                  <div>✓ Cancel anytime</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 