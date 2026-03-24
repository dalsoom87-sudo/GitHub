import HeroSection from "@/components/sections/hero";
import BookingEntrySection from "@/components/sections/booking-entry";
import WhyDalsoomSection from "@/components/sections/why-dalsoom";
import FacilitiesHighlightSection from "@/components/sections/facilities-highlight";
import StorePreviewSection from "@/components/sections/store-preview";
import StayPreviewSection from "@/components/sections/stay-preview";
import PriceBasicGuideSection from "@/components/sections/price-basic-guide";
import QuickGuideSection from "@/components/sections/quick-guide";
import FinalCTASection from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BookingEntrySection />
      <WhyDalsoomSection />
      <FacilitiesHighlightSection />
      <StorePreviewSection />
      <StayPreviewSection />
      <PriceBasicGuideSection />
      <QuickGuideSection />
      <FinalCTASection />
    </>
  );
}
