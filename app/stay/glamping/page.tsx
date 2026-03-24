import type { Metadata } from "next";
import Link from "next/link";
import GlampingDetailHero from "@/components/stay/glamping-detail-hero";
import { SITE_LINKS } from "@/lib/site-links";

export const metadata: Metadata = {
  title: "글램핑 스테이 | 달숨 글램핑",
  description:
    "달숨 글램핑의 숙박형 글램핑 스테이 소개, 기본 요금 요약, 추천 대상과 숙박 포인트를 확인하세요.",
};

const intro =
  "달숨의 대표 숙박형 이용입니다. 숙박 일정을 중심으로 공간을 쓰고 싶은 분께 맞춰 운영되며, 예약 후 이용 흐름이 단순해 가족 단위로도 부담이 적습니다.";

const benefits = [
  "감성 조명과 함께 머무는 1박 스테이",
  "프라이빗 동선 중심의 숙박 구역",
  "포천의 밤공기를 느끼는 조용한 휴식",
  "예약 후 이용 흐름이 단순해 가족 단위 이용에도 부담이 적음",
];

const seasonRates = [
  { season: "비성수기", price: "평일 17만원 / 주말 26만원" },
  { season: "준성수기", price: "평일 19만원 / 주말 28만원" },
  { season: "성수기", price: "32만원" },
];

const optionSummary = [
  { name: "고기세트", price: "3만원" },
  { name: "BBQ", price: "3만원" },
  { name: "불멍세트", price: "2.5만원" },
];

export default function GlampingPage() {
  return (
    <section
      className="bg-[var(--page-bg)]"
      style={{ color: "var(--text-main)" }}
    >
      <div className="mx-auto w-full max-w-6xl px-6 pb-14 pt-10 sm:px-10 sm:pb-16 lg:px-16 lg:pb-20 lg:pt-11">
        <p className="ui-label text-[11px] text-[var(--home-eyebrow)]">
          Stay / Glamping
        </p>
        <h1 className="mt-3 text-[1.75rem] font-semibold text-[var(--home-heading)] sm:text-[1.95rem]">
          글램핑 스테이
        </h1>

        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-10">
          <GlampingDetailHero />

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
                    요금
                  </p>
                  <dl className="mt-2 space-y-2.5">
                    {seasonRates.map((rate) => (
                      <div
                        key={rate.season}
                        className="flex items-baseline justify-between gap-3 border-b border-[color:var(--border-soft)] pb-2 text-sm last:border-0 last:pb-0"
                      >
                        <dt className="text-[var(--text-sub)]">{rate.season}</dt>
                        <dd className="text-right font-semibold text-[var(--text-main)]">
                          {rate.price}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="border-t border-[color:var(--border-soft)] pt-4">
                  <p className="text-xs font-medium text-[var(--text-sub)]">
                    추천 대상
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-main)]">
                    커플, 가족, 조용한 숙박형 캠핑을 선호하는 이용객
                  </p>
                </div>

                <div className="border-t border-[color:var(--border-soft)] pt-4">
                  <p className="text-xs font-medium text-[var(--text-sub)]">
                    추가 인원
                  </p>
                  <p className="mt-1.5 text-sm font-semibold text-[var(--text-main)]">
                    성인 2만원 / 아동 1만원
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <section className="mt-14 border-t border-[color:var(--border-soft)] pt-12">
          <h2 className="text-lg font-semibold text-[var(--home-heading)] sm:text-xl">
            머무는 장점
          </h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-3">
            {benefits.map((point) => (
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
              예약 시 고기세트·BBQ·불멍세트 등을 함께 선택할 수 있습니다. 상세 구성은
              이용안내에서 확인해 주세요.
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
