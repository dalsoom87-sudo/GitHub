import type { Metadata } from "next";
import Link from "next/link";
import { SITE_LINKS } from "@/lib/site-links";
import GalleryClient from "./gallery-client";

export const metadata: Metadata = {
  title: "갤러리 | 달숨 글램핑",
  description:
    "달숨 글램핑의 미온수풀, 야경, 바비큐, 글램핑 공간을 사진으로 먼저 만나보세요.",
};

export default function GalleryPage() {
  return (
    <div style={{ background: "var(--page-bg)", color: "var(--text-main)" }}>
      <div className="mx-auto w-full max-w-6xl px-6 pb-28 pt-10 sm:px-10 sm:pb-20 sm:pt-12 lg:px-16 lg:pb-24 lg:pt-14">

        {/* 상단 헤더 */}
        <div className="mb-10">
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.22em]"
            style={{ color: "var(--home-eyebrow)" }}
          >
            Gallery
          </p>
          <h1
            className="mt-3 text-[1.75rem] font-semibold leading-tight tracking-[-0.025em] sm:text-[1.95rem]"
            style={{ color: "var(--home-heading)" }}
          >
            달숨의 순간들
          </h1>
          <p
            className="mt-3 max-w-xl text-[15px] leading-relaxed"
            style={{ color: "var(--home-body)" }}
          >
            미온수풀, 야경, 바비큐, 글램핑, 아이들과 함께한 공간까지
            달숨의 분위기를 사진으로 먼저 만나보세요.
          </p>
        </div>

        {/* 인터랙티브 갤러리 (클라이언트 컴포넌트) */}
        <GalleryClient />

        {/* 하단 CTA */}
        <div
          className="mt-16 rounded-2xl border px-8 py-10 text-center sm:px-12"
          style={{
            background: "var(--surface-soft)",
            borderColor: "var(--border-soft)",
          }}
        >
          <p
            className="text-[15px] leading-relaxed sm:text-[16px]"
            style={{ color: "var(--home-body)" }}
          >
            사진으로 본 분위기가 마음에 드셨다면,{" "}
            <br className="sm:hidden" />
            달숨에서의 하루를 예약해보세요.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={SITE_LINKS.contactTel}
              className="inline-flex items-center rounded-md px-5 py-2.5 text-sm font-semibold transition-opacity hover:opacity-80"
              style={{
                background: "var(--home-heading)",
                color: "var(--page-bg)",
              }}
            >
              예약 문의
            </a>
            <Link
              href={SITE_LINKS.guide}
              className="inline-flex items-center rounded-md border px-5 py-2.5 text-sm font-semibold transition-opacity hover:opacity-80"
              style={{
                borderColor: "var(--border-soft)",
                background: "transparent",
                color: "var(--text-sub)",
              }}
            >
              이용안내 보기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
