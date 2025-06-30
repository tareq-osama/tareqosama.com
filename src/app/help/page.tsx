"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Search, HelpCircle, Book, MessageCircle, Video, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

const faqItems = [
  {
    question: "How quickly can I set up Corvex for my agency?",
    answer: "Most agencies are up and running in under 5 minutes. Our setup wizard guides you through creating your first client portal, and you can invite clients immediately."
  },
  {
    question: "What if my clients don't want to use a new system?",
    answer: "Our client portals are designed to be intuitive and valuable from day one. Clients love having a central place to track their projects, see progress, and communicate. We provide templates to help introduce the system."
  },
  {
    question: "Can I customize the branding to match my agency?",
    answer: "Absolutely! Every client portal is fully white-labeled with your logo, colors, and branding. Your clients will see a professional extension of your agency, not a third-party tool."
  },
  {
    question: "How does the AI proposal feature work?",
    answer: "Our AI analyzes your project requirements and generates professional proposals based on your past successful projects and industry best practices. You can customize and refine before sending."
  },
  {
    question: "What happens if I need to cancel my subscription?",
    answer: "You can cancel anytime with one click. Your data remains accessible for 30 days, and we provide export tools to take your information with you. No contracts or cancellation fees."
  },
  {
    question: "Do you integrate with tools we're already using?",
    answer: "Yes! Corvex integrates with popular tools like Slack, Trello, Asana, QuickBooks, and more. We also have a robust API for custom integrations."
  }
];

const supportCategories = [
  {
    icon: <Book className="w-8 h-8" />,
    title: "Getting Started",
    description: "Step-by-step guides to set up your agency",
    link: "/docs/getting-started"
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: "Video Tutorials",
    description: "Watch detailed walkthroughs of key features",
    link: "/docs/tutorials"
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Documentation",
    description: "Complete reference for all Corvex features",
    link: "/docs"
  },
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: "Live Chat",
    description: "Get instant help from our support team",
    link: "#chat"
  }
];

export default function HelpPage() {
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
              <HelpCircle className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-300 tracking-wide uppercase">
                HELP CENTER
              </span>
            </div>
            
            <h1 className="text-h1 font-bold leading-tight tracking-tight">
              How can we
              <span className="block mt-2 text-emerald-300">help you today?</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions, explore our documentation, or get in touch with our support team.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400" />
                <Input
                  placeholder="Search for help articles, tutorials, or guides..."
                  className="pl-12 pr-4 py-4 bg-zinc-900/50 border-zinc-700 text-white placeholder:text-zinc-400 text-lg h-auto rounded-xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Help Categories */}
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
              Quick help
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Find the type of help you need
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-zinc-900/50 border-zinc-700 h-full hover:bg-zinc-800/50 transition-colors">
                  <CardContent className="p-8 text-center space-y-6">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto text-emerald-400">
                      {category.icon}
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-white">{category.title}</h3>
                      <p className="text-zinc-400 leading-relaxed">{category.description}</p>
                    </div>
                    <Button asChild variant="outline" className="border-zinc-600 text-white hover:bg-zinc-800/50">
                      <Link href={category.link}>
                        Explore
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-6 mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
              Frequently asked questions
            </h2>
            <p className="text-lg text-zinc-400">
              Get answers to the most common questions about Corvex
            </p>
          </motion.div>
          
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-zinc-900/30 border-zinc-800">
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      <h3 className="text-lg font-bold text-white leading-tight">
                        {item.question}
                      </h3>
                      <p className="text-zinc-400 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
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
                    Still need help?
                  </h3>
                  <p className="text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
                    Our support team is here to help you succeed. Get in touch and we'll respond within 2 hours during business hours.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Button 
                    size="lg"
                    className="bg-emerald-500 text-white hover:bg-emerald-400 font-semibold px-8 py-6 text-lg h-auto rounded-xl"
                    asChild
                  >
                    <Link href="/contact">
                      Contact Support
                    </Link>
                  </Button>
                  
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-zinc-600 text-white hover:bg-zinc-800/50 px-8 py-6 text-lg h-auto rounded-xl"
                  >
                    Live Chat
                  </Button>
                </div>
                
                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-zinc-800 text-sm text-zinc-400">
                  <div>✓ 2-hour response time</div>
                  <div>✓ Expert support team</div>
                  <div>✓ Available Mon-Fri</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 