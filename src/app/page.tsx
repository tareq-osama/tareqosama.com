"use client";

// Add this if you're using Next.js 13+ with app directory

import Hero from "@/components/marketing/hero";
import PainPoints from "@/components/marketing/pain-points";
import SocialProof from "@/components/marketing/social-proof";
import Pricing from "@/components/marketing/pricing";
import ClosingCTA from "@/components/marketing/closing-cta";
import FeatureSlider from "@/components/marketing/features";
import Footer from "@/components/marketing/footer";
import Newcta from "@/components/marketing/newcta";

export default function Home() {
  // Add client-side mounting state to prevent hydration mismatch

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