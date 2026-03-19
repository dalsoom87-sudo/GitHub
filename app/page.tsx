import HeroSection from "@/components/sections/hero";
import BookingEntrySection from "@/components/sections/booking-entry";
import WhyDalsumSection from "@/components/sections/why-dalsum";
import FacilitiesHighlightSection from "@/components/sections/facilities-highlight";
import StayPreviewSection from "@/components/sections/stay-preview";
import PriceBasicGuideSection from "@/components/sections/price-basic-guide";
import QuickGuideSection from "@/components/sections/quick-guide";
import FinalCTASection from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BookingEntrySection />
      <WhyDalsumSection />
      <FacilitiesHighlightSection />
      <StayPreviewSection />
      <PriceBasicGuideSection />
      <QuickGuideSection />
      <FinalCTASection />
    </>
  );
}
