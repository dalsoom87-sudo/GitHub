"use client";

import { useCallback, useEffect, useState } from "react";
import { SITE_LINKS } from "@/lib/site-links";

// 이 key를 변경하면 모든 사용자에게 팝업이 다시 표시됩니다.
const DISMISS_KEY = "dalsum-weekday-event-v1";

const BENEFITS = ["숯불세트", "불멍세트", "달숨 통삼겹 플래터"] as const;

function CloseIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5" aria-hidden>
      <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
    </svg>
  );
}

export default function WeekdayPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const dismissed = window.localStorage.getItem(DISMISS_KEY);
      if (!dismissed) setVisible(true);
    } catch {
      // localStorage 불가 환경 → 팝업 미표시
    }
  }, []);

  const dismiss = useCallback(() => {
    try {
      window.localStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // ignore
    }
    setVisible(false);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [visible, dismiss]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-5"
      style={{ background: "rgba(0,0,0,0.48)" }}
      onClick={dismiss}
      role="dialog"
      aria-modal="true"
      aria-label="평일 방문 혜택 안내"
    >
      <div
        className="relative w-full max-w-[330px] rounded-2xl px-6 py-7"
        style={{
          background: "var(--section-dark)",
          border: "1px solid var(--section-dark-border)",
          color: "var(--section-dark-text)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 닫기 버튼 */}
        <button
          type="button"
          onClick={dismiss}
          aria-label="닫기"
          className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full transition-opacity hover:opacity-60"
          style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.46)" }}
        >
          <CloseIcon />
        </button>

        {/* 상단 태그 */}
        <p
          className="text-[9px] font-semibold uppercase tracking-[0.22em]"
          style={{ color: "rgba(255,255,255,0.32)" }}
        >
          Weekday Benefit
        </p>

        {/* 제목 */}
        <h2
          className="mt-2 text-[16px] font-semibold leading-snug tracking-tight text-white"
        >
          평일 방문 혜택 안내
        </h2>

        {/* 강조 문구 */}
        <p
          className="mt-1.5 text-[13px] leading-relaxed"
          style={{ color: "var(--section-dark-muted)" }}
        >
          평일에 오시면 더 편하게 준비해드립니다.
        </p>

        {/* 혜택 항목 */}
        <ul className="mt-5 space-y-2.5">
          {BENEFITS.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2.5 text-[13px]"
              style={{ color: "rgba(255,255,255,0.76)" }}
            >
              <span
                className="h-[5px] w-[5px] shrink-0 rounded-full"
                style={{ background: "rgba(255,255,255,0.30)" }}
              />
              {item}
            </li>
          ))}
        </ul>

        {/* 안내 문구 */}
        <p
          className="mt-5 text-[11px] leading-relaxed"
          style={{ color: "rgba(255,255,255,0.28)" }}
        >
          별도 공지 전까지 평일 이용객에게 제공되는 혜택입니다.
          이벤트 내용은 운영 상황에 따라 변경될 수 있으니 예약 전 확인해 주세요.
        </p>

        {/* 버튼 */}
        <div className="mt-6 flex flex-col gap-2">
          <a
            href={SITE_LINKS.booking}
            target="_blank"
            rel="noreferrer noopener"
            onClick={dismiss}
            className="inline-flex h-10 w-full items-center justify-center rounded-lg text-[13px] font-semibold transition-opacity hover:opacity-85"
            style={{
              background: "rgba(255,255,255,0.09)",
              border: "1px solid rgba(255,255,255,0.16)",
              color: "rgba(255,255,255,0.88)",
            }}
          >
            예약 문의하기
          </a>
          <button
            type="button"
            onClick={dismiss}
            className="inline-flex h-9 w-full items-center justify-center rounded-lg text-[12px] transition-opacity hover:opacity-60"
            style={{ color: "rgba(255,255,255,0.28)" }}
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
