import Link from "next/link";
import { SITE_LINKS } from "@/lib/site-links";

const glampingPriceRows = [
  { label: "평일 (일~목)", value: "170,000원" },
  { label: "주말·공휴일 (금·토)", value: "260,000원" },
  { label: "7호 할인", value: "1만원 할인 적용" },
];

const simplePriceRows = [
  { label: "피크닉", value: "70,000원" },
  { label: "오토캠핑", value: "40,000원" },
];

const addOnRows = [
  { label: "달숨 통삼겹 플래터", value: "45,000원 (2인)" },
  { label: "고기 세트 (삼겹+목살 등)", value: "사전예약 가능" },
  { label: "BBQ 세트 (숯·그릴·석쇠)", value: "30,000원" },
  { label: "불멍 세트 (장작·화로대 등)", value: "25,000원" },
  { label: "장작 추가", value: "15,000원" },
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
          Price Guide
        </p>

        <h2 className="mt-3 max-w-3xl text-2xl font-semibold leading-tight tracking-tight text-[var(--home-heading)] sm:text-3xl lg:text-[2.05rem]">
          요금 안내
        </h2>

        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--home-body)] sm:text-base">
          비수기·성수기 구분 없이 동일 요금이 적용됩니다. 네이버 플레이스 알림 설정 시 10% 할인 혜택이 있습니다.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-5">
          {/* 왼쪽: 숙박 요금 */}
          <div className="rounded-2xl border border-[color:var(--border-soft)] bg-[var(--surface)] p-5 sm:p-6">
            <h3 className="text-base font-semibold tracking-tight text-[var(--text-main)] sm:text-lg">
              숙박 요금
            </h3>

            <p className="mt-1 text-xs text-[var(--text-muted)]">글램핑 1~7호 (7호 1만원 할인)</p>

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

            {/* 네이버 할인 배너 */}
            <div
              className="mt-4 flex items-center gap-2 rounded-lg border px-3 py-2.5"
              style={{ background: "var(--surface-soft)", borderColor: "var(--border-soft)" }}
            >
              <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-[4px] bg-[#03C75A] text-[9px] font-bold text-white">
                N
              </span>
              <p className="text-xs leading-snug text-[var(--text-sub)]">
                네이버 플레이스 알림 설정 시{" "}
                <span className="font-semibold text-[var(--text-main)]">10% 할인</span>
              </p>
            </div>
          </div>

          {/* 오른쪽: 추가 인원·옵션 */}
          <div className="rounded-2xl border border-[color:var(--border-soft)] bg-[var(--surface-soft)] p-5 sm:p-6">
            <h3 className="text-base font-semibold tracking-tight text-[var(--text-main)] sm:text-lg">
              추가 인원 · 옵션
            </h3>

            <div className="mt-4 space-y-2.5">
              <p className="flex items-center justify-between gap-3 border-b border-[color:var(--border-soft)] pb-1.5 text-sm">
                <span className="text-[var(--text-sub)]">추가 인원 (성인)</span>
                <span className="font-semibold text-[var(--text-main)]">20,000원</span>
              </p>
              <p className="flex items-center justify-between gap-3 border-b border-[color:var(--border-soft)] pb-1.5 text-sm">
                <span className="text-[var(--text-sub)]">추가 인원 (아동)</span>
                <span className="font-semibold text-[var(--text-main)]">10,000원</span>
              </p>
            </div>

            <div className="mt-4 space-y-2.5">
              {addOnRows.map((row) => (
                <p
                  key={row.label}
                  className="flex items-center justify-between gap-3 border-b border-[color:var(--border-soft)] pb-1.5 text-sm last:border-0 last:pb-0"
                >
                  <span className="text-[var(--text-sub)]">{row.label}</span>
                  <span className="font-semibold text-[var(--text-main)]">
                    {row.value}
                  </span>
                </p>
              ))}
            </div>

            <p className="mt-5 text-xs leading-relaxed text-[var(--text-muted)]">
              고기 세트는 1인 기준 최소 2인부터 사전예약이 필요합니다. 최종 요금은 예약·문의 시 다시 확인해 주세요.
            </p>
          </div>
        </div>

        {/* 취소·환불 요약 */}
        <div
          className="mt-5 rounded-2xl border px-5 py-4 sm:px-6"
          style={{ background: "var(--surface)", borderColor: "var(--border-soft)" }}
        >
          <p className="text-xs font-semibold text-[var(--text-muted)]">취소 · 환불 정책 요약</p>
          <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1">
            {[
              ["10일 전", "100%"],
              ["7일 전", "90%"],
              ["5일 전", "70%"],
              ["3일 전", "50%"],
              ["1일 전 / 당일", "환불 불가"],
            ].map(([when, refund]) => (
              <p key={when} className="text-xs text-[var(--text-sub)]">
                <span className="font-semibold text-[var(--text-main)]">{when}</span>
                {" "}취소 → {refund}
              </p>
            ))}
          </div>
        </div>

        <Link
          href={SITE_LINKS.guide}
          className="mt-6 inline-flex items-center rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors"
          style={{
            borderColor: "var(--home-outline-btn-border)",
            background: "var(--home-outline-btn-bg)",
            color: "var(--home-outline-btn-text)",
          }}
        >
          이용안내 전체 보기
        </Link>

        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--text-muted)]">
          예약 및 이용 문의는 전화로 진행됩니다. 요금 확인 후 궁금한 점은 문의해 주세요.
        </p>
      </div>
    </section>
  );
}
