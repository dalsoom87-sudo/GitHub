import type { Metadata } from "next";
import Link from "next/link";
import PicnicDetailHero from "@/components/stay/picnic-detail-hero";
import { SITE_LINKS } from "@/lib/site-links";

export const metadata: Metadata = {
  title: "피크닉 이용 | 달숨 글램핑",
  description:
    "달숨 글램핑의 당일 피크닉 이용 안내, 요금, 추천 대상과 이용 포인트를 확인하세요.",
};

const intro =
  "숙박 없이 당일 일정으로 공간을 쓰는 이용입니다. 일정과 인원만 정하면 비교적 빠르게 예약을 진행할 수 있어 가벼운 야외 일정이나 소규모 모임에 맞습니다.";

const points = [
  "당일 일정만 정하면 되어 결정 부담이 작습니다",
  "숙박 없이 야외에서 쉬는 형태로 동선이 단순합니다",
  "가족·친구 단위로 함께 쓰기 좋은 구역 동선입니다",
  "날짜·인원 확인 후 문의로 예약을 이어가는 흐름이 짧습니다",
];

const optionSummary = [
  { name: "고기세트", price: "3만원" },
  { name: "BBQ", price: "3만원" },
  { name: "불멍세트", price: "2.5만원" },
];

const usageFlow = [
  "원하는 날짜와 인원을 먼저 확인합니다.",
  "당일 이용 목적에 맞게 옵션(고기세트/BBQ/불멍세트)을 선택합니다.",
  "최종 금액 확인 후 문의를 통해 예약을 진행합니다.",
];

export default function PicnicPage() {
  return (
    <section
      className="bg-[var(--page-bg)]"
      style={{ color: "var(--text-main)" }}
    >
      <div className="mx-auto w-full max-w-6xl px-6 pb-14 pt-10 sm:px-10 sm:pb-16 lg:px-16 lg:pb-20 lg:pt-11">
        <p className="ui-label text-[11px] text-[var(--home-eyebrow)]">
          Stay / Picnic
        </p>
        <h1 className="mt-3 text-[1.75rem] font-semibold text-[var(--home-heading)] sm:text-[1.95rem]">
          피크닉 이용
        </h1>

        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-10">
          <PicnicDetailHero />

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
                    당일 이용 요금
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[var(--text-main)]">
                    피크닉 7만원
                  </p>
                </div>

                <div className="border-t border-[color:var(--border-soft)] pt-4">
                  <p className="text-xs font-medium text-[var(--text-sub)]">
                    추천 대상
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-main)]">
                    가볍게 야외에서 시간을 보내고 싶은 커플, 친구, 가족
                  </p>
                </div>

                <div className="border-t border-[color:var(--border-soft)] pt-4">
                  <p className="text-xs font-medium text-[var(--text-sub)]">
                    이용 형태
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-main)]">
                    당일 일정 · 숙박 없음 · 일정·인원 중심으로 빠르게 결정
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

        <section className="mt-12 flex flex-col gap-6 border-t border-[color:var(--border-soft)] pt-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <h2 className="text-base font-semibold text-[var(--home-heading)] sm:text-lg">
              함께 선택 가능한 옵션
            </h2>
            <p className="text-muted mt-2 text-sm leading-relaxed">
              당일 목적에 맞게 고기세트·BBQ·불멍세트 등을 함께 고를 수 있습니다. 상세
              구성은 이용안내에서 확인해 주세요.
            </p>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-sm text-[var(--home-body)]">
              {optionSummary.map((option) => (
                <li key={option.name}>
                  <span className="font-medium text-[var(--text-main)]">
                    {option.name}
                  </span>
                  <span className="text-muted"> · {option.price}</span>
                </li>
              ))}
            </ul>
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

        <section className="mt-12 border-t border-[color:var(--border-soft)] pt-10">
          <h2 className="text-base font-semibold text-[var(--home-heading)] sm:text-lg">
            이용 흐름
          </h2>
          <ol className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--home-body)]">
            {usageFlow.map((item, i) => (
              <li key={item} className="flex gap-3">
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[color:var(--border-soft)] bg-[var(--surface-soft)] text-xs font-semibold text-[var(--text-sub)]"
                  aria-hidden
                >
                  {i + 1}
                </span>
                <span className="text-[var(--text-main)]">{item}</span>
              </li>
            ))}
          </ol>
        </section>

        <section
          className="mt-12 rounded-2xl border border-[color:var(--home-card-border)] bg-[var(--surface)] px-5 py-5 sm:px-6"
          style={{ boxShadow: "var(--detail-shadow-card)" }}
        >
          <p className="text-sm font-medium leading-relaxed text-[var(--text-main)]">
            예약 전 문의로 일정과 옵션 적용 가능 여부를 먼저 확인해 주세요. 당일 이용은
            가능 여부에 따라 안내될 수 있습니다.
          </p>
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
