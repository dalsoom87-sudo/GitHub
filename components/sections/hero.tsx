import Image from "next/image";
import Link from "next/link";
import { SITE_LINKS } from "@/lib/site-links";

const HERO_IMAGE = "/images/1 (121).jpg";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative scroll-mt-24 min-h-screen overflow-hidden bg-[#0d1a2c] text-white"
    >
      <Image
        src={HERO_IMAGE}
        alt="Dalsum glamping night view"
        fill
        priority
        className="object-cover object-[center_38%] md:object-[center_46%]"
        sizes="100vw"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(13,22,38,0.36)_0%,rgba(12,21,36,0.44)_42%,rgba(10,18,32,0.52)_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(9,17,30,0.61)_0%,rgba(10,18,31,0.52)_24%,rgba(11,19,33,0.3)_44%,rgba(11,19,33,0.09)_62%,rgba(11,19,33,0)_78%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,14,25,0.74)_0%,rgba(8,14,25,0.54)_28%,rgba(8,14,25,0.22)_54%,rgba(8,14,25,0)_76%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_52%_82%,rgba(8,14,25,0.5)_0%,rgba(8,14,25,0.32)_18%,rgba(8,14,25,0.12)_32%,rgba(8,14,25,0)_52%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(255,199,134,0.14)_0%,rgba(255,199,134,0.06)_16%,rgba(255,199,134,0)_42%)]"
      />

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl items-start px-6 pb-12 pt-[13vh] sm:px-10 sm:pt-[15vh] lg:items-center lg:px-16 lg:pt-0">
        <div className="w-full max-w-2xl space-y-6 md:space-y-8 lg:max-w-[44rem]">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/74">
            Dalsum Glamping
          </p>

          <h1 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:max-w-[23ch] lg:text-[3.1rem] lg:leading-[1.16] [text-wrap:balance]">
            달빛 아래에서 숨쉬며
            <br className="hidden lg:block" />
            쉬어가는 공간
          </h1>

          <p className="max-w-lg text-sm leading-relaxed text-white/82 sm:text-base lg:max-w-[34rem]">
            포천의 밤공기와 조용한 쉼이 머무는 글램핑 스테이
          </p>

          <div className="flex flex-wrap gap-3 pt-2.5">
            <Link
              href={SITE_LINKS.bookingAnchor}
              className="inline-flex h-11 items-center justify-center rounded-full bg-white/95 px-6 text-sm font-semibold text-[#10213a] shadow-[0_8px_22px_rgba(8,14,25,0.24)] transition-colors hover:bg-white"
            >
              예약하기
            </Link>
            <Link
              href={SITE_LINKS.stay.glamping}
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/35 bg-[#142742]/55 px-6 text-sm font-semibold text-white/95 backdrop-blur-sm transition-colors hover:bg-[#1a3253]/62"
            >
              객실 보기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
