import React, { useEffect, useState } from "react";
import { fontMapping, fontUrls } from "@/lib/fonts";

export default function LanguageSwitch({ locale }: { locale: string }) {
  const [current, setCurrent] = useState(locale);

  useEffect(() => {
    const fontFamily = fontMapping[current];
    const fontUrl = fontUrls[fontFamily];

    if (!fontUrl) return;

    const fontFace = new FontFace(fontFamily, `url(${fontUrl})`);
    fontFace
      .load()
      .then((loadedFont) => {
        document.fonts.add(loadedFont);
        document.body.style.fontFamily = fontFamily;
      })
      .catch(() => {
        // Fall back to default body font if the CDN file fails to load.
        document.body.style.fontFamily = "Inter, sans-serif";
      });
  }, [current]);

  return (
    <div className="w-full flex justify-between border-b py-4">
      <div className="flex flex-row text-xl items-center gap-2">
        <span className="text-sm font-medium text-gray-600">Language</span>
        <select
          value={current}
          onChange={(e) => setCurrent(e.target.value)}
          className="rounded border border-gray-300 px-2 py-1 text-sm"
        >
          <option value="en">EN</option>
          <option value="kh">KH</option>
        </select>
      </div>
    </div>
  );
}
