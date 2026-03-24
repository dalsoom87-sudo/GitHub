"use client";

import Image from "next/image";
import { useThemeClass } from "@/hooks/use-theme-class";
import { THEME_ENTRY_IMAGE } from "@/lib/theme-media";
import { useCallback, useEffect, useRef, useState } from "react";

const DISMISSED_UNTIL_KEY = "dalsoom-mobile-entry-dismissed-until";

type EntryContent = {
  label: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  bgImage: string;
};

const DEFAULT_CONTENT: EntryContent = {
  label: "Stay Preview",
  title: "편하게 머무는 달숨의 숙박 공간",
  description:
    "객실과 글램핑 존을 먼저 확인하고, 원하는 방식으로 예약을 이어가세요.",
  ctaText: "객실 먼저 보기",
  ctaHref: "#stay",
  bgImage: "/images/1 (111).jpg",
};

// 이벤트형: 아래 기간과 콘텐츠만 교체하면 됩니다.
const EVENT_START_ISO = "2026-03-19T00:00:00";
const EVENT_END_ISO = "2026-03-31T23:59:59";

const EVENT_CONTENT: EntryContent = {
  label: "Special Event",
  title: "지금 확인하면 좋은 달숨 예약 혜택",
  description:
    "시즌 한정 안내와 예약 가능 일정을 먼저 확인해보세요.",
  ctaText: "이벤트 먼저 보기",
  ctaHref: "#final",
  bgImage: "/images/1 (111).jpg",
};

function isEventActive() {
  const start = new Date(EVENT_START_ISO).getTime();
  const end = new Date(EVENT_END_ISO).getTime();
  const now = Date.now();
  return start <= now && now <= end;
}

