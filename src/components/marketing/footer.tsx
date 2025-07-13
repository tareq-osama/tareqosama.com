import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const footerLinks = {
  Links: [
    { title: "Blog", href: "/blog" },
    { title: "Help Center", href: "/help" },
    { title: "Become an affiliate", href: "/affiliate" },
    { title: "Leave us a testimonial", href: "/testimonial" },
    { title: "Join our discord", href: "/discord" },
    { title: "Test client portal live", href: "/demo" },
  ],
  Features: [
    { title: "White label client portal for businesses", href: "/features/client-portal" },
    { title: "Task management for businesses", href: "/features/tasks" },
    { title: "Integrations & webhooks", href: "/features/integrations" },
  ],
  "Free resources": [
    { title: "Productized service AI idea generator", href: "/tools/idea-generator" },
    { title: "Productized service course", href: "/course" },
  ],
  Legal: [
    { title: "Terms", href: "/terms" },
    { title: "Privacy", href: "/privacy" },
  ],
};

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/20 bg-background/50">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Section with CTA */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 bg-zinc-700 rounded-full border-2 border-background flex items-center justify-center">
                <span className="text-xs font-medium text-foreground">AR</span>
              </div>
              <div className="w-10 h-10 bg-zinc-600 rounded-full border-2 border-background flex items-center justify-center">
                <span className="text-xs font-medium text-foreground">JS</span>
              </div>
              <div className="w-10 h-10 bg-zinc-500 rounded-full border-2 border-background flex items-center justify-center">
                <span className="text-xs font-medium text-foreground">MK</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-muted-foreground font-medium">
              over 100+ agencies
            </span>
            <Button size="sm" className="ml-2">
              Book a free demo call →
            </Button>
          </div>
        </div>

        {/* Founder Message */}
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-6">
          <p className="text-sm text-muted-foreground font-medium">Founder memo</p>
          
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Digital agencies DESERVE better tools. For too long, agency owners have 
              struggled to stitch together clunky software, managing their teams and 
              clients through scattered solutions that create more confusion than clarity.
            </p>
            
            <p>
              It's been a balancing act—juggling operations, customer communication, 
              and growth—all with tools that weren't designed for their unique needs.
            </p>
            
            <p>
              That's why we built Corvex. Corvex is made specifically for digital agencies. 
              Every feature is designed with intention, detail, and care, helping agencies:
            </p>
          </div>
          
          <ul className="space-y-2 text-left max-w-2xl mx-auto">
            <li className="flex items-start gap-3">
              <span className="text-primary">•</span>
              <span className="text-muted-foreground">Simplify operations so they can focus on delivering amazing work</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary">•</span>
              <span className="text-muted-foreground">Offer incredible experiences to their customers</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary">•</span>
              <span className="text-muted-foreground">Grow with confidence by providing the tools needed to scale agencies</span>
            </li>
          </ul>
          
          <p className="text-muted-foreground">
            No fluff. No generic solutions. Just a tool designed 
            to help agencies not just survive, but thrive.
          </p>
          
          <div className="flex items-center justify-center gap-2 pt-4">
            <div className="w-8 h-8 bg-zinc-700 rounded-full flex items-center justify-center">
              <span className="text-xs font-medium text-foreground">AR</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Anthony Riera</p>
              <p className="text-xs text-muted-foreground">Founder of Corvex</p>
            </div>
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-foreground mb-4">{category}</h3>
              <ul className="space-y-3">
                                 {links.map((link) => (
                   <li key={link.href}>
                     <Link 
                       href={link.href} 
                       className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                       {link.title}
                     </Link>
                   </li>
                 ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/20">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
          
                      {/* Logo */}
                      <Link href="/" className="flex items-center gap-2">
                        <Image src="/corvexlogo.svg" alt="Corvex Logo" width={100} height={100} />
                      </Link>

          </div>
          
          <p className="text-sm text-muted-foreground">
            © 2025 Corvex. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}