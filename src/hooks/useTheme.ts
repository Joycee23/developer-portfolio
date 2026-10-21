"use client";

import { useEffect, useSyncExternalStore } from "react";

type Theme = "dark" | "light";
const themeEvent = "portfolio-theme-change";
function getSnapshot(): Theme {
  try {
    return localStorage.getItem("portfolio-theme") === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
}
function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(themeEvent, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(themeEvent, callback);
  };
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, () => "dark");
  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    try {
      localStorage.setItem("portfolio-theme", theme === "dark" ? "light" : "dark");
      window.dispatchEvent(new Event(themeEvent));
    } catch {
      // The page remains usable when browser storage is unavailable.
    }
  };
  return { theme, toggleTheme };
}
