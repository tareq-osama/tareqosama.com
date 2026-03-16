import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const footerLinks = {
  روابط: [
  ],
  المميزات: [
    { title: "بوابة عملاء بعلامة تجارية مخصصة للشركات", href: "/features/client-portal" },
    { title: "إدارة المهام للشركات", href: "/features/tasks" },
    { title: "التكاملات والروابط", href: "/features/integrations" },
  ],
  "موارد مجانية": [
    { title: "مولّد أفكار خدمات منتجة بالذكاء الاصطناعي", href: "/tools/idea-generator" },
    { title: "دورة خدمات منتجة", href: "/course" },
  ],
  قانوني: [
    { title: "الشروط", href: "/terms" },
    { title: "الخصوصية", href: "/privacy" },
  ],
};

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/20 bg-background/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/20">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/tareq-logo.svg" alt="شعار طارق" width={100} height={100} />
            </Link>
          </div>

          <p className="text-sm text-muted-foreground">
            © 2025 tareqosama.com. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
