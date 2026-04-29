"use client";

import Image from "next/image";
import Link from "next/link";
import { useThemeClass } from "@/hooks/use-theme-class";
import { THEME_HERO_IMAGE } from "@/lib/theme-media";
import { SITE_LINKS } from "@/lib/site-links";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
      fill="currentColor"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function NaverMark({ className }: { className?: string }) {
  return (
    <span
      className={`inline-flex h-[15px] w-[15px] shrink-0 items-center justify-center rounded-[4px] bg-[#03C75A]/85 text-[9px] font-bold leading-none text-white/95 ${className ?? ""}`}
      aria-hidden
    >
      N
    </span>
  );
}

export default function HeroSection() {
  const theme = useThemeClass();
  const heroImageSrc = THEME_HERO_IMAGE[theme];

  return (
    <section
      id="hero"
      className="relative scroll-mt-24 min-h-[min(100dvh,920px)] overflow-hidden text-white"
      style={{ backgroundColor: "var(--hero-base)" }}
    >
      <Image
        key={`${theme}:${heroImageSrc}`}
        src={heroImageSrc}
        alt="달숨 글램핑"
        fill
        priority
        className="object-cover object-[center_38%] md:object-[center_46%]"
        sizes="100vw"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: "var(--hero-overlay-top)" }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: "var(--hero-overlay-right)" }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: "var(--hero-overlay-bottom)" }}
      />

      <div className="relative mx-auto flex min-h-[min(100dvh,920px)] w-full max-w-6xl flex-col justify-end px-6 pb-16 pt-28 sm:px-10 sm:pb-20 sm:pt-32 lg:justify-center lg:px-16 lg:pb-24 lg:pt-28">
        <div className="w-full max-w-xl lg:max-w-[min(36rem,92vw)] [text-shadow:0_1px_14px_rgba(0,0,0,0.42),0_1px_32px_rgba(0,0,0,0.22)]">
          <p className="text-[13px] font-medium text-white/85 sm:text-sm">
            경기 포천 · 달숨 글램핑
          </p>

          <h1 className="mt-4 text-[1.65rem] font-semibold leading-[1.2] tracking-[-0.02em] text-white sm:text-[2rem] sm:leading-[1.18] lg:text-[2.35rem] lg:leading-[1.17] [text-wrap:balance]">
            달빛 아래에서 숨 쉬며
            <br className="hidden sm:block" />
            머무는 글램핑 스테이
          </h1>

          <p className="mt-5 max-w-md text-[15px] leading-[1.65] text-white/90 sm:mt-6 sm:max-w-lg sm:text-base sm:leading-[1.62]">
            조용한 밤공기와 프라이빗 동선으로 이어지는 1박 숙박형 이용입니다. 일정만
            정하면 남은 건 머무름에 맡겨도 되는 구성이에요.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-9">
            <a
              href={SITE_LINKS.booking}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex h-11 min-w-[8.5rem] items-center justify-center rounded-full px-6 text-sm font-semibold shadow-[0_1px_0_rgba(255,255,255,0.12)] transition-opacity hover:opacity-95"
              style={{
                background: "var(--button-primary-bg)",
                color: "var(--button-primary-text)",
              }}
            >
              예약 문의하기
            </a>
            <Link
              href={SITE_LINKS.stay.glamping}
              className="inline-flex h-11 min-w-[8.5rem] items-center justify-center rounded-full border px-6 text-sm font-semibold backdrop-blur-[2px] transition-opacity hover:opacity-90"
              style={{
                background: "var(--button-secondary-bg)",
                borderColor: "var(--button-secondary-border)",
                color: "var(--button-secondary-text)",
              }}
            >
              글램핑 안내
            </Link>
          </div>

          <div className="mt-3 flex w-full max-w-md flex-wrap items-center gap-x-2 gap-y-2 sm:mt-4 sm:max-w-none sm:gap-x-2.5">
            <a
              href={SITE_LINKS.instagram}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex h-8 w-fit max-w-full shrink-0 items-center gap-1.5 rounded-full border border-white/14 bg-black/18 px-3 py-0 text-[12px] font-normal leading-none text-white/78 shadow-none backdrop-blur-[1px] transition-[background-color,opacity,border-color] hover:border-white/22 hover:bg-black/28 hover:text-white/88"
            >
              <InstagramIcon className="h-3.5 w-3.5 shrink-0 text-white/75" />
              인스타그램
            </a>
            <a
              href={SITE_LINKS.naver}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex h-8 w-fit max-w-full shrink-0 items-center gap-1.5 rounded-full border border-[#03C75A]/28 bg-[#03C75A]/22 px-3 py-0 text-[12px] font-normal leading-none text-white/82 shadow-none transition-[background-color,opacity,border-color] hover:border-[#03C75A]/45 hover:bg-[#03C75A]/32 hover:text-white/92"
            >
              <NaverMark />
              네이버 플레이스
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
