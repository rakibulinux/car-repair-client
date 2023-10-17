import { LandingContent } from "@/components/landing-content";
import { LandingHero } from "@/components/landing-hero";
import Service from "@/components/service";

const LandingPage = () => {
  return (
    <div className="h-full">
      <LandingHero />
      <Service />
      <LandingContent />
    </div>
  );
};

export default LandingPage;
