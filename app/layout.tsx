import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import MobileEntryOverlay from "@/components/overlays/mobile-entry-overlay";
import { SITE_LINKS } from "@/lib/site-links";

export const metadata: Metadata = {
  title: "달숨 글램핑 | Dalsum Glamping",
  description:
    "경기 포천시 영중면에 위치한 달숨 글램핑(Dalsum Glamping). 글램핑, 오토캠핑, 피크닉 정보를 확인하고 예약을 시작해보세요.",
  openGraph: {
    title: "달숨 글램핑 | Dalsum Glamping",
    description:
      "경기 포천시 영중면에 위치한 달숨 글램핑(Dalsum Glamping). 글램핑, 오토캠핑, 피크닉 정보를 확인하고 예약을 시작해보세요.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0d1a2c]/60 backdrop-blur">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-3 sm:px-10">
            <Link
              href={SITE_LINKS.homeHero}
              className="flex items-center gap-2 text-white"
            >
              <span className="text-sm font-semibold tracking-tight">
                달숨 글램핑
              </span>
              <span className="hidden text-xs text-white/70 sm:inline">
                Dalsum Glamping
              </span>
            </Link>

            <nav className="hidden items-center gap-5 sm:flex">
              <Link
                href={SITE_LINKS.bookingSection}
                className="text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                이용 방식
              </Link>
              <Link
                href={SITE_LINKS.whySection}
                className="text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                달숨의 강점
              </Link>
              <Link
                href={SITE_LINKS.facilitiesSection}
                className="text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                시설
              </Link>
              <Link
                href={SITE_LINKS.priceSection}
                className="text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                요금 안내
              </Link>
            </nav>

            <div className="flex items-center gap-3">
              <Link
                href={SITE_LINKS.bookingAnchor}
                className="inline-flex h-10 items-center justify-center rounded-full bg-white px-4 text-sm font-semibold text-[#0f2037] transition-colors hover:bg-white/90"
              >
                예약하기
              </Link>
            </div>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <MobileEntryOverlay />

        <footer className="border-t border-[#d7cfc1] bg-[#f7f3ec]">
          <div className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <p className="text-sm font-semibold text-[#122238]">
                  달숨 글램핑
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#3a506a]">
                  주소: 경기 포천시 영중면 호국로 3226-37
                  <br />
                  연락처: 010-3240-1123
                  <br />
                  계좌정보: 은행명 확인 필요 / 3333026902261 정성호
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#122238]">문의</p>
                <p className="mt-2 text-sm leading-relaxed text-[#3a506a]">
                  예약 전 문의를 남겨주시면 확인 후 순차 안내드립니다.
                </p>
              </div>
            </div>

            <p className="mt-10 text-xs text-[#60718d]">
              &copy; {new Date().getFullYear()} 달숨 글램핑. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
