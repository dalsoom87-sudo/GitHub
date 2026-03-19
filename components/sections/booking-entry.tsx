import Image from "next/image";
import Link from "next/link";
import { SITE_LINKS } from "@/lib/site-links";

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
      className="relative scroll-mt-24 bg-[#f3eee7] text-[#122238]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(35,42,64,0.11)_0%,rgba(35,42,64,0.04)_32%,rgba(255,255,255,0)_100%)]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#2f4361]/80">
          Choose Your Stay
        </p>

        <h2 className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-[#0f2037] sm:text-3xl">
          글램핑 · 피크닉 · 오토캠핑, 먼저 선택하세요
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 lg:grid-cols-3 lg:gap-5">
          {bookingCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group relative block overflow-hidden rounded-2xl border border-[#c9b9a7]/40 bg-[#ddd5cb] min-h-[17.5rem] sm:min-h-[19.5rem] lg:min-h-[20rem]"
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
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
