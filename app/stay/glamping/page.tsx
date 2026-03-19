import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_LINKS } from "@/lib/site-links";

export const metadata: Metadata = {
  title: "글램핑 스테이 | 달숨 글램핑",
  description:
    "달숨 글램핑의 숙박형 글램핑 스테이 소개, 기본 요금 요약, 추천 대상과 숙박 포인트를 확인하세요.",
};

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
    <section className="bg-[#f5efe7] text-[#14243a]">
      <div className="mx-auto w-full max-w-6xl px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#3a5272]/80">
          Stay / Glamping
        </p>

        <h1 className="mt-3 text-[1.95rem] font-semibold text-[#11233a] sm:text-[2.15rem]">
          글램핑 스테이
        </h1>

        <p className="mt-3 max-w-3xl text-[15px] leading-7 text-[#354b67] sm:text-base">
          달숨의 대표 숙박형 이용 방식입니다. 숙박 일정 중심으로 공간을 쓰고 싶은 이용객에게
          맞춘 구성으로 운영됩니다.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-[#cabba8]/50 bg-[#ddd4c8]">
          <div className="relative h-[220px] sm:h-[300px]">
            <Image
              src="/images/1 (104).jpg"
              alt="달숨 글램핑 숙박 공간"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-[linear-gradient(to_top,rgba(9,16,27,0.62)_0%,rgba(9,16,27,0.18)_52%,rgba(9,16,27,0)_100%)]"
            />
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-[#c9b9a7]/42 bg-[#fffcf8]/90 px-5 py-5 sm:px-6">
          <h2 className="text-base font-semibold text-[#1a3456] sm:text-lg">
            요금 안내
          </h2>
          <div className="mt-3 space-y-2.5">
            {seasonRates.map((rate) => (
              <p
                key={rate.season}
                className="flex items-center justify-between gap-3 border-b border-[#d8c9b8]/50 pb-1.5 text-sm"
              >
                <span className="text-[#4a607b]">{rate.season}</span>
                <span className="font-semibold text-[#1a3456]">{rate.price}</span>
              </p>
            ))}
          </div>
        </div>

        <article className="mt-4 rounded-xl border border-[#c9b9a7]/42 bg-[#fffcf8]/90 px-5 py-4">
          <h2 className="text-sm font-semibold text-[#1a3456] sm:text-base">
            추천 대상
          </h2>
          <p className="mt-1.5 text-sm leading-relaxed text-[#4a607b]">
            커플, 가족, 조용한 숙박형 캠핑을 선호하는 이용객
          </p>
        </article>

        <div className="mt-6">
          <h2 className="text-base font-semibold text-[#1a3456] sm:text-lg">
            머무는 장점
          </h2>
          <ul className="mt-3 space-y-2.5">
            {benefits.map((point) => (
              <li
                key={point}
                className="border-l border-[#bba88f]/65 pl-3 text-sm leading-relaxed text-[#445a75]"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <article className="rounded-xl border border-[#c9b9a7]/42 bg-[#fffcf8]/90 px-5 py-4">
            <h2 className="text-sm font-semibold text-[#1a3456] sm:text-base">
              추가 인원 안내
            </h2>
            <p className="mt-1.5 text-sm text-[#4a607b]">성인 2만원 / 아동 1만원</p>
          </article>
          <article className="rounded-xl border border-[#c9b9a7]/42 bg-[#fffcf8]/90 px-5 py-4">
            <h2 className="text-sm font-semibold text-[#1a3456] sm:text-base">
              함께 선택 가능한 옵션
            </h2>
            <ul className="mt-1.5 space-y-1 text-sm text-[#4a607b]">
              {optionSummary.map((option) => (
                <li key={option.name}>
                  - {option.name} {option.price}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <Link
          href={SITE_LINKS.bookingAnchor}
          className="mt-7 inline-flex h-10 items-center justify-center rounded-full bg-[#13243b] px-5 text-sm font-semibold leading-none text-white transition-colors hover:bg-[#1a3050]"
        >
          예약하기
        </Link>
      </div>
    </section>
  );
}

