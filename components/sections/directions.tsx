import Link from "next/link";
import { SITE_LINKS } from "@/lib/site-links";

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className="h-5 w-5 shrink-0" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.686 2 6 4.686 6 8c0 4.5 6 12 6 12s6-7.5 6-12c0-3.314-2.686-6-6-6z" />
      <circle cx="12" cy="8" r="2.2" strokeLinecap="round" />
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

function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5 shrink-0 opacity-70" aria-hidden>
      <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h4a.75.75 0 010 1.5h-4zm6.5-1a.75.75 0 000 1.5h2.94l-6.22 6.22a.75.75 0 101.06 1.06L14.75 7.06v2.94a.75.75 0 001.5 0v-5a.75.75 0 00-.75-.75h-5z" clipRule="evenodd" />
    </svg>
  );
}

export default function DirectionsSection() {
  return (
    <section
      id="directions"
      className="relative scroll-mt-24 bg-[var(--page-strip)]"
      style={{ color: "var(--text-main)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(22,37,59,0.05)_0%,rgba(22,37,59,0.02)_30%,rgba(255,255,255,0)_100%)]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--home-eyebrow)]">
          Directions
        </p>

        <h2 className="mt-3 max-w-3xl text-2xl font-semibold leading-tight tracking-tight text-[var(--home-heading)] sm:text-3xl lg:text-[2.05rem]">
          오시는 길
        </h2>

        <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--home-body)] sm:text-base">
          경기 포천시에 위치한 달숨 글램핑. 내비게이션에 아래 주소를 입력해 주세요.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start lg:gap-8 sm:mt-10">

          {/* 지도 플레이스홀더 영역 */}
          {/* TODO: 실제 지도 임베드 교체 시 아래 div를 iframe으로 변경하세요.
              예시(티맵 웹뷰): <iframe
                src="https://apis.openapi.sk.com/tmap/app/routes?appKey={appKey}&goalname=달숨글램핑&goalx={lon}&goaly={lat}"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen
              />
          */}
          <div
            className="relative flex min-h-[260px] items-center justify-center overflow-hidden rounded-2xl border sm:min-h-[300px] lg:min-h-[340px]"
            style={{
              background: "var(--surface-soft)",
              borderColor: "var(--border-soft)",
            }}
          >
            <div className="flex flex-col items-center gap-3 px-6 text-center">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-full"
                style={{ background: "var(--surface)", color: "var(--text-muted)" }}
              >
                <MapPinIcon />
              </div>
              <p className="text-sm font-semibold text-[var(--home-heading)]">
                경기 포천시 영중면 호국로 3226-37
              </p>
              <p className="text-xs leading-relaxed text-[var(--text-muted)]">
                지도 보기는 아래 버튼을 이용해 주세요
              </p>
            </div>
          </div>

          {/* 주소 및 버튼 블록 */}
          <div className="flex flex-col gap-5">
            {/* 주소 카드 */}
            <div
              className="rounded-2xl border px-5 py-5"
              style={{
                background: "var(--surface)",
                borderColor: "var(--home-card-border)",
                boxShadow: "var(--detail-shadow-card)",
              }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                주소
              </p>
              <p className="mt-2 flex items-start gap-2 text-[15px] font-semibold leading-snug text-[var(--home-heading)]">
                <MapPinIcon />
                <span>경기 포천시 영중면 호국로 3226-37</span>
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                연락처
              </p>
              <p className="mt-1.5 text-sm font-semibold text-[var(--home-heading)]">
                {SITE_LINKS.contactPhoneDisplay}
              </p>
              <p className="mt-3 text-xs leading-relaxed text-[var(--text-sub)]">
                예약 및 방문 문의는 전화로 진행됩니다.
              </p>
            </div>

            {/* 지도·예약 버튼 그룹 */}
            <div className="flex flex-col gap-2.5">
              {/* TODO: 실제 TMAP 길찾기 연결 시 좌표(lat/lon)와 TMAP appKey 확인 후 교체 */}
              <a
                href={SITE_LINKS.tmap}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90"
                style={{
                  background: "#E8002D",
                  color: "#ffffff",
                }}
              >
                티맵으로 길찾기
                <ExternalLinkIcon />
              </a>

              <a
                href={SITE_LINKS.naver}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90"
                style={{
                  background: "#03C75A",
                  color: "#ffffff",
                }}
              >
                네이버 플레이스 보기
                <ExternalLinkIcon />
              </a>

              <Link
                href={SITE_LINKS.contactTel}
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl border text-sm font-semibold transition-colors"
                style={{
                  borderColor: "var(--home-outline-btn-border)",
                  background: "var(--home-outline-btn-bg)",
                  color: "var(--home-outline-btn-text)",
                }}
              >
                <PhoneIcon />
                전화 문의하기
              </Link>
            </div>

            {/* 교통 안내 */}
            <div
              className="rounded-xl border px-4 py-3"
              style={{
                background: "var(--surface-soft)",
                borderColor: "var(--border-soft)",
              }}
            >
              <p className="text-xs font-semibold text-[var(--text-muted)]">교통 안내</p>
              <ul className="mt-2 space-y-1.5 text-xs leading-relaxed text-[var(--text-sub)]">
                <li>· 서울 기준 차로 약 1시간~1시간 20분 소요</li>
                <li>· 대중교통 이용 시 방문 전 문의 권장</li>
                <li>· 주차 공간 충분히 마련되어 있습니다</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
