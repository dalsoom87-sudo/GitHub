"use client";

import {
  DALSOOM_THEME_CHANGE_EVENT,
  type DalsoomThemeChangeDetail,
  type ThemeClass,
  parseThemeFromDocument,
} from "@/lib/theme-media";
import { useEffect, useLayoutEffect, useState } from "react";

function isThemeClass(v: unknown): v is ThemeClass {
  return (
    v === "theme-day" || v === "theme-sunset" || v === "theme-night"
  );
}

/**
 * html.theme-* 와 동기화된 테마.
 * - 초기: documentElement 클래스
 * - dalsoom-theme-change: 스위처가 같은 탭에서 즉시 알림
 * - MutationObserver: 클래스만 바뀐 경우(스크립트 등) 보완
 */
export function useThemeClass(): ThemeClass {
  const [theme, setTheme] = useState<ThemeClass>("theme-night");

  useLayoutEffect(() => {
    queueMicrotask(() => setTheme(parseThemeFromDocument()));
  }, []);

  useEffect(() => {
    const onCustom = (e: Event) => {
      const ce = e as CustomEvent<DalsoomThemeChangeDetail>;
      const next = ce.detail?.theme;
      if (isThemeClass(next)) setTheme(next);
    };

    const onHtmlClass = () => {
      setTheme(parseThemeFromDocument());
    };

    const html = document.documentElement;
    const observer = new MutationObserver(onHtmlClass);
    observer.observe(html, { attributes: true, attributeFilter: ["class"] });

    window.addEventListener(DALSOOM_THEME_CHANGE_EVENT, onCustom);

    return () => {
      observer.disconnect();
      window.removeEventListener(DALSOOM_THEME_CHANGE_EVENT, onCustom);
    };
  }, []);

  return theme;
}
