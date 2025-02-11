"use client";

// Add this if you're using Next.js 13+ with app directory

import Hero from "@/components/marketing/hero";
import PainPoints from "@/components/marketing/pain-points";
import SocialProof from "@/components/marketing/social-proof";
import Pricing from "@/components/marketing/pricing";
import ClosingCTA from "@/components/marketing/closing-cta";
import { useEffect, useState } from "react";
import FeatureSlider from "@/components/marketing/features";
import Footer from "@/components/marketing/footer";
import Newcta from "@/components/marketing/newcta";

export default function Home() {
  // Add client-side mounting state to prevent hydration mismatch
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Return null or loading state while client-side mounting is in progress
  if (!isMounted) {
    return null; // Or return a loading spinner/skeleton
  }

  return (
    <main className="min-h-screen bg-background ">
      <div >

        <section className="">
          
          <Hero />
          <div id="features">
          <FeatureSlider/>
          </div>
          <ClosingCTA />
          <PainPoints />
          <SocialProof />
          <Pricing />
          <Footer/>
        </section>
      </div>
    </main>
  );
}