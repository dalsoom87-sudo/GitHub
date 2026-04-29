export const SITE_LINKS = {
  homeHero: "/#hero",
  bookingSection: "/#stay",
  whySection: "/#experience",
  facilitiesSection: "/#explore",
  priceSection: "/#price",
  faqSection: "/#faq",
  directionsSection: "/#location",
  /** 화면에 표시하는 문의 전화 */
  contactPhoneDisplay: "010-3240-1123",
  /** tel: 링크용 전화번호 */
  contactTel: "tel:010-3240-1123",
  instagram: "https://www.instagram.com/stay_dalsoom/",
  naver: "https://naver.me/IMZUoPQF",
  /** TODO: 실제 TMAP 길찾기 연결 시 좌표(lat/lon)와 TMAP appKey 또는 안정적인 딥링크 확인 후 교체
   *  예: "https://apis.openapi.sk.com/tmap/app/routes?appKey={KEY}&goalname=달숨글램핑&goalx={lon}&goaly={lat}" */
  tmap: "https://www.tmap.co.kr/search?q=달숨글램핑",
  gallery: "/gallery",
  guide: "/guide",
  /** 이용안내 페이지의 현장 매점 안내 앵커 */
  guideStore: "/guide#guide-store",
  stay: {
    glamping: "/stay/glamping",
    picnic: "/stay/picnic",
    autocamping: "/stay/autocamping",
  },
} as const;
