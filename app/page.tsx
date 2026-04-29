import HeroSlideshowSection from "@/components/sections/hero-slideshow";
import StaySelectorSection from "@/components/sections/stay-selector";
import SignatureExperienceSection from "@/components/sections/signature-experience";
import ExperienceExplorerSection from "@/components/sections/experience-explorer";
import FoodStoreSection from "@/components/sections/food-store";
import PriceGuideSection from "@/components/sections/price-guide";
import DayFlowSection from "@/components/sections/day-flow";
import GuideFaqSection from "@/components/sections/guide-faq";
import LocationFinalSection from "@/components/sections/location-final";

export default function Home() {
  return (
    <>
      <HeroSlideshowSection />
      <StaySelectorSection />
      <SignatureExperienceSection />
      <ExperienceExplorerSection />
      <FoodStoreSection />
      <PriceGuideSection />
      <DayFlowSection />
      <GuideFaqSection />
      <LocationFinalSection />
    </>
  );
}
