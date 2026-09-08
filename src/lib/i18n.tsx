import React, { createContext, useContext, useEffect, useState } from "react";
import kh from "@/locales/kh.json";
import en from "@/locales/en.json";
import { LANGUAGE_CONFIG } from "@/config";

export type Lang = "en" | "kh";

export type TranslationKey = keyof typeof en;

export interface TranslationFn {
  (key: TranslationKey, params?: Record<string, string | number>): string;
}

export const translations: Record<Lang, Record<string, string>> = { kh, en };

export function getInitialLang(): Lang {
  if (typeof window === "undefined") return LANGUAGE_CONFIG.defaultLanguage;
  const stored = window.localStorage.getItem(LANGUAGE_CONFIG.storageKey);
  if (LANGUAGE_CONFIG.supportedLanguages.includes(stored as Lang)) {
    return stored as Lang;
  }
  return LANGUAGE_CONFIG.defaultLanguage;
}

export const LANGUAGE_CONFIG = {
  storageKey: "lang",
  defaultLanguage: "kh" as const,
  supportedLanguages: ["kh", "en"] as const,
} as const;

export function useTranslation() {
  const ctx = useContext(TranslationContext);
  if (!ctx)
    throw new Error(
      "useTranslation must be used within TranslationProvider. Make sure the component is wrapped in <TranslationProvider>"
    );
  return ctx;
}

const TranslationContext = createContext<{
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: TranslationFn;
} | undefined>(undefined);

export function TranslationProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitialLang);

  useEffect(() => {
    window.localStorage.setItem(LANGUAGE_CONFIG.storageKey, lang);
    document.documentElement.style.setProperty(
      "--font-current",
      lang === "en" ? "var(--font-lexend)" : "var(--font-sans)"
    );
  }, [lang]);

  const t: TranslationFn = (key, params) => {
    let str =
      translations[lang][key] ?? translations[LANGUAGE_CONFIG.defaultLanguage][key] ?? key;
    if (params) {
      for (const [k, v] of Object.entries(params)) {
        str = str.replace(`{${k}}`, String(v));
      }
    }
    return str;
  };

  const toggleLang = () =>
    setLang((l) =>
      l === LANGUAGE_CONFIG.supportedLanguages[0]
        ? LANGUAGE_CONFIG.supportedLanguages[1]
        : LANGUAGE_CONFIG.supportedLanguages[0]
    );

  return (
    <TranslationContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </TranslationContext.Provider>
  );
}
