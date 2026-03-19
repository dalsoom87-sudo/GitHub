import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_LINKS } from "@/lib/site-links";

export const metadata: Metadata = {
  title: "오토캠핑 이용 | 달숨 글램핑",
  description:
    "달숨 글램핑의 오토캠핑 기본 요금, 추천 대상과 이용 포인트를 확인하세요.",
};

const points = [
  "직접 장비를 준비해 자유롭게 즐기는 캠핑 방식",
  "차량 접근이 쉬운 실용적인 이용 동선",
  "여유 있는 일정으로 자연 속 체류 시간을 만들기 좋은 구성",
  "필요 장비를 직접 구성하는 이용객에게 적합한 자유도",
];

const cautionItems = [
  "차량 이동과 주차 시 안내된 구역을 준수해 주세요.",
  "화기 사용 시 안전 수칙과 주변 정리를 반드시 지켜주세요.",
  "야간에는 다른 이용객을 위해 정숙 이용을 권장합니다.",
];

export default function AutocampingPage() {
  return (
    <section className="bg-[#f5efe7] text-[#14243a]">
      <div className="mx-auto w-full max-w-6xl px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#3a5272]/80">
          Stay / Auto-camping
        </p>

        <h1 className="mt-3 text-[1.95rem] font-semibold text-[#11233a] sm:text-[2.15rem]">
          오토캠핑 이용
        </h1>

        <p className="mt-3 max-w-3xl text-[15px] leading-7 text-[#354b67] sm:text-base">
          캠핑 장비를 직접 준비해 자유롭게 이용하는 형태입니다. 간단한 숙박보다
          자율적인 캠핑 동선과 분위기를 선호할 때 선택하기 좋습니다.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-[#cabba8]/50 bg-[#ddd4c8]">
          <div className="relative h-[220px] sm:h-[300px]">
            <Image
              src="/images/1 (57).jpg"
              alt="달숨 오토캠핑 구역"
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
              기본 요금
            </h2>
            <p className="mt-1.5 text-sm text-[#4a607b]">오토캠핑 4만원</p>
          </article>

          <article className="rounded-xl border border-[#c9b9a7]/42 bg-[#fffcf8]/90 px-5 py-4">
            <h2 className="text-sm font-semibold text-[#1a3456] sm:text-base">
              추천 대상
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-[#4a607b]">
              장비를 갖추고 자유로운 캠핑을 선호하는 이용객
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
            이용 시 주의사항
          </h2>
          <ul className="mt-1.5 space-y-1 text-sm leading-relaxed text-[#4a607b]">
            {cautionItems.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </article>

        <p className="mt-6 text-sm leading-relaxed text-[#4a607b]">
          예약 전 문의를 통해 구역 상황과 이용 가능 일정을 확인해 주세요.
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

