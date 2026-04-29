"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { SITE_LINKS } from "@/lib/site-links";

// 이 key를 변경하면 모든 사용자에게 팝업이 다시 표시됩니다 (버전 업 시 교체).
const DISMISS_KEY = "dalsum-weekday-event-popup-v1-dismissed-until";

// 팝업 이미지 — 실제 이벤트 이미지가 생기면 이 경로 한 줄만 교체하세요.
const EVENT_POPUP_IMAGE = "/images/1 (35).jpg";

const BENEFITS = [
  "불멍세트 제공",
  "숯불세트 제공",
  "달숨 통삼겹 플래터 제공",
] as const;

function CloseIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5" aria-hidden>
      <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
    </svg>
  );
}

export default function EventPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(DISMISS_KEY);
      if (raw) {
        const until = Number(raw);
        if (Number.isFinite(until) && until > Date.now()) return;
      }
      // setTimeout으로 마운트 직후 즉시 렌더를 피해 layout shift 방지
      window.setTimeout(() => setVisible(true), 60);
    } catch {
      // localStorage 접근 불가 환경 → 팝업 미표시
    }
  }, []);

  const close = useCallback(() => setVisible(false), []);

  const dismissToday = useCallback(() => {
    try {
      const until = new Date();
      until.setDate(until.getDate() + 1);
      until.setHours(0, 0, 0, 0);
      window.localStorage.setItem(DISMISS_KEY, String(until.getTime()));
    } catch {
      // ignore
    }
    setVisible(false);
  }, []);

  // ESC 닫기 + body 스크롤 잠금
  useEffect(() => {
    if (!visible) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [visible, close]);

  if (!visible) return null;

  return (
    /* 배경 클릭으로 닫기 */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      style={{ background: "rgba(0,0,0,0.54)" }}
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label="평일 방문 혜택 안내"
    >
      {/*
        모바일 : max-w-[340px] 세로형 카드 (이미지 상단 + 텍스트 하단)
        데스크톱: max-w-[780px] 가로형 모달 (이미지 좌측 + 텍스트 우측)
      */}
      <div
        className="relative w-full overflow-hidden rounded-2xl
                   max-w-[340px]
                   sm:flex sm:flex-row sm:max-w-[780px] sm:h-[460px]"
        style={{
          background: "var(--section-dark)",
          border: "1px solid var(--section-dark-border)",
          color: "var(--section-dark-text)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── 이미지 패널 ── */}
        <div className="relative h-52 w-full shrink-0 sm:h-full sm:w-[44%]">
          <Image
            src={EVENT_POPUP_IMAGE}
            alt="달숨 통삼겹 플래터"
            fill
            className="object-cover"
            sizes="(min-width: 640px) 44vw, 100vw"
            priority
          />
          {/* 모바일 하단 그라디언트 — 이미지→배경 자연스럽게 연결 */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-14 sm:hidden"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, var(--section-dark) 100%)",
            }}
          />
          {/* 닫기 버튼 — 모바일 (이미지 우상단) */}
          <button
            type="button"
            onClick={close}
            aria-label="닫기"
            className="sm:hidden absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full transition-opacity hover:opacity-70"
            style={{
              background: "rgba(0,0,0,0.40)",
              color: "rgba(255,255,255,0.88)",
            }}
          >
            <CloseIcon />
          </button>
        </div>

        {/* ── 텍스트 패널 ── */}
        <div className="flex flex-col px-5 pb-6 pt-3 sm:justify-center sm:px-9 sm:py-10 sm:overflow-y-auto">
          {/* 닫기 버튼 — 데스크톱 */}
          <div className="hidden sm:flex justify-end mb-3">
            <button
              type="button"
              onClick={close}
              aria-label="닫기"
              className="flex h-7 w-7 items-center justify-center rounded-full transition-opacity hover:opacity-60"
              style={{
                background: "rgba(255,255,255,0.07)",
                color: "rgba(255,255,255,0.44)",
              }}
            >
              <CloseIcon />
            </button>
          </div>

          {/* 태그 */}
          <p
            className="text-[9.5px] font-semibold uppercase tracking-[0.22em]"
            style={{ color: "rgba(255,255,255,0.28)" }}
          >
            Weekday Benefit
          </p>

          {/* 제목 */}
          <h2
            className="mt-2 text-[16px] font-semibold leading-snug tracking-tight text-white sm:text-[18px]"
          >
            평일 방문 혜택 안내
          </h2>

          {/* 서브카피 */}
          <p
            className="mt-1.5 text-[13px] leading-relaxed sm:text-[14px]"
            style={{ color: "var(--section-dark-muted)" }}
          >
            달숨글램핑 평일 이용 고객님께 준비된 특별한 혜택을 만나보세요.
          </p>

          {/* 혜택 항목 */}
          <ul className="mt-4 space-y-2">
            {BENEFITS.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 text-[13px] sm:text-[14px]"
                style={{ color: "rgba(255,255,255,0.74)" }}
              >
                <span
                  className="h-[5px] w-[5px] shrink-0 rounded-full"
                  style={{ background: "rgba(255,255,255,0.26)" }}
                />
                {item}
              </li>
            ))}
          </ul>

          {/* 안내 문구 */}
          <p
            className="mt-4 text-[11px] leading-relaxed"
            style={{ color: "rgba(255,255,255,0.24)" }}
          >
            별도 공지 전까지 평일 이용객 대상으로 제공되는 혜택입니다.
            운영 상황에 따라 제공 내용은 변경될 수 있으니 예약 전 확인해 주세요.
          </p>

          {/* 버튼 */}
          <div className="mt-5 flex flex-col gap-1.5">
            <a
              href={SITE_LINKS.booking}
              target="_blank"
              rel="noreferrer noopener"
              onClick={close}
              className="inline-flex h-10 w-full items-center justify-center rounded-lg text-[13px] font-semibold transition-opacity hover:opacity-85"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.18)",
                color: "rgba(255,255,255,0.90)",
              }}
            >
              예약 문의하기
            </a>
            <button
              type="button"
              onClick={dismissToday}
              className="inline-flex h-9 w-full items-center justify-center rounded-lg text-[11px] transition-opacity hover:opacity-70"
              style={{
                border: "1px solid rgba(255,255,255,0.07)",
                color: "rgba(255,255,255,0.30)",
              }}
            >
              오늘 하루 보지 않기
            </button>
            <button
              type="button"
              onClick={close}
              className="inline-flex h-8 w-full items-center justify-center text-[11px] transition-opacity hover:opacity-60"
              style={{ color: "rgba(255,255,255,0.20)" }}
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
