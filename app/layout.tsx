import type { Metadata } from "next";
import { IBM_Plex_Sans_KR } from "next/font/google";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";
import MobileEntryOverlay from "@/components/overlays/mobile-entry-overlay";
import ThemeSwitcher from "@/components/theme-switcher";
import { SITE_LINKS } from "@/lib/site-links";

const ibmPlexSansKr = IBM_Plex_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans-kr",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: "달숨 글램핑 | Dalsoom Glamping",
  description:
    "경기 포천시 영중면에 위치한 달숨 글램핑(Dalsoom Glamping). 글램핑·오토캠핑·피크닉 안내를 확인한 뒤 예약 및 이용 문의는 전화로 진행됩니다.",
  openGraph: {
    title: "달숨 글램핑 | Dalsoom Glamping",
    description:
      "경기 포천시 영중면에 위치한 달숨 글램핑(Dalsoom Glamping). 글램핑·오토캠핑·피크닉 안내를 확인한 뒤 예약 및 이용 문의는 전화로 진행됩니다.",
    locale: "ko_KR",
    siteName: "달숨 글램핑",
    type: "website",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "달숨 글램핑 대표 이미지",
      },
    ],
  },
};

const THEME_INIT = `(function(){try{var k='dalsoom-theme';var T=['theme-day','theme-sunset','theme-night'];var v=localStorage.getItem(k);var h=document.documentElement;T.forEach(function(t){h.classList.remove(t);});if(T.indexOf(v)>=0)h.classList.add(v);else h.classList.add('theme-night');}catch(e){document.documentElement.classList.add('theme-night');}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      suppressHydrationWarning
      className={`${ibmPlexSansKr.variable} theme-night h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Script id="dalsoom-theme-init" strategy="beforeInteractive">
          {THEME_INIT}
        </Script>

        <header
          className="sticky top-0 z-50 border-b backdrop-blur-md ring-1 ring-inset ring-white/[0.06] shadow-[0_1px_0_rgba(255,255,255,0.04)_inset]"
          style={{
            background: "var(--header-bg)",
            borderColor: "var(--header-border)",
          }}
        >
          <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-3 sm:px-10">
            <Link
              href={SITE_LINKS.homeHero}
              className="flex min-w-0 items-center gap-2"
              style={{ color: "var(--header-text)" }}
            >
              <span className="text-sm font-semibold tracking-[-0.01em]">
                달숨 글램핑
              </span>
              <span
                className="ui-label hidden text-[11px] sm:inline"
                style={{ color: "var(--header-text-muted)" }}
              >
                Dalsoom Glamping
              </span>
            </Link>

            <nav className="hidden items-center gap-5 sm:flex">
              <Link
                href={SITE_LINKS.bookingSection}
                className="ui-label text-[12px] transition-colors hover:opacity-100"
                style={{ color: "var(--header-text-muted)" }}
              >
                이용 방식
              </Link>
              <Link
                href={SITE_LINKS.whySection}
                className="ui-label text-[12px] transition-colors hover:opacity-100"
                style={{ color: "var(--header-text-muted)" }}
              >
                달숨의 강점
              </Link>
              <Link
                href={SITE_LINKS.facilitiesSection}
                className="ui-label text-[12px] transition-colors hover:opacity-100"
                style={{ color: "var(--header-text-muted)" }}
              >
                시설
              </Link>
              <Link
                href={SITE_LINKS.priceSection}
                className="ui-label text-[12px] transition-colors hover:opacity-100"
                style={{ color: "var(--header-text-muted)" }}
              >
                요금 안내
              </Link>
            </nav>

            <div className="flex flex-shrink-0 items-center gap-2 sm:gap-3">
              <ThemeSwitcher />
              <Link
                href={SITE_LINKS.contactTel}
                className="inline-flex h-10 items-center justify-center rounded-full px-4 text-sm font-semibold shadow-[0_1px_0_rgba(255,255,255,0.12)] transition-opacity hover:opacity-95"
                style={{
                  background: "var(--header-booking-bg)",
                  color: "var(--header-booking-text)",
                }}
              >
                예약 문의하기
              </Link>
            </div>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <MobileEntryOverlay />

        <footer
          className="border-t"
          style={{
            background: "var(--page-strip)",
            borderColor: "var(--border-soft)",
          }}
        >
          <div className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <p
                  className="text-sm font-semibold"
                  style={{ color: "var(--text-main)" }}
                >
                  달숨 글램핑
                </p>
                <p
                  className="mt-2 text-sm leading-relaxed"
                  style={{ color: "var(--text-sub)" }}
                >
                  주소: 경기 포천시 영중면 호국로 3226-37
                  <br />
                  연락처: {SITE_LINKS.contactPhoneDisplay}
                  <br />
                  계좌정보: 카카오뱅크 / 3333026902261 정성호
                </p>
              </div>
              <div>
                <p
                  className="text-sm font-semibold"
                  style={{ color: "var(--text-main)" }}
                >
                  문의
                </p>
                <p
                  className="mt-2 text-sm leading-relaxed"
                  style={{ color: "var(--text-sub)" }}
                >
                  예약 및 이용 문의는 전화로 진행됩니다. 일정과 이용 조건은 문의 시
                  확인해 주세요.
                </p>
              </div>
            </div>

            <p
              className="mt-10 text-xs"
              style={{ color: "var(--text-muted)" }}
            >
              &copy; {new Date().getFullYear()} 달숨 글램핑. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
