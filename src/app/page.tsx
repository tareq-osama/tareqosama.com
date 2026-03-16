import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* قسم الهيرو */}
      <section className="relative w-full overflow-hidden">
        <div className="pt-6 bg-gradient-to-b from-background via-background/95 to-background/90" />
        <div className="relative items-center justify-center flex-col mx-auto px-6 h-svh flex text-center">
          <div className="flex flex-col items-center justify-center"></div>
          <p className="text-right md:text-center text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"></p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="px-8 py-3 text-base font-semibold">
              الاشتراك بالنشرة البريدية
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="px-8 py-3 text-base font-semibold group"
            >
              احصل على استشارة
              <ArrowRight className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
