import Link from "next/link";
import { SITE_LINKS } from "@/lib/site-links";

function NaverIcon() {
  return (
    <span
      className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-[5px] bg-[#03C75A] text-[10px] font-bold leading-none text-white"
      aria-hidden
    >
      N
    </span>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5 shrink-0" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5.5A2.5 2.5 0 015.5 3h.553a1 1 0 01.948.684l1 3a1 1 0 01-.29 1.06l-1.27 1.15a13.04 13.04 0 006.674 6.673l1.15-1.27a1 1 0 011.06-.29l3 1a1 1 0 01.684.948V18.5A2.5 2.5 0 0118.5 21C10.492 21 3 13.508 3 5.5z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 shrink-0" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

export default function MobileBookingBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t md:hidden"
      style={{
        background: "var(--header-bg)",
        borderColor: "var(--header-border)",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      <div className="flex h-14 items-stretch divide-x" style={{ borderColor: "var(--header-border)" }}>
        {/* 네이버 플레이스 */}
        <a
          href={SITE_LINKS.naver}
          target="_blank"
          rel="noreferrer noopener"
          className="flex flex-1 flex-col items-center justify-center gap-0.5 transition-opacity active:opacity-70"
        >
          <NaverIcon />
          <span className="text-[10px] font-semibold leading-none text-white/75">
            네이버
          </span>
        </a>

        {/* 전화 문의 — 가운데, 강조 */}
        <Link
          href={SITE_LINKS.contactTel}
          className="flex flex-[1.4] flex-col items-center justify-center gap-0.5 transition-opacity active:opacity-70"
          style={{ background: "rgba(255,255,255,0.07)" }}
        >
          <PhoneIcon />
          <span className="text-[10px] font-semibold leading-none text-white">
            전화 문의
          </span>
        </Link>

        {/* 인스타그램 */}
        <a
          href={SITE_LINKS.instagram}
          target="_blank"
          rel="noreferrer noopener"
          className="flex flex-1 flex-col items-center justify-center gap-0.5 transition-opacity active:opacity-70"
        >
          <InstagramIcon />
          <span className="text-[10px] font-semibold leading-none text-white/75">
            인스타그램
          </span>
        </a>
      </div>
    </div>
  );
}
