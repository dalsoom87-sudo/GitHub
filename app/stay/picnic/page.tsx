import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_LINKS } from "@/lib/site-links";

export const metadata: Metadata = {
  title: "피크닉 이용 | 달숨 글램핑",
  description:
    "달숨 글램핑의 당일 피크닉 이용 안내, 요금, 추천 대상과 이용 포인트를 확인하세요.",
};

const points = [
  "당일 일정으로 가볍게 쉬어가기 좋은 구성",
  "가족/친구와 함께 즐기기 좋은 야외 동선",
  "숙박 없이 공간 분위기를 체험하고 싶은 이용객에게 적합",
  "예약 전 날짜와 인원 확인 후 비교적 빠르게 이용 가능",
];

const optionSummary = [
  { name: "고기세트", price: "3만원" },
  { name: "BBQ", price: "3만원" },
  { name: "불멍세트", price: "2.5만원" },
];

export default function PicnicPage() {
  return (
    <section className="bg-[#f5efe7] text-[#14243a]">
      <div className="mx-auto w-full max-w-6xl px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#3a5272]/80">
          Stay / Picnic
        </p>

        <h1 className="mt-3 text-[1.95rem] font-semibold text-[#11233a] sm:text-[2.15rem]">
          피크닉 이용
        </h1>

        <p className="mt-3 max-w-3xl text-[15px] leading-7 text-[#354b67] sm:text-base">
          숙박 없이 당일 일정으로 달숨 공간을 이용하는 방식입니다. 가벼운 야외 일정이나
          가족/지인 단위 모임에 맞춰 선택할 수 있습니다.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-[#cabba8]/50 bg-[#ddd4c8]">
          <div className="relative h-[220px] sm:h-[300px]">
            <Image
              src="/images/1 (35).jpg"
              alt="달숨 피크닉 이용 공간"
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

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <article className="rounded-xl border border-[#c9b9a7]/42 bg-[#fffcf8]/90 px-5 py-4">
            <h2 className="text-sm font-semibold text-[#1a3456] sm:text-base">
              당일 이용 요금
            </h2>
            <p className="mt-1.5 text-sm text-[#4a607b]">피크닉 7만원</p>
          </article>

          <article className="rounded-xl border border-[#c9b9a7]/42 bg-[#fffcf8]/90 px-5 py-4">
            <h2 className="text-sm font-semibold text-[#1a3456] sm:text-base">
              추천 대상
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-[#4a607b]">
              가볍게 야외 감성을 즐기고 싶은 커플, 친구, 가족
            </p>
          </article>
        </div>

        <div className="mt-6">
          <h2 className="text-base font-semibold text-[#1a3456] sm:text-lg">
            이용 포인트
          </h2>
          <ul className="mt-3 space-y-2.5">
            {points.map((point) => (
              <li
                key={point}
                className="border-l border-[#bba88f]/65 pl-3 text-sm leading-relaxed text-[#445a75]"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>

        <article className="mt-8 rounded-xl border border-[#c9b9a7]/42 bg-[#fffcf8]/90 px-5 py-4">
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
          <p className="mt-2 text-xs text-[#5c7190]">
            옵션 상세 구성은 이용안내 페이지에서 확인 가능합니다.
          </p>
        </article>

        <p className="mt-6 text-sm leading-relaxed text-[#4a607b]">
          예약 전 문의를 통해 일정과 옵션 적용 가능 여부를 먼저 확인해 주세요.
        </p>

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

