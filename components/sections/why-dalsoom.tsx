import Link from "next/link";
import { SITE_LINKS } from "@/lib/site-links";

const reasons = [
  {
    number: "01",
    title: "조용한 밤공기와 야간 무드",
    description: "도심 소음을 벗어나 달빛 아래에서 차분하게 쉬는 밤을 만듭니다.",
  },
  {
    number: "02",
    title: "수영장과 워터슬라이드를 함께",
    description:
      "아이와 어른이 함께 즐길 수 있는 물놀이 동선으로 하루의 만족도를 높입니다.",
  },
  {
    number: "03",
    title: "글램핑 · 피크닉 · 오토캠핑을 한 곳에서",
    description:
      "숙박부터 당일 이용까지 한 곳에서 선택해 일정에 맞는 방식으로 이용할 수 있습니다.",
  },
];

export default function WhyDalsoomSection() {
  return (
    <section
      id="why"
      className="relative scroll-mt-24 bg-[var(--page-strip)]"
      style={{ color: "var(--text-main)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(27,43,68,0.05)_0%,rgba(27,43,68,0.02)_34%,rgba(255,255,255,0)_100%)]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <div className="grid grid-cols-1 gap-9 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--home-eyebrow)]">
              Why Dalsoom
            </p>

            <h2 className="mt-3 max-w-md text-2xl font-semibold leading-tight tracking-tight text-[var(--home-heading)] sm:text-3xl lg:text-[2rem]">
              예약 전에 꼭 봐야 할 달숨의 강점
            </h2>

            <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--home-body)] sm:text-base">
              복잡한 설명 없이, 선택에 필요한 핵심만 짧게 확인하고 이용 방식을
              결정할 수 있습니다.
            </p>

            <Link
              href={SITE_LINKS.guide}
              className="mt-7 inline-flex items-center rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors"
              style={{
                borderColor: "var(--home-outline-btn-border)",
                background: "var(--home-outline-btn-bg)",
                color: "var(--home-outline-btn-text)",
              }}
            >
              이용안내 확인하기
            </Link>
          </div>

          <div className="space-y-3.5 sm:space-y-4">
            {reasons.map((reason) => (
              <article
                key={reason.title}
                className="rounded-xl border border-[color:var(--home-card-border)] bg-[var(--surface-soft)] px-4 py-4 sm:px-5"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-[11px] font-semibold tracking-[0.14em] text-[var(--text-muted)]">
                    {reason.number}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold tracking-tight text-[var(--text-main)] sm:text-[1.05rem]">
                      {reason.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-sub)]">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
