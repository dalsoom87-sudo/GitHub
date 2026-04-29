"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { SITE_LINKS } from "@/lib/site-links";

// 실제 플래터 사진으로 교체 시 이 경로만 변경
const PLATTER_IMAGE = "/images/1 (35).jpg";

type FoodItem = {
  label: string;
  title: string;
  subtitle?: string;
  price?: string;
  priceSub?: string;
  desc: string;
  image: string;
  images?: string[];
  details: string[];
  cta: string;
};

const FOOD_DATA: Record<"platter" | "camping" | "bbq" | "store", FoodItem> = {
  platter: {
    label: "SIGNATURE",
    title: "달숨 통삼겹 플래터",
    subtitle: "Signature",
    price: "45,000원",
    priceSub: "2인 기준",
    desc: "불 앞에서 천천히 준비되는 달숨의 시그니처 플래터입니다.",
    image: PLATTER_IMAGE,
    images: [PLATTER_IMAGE],
    details: [
      "구성: 통삼겹 600g · 모닝빵 · 코울슬로",
      "예약 및 문의 시 확인해 주세요",
    ],
    cta: "구성 보기",
  },
  camping: {
    label: "FOOD SET",
    title: "캠핑 고기 세트",
    price: "15,000원",
    priceSub: "1인 기준 · 최소 2인 · 사전예약",
    desc: "몸만 와도 편하게 즐길 수 있는 기본 고기 세트입니다.",
    image: "/images/1 (57).jpg",
    images: ["/images/1 (57).jpg"],
    details: [
      "구성: 삼겹살 150g · 목살 150g · 명이나물 · 모둠쌈 · 버섯 · 마늘 · 쌈장",
      "사전예약 필요",
      "예약 및 문의는 전화로 진행됩니다",
    ],
    cta: "구성 보기",
  },
  bbq: {
    label: "BBQ SET",
    title: "BBQ 숯세트",
    price: "30,000원",
    priceSub: "4인 기준",
    desc: "숙소 앞 바비큐 공간에서 바로 이용 가능한 기본 BBQ 세트입니다.",
    image: "/images/1 (36).jpg",
    images: ["/images/1 (36).jpg"],
    details: [
      "구성: 숯 · 그릴 · 석쇠",
      "숙소 앞 바비큐장 이용",
      "개인 고기 지참 또는 별도 세트 추가 주문 가능",
    ],
    cta: "구성 보기",
  },
  store: {
    label: "STORE",
    title: "달숨 매점",
    priceSub: "운영 10:00 ~ 22:00",
    desc: "음료, 아이스크림, 간단한 간식과 필요한 물품을 현장에서 구매할 수 있습니다.",
    image: "/images/2 (1).jpg",
    images: ["/images/2 (1).jpg"],
    details: [
      "음료, 아이스크림, 간식, 캠핑 용품 등",
      "품목과 가격은 현장 상황에 따라 다를 수 있습니다",
    ],
    cta: "이용 안내",
  },
};

/* ──────────────────── Modal ──────────────────── */

