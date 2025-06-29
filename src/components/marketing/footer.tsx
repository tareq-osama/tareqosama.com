"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Mail, MapPin, Phone, Shield, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Integrations", href: "/integrations" },
    { name: "API", href: "/api" },
    { name: "Changelog", href: "/changelog" }
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
    { name: "Contact", href: "/contact" }
  ],
  resources: [
    { name: "Help Center", href: "/help" },
    { name: "Documentation", href: "/docs" },
    { name: "Guides", href: "/guides" },
    { name: "Webinars", href: "/webinars" },
    { name: "Status", href: "/status" }
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "GDPR", href: "/gdpr" }
  ]
};

const trustIndicators = [
  {
    icon: Shield,
    title: "SOC 2 Compliant",
    description: "Enterprise-grade security"
  },
  {
    icon: Clock,
    title: "99.9% Uptime",
    description: "Reliable service guaranteed"
  },
  {
    icon: Users,
    title: "24/7 Support",
    description: "Always here to help"
  }
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-black via-zinc-950 to-zinc-900">
      {/* Newsletter Section */}
      <div className="border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-zinc-900/50 border-zinc-800">
              <CardContent className="p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/50 border border-zinc-700">
                      <Mail className="w-4 h-4 text-white" />
                      <span className="text-sm font-medium text-zinc-300 tracking-wide uppercase">Newsletter</span>
                    </div>
                    
                    <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                      Stay ahead with agency insights
                    </h3>
                    
                    <p className="text-lg text-zinc-400 leading-relaxed">
                      Get weekly tips, industry trends, and growth strategies delivered to your inbox. 
                      Join 2,000+ agency owners who read our newsletter.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-zinc-600 h-12"
                      />
                      <Button 
                        className="bg-white text-black hover:bg-zinc-100 font-semibold px-6 h-12 rounded-xl"
                      >
                        Subscribe
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                    <p className="text-xs text-zinc-500">
                      ✓ No spam, ever • ✓ Unsubscribe anytime • ✓ Weekly insights
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-6 gap-12">
          
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="space-y-4">
              <Link href="/" className="inline-block">
                <div className="text-2xl font-bold text-white">Corvex</div>
              </Link>
              <p className="text-zinc-400 leading-relaxed max-w-sm">
                The all-in-one platform that transforms how agencies manage clients, 
                projects, and growth. Professional, powerful, effortless.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-zinc-400">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">hello@corvex.com</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-400">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-400">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
            </div>
          </motion.div>

          {/* Links Columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mt-16 pt-12 border-t border-zinc-800"
        >
          {trustIndicators.map((indicator, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0">
                <indicator.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-white text-sm">{indicator.title}</div>
                <div className="text-xs text-zinc-500">{indicator.description}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <div className="text-sm text-zinc-500">
              © 2024 Corvex. All rights reserved. Built with ❤️ for agencies worldwide.
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-xs text-zinc-500">All systems operational</span>
              </div>
              
              <div className="flex items-center gap-4 text-xs text-zinc-500">
                <Link href="/status" className="hover:text-zinc-300 transition-colors">
                  Status
                </Link>
                <Link href="/security" className="hover:text-zinc-300 transition-colors">
                  Security
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}