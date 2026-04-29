"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

type TabKey = "water" | "kids" | "bbq" | "amenity";

const TABS: { key: TabKey; label: string }[] = [
  { key: "water",   label: "물놀이" },
  { key: "kids",    label: "키즈 체험" },
  { key: "bbq",     label: "BBQ · 불멍" },
  { key: "amenity", label: "편의시설" },
];

type FacilityItem = {
  name: string;
  desc: string;
  image: string;
  images?: string[]; // 추후 다중 이미지 지원용 — images[0] 우선 사용
  details: string[];
};

const FACILITIES: Record<TabKey, FacilityItem[]> = {
  water: [
    {
      name: "미온수풀",
      desc: "봄과 가을에도 따뜻하게 즐길 수 있는 달숨의 대표 시설입니다.",
      image: "/images/theme-night-entry-v2.jpg",
      images: ["/images/theme-night-entry-v2.jpg", "/images/1 (109).jpg"],
      details: [
        "봄·가을 시즌 운영",
        "수온 약 30도",
        "이용 시간 11:00~21:00",
        "입실 전 수영장 및 야외 부대시설 선이용 가능",
        "어린이는 보호자 동반 필요",
      ],
    },
    {
      name: "워터슬라이드",
      desc: "수영장과 함께 즐길 수 있는 아이들의 인기 시설입니다.",
      image: "/images/1 (109).jpg",
      details: [
        "수영장과 함께 이용",
        "현장 상황과 안전 기준에 따라 이용 안내",
        "어린이는 보호자 동반 필요",
        "안전을 위해 무리한 이용 금지",
      ],
    },
  ],
  kids: [
    {
      name: "모래놀이장 & RC 포크레인",
      desc: "아이들이 직접 만지고 놀 수 있는 야외 놀이 공간입니다.",
      image: "/images/1 (45).jpg",
      details: [
        "모래놀이장 이용 가능",
        "RC 포크레인 체험 가능",
        "보호자 동반 권장",
        "사용 후 정리 필요",
      ],
    },
    {
      name: "RC카 체험장",
      desc: "아이들이 야외에서 즐길 수 있는 달숨의 작은 체험거리입니다.",
      image: "/images/1 (60).jpg",
      details: [
        "부모님 동행 하에 이용 가능",
        "사용 후 매점 반납",
        "현장 상황에 따라 이용 안내가 달라질 수 있음",
      ],
    },
    {
      name: "노래방",
      desc: "가족, 친구들과 가볍게 즐길 수 있는 실내 놀이 공간입니다.",
      image: "/images/1 (80).jpg",
      details: [
        "이용 시간 09:00~21:00",
        "매너타임 전 이용 권장",
        "다른 이용객을 위해 과도한 소음 주의",
      ],
    },
  ],
  bbq: [
    {
      name: "프라이빗 BBQ",
      desc: "각 숙소 앞 바비큐장에서 편하게 즐기는 달숨의 저녁입니다.",
      image: "/images/1 (35).jpg",
      images: ["/images/1 (35).jpg", "/images/1 (36).jpg"],
      details: [
        "각 숙소 앞 바비큐장 이용",
        "BBQ 세트 30,000원 (숯, 그릴, 석쇠)",
        "개인 숯·장작 반입 가능 (그릴 필요 시 대여비 별도)",
      ],
    },
    {
      name: "불멍",
      desc: "조용한 밤, 숙소 앞에서 즐기는 달숨의 불멍 시간입니다.",
      image: "/images/1 (57).jpg",
      details: [
        "각 숙소 앞 가능",
        "불멍 세트 25,000원 (장작, 화로대, 오로라가루, 마시멜로)",
        "장작 추가 15,000원",
      ],
    },
  ],
  amenity: [
    {
      name: "글램핑 동 (7개)",
      desc: "1~7호 총 7개 동. 감성 조명과 편의 시설이 갖춰진 독립 공간. 최소 2인 이용.",
      image: "/images/1 (104).jpg",
      details: [
        "1~7호 총 7개 동 운영",
        "최소 2인 이용",
        "5·6·7호 애견동반 가능 (추가 30,000원)",
        "체크인 15:00 · 체크아웃 12:00",
      ],
    },
    {
      name: "오토캠핑 사이트",
      desc: "차량 옆 직접 설치하는 자유로운 캠핑 사이트. 2자리 운영. 개인 화로 반입 가능.",
      image: "/images/1 (118).jpg",
      details: [
        "2사이트 운영",
        "차량 옆 직접 설치",
        "개인 화로 반입 가능",
        "수영장·야외 부대시설 동일 이용",
      ],
    },
    {
      name: "빔프로젝터",
      desc: "막사 안에서 영상 시청을 즐길 수 있는 편의 시설입니다.",
      image: "/images/1 (80).jpg",
      details: [
        "막사 안에서 이용 가능",
        "아이들과 함께 쉬어가는 시간에 적합",
        "현장 상황에 따라 안내",
      ],
    },
    {
      name: "달숨 매점",
      desc: "필요한 간식과 용품을 현장에서 편하게 이용할 수 있습니다.",
      image: "/images/2 (1).jpg",
      details: [
        "운영 시간 10:00~22:00",
        "음료, 아이스크림, 간식, 캠핑 용품 등",
        "필요한 물품은 현장에서 확인 가능",
      ],
    },
  ],
};

