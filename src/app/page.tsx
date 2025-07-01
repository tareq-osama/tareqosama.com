import Hero from "@/components/marketing/hero";
import PainPoints from "@/components/marketing/pain-points";
import SocialProof from "@/components/marketing/social-proof";
import Pricing from "@/components/marketing/pricing";
import ClosingCTA from "@/components/marketing/closing-cta";
import FeatureSlider from "@/components/marketing/features";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <Hero />
      
      <div className="section-spacing">
        <div id="features">
          <FeatureSlider />
        </div>
      </div>
      
      <div className="section-spacing">
        <PainPoints />
      </div>
      
      <div className="section-spacing">
        <SocialProof />
      </div>
      
      <div className="section-spacing">
        <div id="pricing">
          <Pricing />
        </div>
      </div>
      
      <div className="section-spacing">
        <ClosingCTA />
      </div>
    </main>
  );
}