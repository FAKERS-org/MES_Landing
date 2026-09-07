export const fontMapping: { [key: string]: string } = {
  en: "EnglishFont",
  kh: "KhmerFont",
};

// English / Khmer font URLs hosted on a CDN. Swap these with your
// own CDN paths when you publish the font files.
export const fontUrls: { [key: string]: string } = {
  EnglishFont: "https://cdn.jsdelivr.net/gh/google/fonts/ofl/inter/Inter%5Bopsz%2Cwght%5D.ttf",
  KhmerFont: "https://cdn.jsdelivr.net/gh/google/fonts/khmr/Suwannaphum-Regular.ttf",
};

export const khmerSuwan = { className: "font-khmer" };
