import HeroSection from "@/components/sections/hero";
import WeekdayBannerSection from "@/components/sections/weekday-banner";
import BookingEntrySection from "@/components/sections/booking-entry";
import StayTypeCompareSection from "@/components/sections/stay-type-compare";
import WhyDalsoomSection from "@/components/sections/why-dalsoom";
import FacilitiesHighlightSection from "@/components/sections/facilities-highlight";
import DayFlowSection from "@/components/sections/day-flow";
import StorePreviewSection from "@/components/sections/store-preview";
import PriceBasicGuideSection from "@/components/sections/price-basic-guide";
import QuickGuideSection from "@/components/sections/quick-guide";
import FaqSection from "@/components/sections/faq";
import DirectionsSection from "@/components/sections/directions";
import FinalCTASection from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WeekdayBannerSection />
      <BookingEntrySection />
      <StayTypeCompareSection />
      <WhyDalsoomSection />
      <FacilitiesHighlightSection />
      <DayFlowSection />
      <StorePreviewSection />
      <PriceBasicGuideSection />
      <QuickGuideSection />
      <FaqSection />
      <DirectionsSection />
      <FinalCTASection />
    </>
  );
}