export default function MobileEntryOverlay() {
  const theme = useThemeClass();
  const entryImageSrc = THEME_ENTRY_IMAGE[theme];

  const [open, setOpen] = useState(false);
  // Event auto-switching is disabled.
  // Keep event constants/function for later use.
  const activeContent = DEFAULT_CONTENT;
  void isEventActive;

  const close = useCallback(() => {
    setOpen(false);
  }, []);

  const dismissForToday = useCallback(() => {
    try {
      const until = new Date();
      until.setDate(until.getDate() + 1);
      until.setHours(0, 0, 0, 0);
      window.localStorage.setItem(
        DISMISSED_UNTIL_KEY,
        String(until.getTime())
      );
    } catch {
      // localStorage unavailable -> just close
    }
    setOpen(false);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const readDismissedUntil = () => {
      try {
        const raw = window.localStorage.getItem(DISMISSED_UNTIL_KEY);
        if (!raw) return 0;
        const t = Number(raw);
        return Number.isFinite(t) ? t : 0;
      } catch {
        return 0;
      }
    };

    const shouldOpen = () => {
      if (!mq.matches) return false;
      const dismissedUntil = readDismissedUntil();
      return dismissedUntil <= Date.now();
    };

    const initial = shouldOpen();
    // Avoid synchronous setState inside an effect (lint rule).
    window.setTimeout(() => setOpen(initial), 0);

    const onChange = () => {
      if (!mq.matches) setOpen(false);
    };

    // Safari < 14 fallback
    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    }

    mq.addListener(onChange);
    return () => mq.removeListener(onChange);
  }, []);

  // No body scroll lock: keep the underlying page feeling interactive.

  const cards = [
    {
      title: "글램핑",
      description: "편하게 머무는 1박",
      image: "/images/1 (104).jpg",
      href: "#stay",
    },
    {
      title: "오토캠핑",
      description: "캠핑 구역에서 자유롭게",
      image: "/images/1 (57).jpg",
      href: "#facilities",
    },
    {
      title: "피크닉",
      description: "당일 야외 감성",
      image: "/images/1 (35).jpg",
      href: "#guide",
    },
  ];

  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const rafRef = useRef<number | null>(null);
  const scrollIdleRef = useRef<number | null>(null);

  const updateActiveIndex = useCallback(() => {
    const scroller = carouselRef.current;
    if (!scroller) return;

    const scRect = scroller.getBoundingClientRect();
    const scCenterX = scRect.left + scRect.width / 2;

    const candidates = Array.from(
      scroller.querySelectorAll<HTMLElement>("[data-entry-card]")
    );
    if (candidates.length === 0) return;

    let bestIdx = 0;
    let bestDist = Number.POSITIVE_INFINITY;
    candidates.forEach((el, idx) => {
      const r = el.getBoundingClientRect();
      const c = r.left + r.width / 2;
      const dist = Math.abs(c - scCenterX);
      if (dist < bestDist) {
        bestDist = dist;
        bestIdx = idx;
      }
    });

    setActiveIndex(bestIdx);
  }, []);

  const onCarouselScroll = useCallback(() => {
    if (rafRef.current != null) return;
    rafRef.current = window.requestAnimationFrame(() => {
      rafRef.current = null;
      // Update activeIndex after scrolling settles to avoid jitter.
      if (scrollIdleRef.current != null) {
        window.clearTimeout(scrollIdleRef.current);
      }
      scrollIdleRef.current = window.setTimeout(() => {
        scrollIdleRef.current = null;
        updateActiveIndex();
      }, 120);
    });
  }, [updateActiveIndex]);

  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => updateActiveIndex(), 0);
    return () => window.clearTimeout(t);
  }, [open, updateActiveIndex]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80]"
      data-default-entry-title={activeContent.title}
      data-event-entry-title={EVENT_CONTENT.title}
    >
      {/* 테마별 대표 배경 (카드 썸네일과 별도) */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          key={`${theme}:${entryImageSrc}`}
          src={entryImageSrc}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: "var(--mobile-entry-scrim)" }}
        />
      </div>

      {/* Very weak dim only; keep the main page visible */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-[1] bg-black/0" />

      {/* Bottom sheet */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="relative rounded-t-3xl bg-transparent px-4 pb-4 pt-3 text-[#102238]">
          {/* Close button (top-right) */}
          <button
            type="button"
            onClick={close}
            aria-label="닫기"
            className="absolute right-3 top-[9px] z-10 h-8 w-8 rounded-full border border-[#102238]/10 bg-white/60 text-[#102238] transition hover:bg-white/90"
          >
            <span className="text-[18px] font-semibold leading-none">×</span>
          </button>

          {/* Handle bar */}
          <div
            aria-hidden
            className="mx-auto mt-[6px] h-[2px] w-9 rounded-full bg-[#102238]/12"
          />

          {/* Carousel area */}
          <div className="mt-2 h-[24vh] min-h-[170px] max-h-[220px]">
            <div
              ref={carouselRef}
              onScroll={onCarouselScroll}
              className="h-full overflow-x-auto overflow-y-hidden touch-pan-x overscroll-x-contain [-webkit-overflow-scrolling:touch] snap-x snap-mandatory px-[calc((100vw-60vw)/2)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              <div className="flex h-full items-stretch gap-3">
                {cards.map((card, idx) => {
                  const targetId = card.href.replace("#", "");
                  const isActive = idx === activeIndex;
                  return (
                    <a
                      key={card.title}
                      data-entry-card
                      href={card.href}
                      onClick={(e) => {
                        e.preventDefault();
                        close();
                        window.setTimeout(() => {
                          window.location.hash = targetId;
                          document
                            .getElementById(targetId)
                            ?.scrollIntoView({
                              block: "start",
                              behavior: "auto",
                            });
                        }, 0);
                      }}
                      className={`snap-center relative block h-full w-[60vw] max-w-[20rem] shrink-0`}
                    >
                      <div
                        className={`relative h-full rounded-2xl overflow-hidden border border-white/10 bg-white/5 transition-transform duration-300 ${
                          isActive
                            ? "scale-100 shadow-[0_26px_70px_rgba(0,0,0,0.45)]"
                            : "scale-[0.95] opacity-80 brightness-95"
                        }`}
                      >
                        <Image
                          src={card.image}
                          alt={card.title}
                          fill
                          sizes="60vw"
                          className="object-cover"
                        />
                        <div
                          aria-hidden
                          className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.52)_40%,rgba(0,0,0,0)_100%)]"
                        />
                        <div
                          className="absolute inset-x-0 bottom-0 px-3 pb-3 pt-2"
                          aria-hidden={false}
                        >
                          {/* Fixed text area to keep layout stable */}
                          <div className="h-[50px]">
                            <p className="text-[13px] font-semibold tracking-tight text-white/95 truncate">
                              {card.title}
                            </p>
                            <p className="mt-1 text-[11px] text-white/80 truncate">
                              {card.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Today dismiss */}
          <button
            type="button"
            onClick={dismissForToday}
            className="mt-2 mx-auto flex h-5 w-[92%] items-center justify-center rounded-full border border-[#102238]/10 bg-transparent text-[10px] font-semibold text-[#102238]/75 transition hover:bg-white/40 hover:text-[#102238] hover:underline"
          >
            오늘 하루 보지 않기
          </button>
        </div>
      </div>
    </div>
  );
}
