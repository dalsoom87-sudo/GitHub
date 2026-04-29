import Image from "next/image";
import Link from "next/link";

const EXPERIENCES = [
  {
    title: "미온수풀과 워터슬라이드",
    desc: "약 30도로 조절되는 미온수풀에서 낮부터 밤까지. 입실 전 11시부터 이용할 수 있어 하루가 더 길어집니다.",
    image: "/images/1 (109).jpg",
    label: "물놀이",
    detail: "운영시간 11:00–21:00 · 봄·가을 시즌",
  },
  {
    title: "야경과 불멍의 밤",
    desc: "화로 앞 달빛 아래, 장작 타는 소리와 함께 천천히 숨을 고릅니다. 각 숙소 앞 전용 BBQ·불멍 구역.",
    image: "/images/1 (57).jpg",
    label: "야경·불멍",
    detail: "매너타임 23:00 · 프라이빗 동선",
  },
  {
    title: "아이들이 기다리는 공간",
    desc: "모래놀이장, RC 포크레인, RC카 체험장, 노래방까지. 아이들이 지치지 않고 놀 수 있는 달숨만의 키즈 공간.",
    image: "/images/1 (45).jpg",
    label: "키즈 체험",
    detail: "포크레인 체험 · RC카 · 노래방 · 빔프로젝터",
  },
] as const;

export default function SignatureExperienceSection() {
  return (
    <section
      id="experience"
      className="relative scroll-mt-24 bg-[var(--page-strip)]"
      style={{ color: "var(--text-main)" }}
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <div className="mb-10 max-w-xl">
          <h2 className="font-serif text-2xl font-normal leading-tight tracking-[-0.015em] text-[var(--home-heading)] sm:text-[2rem] lg:text-[2.4rem]">
            달숨에서만 경험할 수 있는 것들
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[var(--home-body)]">
            단순한 숙박이 아닌, 그 하루를 특별하게 만드는 달숨의 세 가지 공간입니다.
          </p>
        </div>

        {/* 비대칭 사진 그리드 — 왼쪽 대형 + 오른쪽 2개 스택 */}
        <div className="flex flex-col gap-1.5 lg:h-[480px] lg:flex-row">
          {/* 대형 사진 — 왼쪽 */}
          <div className="relative h-[300px] overflow-hidden rounded-xl sm:h-[380px] lg:h-full lg:w-[60%]">
            <Image
              src={EXPERIENCES[0].image}
              alt={EXPERIENCES[0].title}
              fill
              className="object-cover transition-transform duration-700 hover:scale-[1.03]"
              sizes="(min-width: 1024px) 60vw, 100vw"
            />
          </div>

          {/* 작은 사진 2개 — 모바일 나란히, 데스크톱 수직 스택 */}
          <div className="grid grid-cols-2 gap-1.5 lg:flex lg:w-[40%] lg:flex-col">
            <div className="relative h-[190px] overflow-hidden rounded-xl sm:h-[240px] lg:h-auto lg:flex-1">
              <Image
                src={EXPERIENCES[1].image}
                alt={EXPERIENCES[1].title}
                fill
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                sizes="(min-width: 1024px) 40vw, 50vw"
              />
            </div>
            <div className="relative h-[190px] overflow-hidden rounded-xl sm:h-[240px] lg:h-auto lg:flex-1">
              <Image
                src={EXPERIENCES[2].image}
                alt={EXPERIENCES[2].title}
                fill
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                sizes="(min-width: 1024px) 40vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* 텍스트 — 그리드 아래 3열 */}
        <div
          className="mt-8 grid grid-cols-1 gap-6 border-t pt-8 sm:grid-cols-3"
          style={{ borderColor: "var(--border-soft)" }}
        >
          {EXPERIENCES.map((exp) => (
            <div key={exp.title}>
              <p
                className="text-[9.5px] font-normal uppercase tracking-[0.16em]"
                style={{ color: "var(--text-muted)" }}
              >
                {exp.label}
              </p>
              <h3
                className="mt-1.5 text-[15px] font-semibold leading-snug"
                style={{ color: "var(--home-heading)" }}
              >
                {exp.title}
              </h3>
              <p
                className="mt-1.5 text-[13px] leading-relaxed"
                style={{ color: "var(--text-sub)" }}
              >
                {exp.desc}
              </p>
              <p
                className="mt-2 text-[11px]"
                style={{ color: "var(--text-muted)" }}
              >
                {exp.detail}
              </p>
            </div>
          ))}
        </div>

        {/* 갤러리 진입 링크 */}
        <div className="mt-6 flex justify-end">
          <Link
            href="/gallery"
            className="text-[12px] transition-opacity hover:opacity-60"
            style={{ color: "var(--text-muted)" }}
          >
            달숨 사진 더 보기 →
          </Link>
        </div>
      </div>
    </section>
  );
}
