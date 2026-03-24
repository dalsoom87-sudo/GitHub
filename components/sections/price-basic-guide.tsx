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
      className="relative scroll-mt-24 bg-[var(--page-bg)]"
      style={{ color: "var(--text-main)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(23,38,60,0.06)_0%,rgba(23,38,60,0.02)_34%,rgba(255,255,255,0)_100%)]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--home-eyebrow)]">
          Price & Basic Guide
        </p>

        <h2 className="mt-3 max-w-3xl text-2xl font-semibold leading-tight tracking-tight text-[var(--home-heading)] sm:text-3xl lg:text-[2.05rem]">
          핵심 요금 요약
        </h2>

        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--home-body)] sm:text-base">
          예약 전에 필요한 가격만 짧게 확인해보세요.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-5">
          <div className="rounded-2xl border border-[color:var(--border-soft)] bg-[var(--surface)] p-5 sm:p-6">
            <h3 className="text-base font-semibold tracking-tight text-[var(--text-main)] sm:text-lg">
              글램핑 요금 핵심
            </h3>

            <div className="mt-4 space-y-2.5">
              {glampingPriceRows.map((row) => (
                <p
                  key={row.label}
                  className="flex items-center justify-between gap-3 border-b border-[color:var(--border-soft)] pb-1.5 text-sm"
                >
                  <span className="text-[var(--text-sub)]">{row.label}</span>
                  <span className="font-semibold text-[var(--text-main)]">
                    {row.value}
                  </span>
                </p>
              ))}
            </div>

            <div className="mt-5 space-y-2.5">
              {simplePriceRows.map((row) => (
                <p
                  key={row.label}
                  className="flex items-center justify-between rounded-lg border border-[color:var(--border-soft)] bg-[var(--surface-soft)] px-3 py-2 text-sm"
                >
                  <span className="text-[var(--text-sub)]">{row.label}</span>
                  <span className="font-semibold text-[var(--text-main)]">
                    {row.value}
                  </span>
                </p>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[color:var(--border-soft)] bg-[var(--surface-soft)] p-5 sm:p-6">
            <h3 className="text-base font-semibold tracking-tight text-[var(--text-main)] sm:text-lg">
              추가 인원 · 옵션 안내
            </h3>

            <div className="mt-4 space-y-2.5">
              <p className="flex items-center justify-between gap-3 border-b border-[color:var(--border-soft)] pb-1.5 text-sm">
                <span className="text-[var(--text-sub)]">추가 인원(성인)</span>
                <span className="font-semibold text-[var(--text-main)]">2만원</span>
              </p>
              <p className="flex items-center justify-between gap-3 border-b border-[color:var(--border-soft)] pb-1.5 text-sm">
                <span className="text-[var(--text-sub)]">추가 인원(아동)</span>
                <span className="font-semibold text-[var(--text-main)]">1만원</span>
              </p>
            </div>

            <div className="mt-4 space-y-2.5">
              {addOnRows.map((row) => (
                <p
                  key={row.label}
                  className="flex items-center justify-between gap-3 border-b border-[color:var(--border-soft)] pb-1.5 text-sm"
                >
                  <span className="text-[var(--text-sub)]">{row.label}</span>
                  <span className="font-semibold text-[var(--text-main)]">
                    {row.value}
                  </span>
                </p>
              ))}
            </div>

            <p className="mt-5 text-xs leading-relaxed text-[var(--text-muted)] sm:text-sm">
              최종 요금은 예약·문의 시 다시 확인해 주세요.
            </p>
          </div>
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
          전체 요금 보기
        </Link>

        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[var(--text-muted)]">
          예약 및 이용 문의는 전화로 진행됩니다. 요금을 확인하셨다면 이용안내를 참고한 뒤
          문의해 주세요.
        </p>
      </div>
    </section>
  );
}
