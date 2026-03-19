import Link from "next/link";
import { SITE_LINKS } from "@/lib/site-links";

export default function FinalCTASection() {
  return (
    <section
      id="final"
      className="relative scroll-mt-24 bg-[#111a2a] text-white"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,200,125,0.18)_0%,rgba(255,200,125,0)_38%),radial-gradient(circle_at_85%_20%,rgba(125,170,255,0.20)_0%,rgba(125,170,255,0)_42%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(8,12,20,0.55)_0%,rgba(8,12,20,0.75)_45%,rgba(8,12,20,0.90)_100%)]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-14 sm:px-10 sm:py-16 lg:px-16">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/65">
            예약 시작
          </p>

          <h2 className="mt-3 text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
            원하는 일정으로 달숨 예약을 시작해보세요
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base">
            예약 또는 이용안내를 확인한 뒤, 편한 선택으로 진행할 수 있습니다.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href={SITE_LINKS.stay.glamping}
              className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[#0f2037] transition-colors hover:bg-white/90"
            >
              예약하기
            </Link>
            <Link
              href={SITE_LINKS.guide}
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/35 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/16"
            >
              이용안내 보기
            </Link>
          </div>

          <p className="mt-6 text-xs text-white/55">예약 전 필요한 안내를 먼저 확인해두세요.</p>
        </div>
      </div>
    </section>
  );
}
