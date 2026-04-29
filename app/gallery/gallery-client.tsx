"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

type Category = "all" | "glamping" | "pool" | "bbq" | "kids" | "night";

type GalleryItem = {
  src: string;
  title: string;
  category: Exclude<Category, "all">;
  desc: string;
};

// 사진 교체 시 이 배열만 수정
// 첫 6장: 달숨 핵심 분위기 (야경·수영장·BBQ·불멍·글램핑 외관)
// 이후: 카테고리별 보조 이미지
const GALLERY_ITEMS: GalleryItem[] = [
  // ── 첫 6장 ──────────────────────────────────────────────────
  { src: "/images/theme-night-entry-v2.jpg", title: "미온수풀 야경",         category: "pool",     desc: "조명이 켜진 달숨의 미온수 수영장 야경입니다." },
  { src: "/images/theme-night-hero-v2.jpg",  title: "달숨 야경 전경",        category: "night",    desc: "달빛 아래 달숨 글램핑의 전체 야경입니다." },
  { src: "/images/1 (109).jpg",              title: "수영장 전경",            category: "pool",     desc: "달숨의 야외 수영장 전경입니다." },
  { src: "/images/1 (36).jpg",               title: "숯불 바비큐",            category: "bbq",      desc: "숙소 앞 바비큐 공간에서 즐기는 숯불 바비큐입니다." },
  { src: "/images/1 (57).jpg",               title: "달숨 불멍",              category: "bbq",      desc: "화로 앞 달빛 아래, 달숨의 불멍 시간입니다." },
  { src: "/images/1 (104).jpg",              title: "글램핑 동 외관",         category: "glamping", desc: "달숨 글램핑 동의 외관 모습입니다." },

  // ── 수영장 추가 ───────────────────────────────────────────────
  { src: "/images/1 (24).jpg",               title: "풀사이드 전경",          category: "pool",     desc: "달숨 미온수풀 전경입니다." },
  { src: "/images/1 (25).jpg",               title: "풀사이드 낮 풍경",       category: "pool",     desc: "햇살이 가득한 낮의 풀사이드 분위기입니다." },
  { src: "/images/1 (26).jpg",               title: "수영장 공간",            category: "pool",     desc: "프라이빗하게 이용할 수 있는 수영장 공간입니다." },
  { src: "/images/1 (28).jpg",               title: "미온수풀 저녁",          category: "pool",     desc: "조명이 켜진 저녁, 달숨의 수영장 분위기입니다." },

  // ── BBQ · 불멍 추가 ──────────────────────────────────────────
  { src: "/images/1 (35).jpg",               title: "달숨 시그니처 플래터",   category: "bbq",      desc: "달숨의 대표 메뉴, 통삼겹 플래터입니다." },
  { src: "/images/1 (37).jpg",               title: "불멍 공간",              category: "bbq",      desc: "장작 앞에서 함께하는 달숨의 불멍 시간입니다." },
  { src: "/images/1 (38).jpg",               title: "야외 바비큐 공간",       category: "bbq",      desc: "달숨의 야외 바비큐 공간 전경입니다." },

  // ── 키즈체험 ────────────────────────────────────────────────
  { src: "/images/1 (45).jpg",               title: "모래놀이 · 키즈 체험",   category: "kids",     desc: "아이들이 직접 만지고 놀 수 있는 달숨의 키즈 공간입니다." },
  { src: "/images/1 (46).jpg",               title: "가족 시간",              category: "kids",     desc: "가족 모두가 편안하게 즐길 수 있는 달숨입니다." },
  { src: "/images/1 (60).jpg",               title: "RC카 체험",              category: "kids",     desc: "아이들이 야외에서 즐길 수 있는 RC카 체험 공간입니다." },
  { src: "/images/1 (44).jpg",               title: "아이들과 함께",          category: "kids",     desc: "가족과 함께 즐기는 달숨의 체험 공간입니다." },

  // ── 야경 추가 ────────────────────────────────────────────────
  { src: "/images/1 (64).jpg",               title: "달숨 야경",              category: "night",    desc: "밤이 깊어지면 더 아름다워지는 달숨의 야경입니다." },
  { src: "/images/1 (65).jpg",               title: "저녁 글램핑",            category: "night",    desc: "저물녘 달숨의 조용하고 고요한 분위기입니다." },
  { src: "/images/1 (66).jpg",               title: "밤의 달숨",              category: "night",    desc: "포천의 맑은 밤하늘 아래 달숨 글램핑입니다." },

  // ── 글램핑 추가 ──────────────────────────────────────────────
  { src: "/images/1 (6).jpg",                title: "숙박 공간",              category: "glamping", desc: "편안한 침구와 감성 조명이 갖춰진 공간입니다." },
  { src: "/images/1 (7).jpg",                title: "글램핑 내부",            category: "glamping", desc: "달숨 글램핑의 아늑한 실내 공간입니다." },
  { src: "/images/1 (8).jpg",                title: "글램핑 동 전경",         category: "glamping", desc: "자연과 어우러진 달숨 글램핑 동 외부 모습입니다." },
  { src: "/images/1 (118).jpg",              title: "오토캠핑 사이트",        category: "glamping", desc: "달숨 글램핑의 오토캠핑 사이트입니다." },
  { src: "/images/1 (2).jpg",                title: "개인 테라스",            category: "glamping", desc: "각 동마다 마련된 프라이빗 야외 공간입니다." },
  { src: "/images/1 (3).jpg",                title: "글램핑 전경",            category: "glamping", desc: "숲과 하늘이 보이는 달숨의 글램핑 전경입니다." },
];

