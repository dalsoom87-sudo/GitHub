import HeroSlideshowSection from "@/components/sections/hero-slideshow";
import StaySelectorSection from "@/components/sections/stay-selector";
import SignatureExperienceSection from "@/components/sections/signature-experience";
import ExperienceExplorerSection from "@/components/sections/experience-explorer";
import FoodStoreSection from "@/components/sections/food-store";
import PriceGuideSection from "@/components/sections/price-guide";
import DayFlowSection from "@/components/sections/day-flow";
import GuideFaqSection from "@/components/sections/guide-faq";
import LocationFinalSection from "@/components/sections/location-final";
import EventPopup from "@/components/overlays/event-popup";

// false → StaySelectorSection 숨김 / true → 다시 표시
const SHOW_STAY_SELECTOR = false;

// false로 바꾸면 홈 첫 진입 팝업이 표시되지 않습니다.
const ENABLE_WEEKDAY_EVENT_POPUP = true;

export default function Home() {
  return (
    <>
      {ENABLE_WEEKDAY_EVENT_POPUP && <EventPopup />}
      <HeroSlideshowSection />
      {SHOW_STAY_SELECTOR && <StaySelectorSection />}
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
