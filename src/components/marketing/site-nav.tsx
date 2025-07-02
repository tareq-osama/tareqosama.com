"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Menu, X, Zap, Users, FileText, Building, Play, Lightbulb, BookOpen, HelpCircle, User, Phone, Briefcase, ArrowRight } from 'lucide-react';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const platformFeatures = [
  {
    title: "Client Portal",
    href: "#features",
    description: "White-labeled portals that transform client experience",
    icon: <Users className="w-5 h-5" />
  },
  {
    title: "AI Proposals",
    href: "#features",
    description: "Generate winning proposals in minutes with AI",
    icon: <Zap className="w-5 h-5" />
  },
  {
    title: "Smart Invoicing",
    href: "#features",
    description: "Automated invoicing that gets you paid faster",
    icon: <FileText className="w-5 h-5" />
  },
  {
    title: "Project Management",
    href: "#features",
    description: "Keep projects on track with powerful workflows",
    icon: <Building className="w-5 h-5" />
  }
];

const solutions = [
  {
    title: "For Digital Agencies",
    href: "/solutions/agencies",
    description: "Scale your agency operations with professional tools"
  },
  {
    title: "For Freelancers",
    href: "/solutions/freelancers", 
    description: "Elevate your freelance business with client portals"
  },
  {
    title: "For Consultants",
    href: "/solutions/consultants",
    description: "Professional consulting platform for experts"
  },
  {
    title: "Case Studies",
    href: "/case-studies",
    description: "See how agencies transformed with Corvex"
  }
];

const resources = [
  {
    title: "Blog",
    href: "/blog",
    description: "Latest insights on agency growth and management",
    icon: <BookOpen className="w-5 h-5" />
  },
  {
    title: "Help Center",
    href: "/help",
    description: "Get answers to your questions quickly",
    icon: <HelpCircle className="w-5 h-5" />
  },
  {
    title: "Templates",
    href: "/templates",
    description: "Professional templates for proposals and contracts",
    icon: <FileText className="w-5 h-5" />
  },
  {
    title: "Documentation",
    href: "/docs",
    description: "Complete guide to using Corvex platform",
    icon: <Lightbulb className="w-5 h-5" />
  }
];



export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);



  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      const id = href.substring(1);
      scrollToSection(id);
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md ">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="relative w-32 h-8">
              <Image
                src="/corvexlogo.svg"
                alt="Corvex - Professional Agency Platform"
                fill
                className="object-contain"
                priority
                sizes="128px"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex">
              <NavigationMenu>
                <NavigationMenuList>
                  {/* Platform Menu */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-zinc-300 hover:text-white data-[state=open]:text-white">
                      Platform
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <Link
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-white/10 to-white/20 p-6 no-underline outline-none focus:shadow-md border border-white/20"
                              href="/"
                            >
                              <Zap className="h-6 w-6 text-white" />
                              <div className="mb-2 mt-4 text-lg font-medium text-white">
                                Corvex Platform
                              </div>
                              <p className="text-sm leading-tight text-zinc-400">
                                The complete agency management platform that transforms chaos into revenue.
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        {platformFeatures.map((feature) => (
                          <ListItem key={feature.title} title={feature.title} href={feature.href} icon={feature.icon}>
                            {feature.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Solutions Menu */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-zinc-300 hover:text-white data-[state=open]:text-white">
                      Solutions
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {solutions.map((solution) => (
                          <ListItem
                            key={solution.title}
                            title={solution.title}
                            href={solution.href}
                          >
                            {solution.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Resources Menu */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-zinc-300 hover:text-white data-[state=open]:text-white">
                      Resources
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {resources.map((resource) => (
                          <ListItem
                            key={resource.title}
                            title={resource.title}
                            href={resource.href}
                            icon={resource.icon}
                          >
                            {resource.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Direct Links */}
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                      <button 
                        onClick={() => handleNavigation('#pricing')}
                        className="bg-transparent text-zinc-300 hover:text-white"
                      >
                        Pricing
                      </button>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="https://app.usecorvex.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
              >
                Login
              </Link>
              <button
                onClick={() => handleNavigation('#pricing')}
                className="text-sm font-medium text-black bg-white hover:bg-zinc-200 px-4 py-2 rounded-lg transition-colors group"
              >
                Get Started Free
                <ArrowRight className="ml-1 w-4 h-4 inline group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />
            <div className="relative min-h-screen flex flex-col pt-20 px-6">
              <nav className="flex flex-col gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">Platform</h3>
                  {platformFeatures.map((feature) => (
                    <button
                      key={feature.title}
                      onClick={() => handleNavigation(feature.href)}
                      className="flex items-start gap-3 text-left w-full p-2 hover:bg-zinc-800/50 rounded-lg transition-colors"
                    >
                      <div className="text-white mt-0.5">{feature.icon}</div>
                      <div>
                        <div className="text-white font-medium">{feature.title}</div>
                        <div className="text-sm text-zinc-400">{feature.description}</div>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                  <button
                    onClick={() => handleNavigation('#pricing')}
                    className="text-left text-zinc-300 hover:text-white transition-colors"
                  >
                    Pricing
                  </button>
                  <Link
                    href="/case-studies"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-zinc-300 hover:text-white transition-colors"
                  >
                    Case Studies
                  </Link>
                  <Link
                    href="/help"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-zinc-300 hover:text-white transition-colors"
                  >
                    Help Center
                  </Link>
                </div>
              </nav>

              <div className="flex flex-col gap-4 mt-8 pt-6 border-t border-zinc-800">
                <Link
                  href="https://app.usecorvex.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-center text-sm font-medium text-zinc-300 hover:text-white px-4 py-3 transition-colors"
                >
                  Login
                </Link>
                                  <button
                    onClick={() => {
                      handleNavigation('#pricing');
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-center text-sm font-medium text-black bg-white hover:bg-zinc-200 px-4 py-3 rounded-lg transition-colors"
                  >
                    Get Started Free
                  </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function ListItem({
  title,
  children,
  href,
  icon,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { 
  href: string;
  icon?: React.ReactNode;
}) {
  const handleClick = () => {
    if (href.startsWith('#')) {
      const id = href.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        {href.startsWith('#') ? (
          <button
            onClick={handleClick}
            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-zinc-800/50 focus:bg-zinc-800/50 w-full text-left"
          >
            <div className="flex items-center gap-2">
              {icon && <span className="text-white">{icon}</span>}
              <div className="text-sm font-medium leading-none text-white">{title}</div>
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-zinc-400">
              {children}
            </p>
          </button>
        ) : (
          <Link
            href={href}
            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-zinc-800/50 focus:bg-zinc-800/50"
          >
            <div className="flex items-center gap-2">
              {icon && <span className="text-white">{icon}</span>}
              <div className="text-sm font-medium leading-none text-white">{title}</div>
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-zinc-400">
              {children}
            </p>
          </Link>
        )}
      </NavigationMenuLink>
    </li>
  );
}