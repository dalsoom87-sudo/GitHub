"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { SITE_LINKS } from "@/lib/site-links";

/**
 * 슬라이드 순서 원칙:
 *   1. 공간감이 큰 전경 사진 우선 (야경/해질녘/수영장)
 *   2. 의자·장비 클로즈업은 첫 화면 제외
 *   3. 파일명을 바꾸지 말 것
 */
const SLIDES = [
  { src: "/images/theme-sunset-hero-v2.jpg", alt: "달숨 글램핑 해질녘 전경" },
  { src: "/images/1 (109).jpg",              alt: "달숨 미온수풀 야간 전경" },
  { src: "/images/1 (57).jpg",               alt: "달숨 불멍 감성" },
  { src: "/images/theme-night-hero-v2.jpg",  alt: "달숨 글램핑 야경" },
] as const;

const INTERVAL_MS = 5800;

export default function HeroSlideshowSection() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    }
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, INTERVAL_MS);
  }, []);

  const stopTimer = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    startTimer();
    return stopTimer;
  }, [startTimer, stopTimer]);

  const goTo = useCallback(
    (idx: number) => {
      stopTimer();
      setCurrent(idx);
      startTimer();
    },
    [startTimer, stopTimer]
  );

  return (
    <section
      id="hero"
      className="relative -mt-14 h-[100dvh] overflow-hidden bg-[#030a14]"
    >
      {/* ── 슬라이드 ─────────────────────────────────────────────────── */}
      {SLIDES.map((slide, idx) => (
        <div
          key={slide.src}
          aria-hidden={idx !== current}
          className="absolute inset-0 transition-opacity duration-[1800ms] ease-in-out"
          style={{ opacity: idx === current ? 1 : 0, zIndex: idx === current ? 1 : 0 }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={idx === 0}
            className="hero-zoom-image object-cover object-center"
            sizes="100vw"
          />
        </div>
      ))}

      {/* ── 오버레이 — 상단(헤더) + 하단(카드 영역)만 ────────────────── */}
      <div
        aria-hidden
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: [
            "linear-gradient(to bottom, rgba(0,0,0,0.26) 0%, transparent 20%)",
            "linear-gradient(to top, rgba(2,6,16,0.54) 0%, rgba(2,6,14,0.22) 26%, transparent 46%)",
          ].join(", "),
        }}
      />

      {/* ── 안내 카드 — 좌하단 ────────────────────────────────────────── */}
      <div
        className="absolute z-20 left-6 bottom-20 sm:left-10 md:bottom-10 lg:left-16 lg:bottom-12"
        style={{ maxWidth: "336px" }}
      >
        <div
          className="rounded-lg px-5 py-4"
          style={{ background: "rgba(4,10,20,0.36)" }}
        >
          {/* 제목 */}
          <h1
            className="font-sans font-normal text-white/90"
            style={{
              fontSize: "clamp(1.14rem, 1.9vw, 1.65rem)",
              lineHeight: 1.54,
              letterSpacing: "-0.01em",
            }}
          >
            수영장 불빛 켜지는 저녁,
            <br />
            달숨의 하루가 시작됩니다.
          </h1>

          {/* 태그 */}
          <p
            className="mt-2.5 text-[10px] font-normal leading-relaxed"
            style={{ color: "rgba(255,255,255,0.44)" }}
          >
            미온수풀 · 프라이빗 BBQ · 불멍 · 키즈 체험
          </p>

          {/* 버튼 */}
          <div className="mt-4 flex items-center gap-2">
            <a
              href={SITE_LINKS.naver}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex h-8 items-center rounded-md px-3.5 text-[11px] font-normal transition-colors"
              style={{
                border: "1px solid rgba(255,255,255,0.34)",
                color: "rgba(255,255,255,0.86)",
              }}
            >
              예약 문의
            </a>
            <Link
              href={SITE_LINKS.contactTel}
              className="inline-flex h-8 items-center rounded-md px-3.5 text-[11px] font-normal transition-colors"
              style={{
                border: "1px solid rgba(255,255,255,0.10)",
                color: "rgba(255,255,255,0.44)",
              }}
            >
              전화하기
            </Link>
          </div>
        </div>
      </div>

      {/* ── 인디케이터 — 우하단, 조용하게 ───────────────────────────── */}
      <div className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5 md:bottom-6 md:right-6">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            aria-label={`슬라이드 ${idx + 1}`}
            className="h-[1.5px] rounded-full bg-white transition-all duration-500 ease-out"
            style={{
              width: idx === current ? "1.25rem" : "0.22rem",
              opacity: idx === current ? 0.46 : 0.14,
            }}
          />
        ))}
      </div>
    </section>
  );
}
