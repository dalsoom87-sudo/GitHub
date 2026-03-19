import Link from "next/link";
import { SITE_LINKS } from "@/lib/site-links";

const glampingPriceRows = [
  { label: "비성수기", value: "평일 17만원 / 주말 26만원" },
  { label: "준성수기(5~10월)", value: "평일 19만원 / 주말 28만원" },
  { label: "성수기", value: "32만원" },
];

const simplePriceRows = [
  { label: "피크닉", value: "7만원" },
  { label: "오토캠핑", value: "4만원" },
];

const addOnRows = [
  { label: "고기세트", value: "3만원" },
  { label: "BBQ", value: "3만원" },
  { label: "불멍세트", value: "2.5만원" },
];

export default function PriceBasicGuideSection() {
  return (
    <section
      id="price"
      className="relative scroll-mt-24 bg-[#f4eee6] text-[#16263c]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(23,38,60,0.08)_0%,rgba(23,38,60,0.02)_34%,rgba(255,255,255,0)_100%)]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#3a5375]/80">
          Price & Basic Guide
        </p>

        <h2 className="mt-3 max-w-3xl text-2xl font-semibold leading-tight tracking-tight text-[#13253d] sm:text-3xl lg:text-[2.05rem]">
          5초 안에 보는 핵심 요금 요약
        </h2>

        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#36506e] sm:text-base">
          예약 전에 필요한 가격만 짧게 확인해보세요.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-5">
          <div className="rounded-2xl border border-[#c8b9a7]/42 bg-[#fffdf9]/85 p-5 sm:p-6">
            <h3 className="text-base font-semibold tracking-tight text-[#183253] sm:text-lg">
              글램핑 요금 핵심
            </h3>

            <div className="mt-4 space-y-2.5">
              {glampingPriceRows.map((row) => (
                <p
                  key={row.label}
                  className="flex items-center justify-between gap-3 border-b border-[#d4c5b3]/50 pb-1.5 text-sm"
                >
                  <span className="text-[#4a607c]">{row.label}</span>
                  <span className="font-semibold text-[#193457]">{row.value}</span>
                </p>
              ))}
            </div>

            <div className="mt-5 space-y-2.5">
              {simplePriceRows.map((row) => (
                <p
                  key={row.label}
                  className="flex items-center justify-between rounded-lg border border-[#d2c2b0]/45 bg-[#f8f2ea]/70 px-3 py-2 text-sm"
                >
                  <span className="text-[#4a607c]">{row.label}</span>
                  <span className="font-semibold text-[#193457]">{row.value}</span>
                </p>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[#cabaa8]/40 bg-[#fffdfa]/82 p-5 sm:p-6">
            <h3 className="text-base font-semibold tracking-tight text-[#1a3456] sm:text-lg">
              추가 인원 · 옵션 안내
            </h3>

            <div className="mt-4 space-y-2.5">
              <p className="flex items-center justify-between gap-3 border-b border-[#d6c8b7]/50 pb-1.5 text-sm">
                <span className="text-[#4c627f]">추가 인원(성인)</span>
                <span className="font-semibold text-[#223e61]">2만원</span>
              </p>
              <p className="flex items-center justify-between gap-3 border-b border-[#d6c8b7]/50 pb-1.5 text-sm">
                <span className="text-[#4c627f]">추가 인원(아동)</span>
                <span className="font-semibold text-[#223e61]">1만원</span>
              </p>
            </div>

            <div className="mt-4 space-y-2.5">
              {addOnRows.map((row) => (
                <p
                  key={row.label}
                  className="flex items-center justify-between gap-3 border-b border-[#d6c8b7]/50 pb-1.5 text-sm"
                >
                  <span className="text-[#4c627f]">{row.label}</span>
                  <span className="font-semibold text-[#223e61]">{row.value}</span>
                </p>
              ))}
            </div>

            <p className="mt-5 text-xs leading-relaxed text-[#5b708b] sm:text-sm">
              최종 요금은 예약 단계에서 다시 확인해 주세요.
            </p>
          </div>
        </div>

        <Link
          href={SITE_LINKS.guide}
          className="mt-8 inline-flex items-center rounded-full border border-[#c1b19f]/65 bg-[#f8f2ea] px-5 py-2.5 text-sm font-semibold text-[#5c4739] transition-colors hover:bg-[#f1e7da]"
        >
          전체 요금 보기
        </Link>
      </div>
    </section>
  );
}
