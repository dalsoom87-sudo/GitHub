import Image from "next/image";
import Link from "next/link";
import { SITE_LINKS } from "@/lib/site-links";

/** 상세 페이지 → 하단·헤더 예약 문의 흐름과 맞춘 짧은 안내 */
const CARD_INQUIRY_HINT = "상세 확인 후 예약 문의";

const bookingCards = [
  {
    title: "글램핑",
    description: "편하게 머무는 1박 감성 숙박",
    priceHint: "평일 17만원 / 주말 26만원",
    image: "/images/1 (104).jpg",
    href: SITE_LINKS.stay.glamping,
  },
  {
    title: "피크닉",
    description: "당일 이용, 야외 감성",
    priceHint: "7만원",
    image: "/images/1 (35).jpg",
    href: SITE_LINKS.stay.picnic,
  },
  {
    title: "오토캠핑",
    description: "캠핑 구역에서 자유롭게",
    priceHint: "4만원",
    image: "/images/1 (57).jpg",
    href: SITE_LINKS.stay.autocamping,
  },
];

export default function BookingEntrySection() {
  return (
    <section
      id="booking"
      className="relative scroll-mt-24 bg-[var(--page-bg)]"
      style={{ color: "var(--text-main)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(35,42,64,0.08)_0%,rgba(35,42,64,0.03)_32%,rgba(255,255,255,0)_100%)]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--home-eyebrow)]">
          Choose Your Stay
        </p>

        <h2 className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-[var(--home-heading)] sm:text-3xl">
          글램핑 · 피크닉 · 오토캠핑, 먼저 선택하세요
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 lg:grid-cols-3 lg:gap-5">
          {bookingCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group relative block min-h-[17.5rem] overflow-hidden rounded-2xl border border-[color:var(--border-soft)] bg-[#ddd5cb] sm:min-h-[19.5rem] lg:min-h-[20rem]"
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(min-width: 1024px) 33vw, 100vw"
              />

              <div
                aria-hidden
                className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,18,30,0.86)_0%,rgba(10,18,30,0.45)_45%,rgba(10,18,30,0.12)_100%)]"
              />

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <h3 className="text-xl font-semibold tracking-tight text-white sm:text-[1.25rem]">
                  {card.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-white/84">
                  {card.description}
                </p>
                <p className="mt-2 text-[11px] font-semibold text-white/70">
                  {card.priceHint}
                </p>
                <p className="mt-2 text-[10px] leading-snug text-white/48 sm:text-[11px]">
                  {CARD_INQUIRY_HINT}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