/* ────────────────────────── Modal ────────────────────────── */

function FacilityModal({
  item,
  onClose,
}: {
  item: FacilityItem | null;
  onClose: () => void;
}) {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    setImgIndex(0);
  }, [item]);

  useEffect(() => {
    if (!item) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    document.body.classList.add("modal-open");
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
      document.body.classList.remove("modal-open");
    };
  }, [item, onClose]);

  if (!item) return null;

  const allImages = item.images && item.images.length > 0 ? item.images : [item.image];
  const currentImage = allImages[imgIndex];
  const hasMultiple = allImages.length > 1;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center lg:items-center"
      style={{ background: "rgba(0,0,0,0.50)" }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.name}
    >
      <div
        className="relative w-full max-h-[90vh] overflow-y-auto rounded-t-2xl
                   lg:mx-8 lg:max-w-[860px] lg:rounded-xl lg:flex lg:flex-row
                   lg:h-[580px] lg:max-h-none lg:overflow-hidden"
        style={{ background: "var(--page-bg)", color: "var(--text-main)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── 사진 ── */}
        <div className="relative h-64 shrink-0 sm:h-72 lg:h-full lg:w-[58%]">
          <Image
            src={currentImage}
            alt={item.name}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 500px, 100vw"
          />

          {/* 모바일 닫기 */}
          <button
            type="button"
            onClick={onClose}
            aria-label="닫기"
            className="lg:hidden absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full transition-opacity hover:opacity-70"
            style={{ background: "rgba(0,0,0,0.34)", color: "rgba(255,255,255,0.88)" }}
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden>
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </button>

          {/* 모바일: N / M 카운터 */}
          {hasMultiple && (
            <div
              className="lg:hidden absolute bottom-3 right-3 z-10 rounded px-2 py-0.5 text-[11px]"
              style={{ background: "rgba(0,0,0,0.34)", color: "rgba(255,255,255,0.68)" }}
            >
              {imgIndex + 1} / {allImages.length}
            </div>
          )}

          {/* 데스크톱: 썸네일 */}
          {hasMultiple && (
            <div className="hidden lg:flex absolute bottom-4 left-4 gap-2 z-10">
              {allImages.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`사진 ${i + 1}`}
                  onClick={(e) => { e.stopPropagation(); setImgIndex(i); }}
                  className="relative h-11 w-16 overflow-hidden rounded-md transition-all duration-200"
                  style={{
                    opacity: i === imgIndex ? 1 : 0.48,
                    outline: i === imgIndex ? "2px solid rgba(255,255,255,0.75)" : "2px solid transparent",
                    outlineOffset: "1px",
                  }}
                >
                  <Image src={img} alt="" fill className="object-cover" sizes="64px" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ── 안내 ── */}
        <div className="flex flex-col lg:w-[42%] lg:overflow-y-auto">
          {/* 데스크톱 닫기 */}
          <div className="hidden lg:flex shrink-0 justify-end p-4 pb-1">
            <button
              type="button"
              onClick={onClose}
              aria-label="닫기"
              className="flex h-7 w-7 items-center justify-center rounded-full transition-opacity hover:opacity-60"
              style={{ background: "var(--surface-soft)", color: "var(--text-muted)" }}
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5" aria-hidden>
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </button>
          </div>

          {/* 본문 */}
          <div className="flex-1 px-5 pb-8 pt-5 sm:px-6 lg:px-7 lg:pt-3 lg:pb-10">
            <h3
              className="text-[18px] font-semibold leading-snug tracking-tight lg:text-[19px]"
              style={{ color: "var(--home-heading)" }}
            >
              {item.name}
            </h3>
            <p
              className="mt-2 text-[13px] leading-relaxed lg:text-[14px]"
              style={{ color: "var(--text-sub)" }}
            >
              {item.desc}
            </p>

            {item.details.length > 0 && (
              <ul
                className="mt-5 space-y-3 border-t pt-4"
                style={{ borderColor: "var(--border-soft)" }}
              >
                {item.details.map((d) => (
                  <li
                    key={d}
                    className="flex items-start gap-2.5 text-[13px] leading-relaxed"
                    style={{ color: "var(--text-sub)" }}
                  >
                    <span
                      className="mt-[7px] h-[3px] w-[3px] shrink-0 rounded-full"
                      style={{ background: "var(--text-muted)" }}
                    />
                    {d}
                  </li>
                ))}
              </ul>
            )}

            <p
              className="mt-6 text-[11px] leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              현장 상황과 날씨에 따라 이용 안내가 달라질 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────── Section ─────────────────────────── */

export default function ExperienceExplorerSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("water");
  const [selectedItem, setSelectedItem] = useState<FacilityItem | null>(null);

  const items = FACILITIES[activeTab];

  const closeModal = useCallback(() => setSelectedItem(null), []);

  return (
    <>
      <FacilityModal item={selectedItem} onClose={closeModal} />

      <section
        id="explore"
        className="relative scroll-mt-24 bg-[var(--page-bg)]"
        style={{ color: "var(--text-main)" }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          {/* Header */}
          <div className="mb-10 max-w-xl">
            <h2 className="text-2xl font-semibold leading-tight tracking-[-0.025em] text-[var(--home-heading)] sm:text-3xl lg:text-[2.1rem]">
              달숨의 시설과 체험
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[var(--home-body)]">
              항목을 선택해 이용 안내를 확인해 보세요.
            </p>
          </div>

          {/* ── Desktop: left tab + right panel ── */}
          <div
            className="hidden lg:flex overflow-hidden rounded-2xl border"
            style={{
              borderColor: "var(--border-soft)",
              background: "var(--surface)",
              boxShadow: "0 4px 32px -8px rgba(15,32,55,0.12)",
            }}
          >
            {/* Left: vertical tab list */}
            <div
              className="flex w-[196px] shrink-0 flex-col"
              style={{ borderRight: "1px solid var(--border-soft)" }}
            >
              {TABS.map((tab) => {
                const isActive = activeTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setActiveTab(tab.key)}
                    className="flex items-center px-5 py-5 text-left transition-colors duration-150"
                    style={{
                      background: isActive ? "var(--page-bg)" : "transparent",
                      borderLeft: isActive
                        ? "2px solid var(--home-heading)"
                        : "2px solid transparent",
                    }}
                  >
                    <span
                      className="text-[14px] font-semibold leading-snug"
                      style={{ color: isActive ? "var(--home-heading)" : "var(--text-sub)" }}
                    >
                      {tab.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right: image + item list */}
            <div className="flex min-h-[480px] flex-1 flex-col">
              {/* Hero image — 클릭하면 첫 번째 항목 상세 */}
              <button
                type="button"
                className="relative h-[380px] w-full overflow-hidden text-left"
                onClick={() => setSelectedItem(items[0])}
                aria-label={`${items[0].name} 자세히 보기`}
              >
                {(Object.keys(FACILITIES) as TabKey[]).map((key) => (
                  <div
                    key={key}
                    className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                    style={{
                      opacity: activeTab === key ? 1 : 0,
                      zIndex: activeTab === key ? 1 : 0,
                    }}
                  >
                    <Image
                      src={FACILITIES[key][0].image}
                      alt={FACILITIES[key][0].name}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 70vw, 100vw"
                    />
                  </div>
                ))}
                <div
                  aria-hidden
                  className="absolute inset-0 z-10"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(6,14,26,0.62) 0%, transparent 54%)",
                  }}
                />
                <div className="absolute bottom-5 left-6 z-20">
                  <p
                    className="text-[10px] font-semibold uppercase tracking-[0.18em]"
                    style={{ color: "rgba(255,255,255,0.56)" }}
                  >
                    {TABS.find((t) => t.key === activeTab)?.label}
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-white">
                    {items[0].name}
                  </h3>
                  <p
                    className="mt-0.5 text-[11px]"
                    style={{ color: "rgba(255,255,255,0.48)" }}
                  >
                    자세히 보기 →
                  </p>
                </div>
              </button>

              {/* 항목 리스트 — 클릭하면 해당 항목 상세 */}
              <div
                className="flex-1 divide-y"
                style={{ borderColor: "var(--border-soft)" }}
              >
                {items.map((item) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setSelectedItem(item)}
                    className="flex w-full items-start gap-4 px-6 py-4 text-left transition-colors hover:bg-black/[0.025]"
                  >
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-center">
                      <p
                        className="text-[13px] font-semibold"
                        style={{ color: "var(--home-heading)" }}
                      >
                        {item.name}
                      </p>
                      <p
                        className="mt-0.5 text-[12px] leading-relaxed"
                        style={{ color: "var(--text-sub)" }}
                      >
                        {item.desc}
                      </p>
                    </div>
                    <span
                      className="mt-1 shrink-0 text-[11px]"
                      style={{ color: "var(--text-muted)" }}
                    >
                      →
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ── Mobile: tabs + hero + compact list ── */}
          <div className="lg:hidden">
            {/* Tab bar */}
            <div className="-mx-6 mb-6 sm:mx-0">
              <div className="flex gap-0 overflow-x-auto px-6 scrollbar-none sm:gap-2 sm:overflow-visible sm:px-0">
                {TABS.map((tab) => {
                  const isActive = activeTab === tab.key;
                  return (
                    <button
                      key={tab.key}
                      type="button"
                      onClick={() => setActiveTab(tab.key)}
                      className="shrink-0 rounded px-4 py-2 text-sm font-semibold whitespace-nowrap transition-all duration-200"
                      style={{
                        background: isActive ? "var(--home-heading)" : "var(--surface-soft)",
                        color: isActive ? "#fff" : "var(--text-sub)",
                        borderWidth: 1,
                        borderStyle: "solid",
                        borderColor: isActive ? "var(--home-heading)" : "var(--border-soft)",
                      }}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Hero image — 첫 번째 항목 클릭으로 상세 오픈 */}
            <button
              type="button"
              className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl text-left sm:aspect-[16/9]"
              onClick={() => setSelectedItem(items[0])}
              aria-label={`${items[0].name} 자세히 보기`}
            >
              {(Object.keys(FACILITIES) as TabKey[]).map((key) => (
                <div
                  key={key}
                  className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                  style={{
                    opacity: activeTab === key ? 1 : 0,
                    zIndex: activeTab === key ? 1 : 0,
                  }}
                >
                  <Image
                    src={FACILITIES[key][0].image}
                    alt={FACILITIES[key][0].name}
                    fill
                    className="object-cover"
                    sizes="(min-width: 640px) 80vw, 100vw"
                  />
                </div>
              ))}
              <div
                aria-hidden
                className="absolute inset-0 z-10"
                style={{
                  background:
                    "linear-gradient(to top, rgba(4,12,28,0.86) 0%, rgba(4,12,26,0.44) 36%, transparent 66%)",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 z-20 p-5">
                <p
                  className="text-[10px] font-semibold uppercase tracking-[0.2em]"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {TABS.find((t) => t.key === activeTab)?.label}
                </p>
                <h3 className="mt-1 text-[17px] font-semibold leading-snug text-white">
                  {items[0].name}
                </h3>
                <p
                  className="mt-1.5 text-[12px] leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  {items[0].desc}
                </p>
                <p
                  className="mt-2 text-[11px]"
                  style={{ color: "rgba(255,255,255,0.44)" }}
                >
                  탭하여 자세히 보기
                </p>
              </div>
            </button>

            {/* 나머지 항목 리스트 */}
            {items.length > 1 && (
              <div
                className="mt-3 overflow-hidden rounded-2xl border"
                style={{
                  borderColor: "var(--border-soft)",
                  background: "var(--surface)",
                }}
              >
                {items.slice(1).map((item, i) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setSelectedItem(item)}
                    className="flex w-full items-start gap-4 px-4 py-4 text-left transition-colors hover:bg-black/[0.025]"
                    style={
                      i > 0
                        ? { borderTop: "1px solid var(--border-soft)" }
                        : undefined
                    }
                  >
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div className="flex flex-1">
                      <div>
                        <p
                          className="text-[13px] font-semibold"
                          style={{ color: "var(--home-heading)" }}
                        >
                          {item.name}
                        </p>
                        <p
                          className="mt-0.5 text-[12px] leading-relaxed"
                          style={{ color: "var(--text-sub)" }}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </div>
                    <span
                      className="mt-0.5 shrink-0 text-[11px]"
                      style={{ color: "var(--text-muted)" }}
                    >
                      →
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
