"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { SITE_LINKS } from "@/lib/site-links";

const NAV = [
  { href: SITE_LINKS.bookingSection,    label: "이용 방식" },
  { href: SITE_LINKS.facilitiesSection, label: "시설·체험" },
  { href: SITE_LINKS.gallery,           label: "사진" },
  { href: SITE_LINKS.priceSection,      label: "요금 안내" },
  { href: SITE_LINKS.faqSection,        label: "이용안내" },
] as const;

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  // 홈이 아닌 페이지는 스크롤 여부 관계없이 항상 다크 헤더
  const darkHeader = !isHome || scrolled;

  useEffect(() => {
    if (!isHome) return;
    const check = () => setScrolled(window.scrollY > 44);
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, [isHome]);

  return (
    <header
      className="sticky top-0 z-50 transition-[background,border-color,backdrop-filter] duration-500"
      style={{
        background: darkHeader ? "rgba(5, 10, 22, 0.84)" : "transparent",
        borderBottom: "1px solid " + (darkHeader ? "rgba(255,255,255,0.06)" : "transparent"),
        backdropFilter: darkHeader ? "blur(14px)" : "none",
        WebkitBackdropFilter: darkHeader ? "blur(14px)" : "none",
      }}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-3 sm:px-10 lg:px-16">
        {/* 로고 — 한글 상호만 */}
        <Link href={SITE_LINKS.homeHero}>
          <span className="text-[12px] font-normal tracking-[0.005em] text-white/86">
            달숨 글램핑
          </span>
        </Link>

        {/* 내비게이션 */}
        <nav className="hidden items-center gap-5 sm:flex">
          {NAV.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-[10.5px] font-normal text-white/65 transition-colors duration-200 hover:text-white/84"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* 예약 문의 */}
        <a
          href={SITE_LINKS.booking}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex h-7 items-center rounded border border-white/28 px-3 text-[10px] font-normal text-white/65 transition-colors hover:border-white/40 hover:text-white/84"
        >
          예약 문의
        </a>
      </div>
    </header>
  );
}
