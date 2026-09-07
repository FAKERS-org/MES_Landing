import en from "@/locales/en.json";
import kh from "@/locales/kh.json";

export type Locale = "en" | "kh";

const messages: Record<Locale, typeof en> = { en, kh };

export function t(locale: Locale): typeof en {
  return messages[locale];
}

export function getLocaleMessages(locale: Locale) {
  return messages[locale];
}
