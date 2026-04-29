"use client";

import Link from "next/link";
import { useState } from "react";
import { SITE_LINKS } from "@/lib/site-links";

type StayType = "glamping" | "picnic" | "autocamping";

const STAYS = [
  {
    type: "glamping" as StayType,
    title: "글램핑",
    subtitle: "숙박형 · 1박",
    price: "170,000원",
    priceNote: "평일 기준 · 주말 260,000원",
    tagline: "프라이빗 동선과 감성 조명이 있는 1박 숙박",
    href: SITE_LINKS.stay.glamping,
    features: [
      "1~7호 총 7개 동 운영",
      "5·6·7호 애견동반 가능 (추가 30,000원)",
      "최소 2인 · 최대 6인",
      "각 숙소 앞 전용 BBQ·불멍 구역",
      "입실 전 미온수풀·야외 시설 선이용 가능",
    ],
    recommended: "커플 · 가족 · 반려견 동반",
    note: "7호는 10,000원 할인 · 네이버 알림 설정 시 10% 추가 할인",
  },
  {
    type: "picnic" as StayType,
    title: "피크닉",
    subtitle: "당일 이용",
    price: "70,000원",
    priceNote: "2자리 운영",
    tagline: "수영장과 야외 공간을 하루 동안 자유롭게",
    href: SITE_LINKS.stay.picnic,
    features: [
      "당일 야외 피크닉 이용",
      "수영장·야외 부대시설 동일 이용",
      "최소 2인 · 최대 40인 단체 가능",
      "개인 장비 지참 가능",
      "BBQ·불멍 옵션 추가 가능",
    ],
    recommended: "가족 나들이 · 단체 · 당일 여행",
    note: "단체 이용은 미리 문의해 주시면 안내에 도움이 됩니다",
  },
  {
    type: "autocamping" as StayType,
    title: "오토캠핑",
    subtitle: "장비 지참형",
    price: "40,000원",
    priceNote: "2사이트 운영",
    tagline: "내 차, 내 장비로 즐기는 자유로운 캠핑",
    href: SITE_LINKS.stay.autocamping,
    features: [
      "차량 옆 사이트 직접 설치",
      "개인 화로·숯·장작 반입 가능",
      "그릴 필요 시 대여비 별도",
      "수영장·야외 부대시설 동일 이용",
      "BBQ·불멍 옵션 추가 가능",
    ],
    recommended: "캠핑 장비 보유 · 자유로운 캠핑 선호",
    note: "개인 화로는 오토캠핑 구역 한정으로 사용 가능합니다",
  },
] as const;

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

export default function StaySelectorSection() {
  const [open, setOpen] = useState<StayType | null>(null);

  const toggle = (type: StayType) =>
    setOpen((prev) => (prev === type ? null : type));

  return (
    <section
      id="stay"
      className="relative scroll-mt-24 bg-[var(--page-bg)]"
      style={{ color: "var(--text-main)" }}
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        {/* Header */}
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold leading-tight tracking-[-0.025em] text-[var(--home-heading)] sm:text-3xl lg:text-[2.1rem]">
            이용 방식을 선택하세요
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[var(--home-body)]">
            글램핑 숙박부터 당일 피크닉, 자유로운 오토캠핑까지.
          </p>
        </div>

        {/* Accordion rows */}
        <div
          className="mt-10 border-t"
          style={{ borderColor: "var(--border-soft)" }}
        >
          {STAYS.map((stay) => {
            const isOpen = open === stay.type;
            return (
              <div
                key={stay.type}
                className="border-b"
                style={{ borderColor: "var(--border-soft)" }}
              >
                {/* Row — toggle button */}
                <button
                  type="button"
                  onClick={() => toggle(stay.type)}
                  aria-expanded={isOpen}
                  className="w-full py-5 text-left"
                >
                  <div className="flex items-center justify-between gap-4 sm:grid sm:grid-cols-[180px_1fr_auto] sm:items-center sm:gap-6 lg:grid-cols-[210px_1fr_auto]">
                    {/* Type name */}
                    <div className="flex-shrink-0">
                      <p
                        className="text-[9.5px] font-normal uppercase tracking-[0.14em]"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {stay.subtitle}
                      </p>
                      <p
                        className="mt-0.5 text-[18px] font-semibold tracking-tight"
                        style={{ color: "var(--home-heading)" }}
                      >
                        {stay.title}
                      </p>
                    </div>

                    {/* Tagline — desktop center */}
                    <p
                      className="hidden text-[13px] leading-relaxed sm:block"
                      style={{ color: "var(--text-sub)" }}
                    >
                      {stay.tagline}
                    </p>

                    {/* Price + chevron */}
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p
                          className="text-[15px] font-semibold leading-none"
                          style={{ color: "var(--home-heading)" }}
                        >
                          {stay.price}
                        </p>
                        <p
                          className="mt-1 text-[10.5px]"
                          style={{ color: "var(--text-muted)" }}
                        >
                          {stay.priceNote}
                        </p>
                      </div>
                      <ChevronIcon open={isOpen} />
                    </div>
                  </div>

                  {/* Mobile tagline */}
                  <p
                    className="mt-1.5 text-[13px] leading-relaxed sm:hidden"
                    style={{ color: "var(--text-sub)" }}
                  >
                    {stay.tagline}
                  </p>
                </button>

                {/* Expanded detail */}
                <div
                  className="overflow-hidden transition-all duration-[380ms] ease-in-out"
                  style={{
                    maxHeight: isOpen ? "520px" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="pb-7 sm:grid sm:grid-cols-[180px_1fr] sm:gap-6 lg:grid-cols-[210px_1fr]">
                    <div className="hidden sm:block" />
                    <div>
                      <ul className="space-y-2">
                        {stay.features.map((feat) => (
                          <li
                            key={feat}
                            className="flex items-start gap-2 text-[13px] leading-snug"
                            style={{ color: "var(--text-sub)" }}
                          >
                            <span
                              className="mt-[5px] h-1 w-1 shrink-0 rounded-full"
                              style={{ background: "var(--text-muted)" }}
                            />
                            {feat}
                          </li>
                        ))}
                      </ul>

                      <p
                        className="mt-4 border-t pt-3 text-[11px] leading-relaxed"
                        style={{
                          borderColor: "var(--border-soft)",
                          color: "var(--text-muted)",
                        }}
                      >
                        {stay.note}
                      </p>

                      <p
                        className="mt-1.5 text-[11px]"
                        style={{ color: "var(--text-muted)" }}
                      >
                        추천 대상 · {stay.recommended}
                      </p>

                      <Link
                        href={stay.href}
                        className="mt-4 inline-flex h-8 items-center rounded-md border px-4 text-[12px] font-medium transition-colors"
                        style={{
                          borderColor: "var(--home-outline-btn-border)",
                          background: "var(--home-outline-btn-bg)",
                          color: "var(--home-outline-btn-text)",
                        }}
                      >
                        {stay.title} 상세 안내 →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
