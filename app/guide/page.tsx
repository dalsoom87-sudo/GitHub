import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_LINKS } from "@/lib/site-links";

export const metadata: Metadata = {
  title: "이용안내 | 달숨 글램핑",
  description:
    "달숨 글램핑 이용 시간, 추가 인원, 예약 전 확인, 이용 유의사항을 확인하세요.",
};

const summaryItems = [
  { title: "체크인 / 체크아웃", content: "체크인 15:00 / 체크아웃 11:00" },
  { title: "추가 인원", content: "성인 2만원 / 아동 1만원" },
  {
    title: "예약 전 확인사항",
    content: "날짜, 인원, 옵션 선택 내역을 예약 전 다시 확인해 주세요.",
  },
  { title: "매너타임", content: "밤 10시 이후에는 조용한 이용을 권장합니다." },
];

const optionPackages = [
  {
    title: "고기세트",
    price: "3만원",
    items: [
      "삼겹살 200g",
      "목살 200g",
      "모듬쌈",
      "버섯",
      "쌈장",
      "명이나물",
      "2인 기준",
    ],
  },
  { title: "BBQ", price: "3만원", items: ["그릴", "숯", "4인 기준"] },
  {
    title: "불멍세트",
    price: "2.5만원",
    items: ["장작", "오로라 가루", "화로대"],
  },
];

const cautionItems = [
  "안전 수칙을 지키고 시설 이용 안내에 따라 이용해 주세요.",
  "화기 사용 시 주변 정리를 포함한 기본 안전 수칙을 반드시 지켜주세요.",
  "밤 10시 이후에는 다른 이용객을 위해 정숙한 이용을 권장합니다.",
  "시설 및 비품 훼손이 없도록 주의해 주세요.",
  "다른 이용객을 배려하는 매너 있는 이용을 부탁드립니다.",
];

/** 이용안내용 보조 요약(홈 매점 섹션보다 짧게) */
const storeBriefRows = [
  { label: "음료", hint: "냉장·상온 음료 등" },
  { label: "간식", hint: "과자 등 간단한 간식류" },
  { label: "아이스크림", hint: "계절·입고에 따라 상이" },
  { label: "간단 식품·필요 물품", hint: "일부 품목은 현장 확인" },
] as const;

