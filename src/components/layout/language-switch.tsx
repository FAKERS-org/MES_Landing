import React, { useEffect, useState } from "react";
import { fontMapping, fontUrls, localeFonts } from "@/lib/fonts";
import { type Locale } from "@/lib/i18n";

export default function LanguageSwitch({
  locale,
  onChange,
  languageLabel,
}: {
  locale: Locale;
  onChange?: (l: string) => void;
  languageLabel?: string;
}) {
  const [current, setCurrent] = useState<Locale>(locale);

  useEffect(() => {
    setCurrent(locale);
  }, [locale]);

  useEffect(() => {
    const fontFamily = fontMapping[current] ?? "Inter, sans-serif";
    const fontUrl = fontUrls[fontFamily];
    if (fontUrl) {
      const fontFace = new FontFace(fontFamily, `url(${fontUrl})`);
      fontFace
        .load()
        .then((loadedFont) => {
          document.fonts.add(loadedFont);
        })
        .catch(() => {
          // Fallback handled by CSS class
        });
    }
    document.body.style.fontFamily = fontFamily || "Inter, sans-serif";
  }, [current]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value as Locale;
    setCurrent(val);
    onChange?.(val);
  };

  return (
    <div className="w-full flex justify-between border-b py-4">
      <div className="flex flex-row text-xl items-center gap-2">
        <span className="text-sm font-medium text-gray-600">
          {languageLabel || "Language"}
        </span>
        <select
          value={current}
          onChange={handleChange}
          className="rounded border border-gray-300 px-2 py-1 text-sm bg-white"
        >
          <option value="en">EN</option>
          <option value="kh">KH</option>
        </select>
      </div>
    </div>
  );
}
