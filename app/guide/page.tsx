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
  "이용 전 문의 후 예약을 진행하시면 일정과 옵션 확인이 더 정확합니다.",
];

export default function GuidePage() {
  return (
    <section className="bg-[#f6efe6] text-[#16253b]">
      <div className="mx-auto w-full max-w-6xl px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#3b5476]/80">
          Guide
        </p>

        <h1 className="mt-3 text-[1.95rem] font-semibold text-[#13243b] sm:text-[2.15rem]">
          이용안내
        </h1>

        <p className="mt-3 max-w-3xl text-[15px] leading-7 text-[#3b5370] sm:text-base">
          예약 판단에 필요한 기본 정보와 옵션 구성을 한 번에 확인할 수 있도록 정리했습니다.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-[#c9b9a7]/42 bg-[#ddd5cb]">
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
              className="rounded-xl border border-[#c9b9a7]/42 bg-[#fffcf8]/90 px-4 py-4 sm:px-5"
            >
              <h2 className="text-sm font-semibold text-[#1a3456] sm:text-base">
                {item.title}
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-[#4a607b]">
                {item.content}
              </p>
            </article>
          ))}
        </div>

        <section className="mt-10">
          <h2 className="text-lg font-semibold text-[#1a3456] sm:text-xl">
            옵션 안내
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[#4a607b]">
            예약 시 함께 선택할 수 있는 옵션 구성입니다.
          </p>
          <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
            {optionPackages.map((pkg) => (
              <article
                key={pkg.title}
                className="rounded-xl border border-[#c9b9a7]/42 bg-[#fffdfa] px-5 py-4"
              >
                <p className="text-sm font-semibold text-[#1a3456]">
                  {pkg.title}
                </p>
                <p className="mt-1 text-sm font-medium text-[#355275]">
                  {pkg.price}
                </p>
                <ul className="mt-3 space-y-1.5 text-sm text-[#4a607b]">
                  {pkg.items.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-[#c9b9a7]/42 bg-[#fffcf8]/90 px-5 py-5 sm:px-6">
          <h2 className="text-lg font-semibold text-[#1a3456] sm:text-xl">
            이용 수칙 및 예약 전 안내
          </h2>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[#4a607b]">
            {cautionItems.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </section>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href={SITE_LINKS.homeHero}
            className="inline-flex h-10 items-center justify-center rounded-full border border-[#c1b09e]/65 bg-[#f8f2ea] px-5 text-sm font-semibold leading-none text-[#5b4739] transition-colors hover:bg-[#f1e7da]"
          >
            홈으로 돌아가기
          </Link>
          <Link
            href={SITE_LINKS.bookingAnchor}
            className="inline-flex h-10 items-center justify-center rounded-full bg-[#13243b] px-5 text-sm font-semibold leading-none text-white transition-colors hover:bg-[#1a3050]"
          >
            예약하기
          </Link>
        </div>
      </div>
    </section>
  );
}

