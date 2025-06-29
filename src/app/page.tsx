import Hero from "@/components/marketing/hero";
import PainPoints from "@/components/marketing/pain-points";
import SocialProof from "@/components/marketing/social-proof";
import Pricing from "@/components/marketing/pricing";
import ClosingCTA from "@/components/marketing/closing-cta";
import FeatureSlider from "@/components/marketing/features";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <div id="features">
        <FeatureSlider />
      </div>
      <ClosingCTA />
      <PainPoints />
      <SocialProof />
      <div id="pricing">
        <Pricing />
      </div>
    </main>
  );
}