const CATEGORIES: { key: Category; label: string }[] = [
  { key: "all",      label: "전체" },
  { key: "glamping", label: "글램핑" },
  { key: "pool",     label: "수영장" },
  { key: "bbq",      label: "BBQ · 불멍" },
  { key: "kids",     label: "키즈체험" },
  { key: "night",    label: "야경" },
];

/* ──────────────────── Lightbox ──────────────────── */

function CloseIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden>
      <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
    </svg>
  );
}

function Lightbox({
  item,
  onClose,
}: {
  item: GalleryItem | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!item) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [item, onClose]);

  if (!item) return null;

  const categoryLabel =
    CATEGORIES.find((c) => c.key === item.category)?.label ?? item.category;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      style={{ background: "rgba(0,0,0,0.76)" }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      <div
        className="relative flex w-full max-w-4xl flex-col overflow-hidden rounded-2xl
                   lg:h-[520px] lg:max-h-none lg:flex-row lg:overflow-hidden"
        style={{
          background: "var(--page-bg)",
          color: "var(--text-main)",
          maxHeight: "90dvh",
          overflowY: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 이미지 */}
        <div className="relative h-56 shrink-0 sm:h-72 lg:h-full lg:w-[62%]">
          <Image
            src={item.src}
            alt={item.title}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 62vw, 100vw"
            priority
          />
          {/* 모바일 닫기 */}
          <button
            type="button"
            onClick={onClose}
            aria-label="닫기"
            className="lg:hidden absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full transition-opacity hover:opacity-70"
            style={{ background: "rgba(0,0,0,0.38)", color: "rgba(255,255,255,0.90)" }}
          >
            <CloseIcon />
          </button>
        </div>

        {/* 정보 */}
        <div className="flex flex-col justify-center px-5 py-6 sm:px-7 lg:w-[38%] lg:px-8 lg:py-10">
          {/* 데스크톱 닫기 */}
          <div className="hidden lg:flex justify-end mb-3">
            <button
              type="button"
              onClick={onClose}
              aria-label="닫기"
              className="flex h-7 w-7 items-center justify-center rounded-full transition-opacity hover:opacity-60"
              style={{ background: "var(--surface-soft)", color: "var(--text-muted)" }}
            >
              <CloseIcon />
            </button>
          </div>

          <p
            className="text-[10px] font-semibold uppercase tracking-[0.2em]"
            style={{ color: "var(--home-eyebrow)" }}
          >
            {categoryLabel}
          </p>
          <h3
            className="mt-2 text-[18px] font-semibold leading-snug tracking-tight lg:text-[20px]"
            style={{ color: "var(--home-heading)" }}
          >
            {item.title}
          </h3>
          <p
            className="mt-3 text-[13px] leading-relaxed lg:text-[14px]"
            style={{ color: "var(--text-sub)" }}
          >
            {item.desc}
          </p>
          <p
            className="mt-8 text-[11px]"
            style={{ color: "var(--text-muted)" }}
          >
            달숨 글램핑 · 경기 포천시 영중면
          </p>
        </div>
      </div>
    </div>
  );
}

/* ──────────────────── GalleryClient ──────────────────── */

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const closeLightbox = useCallback(() => setLightboxItem(null), []);

  const filtered =
    activeCategory === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <>
      <Lightbox item={lightboxItem} onClose={closeLightbox} />

      {/* 카테고리 필터 */}
      <div className="mb-8 flex flex-wrap gap-2">
        {CATEGORIES.map(({ key, label }) => {
          const isActive = activeCategory === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => setActiveCategory(key)}
              className="rounded-full px-4 py-1.5 text-[12px] font-medium transition-colors"
              style={{
                background: isActive ? "var(--home-heading)" : "var(--surface-soft)",
                color: isActive ? "var(--page-bg)" : "var(--text-sub)",
                border: isActive
                  ? "1px solid transparent"
                  : "1px solid var(--border-soft)",
              }}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* 갤러리 그리드 */}
      <div className="grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-3">
        {filtered.map((item, index) => (
          <button
            key={`${item.src}-${index}`}
            type="button"
            onClick={() => setLightboxItem(item)}
            className="group relative block aspect-[4/3] overflow-hidden rounded-xl"
            style={{ background: "var(--surface-soft)" }}
          >
            <Image
              src={item.src}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 50vw"
            />
            {/* hover 오버레이 */}
            <div
              className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{ background: "rgba(0,0,0,0.16)" }}
            />
            {/* hover 타이틀 */}
            <div
              className="absolute inset-x-0 bottom-0 translate-y-1 px-3 pb-3 pt-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.50) 0%, transparent 100%)",
              }}
            >
              <p className="text-left text-[11px] font-medium leading-snug text-white">
                {item.title}
              </p>
            </div>
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <p
          className="py-20 text-center text-[14px]"
          style={{ color: "var(--text-muted)" }}
        >
          해당 카테고리의 사진이 없습니다.
        </p>
      )}
    </>
  );
}
