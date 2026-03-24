import type { Metadata } from "next";
import Link from "next/link";
import AutocampingDetailHero from "@/components/stay/autocamping-detail-hero";
import { SITE_LINKS } from "@/lib/site-links";

export const metadata: Metadata = {
  title: "오토캠핑 이용 | 달숨 글램핑",
  description:
    "달숨 글램핑의 오토캠핑 기본 요금, 추천 대상과 이용 포인트를 확인하세요.",
};

const intro =
  "캠핑 장비를 직접 준비해 자유롭게 이용하는 형태입니다. 간단한 숙박보다 자율적인 캠핑 동선과 분위기를 선호할 때 선택하기 좋습니다.";

const points = [
  "직접 장비를 준비해 자유롭게 즐기는 캠핑 방식",
  "차량 접근이 쉬운 실용적인 이용 동선",
  "여유 있는 일정으로 자연 속 체류 시간을 만들기 좋은 구성",
  "필요 장비를 직접 구성하는 이용객에게 적합한 자유도",
];

const cautionItems = [
  "차량 이동과 주차 시 안내된 구역을 준수해 주세요.",
  "화기 사용 시 안전 수칙과 주변 정리를 반드시 지켜주세요.",
  "매너타임(밤 10시 이후)에는 다른 이용객을 위해 정숙 이용을 권장합니다.",
];

export default function AutocampingPage() {
  return (
    <section
      className="bg-[var(--page-bg)]"
      style={{ color: "var(--text-main)" }}
    >
      <div className="mx-auto w-full max-w-6xl px-6 pb-14 pt-10 sm:px-10 sm:pb-16 lg:px-16 lg:pb-20 lg:pt-11">
        <p className="ui-label text-[11px] text-[var(--home-eyebrow)]">
          Stay / Auto-camping
        </p>
        <h1 className="mt-3 text-[1.75rem] font-semibold text-[var(--home-heading)] sm:text-[1.95rem]">
          오토캠핑 이용
        </h1>

        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-10">
          <AutocampingDetailHero />

          <aside className="flex flex-col gap-6 lg:col-span-5">
            <p className="text-[15px] leading-[1.72] text-[var(--home-body)] sm:text-base sm:leading-[1.7]">
              {intro}
            </p>

            <div
              className="rounded-2xl border border-[color:var(--home-card-border)] bg-[var(--surface)] px-5 py-5 sm:px-6 sm:py-6"
              style={{ boxShadow: "var(--detail-shadow-card)" }}
            >
              <p className="text-xs font-semibold text-[var(--text-muted)]">
                예약 요약
              </p>

              <div className="mt-4 space-y-3">
                <div>
                  <p className="text-xs font-medium text-[var(--text-sub)]">
                    기본 요금
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[var(--text-main)]">
                    오토캠핑 4만원
                  </p>
                </div>

                <div className="border-t border-[color:var(--border-soft)] pt-4">
                  <p className="text-xs font-medium text-[var(--text-sub)]">
                    추천 대상
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-main)]">
                    장비를 갖추고 자유로운 캠핑을 선호하는 이용객
                  </p>
                </div>

                <div className="border-t border-[color:var(--border-soft)] pt-4">
                  <p className="text-xs font-medium text-[var(--text-sub)]">
                    핵심 특징
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-main)]">
                    장비 직접 준비 · 자유 캠핑 동선 · 숙박 일정 중심 이용
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <section className="mt-14 border-t border-[color:var(--border-soft)] pt-12">
          <h2 className="text-lg font-semibold text-[var(--home-heading)] sm:text-xl">
            이용 포인트
          </h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-3">
            {points.map((point) => (
              <li
                key={point}
                className="flex gap-2.5 text-sm leading-relaxed text-[var(--home-body)]"
              >
                <span
                  className="mt-2 h-1 w-1 shrink-0 rounded-full"
                  style={{ background: "var(--detail-bullet)" }}
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12 border-t border-[color:var(--border-soft)] pt-10">
          <h2 className="text-base font-semibold text-[var(--home-heading)] sm:text-lg">
            이용 시 주의사항
          </h2>
          <ul className="mt-5 space-y-3">
            {cautionItems.map((item) => (
              <li
                key={item}
                className="flex gap-2.5 text-sm leading-relaxed text-[var(--home-body)]"
              >
                <span
                  className="mt-2 h-1 w-1 shrink-0 rounded-full"
                  style={{ background: "var(--detail-bullet)" }}
                />
                <span className="text-[var(--text-main)]">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12 flex flex-col gap-6 border-t border-[color:var(--border-soft)] pt-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <h2 className="text-base font-semibold text-[var(--home-heading)] sm:text-lg">
              예약 전 확인
            </h2>
            <p className="text-muted mt-2 text-sm leading-relaxed">
              예약 전 문의를 통해 구역 상황과 이용 가능 일정을 확인해 주세요.
            </p>
          </div>
          <Link
            href={SITE_LINKS.contactTel}
            className="inline-flex h-11 shrink-0 items-center justify-center self-start rounded-full px-7 text-sm font-semibold shadow-[0_1px_0_rgba(255,255,255,0.12)] transition-opacity hover:opacity-90 sm:self-end"
            style={{
              background: "var(--button-primary-bg)",
              color: "var(--button-primary-text)",
            }}
          >
            예약 문의하기
          </Link>
        </section>

        <p className="text-muted mt-8 text-sm">
          <Link
            href={SITE_LINKS.guide}
            className="font-semibold text-[var(--text-sub)] underline-offset-4 hover:underline"
          >
            이용안내
          </Link>
          에서 체크인·옵션·유의사항을 함께 확인할 수 있습니다.
        </p>
      </div>
    </section>
  );
}
