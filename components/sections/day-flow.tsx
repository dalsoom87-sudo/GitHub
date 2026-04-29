const flowSteps = [
  {
    time: "11:00",
    badge: "입실 전",
    title: "수영장 & 야외 시설 선이용",
    desc: "객실 입실 전에도 미온수풀과 야외 부대시설을 먼저 이용하실 수 있습니다.",
  },
  {
    time: "15:00",
    badge: "체크인",
    title: "객실 입실",
    desc: "글램핑 동 입실. 짐을 풀고 나만의 공간을 천천히 둘러보세요.",
  },
  {
    time: "16:00~",
    badge: "체험",
    title: "미온수풀 · RC카 · 놀이 시간",
    desc: "약 30도 미온수풀에서 물놀이, RC 포크레인·RC카 체험, 모래놀이장까지. 아이들이 특히 좋아하는 시간입니다.",
  },
  {
    time: "18:00~",
    badge: "저녁",
    title: "BBQ 또는 통삼겹 플래터 저녁",
    desc: "각 숙소 앞 전용 BBQ 구역에서 직접 굽거나, 달숨 시그니처 통삼겹 플래터를 주문하세요.",
  },
  {
    time: "20:00~",
    badge: "불멍",
    title: "화로 앞 불멍",
    desc: "장작 타는 소리, 밤공기, 별이 보이는 하늘. 달빛 아래에서 천천히 숨 고르는 시간.",
  },
  {
    time: "23:00",
    badge: "매너타임",
    title: "조용한 밤",
    desc: "다른 이용객을 위해 23시 이후에는 정숙한 이용을 부탁드립니다.",
  },
  {
    time: "익일 12:00",
    badge: "체크아웃",
    title: "퇴실",
    desc: "여유로운 아침을 보내고 12시까지 퇴실해 주세요. 또 오고 싶은 기억으로 남기를 바랍니다.",
  },
] as const;

export default function DayFlowSection() {
  return (
    <section
      id="dayflow"
      className="relative scroll-mt-24 bg-[var(--page-strip)]"
      style={{ color: "var(--text-main)" }}
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        {/* Header */}
        <div className="mb-12 max-w-xl">
          <h2 className="text-2xl font-semibold leading-tight tracking-[-0.025em] text-[var(--home-heading)] sm:text-3xl lg:text-[2.1rem]">
            달숨에서의 하루 흐름
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[var(--home-body)]">
            체크인 전부터 체크아웃까지, 달숨에서의 하루를 미리 그려보세요.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[18px] top-2 bottom-2 w-px sm:left-[22px]"
            style={{ background: "var(--border-soft)" }}
            aria-hidden
          />

          <div className="space-y-0">
            {flowSteps.map((step, idx) => (
              <div key={step.time} className="flex gap-5 sm:gap-6">
                {/* Dot */}
                <div className="relative flex shrink-0 flex-col items-center">
                  <div
                    className="z-10 mt-[2px] h-9 w-9 shrink-0 rounded-full border-2 flex items-center justify-center sm:h-10 sm:w-10"
                    style={{
                      background: "var(--surface)",
                      borderColor: "var(--border-soft)",
                      color: "var(--text-muted)",
                    }}
                  >
                    <span className="text-[10px] font-bold leading-none">{idx + 1}</span>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`flex-1 pb-9 ${idx === flowSteps.length - 1 ? "pb-0" : ""}`}
                >
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span
                      className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-semibold tracking-wide"
                      style={{
                        background: "var(--surface-soft)",
                        color: "var(--text-muted)",
                        border: "1px solid var(--border-soft)",
                      }}
                    >
                      {step.badge}
                    </span>
                    <span
                      className="text-[12px] font-semibold"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {step.time}
                    </span>
                  </div>
                  <h3
                    className="text-[15px] font-semibold leading-snug sm:text-base"
                    style={{ color: "var(--home-heading)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="mt-1 text-[13px] leading-relaxed sm:text-sm"
                    style={{ color: "var(--text-sub)" }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p
          className="mt-10 text-[11px] leading-relaxed sm:text-xs"
          style={{ color: "var(--text-muted)" }}
        >
          * 수영장(미온수풀) 이용 시간 11:00~21:00 (봄·가을 시즌 운영). 노래방 09:00~21:00. 실제 운영 상황은 현장에서 확인해 주세요.
        </p>
      </div>
    </section>
  );
}
