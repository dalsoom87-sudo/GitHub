"use client";

import {
  DALSOOM_THEME_CHANGE_EVENT,
  THEME_CLASSES,
  type DalsoomThemeChangeDetail,
  type ThemeClass,
} from "@/lib/theme-media";
import { useEffect, useState } from "react";

const STORAGE_KEY = "dalsoom-theme";

export type { ThemeClass };

const LABELS: Record<ThemeClass, string> = {
  "theme-day": "밝은 낮",
  "theme-sunset": "해질녘",
  "theme-night": "저녁",
};

function applyThemeClass(next: ThemeClass) {
  const root = document.documentElement;
  THEME_CLASSES.forEach((t) => root.classList.remove(t));
  root.classList.add(next);
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {
    /* ignore */
  }
  window.dispatchEvent(
    new CustomEvent<DalsoomThemeChangeDetail>(DALSOOM_THEME_CHANGE_EVENT, {
      detail: { theme: next },
    })
  );
}

function readStoredTheme(): ThemeClass {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    if (v && (THEME_CLASSES as readonly string[]).includes(v)) return v as ThemeClass;
  } catch {
    /* ignore */
  }
  return "theme-night";
}

export default function ThemeSwitcher() {
  const [active, setActive] = useState<ThemeClass>("theme-night");

  useEffect(() => {
    queueMicrotask(() => setActive(readStoredTheme()));
  }, []);

  return (
    <div
      className="theme-header-segment flex shrink-0 items-center gap-px rounded-full border p-px"
      role="group"
      aria-label="시간대 분위기"
    >
      {THEME_CLASSES.map((t) => (
        <button
          key={t}
          type="button"
          onClick={() => {
            applyThemeClass(t);
            setActive(t);
          }}
          className={`rounded-full px-1.5 py-0.5 text-[9px] font-semibold tracking-tight transition-colors sm:px-2 sm:py-1 sm:text-[10px] ${
            active === t ? "theme-segment-active" : "theme-segment-idle"
          }`}
          aria-pressed={active === t}
        >
          {LABELS[t]}
        </button>
      ))}
    </div>
  );
}
