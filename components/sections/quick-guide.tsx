import Link from "next/link";
import { SITE_LINKS } from "@/lib/site-links";

const quickGuides = [
  {
    title: "이용 시간",
    content: "체크인 15:00 / 체크아웃 11:00 기준으로 운영됩니다.",
  },
  {
    title: "추가 인원",
    content: "기준 인원 초과 시 성인 2만원, 아동 1만원이 적용됩니다.",
  },
  {
    title: "예약 전 확인",
    content: "예약 확정 전 날짜, 인원, 옵션 선택 내역을 꼭 확인해 주세요.",
  },
  {
    title: "이용 유의",
    content: "밤 10시 이후에는 조용한 이용 매너를 권장합니다.",
  },
];

export default function QuickGuideSection() {
  return (
    <section
      id="guide"
      className="relative scroll-mt-24 bg-[#f6efe6] text-[#16253b]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(22,36,58,0.06)_0%,rgba(22,36,58,0.02)_35%,rgba(255,255,255,0)_100%)]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#3b5476]/80">
          Quick Guide
        </p>

        <h2 className="mt-3 max-w-3xl text-2xl font-semibold leading-tight tracking-tight text-[#13243b] sm:text-3xl lg:text-[2.05rem]">
          예약 전에 꼭 확인할 기본 이용 안내
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#3b5370] sm:text-base">
          핵심 안내만 먼저 확인하고 예약을 진행해보세요.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-3.5 sm:mt-10 sm:grid-cols-2 sm:gap-4">
          {quickGuides.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-[#c9b9a7]/42 bg-[#fffcf8]/80 px-4 py-4 sm:px-5"
            >
              <h3 className="text-sm font-semibold tracking-tight text-[#1a3456] sm:text-base">
                {item.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#4a607b]">
                {item.content}
              </p>
            </article>
          ))}
        </div>

        <Link
          href={SITE_LINKS.guide}
          className="mt-8 inline-flex items-center rounded-full border border-[#c1b09e]/65 bg-[#f8f2ea] px-5 py-2.5 text-sm font-semibold text-[#5b4739] transition-colors hover:bg-[#f1e7da]"
        >
          이용안내 자세히 보기
        </Link>
      </div>
    </section>
  );
}
