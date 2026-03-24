import Link from "next/link";
import { SITE_LINKS } from "@/lib/site-links";

export default function FinalCTASection() {
  return (
    <section
      id="final"
      className="relative scroll-mt-24 overflow-hidden"
      style={{
        backgroundColor: "var(--cta-band-bg)",
        color: "var(--cta-text)",
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: "var(--cta-band-wash)" }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: "var(--cta-band-shade)" }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-14 sm:px-10 sm:py-16 lg:px-16">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--cta-text-muted)]">
            Next step
          </p>

          <h2 className="mt-3 text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
            예약 문의 또는 이용안내 확인
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-[var(--cta-text-muted)] sm:text-base">
            전화로 문의하시거나, 이용안내 페이지에서 시간·요금·유의사항을 살펴볼 수
            있습니다.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href={SITE_LINKS.contactTel}
              className="inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-semibold transition-opacity hover:opacity-90"
              style={{
                background: "var(--button-primary-bg)",
                color: "var(--button-primary-text)",
              }}
            >
              예약 문의하기
            </Link>
            <Link
              href={SITE_LINKS.guide}
              className="inline-flex h-11 items-center justify-center rounded-full border px-6 text-sm font-semibold backdrop-blur-sm transition-opacity hover:opacity-90"
              style={{
                background: "var(--button-secondary-bg)",
                borderColor: "var(--button-secondary-border)",
                color: "var(--button-secondary-text)",
              }}
            >
              이용안내 보기
            </Link>
          </div>

          <p className="mt-6 text-xs leading-relaxed text-[var(--cta-text-faint)] sm:text-sm">
            일정과 인원을 정리해 두고 연락하시면 안내에 도움이 됩니다.
          </p>
        </div>
      </div>
    </section>
  );
}