export default function GuidePage() {
  return (
    <section
      className="bg-[var(--page-bg)]"
      style={{ color: "var(--text-main)" }}
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <p className="ui-label text-[11px] text-[var(--home-eyebrow)]">Guide</p>

        <h1 className="mt-4 text-[1.75rem] font-semibold text-[var(--home-heading)] sm:text-[1.95rem]">
          이용안내
        </h1>

        <p className="text-muted mt-4 max-w-3xl text-[15px] leading-[1.72] sm:text-base sm:leading-[1.7]">
          예약 판단에 필요한 기본 정보와 옵션 구성을 한 번에 확인할 수 있도록 정리했습니다.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-[color:var(--home-card-border)] bg-[var(--surface-soft)]">
          <div className="relative h-[220px] sm:h-[280px]">
            <Image
              src="/images/1 (109).jpg"
              alt="달숨 이용안내 대표 이미지"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,18,30,0.72)_0%,rgba(10,18,30,0.25)_50%,rgba(10,18,30,0)_100%)]"
            />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4">
          {summaryItems.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-[color:var(--home-card-border)] bg-[var(--surface)] px-4 py-4 sm:px-5"
            >
              <h2 className="text-sm font-semibold text-[var(--home-heading)] sm:text-base">
                {item.title}
              </h2>
              <p className="text-muted mt-1.5 text-sm leading-relaxed">
                {item.content}
              </p>
            </article>
          ))}
        </div>

        <section className="mt-12">
          <h2 className="text-lg font-semibold text-[var(--home-heading)] sm:text-xl">
            옵션 안내
          </h2>
          <p className="text-muted mt-2 text-sm leading-relaxed">
            예약 시 함께 선택할 수 있는 옵션 구성입니다.
          </p>
          <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
            {optionPackages.map((pkg) => (
              <article
                key={pkg.title}
                className="rounded-xl border border-[color:var(--home-card-border)] bg-[var(--surface)] px-5 py-4"
              >
                <p className="text-sm font-semibold text-[var(--home-heading)]">
                  {pkg.title}
                </p>
                <p className="mt-1 text-sm font-medium text-[var(--text-sub)]">
                  {pkg.price}
                </p>
                <ul className="text-muted mt-3 space-y-1.5 text-sm">
                  {pkg.items.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-[color:var(--home-card-border)] bg-[var(--surface)] px-5 py-5 sm:px-6">
          <h2 className="text-lg font-semibold text-[var(--home-heading)] sm:text-xl">
            이용 수칙 및 예약 전 안내
          </h2>
          <ul className="text-muted mt-3 space-y-2 text-sm leading-relaxed">
            {cautionItems.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </section>

        <section
          id="guide-store"
          className="mt-10 rounded-xl border border-[color:var(--border-soft)] bg-[var(--page-strip)] px-4 py-4 sm:px-5 sm:py-5"
        >
          <h2 className="text-base font-semibold text-[var(--home-heading)] sm:text-lg">
            현장 매점 안내
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[var(--text-sub)]">
            음료, 과자, 아이스크림, 간단한 식품과 일부 필요한 물품을 현장에서 확인할 수
            있습니다.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-[var(--text-sub)]">
            판매 품목은 운영일과 재고 상황에 따라 달라질 수 있습니다.
          </p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {storeBriefRows.map((row) => (
              <li
                key={row.label}
                className="flex flex-col rounded-lg border border-[color:var(--border-soft)] bg-[var(--surface)] px-3 py-2.5"
              >
                <span className="text-xs font-semibold text-[var(--home-heading)]">
                  {row.label}
                </span>
                <span className="mt-0.5 text-[11px] leading-snug text-[var(--text-muted)] sm:text-xs">
                  {row.hint}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs leading-relaxed text-[var(--text-muted)] sm:text-sm">
            필요한 물품은 페이지 하단 문의 안내의 연락처로 예약 전에 확인해 주세요.
          </p>
        </section>

        <section className="mt-12 rounded-2xl border border-[color:var(--home-card-border)] bg-[var(--surface)] px-5 py-5 sm:px-6">
          <h2 className="text-lg font-semibold text-[var(--home-heading)] sm:text-xl">
            예약 전 확인할 내용
          </h2>
          <ul className="text-muted mt-3 space-y-2 text-sm leading-relaxed">
            <li>- 날짜</li>
            <li>- 인원</li>
            <li>- 옵션</li>
            <li>- 최종 금액</li>
          </ul>
        </section>

        <section className="mt-12 rounded-2xl border border-[color:var(--home-card-border)] bg-[var(--surface)] px-5 py-5 sm:px-6">
          <h2 className="text-lg font-semibold text-[var(--home-heading)] sm:text-xl">
            문의 안내
          </h2>
          <p className="text-muted mt-3 text-sm leading-relaxed">
            주소: 경기 포천시 영중면 호국로 3226-37
            <br />
            연락처: {SITE_LINKS.contactPhoneDisplay}
          </p>
          <p className="text-muted mt-2 text-sm leading-relaxed">
            예약 및 이용 문의는 전화로 진행됩니다. 일정과 이용 조건은 문의 시 확인해
            주세요. 필요 물품이나 옵션 적용 여부도 문의 전에 함께 알려 주시면 안내에
            도움이 됩니다.
          </p>
        </section>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href={SITE_LINKS.homeHero}
            className="inline-flex h-10 items-center justify-center rounded-full border px-5 text-sm font-semibold leading-none transition-colors"
            style={{
              borderColor: "var(--home-outline-btn-border)",
              background: "var(--home-outline-btn-bg)",
              color: "var(--home-outline-btn-text)",
            }}
          >
            홈으로 돌아가기
          </Link>
          <Link
            href={SITE_LINKS.contactTel}
            className="inline-flex h-10 items-center justify-center rounded-full px-5 text-sm font-semibold leading-none transition-opacity hover:opacity-90"
            style={{
              background: "var(--button-primary-bg)",
              color: "var(--button-primary-text)",
            }}
          >
            예약 문의하기
          </Link>
        </div>
      </div>
    </section>
  );
}
