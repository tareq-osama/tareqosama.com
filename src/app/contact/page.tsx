"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function ContactPage() {
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
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-300 tracking-wide uppercase">
                GET IN TOUCH
              </span>
            </div>
            
            <h1 className="text-h1 font-bold leading-tight tracking-tight">
              Let's transform your
              <span className="block mt-2 text-emerald-300">agency together</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Ready to stop losing clients to chaos and start building the professional agency you've always wanted? 
              <span className="text-white font-semibold"> Let's talk</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-zinc-900/50 border-zinc-700">
                <CardContent className="p-8 space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-white">Send us a message</h2>
                    <p className="text-zinc-400">
                      Tell us about your agency and how we can help you transform your operations.
                    </p>
                  </div>

                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-sm font-medium text-white">
                          First Name
                        </Label>
                        <Input
                          id="firstName"
                          placeholder="Enter your first name"
                          className="bg-zinc-800 border-zinc-600 text-white placeholder:text-zinc-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-sm font-medium text-white">
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          placeholder="Enter your last name"
                          className="bg-zinc-800 border-zinc-600 text-white placeholder:text-zinc-400"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-white">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="bg-zinc-800 border-zinc-600 text-white placeholder:text-zinc-400"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-sm font-medium text-white">
                        Agency Name
                      </Label>
                      <Input
                        id="company"
                        placeholder="Enter your agency name"
                        className="bg-zinc-800 border-zinc-600 text-white placeholder:text-zinc-400"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium text-white">
                        Message
                      </Label>
                      <textarea
                        id="message"
                        rows={6}
                        placeholder="Tell us about your agency and what challenges you're facing..."
                        className="w-full px-3 py-2 bg-zinc-800 border border-zinc-600 rounded-md text-white placeholder:text-zinc-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
                      />
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-emerald-500 text-white hover:bg-emerald-400 font-semibold py-3 rounded-xl group"
                    >
                      Send Message
                      <Send className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Get in touch</h2>
                <p className="text-lg text-zinc-400 leading-relaxed">
                  We're here to help you transform your agency operations. Choose the best way to reach us.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="bg-zinc-900/30 border-zinc-800">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-white">Email</h3>
                        <p className="text-zinc-400">For general inquiries and support</p>
                        <a href="mailto:hello@usecorvex.com" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                          hello@usecorvex.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-900/30 border-zinc-800">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-white">Phone</h3>
                        <p className="text-zinc-400">Speak directly with our team</p>
                        <a href="tel:+1-555-CORVEX" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                          +1 (555) CORVEX
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-900/30 border-zinc-800">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-white">Hours</h3>
                        <p className="text-zinc-400">Monday - Friday</p>
                        <p className="text-white">9:00 AM - 6:00 PM PST</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-900/30 border-zinc-800">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-white">Location</h3>
                        <p className="text-zinc-400">San Francisco, CA</p>
                        <p className="text-white">Remote-first company</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border-emerald-500/20">
                <CardContent className="p-6 text-center space-y-4">
                  <h3 className="text-lg font-bold text-white">Need immediate help?</h3>
                  <p className="text-sm text-zinc-300">
                    Book a 15-minute call with our team to discuss your specific needs
                  </p>
                  <Button className="bg-emerald-500 text-white hover:bg-emerald-400 font-semibold px-6 py-2 rounded-xl">
                    Schedule a Call
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 