function FoodModal({
  item,
  onClose,
}: {
  item: FoodItem | null;
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
      aria-label={item.title}
    >
      <div
        className="relative w-full max-h-[90vh] overflow-y-auto rounded-t-2xl
                   lg:mx-8 lg:max-w-[800px] lg:rounded-xl lg:flex lg:flex-row
                   lg:h-[540px] lg:max-h-none lg:overflow-hidden"
        style={{ background: "var(--page-bg)", color: "var(--text-main)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── 사진 ── */}
        <div className="relative h-64 shrink-0 sm:h-72 lg:h-full lg:w-[56%]">
          <Image
            src={currentImage}
            alt={item.title}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 450px, 100vw"
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
        <div className="flex flex-col lg:w-[44%] lg:overflow-y-auto">
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
            {item.subtitle && (
              <p
                className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.2em]"
                style={{ color: "var(--text-muted)" }}
              >
                {item.subtitle}
              </p>
            )}
            <h3
              className="text-[18px] font-semibold leading-snug tracking-tight lg:text-[19px]"
              style={{ color: "var(--home-heading)" }}
            >
              {item.title}
            </h3>
            {item.price && (
              <div className="mt-1.5 flex items-baseline gap-1.5">
                <span
                  className="text-[15px] font-medium"
                  style={{ color: "var(--home-heading)" }}
                >
                  {item.price}
                </span>
                {item.priceSub && (
                  <span className="text-[11px]" style={{ color: "var(--text-muted)" }}>
                    {item.priceSub}
                  </span>
                )}
              </div>
            )}
            {!item.price && item.priceSub && (
              <p className="mt-1.5 text-[12px]" style={{ color: "var(--text-muted)" }}>
                {item.priceSub}
              </p>
            )}
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
              예약 및 운영 관련 문의는 전화로 안내드립니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ──────────────────── Card ──────────────────── */

function FoodCard({
  item,
  onOpen,
  isSignature,
}: {
  item: FoodItem;
  onOpen: () => void;
  isSignature?: boolean;
}) {
  return (
    <div
      className="flex flex-col overflow-hidden rounded-xl border"
      style={{
        borderColor: "var(--section-dark-border)",
        background: "var(--section-dark-surface)",
      }}
    >
      {/* 이미지 */}
      <div
        className={`relative shrink-0 ${isSignature ? "h-48 sm:h-52" : "h-40 sm:h-44"}`}
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(min-width: 640px) 50vw, 100vw"
        />
        <span
          className="absolute left-3 top-3 rounded px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.18em]"
          style={{
            background: isSignature ? "rgba(255,255,255,0.14)" : "rgba(0,0,0,0.30)",
            color: isSignature ? "rgba(255,255,255,0.72)" : "rgba(255,255,255,0.54)",
          }}
        >
          {item.label}
        </span>
      </div>

      {/* 텍스트 */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3
          className={`font-semibold leading-snug text-white ${
            isSignature ? "text-[15px] sm:text-[16px]" : "text-[14px] sm:text-[15px]"
          }`}
        >
          {item.title}
        </h3>

        {item.price ? (
          <div className="mt-1 flex items-baseline gap-1.5">
            <span
              className="text-[13px] font-medium"
              style={{ color: "rgba(255,255,255,0.82)" }}
            >
              {item.price}
            </span>
            {item.priceSub && (
              <span
                className="text-[10px]"
                style={{ color: "rgba(255,255,255,0.36)" }}
              >
                {item.priceSub}
              </span>
            )}
          </div>
        ) : item.priceSub ? (
          <p
            className="mt-1 text-[11px]"
            style={{ color: "rgba(255,255,255,0.40)" }}
          >
            {item.priceSub}
          </p>
        ) : null}

        <p
          className="mt-2 flex-1 text-[12px] leading-relaxed"
          style={{ color: "var(--section-dark-muted)" }}
        >
          {item.desc}
        </p>

        <button
          type="button"
          onClick={onOpen}
          className="mt-4 h-8 w-full rounded-md text-[12px] transition-opacity hover:opacity-80"
          style={{
            border: "1px solid var(--section-dark-border)",
            background: "transparent",
            color: "rgba(255,255,255,0.50)",
          }}
        >
          {item.cta}
        </button>
      </div>
    </div>
  );
}

/* ─────────────────── Section ─────────────────── */

export default function FoodStoreSection() {
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);
  const closeModal = useCallback(() => setSelectedFood(null), []);

  return (
    <>
      <FoodModal item={selectedFood} onClose={closeModal} />

      <section
        id="food"
        className="relative scroll-mt-24"
        style={{ background: "var(--section-dark)", color: "var(--section-dark-text)" }}
      >
        <div className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">

          {/* 섹션 헤더 */}
          <div className="mb-8">
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.22em]"
              style={{ color: "var(--section-dark-muted)" }}
            >
              Food &amp; Store
            </p>
            <h2 className="mt-2 text-2xl font-semibold leading-tight tracking-[-0.025em] text-white sm:text-3xl">
              먹거리와 편의
            </h2>
            <p
              className="mt-2 text-[14px] leading-relaxed"
              style={{ color: "var(--section-dark-muted)" }}
            >
              달숨에서 준비한 먹거리와 편의시설을 안내해드립니다.
            </p>
          </div>

          {/* 2×2 카드 그리드 */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {(["platter", "camping", "bbq", "store"] as const).map((key) => (
              <FoodCard
                key={key}
                item={FOOD_DATA[key]}
                onOpen={() => setSelectedFood(FOOD_DATA[key])}
                isSignature={key === "platter"}
              />
            ))}
          </div>

          {/* 하단 안내 */}
          <p
            className="mt-5 text-[11px] leading-relaxed"
            style={{ color: "rgba(255,255,255,0.28)" }}
          >
            현장 상황에 따라 일부 품목 및 구성은 변동될 수 있습니다.{" "}
            <a
              href={SITE_LINKS.guideStore}
              className="underline underline-offset-4 transition-opacity hover:opacity-70"
              style={{ color: "var(--section-dark-muted)" }}
            >
              이용안내 보기 →
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
