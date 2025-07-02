"use client";

import React from 'react';
import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Integrations", href: "/integrations" },
    { name: "API", href: "/api" },
    { name: "Changelog", href: "/changelog" }
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

export default function Footer() {
  return (
    <footer className="bg-zinc-950 py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-6 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-2  space-y-6">
            <div className="space-y-4">
              <Link href="/" className="inline-block">
                <Image
                  src="/corvexlogo.svg"
                  alt="Corvex"
                  width={120}
                  height={32}
                  className="h-8 w-40"
                />
              </Link>
           
            </div>
            
         
          </div>

          {/* Links Columns */}
          <div className="space-y-6">
            <h4 className="text-sm font-medium text-white">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-medium text-white">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-medium text-white">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xs text-zinc-600">
              © 2025 Corvex. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-zinc-600 rounded-full" />
                <span className="text-xs text-zinc-600">All systems operational</span>
              </div>
              
              <div className="flex items-center gap-4 text-xs text-zinc-600">
                <Link href="/status" className="hover:text-zinc-400 transition-colors">
                  Status
                </Link>
                <Link href="/security" className="hover:text-zinc-400 transition-colors">
                  Security
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}