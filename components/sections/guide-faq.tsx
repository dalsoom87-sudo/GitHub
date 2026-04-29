"use client";

import { useState } from "react";

type FaqItem = { q: string; a: string };

const FAQ_ITEMS: FaqItem[] = [
  {
    q: "체크인·체크아웃 시간은 언제인가요?",
    a: "체크인은 15:00, 체크아웃은 12:00입니다. 수영장과 야외 부대시설은 11:00부터 선이용 가능하니 체크인 전에도 즐기실 수 있습니다.",
  },
  {
    q: "수영장은 언제 이용할 수 있나요?",
    a: "미온수풀(약 30도)은 봄·가을 시즌에 운영하며, 이용 시간은 11:00~21:00입니다. 별도 안전요원은 배치되지 않으니 어린이 보호자 동반을 꼭 부탁드립니다.",
  },
  {
    q: "반려동물을 데려와도 되나요?",
    a: "반려동물 동반은 5호·6호·7호에 한해 가능합니다. 추가 비용 30,000원이 발생하며, 목줄 착용과 배변 처리 등 기본 펫티켓을 지켜 주셔야 합니다. 방문 전 반드시 사전 문의를 부탁드립니다.",
  },
  {
    q: "개인 화로·숯·장작을 가져와도 되나요?",
    a: "개인 화로는 오토캠핑 구역에서만 사용 가능합니다. 글램핑·피크닉 이용 시에는 달숨의 BBQ·불멍 시설을 이용해 주세요. 개인 숯·장작 반입은 가능하며, 그릴이 필요한 경우 대여비가 별도로 발생합니다.",
  },
  {
    q: "비가 오면 이용 가능한가요?",
    a: "가벼운 비 정도라면 글램핑 동 내부 및 실내 시설(노래방 등)은 정상 이용 가능합니다. 다만 미온수풀·야외 체험 시설은 기상 상황에 따라 운영이 제한될 수 있습니다. 방문 전날 문의해 주시면 안내해 드리겠습니다.",
  },
  {
    q: "벌레가 많지는 않나요?",
    a: "달숨은 계곡과 농가 인근에 위치한 자연 속 시설입니다. 계절과 날씨에 따라 벌레가 있을 수밖에 없는 환경임을 솔직하게 안내드립니다. 개인 방충제를 챙겨오시면 보다 쾌적하게 이용하실 수 있으며, 달숨에서도 구역 관리를 꾸준히 하고 있습니다.",
  },
  {
    q: "아이들이 놀 수 있는 공간이 있나요?",
    a: "미온수풀·워터슬라이드, 모래놀이장, RC 포크레인 체험, RC카 체험장, 노래방, 빔프로젝터 시청까지 하루가 모자랄 정도입니다. 수영장 이용 시 영유아·어린이는 반드시 보호자가 동반해 주세요.",
  },
  {
    q: "평일 플래터 혜택은 어떻게 받나요?",
    a: "달숨 통삼겹 플래터는 통삼겹 600g, 모닝빵, 코울슬로 구성의 2인 기준 45,000원 메뉴입니다. 별도 공지 전까지 평일(월~금) 이용객에게는 혜택으로 제공됩니다. 이벤트 내용은 운영 상황에 따라 변경될 수 있으니 예약 전 확인해 주세요.",
  },
  {
    q: "예약 취소·환불 규정이 어떻게 되나요?",
    a: "이용일 기준으로 10일 전 100% 환불, 7일 전 90%, 5일 전 70%, 3일 전 50%, 이용 1일 전·당일은 환불이 불가합니다. 정확한 내용은 예약 시 안내드립니다.",
  },
  {
    q: "주차는 어떻게 되나요?",
    a: "주차 공간이 충분히 마련되어 있습니다. 별도 주차비는 없습니다.",
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      className="h-4 w-4 shrink-0 transition-transform duration-300"
      style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 8l5 5 5-5" />
    </svg>
  );
}

export default function GuideFaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) =>
    setOpenIdx((prev) => (prev === idx ? null : idx));

  return (
    <section
      id="faq"
      className="relative scroll-mt-24 bg-[var(--page-bg)]"
      style={{ color: "var(--text-main)" }}
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        {/* Header */}
        <div className="mb-10 max-w-xl">
          <h2 className="text-2xl font-semibold leading-tight tracking-[-0.025em] text-[var(--home-heading)] sm:text-3xl lg:text-[2.1rem]">
            이용안내 & 자주 묻는 질문
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[var(--home-body)]">
            예약 전 궁금한 점을 확인해 보세요. 더 자세한 내용은 전화로 문의해 주세요.
          </p>
        </div>

        {/* FAQ accordion */}
        <div
          className="border-t"
          style={{ borderColor: "var(--border-soft)" }}
        >
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border-b"
                style={{ borderColor: "var(--border-soft)" }}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span
                    className="text-[14px] font-semibold leading-snug sm:text-[15px]"
                    style={{ color: "var(--home-heading)" }}
                  >
                    {item.q}
                  </span>
                  <ChevronIcon open={isOpen} />
                </button>

                <div
                  className="overflow-hidden transition-all duration-[340ms] ease-in-out"
                  style={{
                    maxHeight: isOpen ? "400px" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <p
                    className="px-5 pb-5 text-[13px] leading-relaxed sm:text-sm"
                    style={{ color: "var(--text-sub)" }}
                  >
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
