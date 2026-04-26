import Image from "next/image";
import Link from "next/link";
import { SITE_LINKS } from "@/lib/site-links";

type FacilityCategory = "물놀이" | "숙박·캠핑" | "체험" | "가족·키즈";

const facilities: {
  name: string;
  caption: string;
  sub: string;
  category: FacilityCategory;
  image: string;
  href: string;
}[] = [
  {
    name: "미온수풀 & 수영장",
    caption: "낮과 밤 모두 편안한 물놀이",
    sub: "온수 조절로 아이부터 어른까지",
    category: "물놀이",
    image: "/images/theme-night-hero-v2.jpg",
    href: SITE_LINKS.guide,
  },
  {
    name: "워터슬라이드",
    caption: "신나게 내려오는 여름의 하이라이트",
    sub: "아이들이 가장 먼저 찾는 구역",
    category: "물놀이",
    image: "/images/1 (109).jpg",
    href: SITE_LINKS.guide,
  },
  {
    name: "프라이빗 글램핑 존",
    caption: "감성 조명이 살아있는 1박 숙박",
    sub: "커플·가족 모두 편안한 독립 공간",
    category: "숙박·캠핑",
    image: "/images/1 (104).jpg",
    href: SITE_LINKS.stay.glamping,
  },
  {
    name: "피크닉 · 오토캠핑 구역",
    caption: "당일 이용부터 텐트 캠핑까지",
    sub: "내 차와 함께하는 자유로운 캠핑",
    category: "숙박·캠핑",
    image: "/images/1 (118).jpg",
    href: SITE_LINKS.stay.autocamping,
  },
  {
    name: "프라이빗 BBQ",
    caption: "불 앞에서 나누는 저녁 한 끼",
    sub: "그릴·숯·장갑 모두 준비되어 있어요",
    category: "체험",
    image: "/images/1 (35).jpg",
    href: SITE_LINKS.guide,
  },
  {
    name: "불멍존",
    caption: "화로 앞에서 멍하니 보내는 밤",
    sub: "장작 타는 소리와 달빛이 함께",
    category: "체험",
    image: "/images/1 (57).jpg",
    href: SITE_LINKS.guide,
  },
  {
    name: "노래방",
    caption: "신나는 노래로 분위기 업!",
    sub: "가족 모두가 즐기는 실내 엔터테인먼트",
    category: "가족·키즈",
    image: "/images/1 (80).jpg",
    href: SITE_LINKS.guide,
  },
  {
    name: "모래놀이장 & 포크레인",
    caption: "아이들이 눈을 반짝이는 체험 구역",
    sub: "포크레인 직접 조작 체험으로 아이들이 특히 좋아해요",
    category: "가족·키즈",
    image: "/images/1 (45).jpg",
    href: SITE_LINKS.guide,
  },
  {
    name: "RC카 체험장",
    caption: "넓은 트랙에서 마음껏 달리는 시간",
    sub: "아이와 어른 모두 즐길 수 있는 야외 체험",
    category: "가족·키즈",
    image: "/images/1 (60).jpg",
    href: SITE_LINKS.guide,
  },
];

const CATEGORY_COLORS: Record<FacilityCategory, string> = {
  "물놀이": "bg-sky-500/80",
  "숙박·캠핑": "bg-indigo-500/75",
  "체험": "bg-amber-500/80",
  "가족·키즈": "bg-emerald-500/80",
};

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
          Facilities &amp; Experience
        </p>

        <h2 className="mt-3 max-w-3xl text-2xl font-semibold leading-tight tracking-tight text-[var(--home-heading)] sm:text-3xl lg:text-[2.05rem]">
          아이도 어른도 하루가 모자란 달숨의 시설
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--home-body)] sm:text-base">
          물놀이, 숙박, BBQ, 불멍부터 포크레인·RC카 체험까지. 가족 모두가 각자의 속도로 즐길 수 있는 공간이 고루 갖춰져 있습니다.
        </p>

        {/* 카테고리 범례 */}
        <div className="mt-5 flex flex-wrap gap-2">
          {(Object.entries(CATEGORY_COLORS) as [FacilityCategory, string][]).map(([label, color]) => (
            <span
              key={label}
              className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-semibold text-white ${color}`}
            >
              {label}
            </span>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {facilities.map((facility) => (
            <Link
              key={facility.name}
              href={facility.href}
              className="group relative block min-h-[13.5rem] overflow-hidden rounded-2xl border border-[color:var(--border-soft)] bg-[#ddd5cb] sm:min-h-[15rem]"
            >
              <Image
                src={facility.image}
                alt={facility.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />

              {/* 그라디언트 오버레이 */}
              <div
                aria-hidden
                className="absolute inset-0 bg-[linear-gradient(to_top,rgba(6,14,26,0.88)_0%,rgba(6,14,26,0.52)_46%,rgba(6,14,26,0.14)_100%)]"
              />

              {/* 카테고리 라벨 */}
              <div className="absolute left-3 top-3">
                <span
                  className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-white ${CATEGORY_COLORS[facility.category]}`}
                >
                  {facility.category}
                </span>
              </div>

              {/* 하단 텍스트 */}
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <h3 className="text-[1rem] font-semibold leading-tight tracking-tight text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]">
                  {facility.name}
                </h3>
                <p className="mt-1.5 text-[13px] leading-snug text-white/88 [text-shadow:0_1px_6px_rgba(0,0,0,0.4)]">
                  {facility.caption}
                </p>
                <p className="mt-1 text-[11px] leading-snug text-white/66">
                  {facility.sub}
                </p>
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
