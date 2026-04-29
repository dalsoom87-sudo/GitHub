"use client";

import Link from "next/link";
import { useState } from "react";
import { SITE_LINKS } from "@/lib/site-links";

type AccordionKey = "extra" | "options" | "refund";

const PRICE_ROWS = [
  {
    type: "글램핑",
    price: "170,000원",
    sub: "평일 기준",
    note: "주말·공휴일 260,000원",
  },
  {
    type: "피크닉",
    price: "70,000원",
    sub: "당일 이용",
    note: "2자리 운영",
  },
  {
    type: "오토캠핑",
    price: "40,000원",
    sub: "사이트 이용",
    note: "2사이트 운영",
  },
] as const;

const ACCORDIONS: { key: AccordionKey; title: string; content: React.ReactNode }[] = [
  {
    key: "extra",
    title: "추가 인원 요금",
    content: (
      <div className="space-y-2.5 pt-4">
        {[
          ["추가 인원 (성인)", "20,000원"],
          ["추가 인원 (아동)", "10,000원"],
          ["반려동물 동반", "30,000원 (5·6·7호 한정)"],
        ].map(([label, value]) => (
          <div key={label} className="flex justify-between text-[13px]">
            <span style={{ color: "var(--text-sub)" }}>{label}</span>
            <span className="font-semibold" style={{ color: "var(--text-main)" }}>{value}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    key: "options",
    title: "식사 · 옵션 구성",
    content: (
      <div className="space-y-2.5 pt-4">
        {[
          ["달숨 통삼겹 플래터", "45,000원 (2인)"],
          ["캠핑 고기 세트", "1인 15,000원 / 사전예약"],
          ["BBQ 세트 (숯·그릴·석쇠)", "30,000원"],
          ["불멍 세트 (장작·화로대 등)", "25,000원"],
          ["장작 추가", "15,000원"],
        ].map(([label, value]) => (
          <div key={label} className="flex justify-between text-[13px]">
            <span style={{ color: "var(--text-sub)" }}>{label}</span>
            <span className="font-semibold" style={{ color: "var(--text-main)" }}>{value}</span>
          </div>
        ))}
        <p className="pt-1 text-[11px]" style={{ color: "var(--text-muted)" }}>
          고기 세트(1인 15,000원)는 최소 2인부터 사전예약이 필요합니다.
        </p>
      </div>
    ),
  },
  {
    key: "refund",
    title: "취소 · 환불 규정",
    content: (
      <div className="space-y-2.5 pt-4">
        {[
          ["이용일 10일 전", "100% 환불"],
          ["이용일 7일 전", "90% 환불"],
          ["이용일 5일 전", "70% 환불"],
          ["이용일 3일 전", "50% 환불"],
          ["이용일 1일 전·당일", "환불 불가"],
        ].map(([when, refund]) => (
          <div key={when} className="flex justify-between text-[13px]">
            <span style={{ color: "var(--text-sub)" }}>{when} 취소</span>
            <span className="font-semibold" style={{ color: "var(--text-main)" }}>{refund}</span>
          </div>
        ))}
      </div>
    ),
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      className="h-4 w-4 shrink-0 transition-transform duration-300"
      style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 8l5 5 5-5" />
    </svg>
  );
}

export default function PriceGuideSection() {
  const [openKey, setOpenKey] = useState<AccordionKey | null>(null);

  const toggle = (key: AccordionKey) =>
    setOpenKey((prev) => (prev === key ? null : key));

  return (
    <section
      id="price"
      className="relative scroll-mt-24 bg-[var(--page-bg)]"
      style={{ color: "var(--text-main)" }}
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        {/* Header */}
        <div className="mb-10 max-w-xl">
          <h2 className="text-2xl font-semibold leading-tight tracking-[-0.025em] text-[var(--home-heading)] sm:text-3xl lg:text-[2.1rem]">
            요금 안내
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[var(--home-body)]">
            비수기·성수기 구분 없이 동일 요금이 적용됩니다.
          </p>
        </div>

        {/* Line pricing */}
        <div
          className="border-t"
          style={{ borderColor: "var(--border-soft)" }}
        >
          {PRICE_ROWS.map((row) => (
            <div
              key={row.type}
              className="flex items-start justify-between border-b py-5 sm:items-center"
              style={{ borderColor: "var(--border-soft)" }}
            >
              <div className="flex items-baseline gap-3">
                <span
                  className="w-20 text-[15px] font-semibold"
                  style={{ color: "var(--home-heading)" }}
                >
                  {row.type}
                </span>
                <span
                  className="text-[12px]"
                  style={{ color: "var(--text-muted)" }}
                >
                  {row.sub}
                </span>
              </div>
              <div className="text-right">
                <p
                  className="text-[1.25rem] font-semibold leading-none tracking-tight"
                  style={{ color: "var(--home-heading)" }}
                >
                  {row.price}
                </p>
                <p
                  className="mt-1 text-[11px]"
                  style={{ color: "var(--text-muted)" }}
                >
                  {row.note}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Naver discount badge */}
        <div
          className="mt-5 flex items-center gap-2.5 rounded-xl border px-4 py-3"
          style={{ background: "var(--surface-soft)", borderColor: "var(--border-soft)" }}
        >
          <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-[4px] text-[9px] font-bold" style={{ background: "var(--border-soft)", color: "var(--text-sub)" }}>
            N
          </span>
          <p className="text-[13px] text-[var(--text-sub)]">
            네이버 플레이스 알림 설정 시{" "}
            <span className="font-semibold" style={{ color: "var(--text-main)" }}>
              10% 할인
            </span>{" "}
            ·{" "}
            <a
              href={SITE_LINKS.naver}
              target="_blank"
              rel="noreferrer noopener"
              className="underline underline-offset-4 transition-opacity hover:opacity-70"
            >
              네이버 플레이스 바로가기
            </a>
          </p>
        </div>

        {/* Accordion: extra / options / refund */}
        <div
          className="mt-8 border-t"
          style={{ borderColor: "var(--border-soft)" }}
        >
          {ACCORDIONS.map((acc) => {
            const isOpen = openKey === acc.key;
            return (
              <div
                key={acc.key}
                className="border-b"
                style={{ borderColor: "var(--border-soft)" }}
              >
                <button
                  type="button"
                  onClick={() => toggle(acc.key)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between px-0 py-4 text-left"
                >
                  <span className="text-[14px] font-semibold" style={{ color: "var(--home-heading)" }}>
                    {acc.title}
                  </span>
                  <ChevronIcon open={isOpen} />
                </button>

                <div
                  className="overflow-hidden transition-all duration-[350ms] ease-in-out"
                  style={{
                    maxHeight: isOpen ? "600px" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="px-0 pb-5">{acc.content}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Link
            href={SITE_LINKS.guide}
            className="inline-flex items-center rounded-md border px-5 py-2.5 text-sm font-semibold transition-colors"
            style={{
              borderColor: "var(--home-outline-btn-border)",
              background: "var(--home-outline-btn-bg)",
              color: "var(--home-outline-btn-text)",
            }}
          >
            이용안내 전체 보기
          </Link>
          <p className="text-[12px]" style={{ color: "var(--text-muted)" }}>
            예약 및 이용 문의는 전화로 진행됩니다.
          </p>
        </div>
      </div>
    </section>
  );
}
