"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ModeToggle } from "@/components/marketing/mode-toggle";

const solutions = [
  {
    title: "للشركات الصغيرة",
    href: "/solutions/small-business",
    description: "منصة إدارة أعمال متكاملة لرواد الأعمال"
  },
  {
    title: "للاستشاريين",
    href: "/solutions/consultants",
    description: "منصة استشارية احترافية للخبراء"
  },
  {
    title: "دراسات حالة",
    href: "/case-studies",
    description: "اكتشف كيف تحولت الشركات مع طارق"
  }
];

const resources = [
  {
    title: "مركز المساعدة",
    href: "/help",
    description: "احصل على إجابات لأسئلتك بسرعة"
  },
  {
    title: "المدونة",
    href: "/blog",
    description: "أحدث الرؤى حول نمو الأعمال وإدارتها"
  },
  {
    title: "التوثيق",
    href: "/docs",
    description: "الدليل الشامل لاستخدام منصة طارق"
  }
];

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/20"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              duration: 0.3
            }}
          >
            <div className="mx-auto px-6">
              <div className="flex items-center justify-between py-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                  <Image src="/tareq-logo.svg" alt="شعار طارق" width={80} height={100} />
                </Link>

                {/* Desktop CTA */}
                <div className="hidden lg:flex items-center gap-4">
                  <ModeToggle />
                  <Button size="sm" asChild>
                    <Link href="https://tareqosama.com/contact">لنعمل معاً</Link>
                  </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="تبديل القائمة"
                >
                  {isMobileMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed top-20 left-0 right-0 bottom-0 bg-background border-b border-border/20 shadow-lg overflow-hidden transform transition-transform duration-300 ease-in-out">
            <div className="h-full overflow-y-auto">
              <div className="max-w-7xl mx-auto px-6 py-6 space-y-6 pb-8">
                <div className="flex flex-col space-y-3 pt-4 border-t border-border/20">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">المظهر</span>
                    <ModeToggle />
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="https://tareqosama.com/contact" onClick={() => setIsMobileMenuOpen(false)}>
                      الاشتراك بالنشرة البريدية
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href="https://tareqosama.com/consultation" onClick={() => setIsMobileMenuOpen(false)}>
                      احصل على استشارة
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
