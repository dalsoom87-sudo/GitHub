import Link from "next/link";
import { SITE_LINKS } from "@/lib/site-links";

export default function WeekdayBannerSection() {
  return (
    <div
      className="border-b"
      style={{
        background: "var(--surface)",
        borderColor: "var(--border-soft)",
      }}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-1.5 px-6 py-3 sm:flex-nowrap sm:px-10 lg:px-16">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span
            className="inline-flex shrink-0 items-center rounded-full px-2.5 py-0.5 text-[10px] font-semibold tracking-[0.08em] text-white"
            style={{ background: "#92400e" }}
          >
            평일 방문 혜택
          </span>
          <p
            className="text-[13px] font-semibold"
            style={{ color: "var(--home-heading)" }}
          >
            달숨 통삼겹 플래터 증정
          </p>
          <p
            className="text-xs leading-snug"
            style={{ color: "var(--text-sub)" }}
          >
            준비는 달숨이, 휴식은 고객님이 · 별도 공지 전까지 진행
          </p>
        </div>
        <Link
          href={SITE_LINKS.contactTel}
          className="shrink-0 text-[12px] font-semibold underline-offset-4 hover:underline"
          style={{ color: "var(--text-muted)" }}
        >
          예약 문의 →
        </Link>
      </div>
    </div>
  );
}
