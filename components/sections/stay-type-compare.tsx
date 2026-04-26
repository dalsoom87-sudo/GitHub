import Link from "next/link";
import { SITE_LINKS } from "@/lib/site-links";

const stayTypes = [
  {
    type: "글램핑",
    sub: "숙박형 · 1박",
    accentClass: "bg-indigo-600",
    price: "평일 170,000원",
    priceSub: "주말·공휴일 260,000원",
    priceNote: "7호 1만원 할인 · 네이버 알림 10% 할인",
    features: [
      "1호~7호 총 7개 동 운영",
      "5호·6호·7호 애견동반 가능 (추가 3만원)",
      "최소 2인 / 최대 6인",
      "각 숙소 앞 전용 BBQ·불멍 구역",
      "미온수풀 이용 가능 (봄·가을 시즌)",
    ],
    recommended: "커플 · 가족 · 반려견 동반",
    href: SITE_LINKS.stay.glamping,
    cta: "글램핑 자세히 보기",
  },
  {
    type: "피크닉",
    sub: "당일 이용",
    accentClass: "bg-emerald-600",
    price: "70,000원",
    priceSub: "자리 2개 운영",
    priceNote: "최소 2인 / 최대 40인 · 단체 이용 가능",
    features: [
      "당일 야외 피크닉 이용",
      "수영장·야외 부대시설 동일 이용",
      "최대 40인 수용 (단체 문의 환영)",
      "개인 장비 지참 가능",
      "BBQ·불멍 옵션 추가 가능",
    ],
    recommended: "가족 나들이 · 단체 · 당일 여행",
    href: SITE_LINKS.stay.picnic,
    cta: "피크닉 자세히 보기",
  },
  {
    type: "오토캠핑",
    sub: "장비 지참형",
    accentClass: "bg-amber-600",
    price: "40,000원",
    priceSub: "사이트 2개 운영",
    priceNote: "개인 화로 사용 가능",
    features: [
      "차량 옆 사이트 설치 가능",
      "개인 화로 반입 허용 (오토캠핑 구역 한정)",
      "개인 숯·장작 반입 가능 (그릴 대여비 별도)",
      "수영장·야외 부대시설 동일 이용",
      "BBQ·불멍 옵션 추가 가능",
    ],
    recommended: "캠핑 장비 보유 · 자유로운 캠핑 선호",
    href: SITE_LINKS.stay.autocamping,
    cta: "오토캠핑 자세히 보기",
  },
] as const;

export default function StayTypeCompareSection() {
  return (
    <section
      id="compare"
      className="relative scroll-mt-24 bg-[var(--page-strip)]"
      style={{ color: "var(--text-main)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(22,37,59,0.05)_0%,rgba(22,37,59,0.02)_30%,rgba(255,255,255,0)_100%)]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--home-eyebrow)]">
          Choose Your Stay
        </p>

        <h2 className="mt-3 max-w-3xl text-2xl font-semibold leading-tight tracking-tight text-[var(--home-heading)] sm:text-3xl lg:text-[2.05rem]">
          이용 방식 한눈에 비교
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--home-body)] sm:text-base">
          글램핑 숙박부터 당일 피크닉, 자유로운 오토캠핑까지. 일정과 스타일에 맞는 방식을 선택하세요.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 lg:grid-cols-3 lg:gap-6">
          {stayTypes.map((stay) => (
            <article
              key={stay.type}
              className="flex flex-col overflow-hidden rounded-2xl border border-[color:var(--home-card-border)] bg-[var(--surface)]"
              style={{ boxShadow: "var(--detail-shadow-card)" }}
            >
              {/* 상단 컬러 밴드 + 타입명 */}
              <div className={`${stay.accentClass} px-5 py-4`}>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/75">
                  {stay.sub}
                </p>
                <p className="mt-0.5 text-xl font-semibold text-white">
                  {stay.type}
                </p>
              </div>

              {/* 가격 블록 */}
              <div
                className="border-b px-5 py-4"
                style={{ borderColor: "var(--border-soft)" }}
              >
                <p className="text-lg font-semibold text-[var(--home-heading)]">
                  {stay.price}
                </p>
                <p className="mt-0.5 text-sm text-[var(--text-sub)]">
                  {stay.priceSub}
                </p>
                <p className="mt-1.5 text-[11px] text-[var(--text-muted)]">
                  {stay.priceNote}
                </p>
              </div>

              {/* 특징 리스트 */}
              <div className="flex-1 px-5 py-4">
                <ul className="space-y-2">
                  {stay.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2 text-sm leading-snug text-[var(--text-sub)]"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ background: "var(--detail-bullet)" }}
                      />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 추천 대상 + CTA */}
              <div
                className="border-t px-5 py-4"
                style={{ borderColor: "var(--border-soft)" }}
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--text-muted)]">
                  추천 대상
                </p>
                <p className="mt-1 text-[13px] text-[var(--text-sub)]">
                  {stay.recommended}
                </p>
                <Link
                  href={stay.href}
                  className="mt-3 inline-flex w-full items-center justify-center rounded-xl border py-2.5 text-sm font-semibold transition-colors"
                  style={{
                    borderColor: "var(--home-outline-btn-border)",
                    background: "var(--home-outline-btn-bg)",
                    color: "var(--home-outline-btn-text)",
                  }}
                >
                  {stay.cta}
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* 할인 안내 */}
        <div
          className="mt-6 flex flex-wrap items-start gap-4 rounded-2xl border px-5 py-4 sm:items-center"
          style={{
            background: "var(--surface-soft)",
            borderColor: "var(--border-soft)",
          }}
        >
          <div className="flex items-center gap-2">
            <span className="inline-flex shrink-0 items-center rounded-full px-2 py-0.5 text-[10px] font-semibold text-white" style={{ background: "#03C75A" }}>
              N 알림 혜택
            </span>
            <p className="text-sm text-[var(--text-sub)]">
              네이버 플레이스 알림 설정 시 <span className="font-semibold text-[var(--text-main)]">10% 할인</span>
            </p>
          </div>
          <a
            href={SITE_LINKS.naver}
            target="_blank"
            rel="noreferrer noopener"
            className="shrink-0 text-xs font-semibold underline-offset-4 hover:underline"
            style={{ color: "var(--text-muted)" }}
          >
            네이버 플레이스 바로가기 →
          </a>
        </div>
      </div>
    </section>
  );
}
