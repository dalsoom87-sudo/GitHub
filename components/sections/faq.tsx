"use client";

import { useState } from "react";

const faqs = [
  {
    q: "개인 화로를 가져와도 되나요?",
    a: "개인 화로는 오토캠핑 구역에서만 사용 가능합니다. 글램핑·피크닉 이용 시에는 각 숙소 앞 달숨의 BBQ·불멍 시설을 이용해 주세요. 현장 안전 수칙에 따라 이용 위치가 제한될 수 있으므로 사전에 문의해 주시면 더 정확하게 안내해 드립니다.",
  },
  {
    q: "개인 숯이나 장작을 가져와도 되나요?",
    a: "네, 개인 숯·장작 반입은 가능합니다. 단, 그릴이 필요하신 경우 대여비가 별도로 발생합니다. 화기 사용 시에는 현장 안전 수칙을 따라 주세요.",
  },
  {
    q: "비가 와도 이용 가능한가요?",
    a: "가벼운 비 정도면 글램핑 동 내부 및 실내 시설(노래방 등)은 정상 이용 가능합니다. 다만 미온수풀·야외 체험 시설 등은 기상 상황과 안전 여건에 따라 운영이 제한될 수 있습니다. 방문 전날 문의해 주시면 날씨에 맞게 안내해 드리겠습니다.",
  },
  {
    q: "벌레가 많지는 않나요?",
    a: "달숨은 계곡과 농가 인근에 위치한 자연 속 시설입니다. 계절과 날씨에 따라 벌레가 있을 수밖에 없는 환경임을 솔직하게 안내드립니다. 개인 방충제나 모기장을 챙겨오시면 보다 쾌적하게 이용하실 수 있으며, 달숨에서도 구역 관리를 꾸준히 하고 있습니다.",
  },
  {
    q: "반려동물을 데려와도 되나요?",
    a: "반려동물 동반은 5호·6호·7호에 한해 가능합니다. 추가 비용 3만원이 발생하며, 목줄 착용과 배변 처리 등 기본 펫티켓을 지켜 주셔야 합니다. 타 이용객 또는 다른 반려견과의 마찰·물림 사고 등에 대해서는 보호자 책임으로 안내드리고 있습니다. 방문 전 반드시 사전 문의를 부탁드립니다.",
  },
  {
    q: "아이들이 놀 수 있는 공간이 있나요?",
    a: "아이들이 즐길 수 있는 시설이 다양하게 마련되어 있습니다. 미온수풀·워터슬라이드, 모래놀이장, RC 포크레인 체험, RC카 체험장, 노래방, 막사 안 빔프로젝터 시청까지 하루가 모자랄 정도예요. 수영장 이용 시 영유아·어린이는 반드시 보호자가 동반해 주세요.",
  },
  {
    q: "수영장은 언제 이용할 수 있나요?",
    a: "미온수풀(약 30도)은 봄·가을 시즌에 운영하며, 이용 시간은 11:00~21:00입니다. 객실 입실(15:00) 전에도 수영장과 야외 부대시설을 먼저 이용하실 수 있습니다. 별도 안전요원은 배치되지 않으니 어린이 보호자 동반을 꼭 부탁드립니다.",
  },
  {
    q: "평일 플래터 혜택은 어떻게 받을 수 있나요?",
    a: "평일(월~금) 방문 고객 모두에게 달숨 통삼겹 플래터(통삼겹 600g, 모닝빵, 코울슬로)를 증정해 드립니다. 별도 신청 없이 평일 이용 시 자동 제공되며, 혜택 종료 시에는 별도 공지 후 안내드립니다.",
  },
  {
    q: "예약 취소 및 환불 규정이 어떻게 되나요?",
    a: "이용일 기준으로 환불 정책이 적용됩니다: 10일 전 취소 시 100% 환불, 7일 전 90%, 5일 전 70%, 3일 전 50%, 이용 1일 전 및 당일 취소는 환불이 불가합니다. 정확한 내용은 예약 시 안내드리며, 궁금하신 점은 문의 전화로 확인해 주세요.",
  },
] as const;

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      id="faq"
      className="relative scroll-mt-24 bg-[var(--page-bg)]"
      style={{ color: "var(--text-main)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(22,37,59,0.05)_0%,rgba(22,37,59,0.02)_30%,rgba(255,255,255,0)_100%)]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--home-eyebrow)]">
          FAQ
        </p>

        <h2 className="mt-3 max-w-3xl text-2xl font-semibold leading-tight tracking-tight text-[var(--home-heading)] sm:text-3xl lg:text-[2.05rem]">
          자주 묻는 질문
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--home-body)] sm:text-base">
          예약 전 궁금한 점을 미리 확인해 보세요. 더 자세한 내용은 전화로 문의해 주시면 친절하게 안내해 드립니다.
        </p>

        <div
          className="mt-8 sm:mt-10"
          style={{ borderTopWidth: 1, borderTopStyle: "solid", borderColor: "var(--border-soft)" }}
        >
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{ borderBottomWidth: 1, borderBottomStyle: "solid", borderColor: "var(--border-soft)" }}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-start justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-[15px] font-semibold leading-snug text-[var(--home-heading)] sm:text-base">
                    {faq.q}
                  </span>
                  <span
                    className="mt-0.5 shrink-0 text-xl font-light leading-none text-[var(--text-muted)] transition-transform duration-200"
                    style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)", display: "inline-block" }}
                    aria-hidden
                  >
                    +
                  </span>
                </button>

                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ maxHeight: isOpen ? "600px" : "0px", opacity: isOpen ? 1 : 0 }}
                >
                  <p className="pb-5 text-sm leading-relaxed text-[var(--text-sub)] sm:text-[15px]">
                    {faq.a}
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
