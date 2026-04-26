const flowSteps = [
  {
    time: "11:00",
    title: "수영장 & 야외 시설 선이용",
    desc: "객실 입실 전에도 미온수풀과 야외 부대시설을 먼저 이용하실 수 있습니다.",
    badge: "입실 전",
    badgeStyle: { background: "#0f766e", color: "#fff" },
  },
  {
    time: "15:00",
    title: "객실 입실",
    desc: "글램핑 동 입실. 짐을 풀고 나만의 공간을 천천히 둘러보세요.",
    badge: "체크인",
    badgeStyle: { background: "#3730a3", color: "#fff" },
  },
  {
    time: "16:00~",
    title: "미온수풀 · RC카 · 놀이 시간",
    desc: "약 30도 미온수풀에서 물놀이, RC 포크레인·RC카 체험, 모래놀이장까지. 아이들이 특히 좋아하는 시간입니다.",
    badge: "체험",
    badgeStyle: { background: "#b45309", color: "#fff" },
  },
  {
    time: "18:00~",
    title: "BBQ 또는 통삼겹 플래터 저녁",
    desc: "각 숙소 앞 전용 BBQ 구역에서 직접 굽거나, 달숨 시그니처 통삼겹 플래터를 주문하세요.",
    badge: "저녁",
    badgeStyle: { background: "#b91c1c", color: "#fff" },
  },
  {
    time: "20:00~",
    title: "화로 앞 불멍",
    desc: "장작 타는 소리, 밤공기, 별이 보이는 하늘. 달빛 아래에서 천천히 숨 고르는 시간.",
    badge: "불멍",
    badgeStyle: { background: "#1e3a5f", color: "#fff" },
  },
  {
    time: "23:00",
    title: "매너타임",
    desc: "다른 이용객을 위해 정숙한 이용을 부탁드립니다. 조용히 흘러가는 밤의 소리를 즐겨보세요.",
    badge: "공지",
    badgeStyle: { background: "#4b5563", color: "#fff" },
  },
  {
    time: "익일 12:00",
    title: "체크아웃",
    desc: "여유로운 아침을 보내고 12시까지 퇴실해 주세요. 또 오고 싶은 기억으로 남기를 바랍니다.",
    badge: "퇴실",
    badgeStyle: { background: "#6b21a8", color: "#fff" },
  },
] as const;

export default function DayFlowSection() {
  return (
    <section
      id="dayflow"
      className="relative scroll-mt-24 bg-[var(--page-strip)]"
      style={{ color: "var(--text-main)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(22,37,59,0.05)_0%,rgba(22,37,59,0.02)_30%,rgba(255,255,255,0)_100%)]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--home-eyebrow)]">
          A Day at Dalsoom
        </p>

        <h2 className="mt-3 max-w-3xl text-2xl font-semibold leading-tight tracking-tight text-[var(--home-heading)] sm:text-3xl lg:text-[2.05rem]">
          달숨에서의 하루 흐름
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--home-body)] sm:text-base">
          체크인 전부터 체크아웃까지, 달숨에서 보내는 하루를 미리 그려보세요.
        </p>

        {/* 타임라인 */}
        <div className="mt-10 space-y-0">
          {flowSteps.map((step, idx) => (
            <div key={step.time} className="flex gap-4 sm:gap-6">
              {/* 왼쪽: 시간 + 세로선 */}
              <div className="flex flex-col items-center">
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 text-[10px] font-bold text-white sm:h-10 sm:w-10"
                  style={{ borderColor: "var(--border-soft)", background: step.badgeStyle.background }}
                >
                  {idx + 1}
                </div>
                {idx < flowSteps.length - 1 && (
                  <div
                    className="mt-1 w-px flex-1"
                    style={{ background: "var(--border-soft)", minHeight: "2rem" }}
                  />
                )}
              </div>

              {/* 오른쪽: 컨텐츠 */}
              <div className={`flex-1 pb-8 ${idx === flowSteps.length - 1 ? "pb-0" : ""}`}>
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className="inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold"
                    style={step.badgeStyle}
                  >
                    {step.badge}
                  </span>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {step.time}
                  </span>
                </div>
                <h3
                  className="mt-1 text-[15px] font-semibold leading-snug sm:text-base"
                  style={{ color: "var(--home-heading)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="mt-1 text-sm leading-relaxed"
                  style={{ color: "var(--text-sub)" }}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs leading-relaxed text-[var(--text-muted)]">
          * 수영장(미온수풀) 이용 시간은 11:00~21:00 (봄·가을 시즌 운영). 노래방 이용 09:00~21:00. 실제 운영 상황은 현장에서 확인해 주세요.
        </p>
      </div>
    </section>
  );
}
