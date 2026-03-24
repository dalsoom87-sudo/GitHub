"use client";

import Image from "next/image";
import { useThemeClass } from "@/hooks/use-theme-class";
import { THEME_HERO_IMAGE } from "@/lib/theme-media";

export default function AutocampingDetailHero() {
  const theme = useThemeClass();
  const src = THEME_HERO_IMAGE[theme];

  return (
    <div
      className="relative min-h-[240px] overflow-hidden rounded-2xl border border-[color:var(--home-card-border)] bg-[var(--surface-soft)] sm:min-h-[300px] lg:col-span-7 lg:min-h-[420px]"
      style={{ boxShadow: "var(--detail-shadow-card)" }}
    >
      <Image
        key={`${theme}:${src}`}
        src={src}
        alt="달숨 오토캠핑 구역"
        fill
        className="object-cover"
        sizes="(min-width: 1024px) 58vw, 100vw"
        priority
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--detail-photo-scrim)" }}
      />
      <p
        className="pointer-events-none absolute bottom-4 left-4 right-4 text-sm font-medium text-white/92 sm:bottom-5 sm:left-5"
        style={{ textShadow: "var(--detail-hero-caption-shadow)" }}
      >
        자유 캠핑형 · 장비 직접 준비 · 포천 영중면
      </p>
    </div>
  );
}
