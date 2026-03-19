import Image from "next/image";
import Link from "next/link";
import { SITE_LINKS } from "@/lib/site-links";

const STAY_PREVIEW_IMAGE = "/images/1 (111).jpg";

const stayPoints = [
  "머무는 시간에 맞춘 공간 구성",
  "객실과 글램핑 존 선택 가능",
  "편안하게 쉬어가는 1박 공간",
];

export default function StayPreviewSection() {
  return (
    <section
      id="stay"
      className="relative scroll-mt-24 bg-[#f5efe7] text-[#14243a]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(21,35,56,0.07)_0%,rgba(21,35,56,0.02)_32%,rgba(255,255,255,0)_100%)]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 gap-7 px-6 py-14 sm:px-10 sm:py-16 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-center lg:gap-10 lg:px-16 lg:py-20">
        <Link
          href={SITE_LINKS.stay.glamping}
          className="group relative block min-h-[19rem] overflow-hidden rounded-2xl border border-[#cabba8]/50 bg-[#ddd4c8]"
        >
          <Image
            src={STAY_PREVIEW_IMAGE}
            alt="달숨 숙박 공간 프리뷰"
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(min-width: 1024px) 52vw, 100vw"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_top,rgba(9,16,27,0.52)_0%,rgba(9,16,27,0.22)_45%,rgba(9,16,27,0.08)_100%)]"
          />
        </Link>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#3a5272]/80">
            Stay Preview
          </p>

          <h2 className="mt-3 max-w-md text-2xl font-semibold leading-tight tracking-tight text-[#11233a] sm:text-3xl">
            쉬어가기 좋은 달숨의 숙박 공간
          </h2>

          <p className="mt-3 max-w-md text-sm leading-relaxed text-[#354b67] sm:text-base">
            객실과 글램핑 존을 먼저 확인하고, 일정에 맞는 숙박 공간을 선택해보세요.
          </p>

          <div className="mt-5 space-y-2.5">
            {stayPoints.map((point) => (
              <p
                key={point}
                className="border-l border-[#bba88f]/65 pl-3 text-sm text-[#445a75]"
              >
                {point}
              </p>
            ))}
          </div>

          <Link
            href={SITE_LINKS.stay.glamping}
            className="mt-7 inline-flex items-center rounded-full border border-[#c1b09d]/65 bg-[#f8f2ea] px-5 py-2.5 text-sm font-semibold text-[#5b4638] transition-colors hover:bg-[#f2e8db]"
          >
            객실 자세히 보기
          </Link>
        </div>
      </div>
    </section>
  );
}
