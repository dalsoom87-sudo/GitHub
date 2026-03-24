import Image from "next/image";
import Link from "next/link";
import { SITE_LINKS } from "@/lib/site-links";

const photos = [
  { src: "/images/2 (1).jpg", alt: "현장 매점 전경" },
  { src: "/images/2 (5).jpg", alt: "매점 진열대" },
  { src: "/images/2 (8).jpg", alt: "매점 냉장 진열" },
  { src: "/images/2 (12).jpg", alt: "매점 내부 모습" },
] as const;

const categories = [
  {
    title: "음료",
    description:
      "냉장·상온 음료 등은 현장 진열 상태를 기준으로 확인하실 수 있습니다.",
  },
  {
    title: "간식",
    description:
      "과자 등 간단한 간식류가 비치되는 경우가 있으며, 품목은 시기에 따라 달라질 수 있습니다.",
  },
  {
    title: "아이스크림",
    description:
      "계절과 입고 상황에 따라 구성이 달라질 수 있으니 현장에서 확인해 주세요.",
  },
  {
    title: "간단 물품",
    description:
      "일부 필요한 물품을 함께 준비하는 경우가 있습니다. 사전에 필요 여부를 문의해 주시면 안내에 도움이 됩니다.",
  },
] as const;

export default function StorePreviewSection() {
  return (
    <section
      id="store"
      className="relative scroll-mt-24 bg-[var(--page-bg)]"
      style={{ color: "var(--text-main)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(22,37,59,0.05)_0%,rgba(22,37,59,0.02)_30%,rgba(255,255,255,0)_100%)]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--home-eyebrow)]">
          On-site Store
        </p>

        <h2 className="mt-3 max-w-3xl text-2xl font-semibold leading-tight tracking-tight text-[var(--home-heading)] sm:text-3xl lg:text-[2.05rem]">
          간단한 먹거리와 필요한 물품은 현장 매점에서
        </h2>

        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--home-body)] sm:text-base">
          음료, 과자, 아이스크림, 간단한 식품과 일부 필요한 물품을 현장에서 확인하실 수
          있습니다. 품목은 날짜와 준비 상황에 따라 달라질 수 있으니 참고만 해 주세요.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-4">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[color:var(--border-soft)] bg-[var(--surface-soft)]"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 22vw, 45vw"
              />
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {categories.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[color:var(--home-card-border)] bg-[var(--surface)] px-4 py-4 sm:px-5 sm:py-5"
              style={{ boxShadow: "var(--detail-shadow-card)" }}
            >
              <p className="text-sm font-semibold text-[var(--home-heading)]">
                {item.title}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-[var(--text-sub)] sm:text-[13px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 max-w-3xl space-y-2 rounded-2xl border border-[color:var(--border-soft)] bg-[var(--surface)] px-4 py-4 sm:px-5 sm:py-5">
          <p className="text-sm leading-relaxed text-[var(--text-sub)]">
            판매 품목은 운영일과 재고 상황에 따라 달라질 수 있습니다.
          </p>
          <p className="text-sm leading-relaxed text-[var(--text-sub)]">
            필요한 물품은 예약 전 문의를 권장드립니다.
          </p>
        </div>

        <Link
          href={SITE_LINKS.guideStore}
          className="mt-5 inline-flex items-center rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors"
          style={{
            borderColor: "var(--home-outline-btn-border)",
            background: "var(--home-outline-btn-bg)",
            color: "var(--home-outline-btn-text)",
          }}
        >
          이용안내에서 더 보기
        </Link>
      </div>
    </section>
  );
}
