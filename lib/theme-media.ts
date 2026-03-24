/**
 * 테마별 히어로 / 모바일 엔트리 배경 이미지 (public/images 기준).
 * layout의 html.theme-* 와 theme-switcher의 localStorage 와 동일한 키를 사용한다.
 */
export const THEME_CLASSES = ["theme-day", "theme-sunset", "theme-night"] as const;

export type ThemeClass = (typeof THEME_CLASSES)[number];

/** 같은 탭에서 테마 전환 직후 React가 구독할 커스텀 이벤트 이름 */
export const DALSOOM_THEME_CHANGE_EVENT = "dalsoom-theme-change";

export type DalsoomThemeChangeDetail = { theme: ThemeClass };

/** 히어로 — v2 캐시 분리. 해질녘 컷 교체 시 아래 sunset 경로의 파일만 갈아 끼우면 됨 */
export const THEME_HERO_IMAGE: Record<ThemeClass, string> = {
  "theme-day": "/images/theme-day-hero-v2.jpg",
  "theme-sunset": "/images/theme-sunset-hero-v2.jpg",
  "theme-night": "/images/theme-night-hero-v2.jpg",
};

/** 엔트리 — 해질녘은 theme-sunset-entry-v2.jpg 동일 규칙으로 교체 */
export const THEME_ENTRY_IMAGE: Record<ThemeClass, string> = {
  "theme-day": "/images/theme-day-entry-v2.jpg",
  "theme-sunset": "/images/theme-sunset-entry-v2.jpg",
  "theme-night": "/images/theme-night-entry-v2.jpg",
};

export function parseThemeFromDocument(): ThemeClass {
  if (typeof document === "undefined") return "theme-night";
  const root = document.documentElement;
  for (const t of THEME_CLASSES) {
    if (root.classList.contains(t)) return t;
  }
  return "theme-night";
}
