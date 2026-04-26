import Link from "next/link";
import { SITE_LINKS } from "@/lib/site-links";

const quickGuides = [
  {
    title: "체크인 / 체크아웃",
    content: "체크인 15:00 · 체크아웃 12:00. 수영장·야외 부대시설은 11:00부터 선이용 가능.",
  },
  {
    title: "추가 인원",
    content: "기준 인원 초과 시 성인 20,000원, 아동 10,000원.",
  },
  {
    title: "예약 전 확인",
    content: "날짜·인원·옵션을 미리 정리해 두시면 안내에 도움이 됩니다.",
  },
  {
    title: "매너타임",
    content: "밤 11시(23:00) 이후에는 다른 이용객을 위해 정숙한 이용을 부탁드립니다.",
  },
  {
    title: "주차",
    content: "주차 공간이 충분히 마련되어 있습니다. 별도 주차비 없음.",
  },
  {
    title: "반려동물",
    content: "5호·6호·7호만 동반 가능. 추가 3만원, 목줄 착용 및 배변 처리 필수.",
  },
] as const;

export default function QuickGuideSection() {
  return (
    <section
      id="guide"
      className="relative scroll-mt-24 bg-[var(--page-strip)]"
      style={{ color: "var(--text-main)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(22,36,58,0.05)_0%,rgba(22,36,58,0.02)_35%,rgba(255,255,255,0)_100%)]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--home-eyebrow)]">
          Quick Guide
        </p>

        <h2 className="mt-3 max-w-3xl text-2xl font-semibold leading-tight tracking-tight text-[var(--home-heading)] sm:text-3xl lg:text-[2.05rem]">
          이용 전 확인 사항
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--home-body)] sm:text-base">
          체크인 시간, 주차, 반려동물, 매너타임 등 예약 전 꼭 확인해야 할 내용을 정리했습니다.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-3.5 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {quickGuides.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-[color:var(--home-card-border)] bg-[var(--surface-soft)] px-4 py-4 sm:px-5"
            >
              <h3 className="text-sm font-semibold tracking-tight text-[var(--text-main)] sm:text-base">
                {item.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-sub)]">
                {item.content}
              </p>
            </article>
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
          이용안내 전체 보기
        </Link>
      </div>
    </section>
  );
}
