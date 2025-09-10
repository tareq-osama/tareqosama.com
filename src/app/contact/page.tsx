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
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border">
              <MessageSquare className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
                GET IN TOUCH
              </span>
            </div>
            
            <h1 className="text-h1 font-bold leading-tight tracking-tight">
              Let's transform your
              <span className="block mt-2 text-muted-foreground">Business Together</span>
            </h1>
            
        
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
              <Card className="bg-card border-border">
                <CardContent className="p-8 space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-card-foreground">Send us a message</h2>
                    <p className="text-muted-foreground">
                      Tell us about your business and how I can help you.
                    </p>
                  </div>

                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-sm font-medium text-foreground">
                          First Name
                        </Label>
                        <Input
                          id="firstName"
                          placeholder="Enter your first name"
                          className="bg-background border-input text-foreground placeholder:text-muted-foreground"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-sm font-medium text-foreground">
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          placeholder="Enter your last name"
                          className="bg-background border-input text-foreground placeholder:text-muted-foreground"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="bg-background border-input text-foreground placeholder:text-muted-foreground"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-sm font-medium text-foreground">
                        business Name
                      </Label>
                      <Input
                        id="company"
                        placeholder="Enter your business name"
                        className="bg-background border-input text-foreground placeholder:text-muted-foreground"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium text-foreground">
                        Message
                      </Label>
                      <textarea
                        id="message"
                        rows={6}
                        placeholder="Tell us about your business and what challenges you're facing..."
                        className="w-full px-3 py-2 bg-background border border-input rounded-md text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
                      />
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-3 rounded-xl group"
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
                <h2 className="text-2xl font-bold text-foreground">Get in touch</h2>
          
              </div>

              <div className="space-y-6">
                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-muted border border-border flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-card-foreground">Email</h3>
                        <p className="text-muted-foreground">For general inquiries and support</p>
                        <a href="mailto:hello@tareqosama.com" className="text-muted-foreground hover:text-foreground transition-colors">
                          hello@tareqosama.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-muted border border-border flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-card-foreground">Phone</h3>
                        <p className="text-muted-foreground">Speak directly with our team</p>
                        <a href="tel:+1-555-TAREQ" className="text-muted-foreground hover:text-foreground transition-colors">
                          +1 (555) TAREQ
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-muted border border-border flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-card-foreground">Hours</h3>
                        <p className="text-muted-foreground">Monday - Friday</p>
                        <p className="text-card-foreground">9:00 AM - 6:00 PM PST</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

          
              </div>

              <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-border">
                <CardContent className="p-6 text-center space-y-4">
                  <h3 className="text-lg font-bold text-card-foreground">Need immediate help?</h3>
                  <p className="text-sm text-muted-foreground">
                    Book a 15-minute call with tareq to discuss your specific needs
                  </p>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6 py-2 rounded-xl">
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