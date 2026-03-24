import Image from "next/image";
import Link from "next/link";
import { SITE_LINKS } from "@/lib/site-links";

const facilities = [
  {
    name: "미온수풀 & 수영장",
    caption: "낮과 밤 모두 편안한 물놀이",
    image: "/images/theme-night-hero-v2.jpg",
    href: SITE_LINKS.guide,
  },
  {
    name: "워터슬라이드",
    caption: "활동감 있는 가족 포인트",
    image: "/images/1 (109).jpg",
    href: SITE_LINKS.guide,
  },
  {
    name: "글램핑 존",
    caption: "감성 조명이 살아있는 숙박",
    image: "/images/1 (104).jpg",
    href: SITE_LINKS.stay.glamping,
  },
  {
    name: "피크닉 · 오토캠핑 구역",
    caption: "당일 이용부터 캠핑까지",
    image: "/images/1 (118).jpg",
    href: SITE_LINKS.stay.autocamping,
  },
];

export default function FacilitiesHighlightSection() {
  return (
    <section
      id="facilities"
      className="relative scroll-mt-24 bg-[var(--page-bg)]"
      style={{ color: "var(--text-main)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(22,37,59,0.05)_0%,rgba(22,37,59,0.02)_30%,rgba(255,255,255,0)_100%)]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--home-eyebrow)]">
          Facilities Highlight
        </p>

        <h2 className="mt-3 max-w-3xl text-2xl font-semibold leading-tight tracking-tight text-[var(--home-heading)] sm:text-3xl lg:text-[2.05rem]">
          달숨의 핵심 시설을 사진으로 먼저 만나보세요
        </h2>

        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--home-body)] sm:text-base">
          자주 찾는 시설 4가지를 미리 보고, 원하는 공간으로 이어서 확인할 수 있습니다.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 lg:grid-cols-2 lg:gap-5">
          {facilities.map((facility) => (
            <Link
              key={facility.name}
              href={facility.href}
              className="group relative block min-h-[15.5rem] overflow-hidden rounded-2xl border border-[color:var(--border-soft)] bg-[#ddd5cb]"
            >
              <Image
                src={facility.image}
                alt={facility.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,18,30,0.74)_0%,rgba(10,18,30,0.42)_42%,rgba(10,18,30,0.16)_100%)]"
              />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <h3 className="text-lg font-semibold tracking-tight text-white sm:text-[1.08rem]">
                  {facility.name}
                </h3>
                <p className="mt-1.5 text-sm text-white/84">{facility.caption}</p>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href={SITE_LINKS.guide}
          className="mt-8 inline-flex items-center rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors"
          style={{
            borderColor: "var(--home-outline-btn-border)",
            background: "var(--home-outline-btn-bg)",
            color: "var(--home-outline-btn-text)",
          }}
        >
          전체 시설 안내 보기
        </Link>
      </div>
    </section>
  );
}
