import Link from "next/link";
import { SITE_LINKS } from "@/lib/site-links";

function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5 shrink-0 opacity-50" aria-hidden>
      <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h4a.75.75 0 010 1.5h-4zm6.5-1a.75.75 0 000 1.5h2.94l-6.22 6.22a.75.75 0 101.06 1.06L14.75 7.06v2.94a.75.75 0 001.5 0v-5a.75.75 0 00-.75-.75h-5z" clipRule="evenodd" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className="h-4 w-4 shrink-0" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5.5A2.5 2.5 0 015.5 3h.553a1 1 0 01.948.684l1 3a1 1 0 01-.29 1.06l-1.27 1.15a13.04 13.04 0 006.674 6.673l1.15-1.27a1 1 0 011.06-.29l3 1a1 1 0 01.684.948V18.5A2.5 2.5 0 0118.5 21C10.492 21 3 13.508 3 5.5z" />
    </svg>
  );
}

const navBtnClass =
  "inline-flex h-11 w-full items-center justify-center gap-2 rounded-md text-[13px] font-normal transition-opacity hover:opacity-80";

const navBtnStyle = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid var(--section-dark-border)",
  color: "rgba(255,255,255,0.70)",
};

export default function LocationFinalSection() {
  return (
    <>
      {/* 오시는 길 */}
      <section
        id="location"
        className="relative scroll-mt-24"
        style={{ background: "var(--section-dark)", color: "var(--section-dark-text)" }}
      >
        <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14 lg:items-start">
            {/* Left: address + info */}
            <div>
              <h2 className="text-2xl font-semibold leading-tight tracking-[-0.025em] text-white sm:text-3xl lg:text-[2.1rem]">
                오시는 길
              </h2>
              <p
                className="mt-3 text-[15px] leading-relaxed"
                style={{ color: "var(--section-dark-muted)" }}
              >
                경기 포천시에 위치한 달숨 글램핑. 서울에서 차로 약 1시간 거리입니다.
              </p>

              <div
                className="mt-8 rounded-xl border p-5 sm:p-6"
                style={{
                  background: "var(--section-dark-surface)",
                  borderColor: "var(--section-dark-border)",
                }}
              >
                <p
                  className="text-[10px] font-semibold uppercase tracking-[0.18em]"
                  style={{ color: "rgba(255,255,255,0.38)" }}
                >
                  주소
                </p>
                <p className="mt-2 text-[15px] font-semibold leading-snug text-white">
                  경기 포천시 영중면 호국로 3226-37
                </p>

                <p
                  className="mt-4 text-[10px] font-semibold uppercase tracking-[0.18em]"
                  style={{ color: "rgba(255,255,255,0.38)" }}
                >
                  연락처
                </p>
                <p className="mt-1.5 text-[15px] font-semibold text-white">
                  {SITE_LINKS.contactPhoneDisplay}
                </p>
                <p
                  className="mt-1 text-[12px]"
                  style={{ color: "var(--section-dark-muted)" }}
                >
                  예약 및 방문 문의는 전화로 진행됩니다.
                </p>
              </div>

              <div
                className="mt-4 rounded-xl border px-4 py-3"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderColor: "var(--section-dark-border)",
                }}
              >
                <p
                  className="text-[11px] font-semibold"
                  style={{ color: "rgba(255,255,255,0.38)" }}
                >
                  교통 안내
                </p>
                <ul
                  className="mt-2 space-y-1 text-[12px] leading-relaxed"
                  style={{ color: "var(--section-dark-muted)" }}
                >
                  <li>· 서울 기준 차로 약 1시간 ~ 1시간 20분 소요</li>
                  <li>· 대중교통 이용 시 방문 전 문의 권장</li>
                  <li>· 주차 공간 충분 · 별도 주차비 없음</li>
                </ul>
              </div>
            </div>

            {/* Right: navigation buttons — 달숨 톤 통일 */}
            <div className="flex flex-col gap-3 lg:mt-14">
              <p
                className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em]"
                style={{ color: "rgba(255,255,255,0.38)" }}
              >
                길찾기 & 예약
              </p>

              <a
                href={SITE_LINKS.tmap}
                target="_blank"
                rel="noreferrer noopener"
                className={navBtnClass}
                style={navBtnStyle}
              >
                티맵으로 길찾기
                <ExternalLinkIcon />
              </a>

              <a
                href={SITE_LINKS.naver}
                target="_blank"
                rel="noreferrer noopener"
                className={navBtnClass}
                style={navBtnStyle}
              >
                네이버 플레이스
                <ExternalLinkIcon />
              </a>

              <Link
                href={SITE_LINKS.contactTel}
                className={navBtnClass}
                style={navBtnStyle}
              >
                <PhoneIcon />
                전화 문의하기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 마지막 CTA — 딥네이비 연속 */}
      <section
        className="relative"
        style={{
          background: "var(--section-dark)",
          borderTop: "1px solid var(--section-dark-border)",
        }}
      >
        <div className="mx-auto w-full max-w-6xl px-6 py-14 sm:px-10 sm:py-16 lg:px-16">
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold leading-tight tracking-[-0.025em] text-white sm:text-3xl">
              달숨에서의 하루를 예약하세요
            </h2>
            <p
              className="mt-3 text-[15px] leading-relaxed"
              style={{ color: "var(--section-dark-muted)" }}
            >
              전화 문의 또는 네이버 플레이스에서 날짜를 확인하고 예약할 수 있습니다.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={SITE_LINKS.booking}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex h-10 items-center justify-center rounded-md px-6 text-[13px] font-normal transition-colors hover:border-white/36 hover:text-white/90"
                style={{
                  border: "1px solid rgba(255,255,255,0.28)",
                  color: "rgba(255,255,255,0.82)",
                }}
              >
                네이버 예약하기
              </a>
              <Link
                href={SITE_LINKS.contactTel}
                className="inline-flex h-10 items-center justify-center rounded-md px-6 text-[13px] font-normal transition-colors"
                style={{
                  border: "1px solid rgba(255,255,255,0.10)",
                  color: "rgba(255,255,255,0.46)",
                }}
              >
                전화 문의하기
              </Link>
            </div>

            <p
              className="mt-6 text-[12px]"
              style={{ color: "rgba(255,255,255,0.30)" }}
            >
              일정과 인원을 정리해 두고 연락하시면 안내에 도움이 됩니다.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
