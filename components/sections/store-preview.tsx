import Image from "next/image";
import Link from "next/link";
import { SITE_LINKS } from "@/lib/site-links";

const foodItems = [
  {
    name: "달숨 통삼겹 플래터",
    tag: "Signature",
    tagColor: "bg-amber-500/85",
    description:
      "달숨의 시그니처 메뉴. 두툼하게 썬 통삼겹을 불 앞에서 천천히 구워 먹는 경험입니다. 장작 냄새와 함께라면 더욱 특별해요.",
    detail: "쌈채소 · 쌈장 · 명이나물 함께 제공",
    image: "/images/2 (3).jpg",
  },
  {
    name: "캠핑 고기 세트",
    tag: "세트 메뉴",
    tagColor: "bg-indigo-500/80",
    description:
      "삼겹살, 목살, 쌈채소, 버섯, 명이나물, 쌈장까지 한 번에 준비됩니다. 짐을 최소화하고 싶은 분들께 딱 맞는 구성이에요.",
    detail: "1인 15,000원 · 최소 2인 · 사전예약 필요",
    image: "/images/2 (6).jpg",
  },
  {
    name: "달숨 매점",
    tag: "현장 이용",
    tagColor: "bg-emerald-600/80",
    description:
      "음료, 아이스크림, 간단한 간식과 일부 필요한 물품을 현장에서 바로 구매할 수 있습니다. 몸만 와도 불편하지 않게 준비했어요.",
    detail: "품목은 운영일에 따라 상이",
    image: "/images/2 (1).jpg",
  },
] as const;

export default function StorePreviewSection() {
  return (
    <section
      id="store"
      className="relative scroll-mt-24 bg-[var(--page-strip)]"
      style={{ color: "var(--text-main)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(22,37,59,0.05)_0%,rgba(22,37,59,0.02)_30%,rgba(255,255,255,0)_100%)]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--home-eyebrow)]">
          Food &amp; Store
        </p>

        <h2 className="mt-3 max-w-3xl text-2xl font-semibold leading-tight tracking-tight text-[var(--home-heading)] sm:text-3xl lg:text-[2.05rem]">
          몸만 와도 충분한 달숨의 푸드 & 스토어
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--home-body)] sm:text-base">
          먹거리 준비 부담을 줄이고 머무는 경험에 집중할 수 있도록, 달숨만의 메뉴와 현장 매점을 운영합니다.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 lg:grid-cols-3 lg:gap-6">
          {foodItems.map((item) => (
            <article
              key={item.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[color:var(--home-card-border)] bg-[var(--surface)]"
              style={{ boxShadow: "var(--detail-shadow-card)" }}
            >
              {/* 이미지 영역 */}
              <div className="relative h-[200px] overflow-hidden sm:h-[220px]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,14,24,0.55)_0%,rgba(8,14,24,0.12)_55%,rgba(8,14,24,0)_100%)]"
                />
                {/* 태그 */}
                <div className="absolute left-3 top-3">
                  <span
                    className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-white ${item.tagColor}`}
                  >
                    {item.tag}
                  </span>
                </div>
              </div>

              {/* 텍스트 영역 */}
              <div className="flex flex-1 flex-col px-5 py-5">
                <h3 className="text-base font-semibold tracking-tight text-[var(--home-heading)] sm:text-[1.05rem]">
                  {item.name}
                </h3>
                <p className="mt-2 flex-1 text-[13px] leading-relaxed text-[var(--text-sub)] sm:text-sm">
                  {item.description}
                </p>
                <p
                  className="mt-4 border-t pt-3 text-[12px] font-medium text-[var(--text-muted)]"
                  style={{ borderColor: "var(--border-soft)" }}
                >
                  {item.detail}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 max-w-xl text-xs leading-relaxed text-[var(--text-muted)] sm:text-sm">
          매점 품목은 운영일과 재고 상황에 따라 달라질 수 있습니다. 사전에 필요 여부를 문의해 주시면 안내에 도움이 됩니다.
        </p>

        <Link
          href={SITE_LINKS.guideStore}
          className="mt-4 inline-flex items-center rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors"
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
