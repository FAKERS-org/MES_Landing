import React from "react";
import { useTranslation } from "@/lib/i18n";

export default function HeroSection({
  locale,
}: {
  locale?: string;
}) {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-blue-50">
      <div className="mx-auto flex min-h-[90vh] flex-col-reverse md:flex-row items-center justify-between px-4 md:px-12 py-20 md:py-32">
        {/* Left Side Content */}
        <div className="w-full md:w-[30%] text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-800 mb-4 leading-tight">
            {t("hero.title1")}
            <br />
            {t("hero.title2")}
          </h1>
          <p className="text-gray-600 mb-6 leading-relaxed text-base md:text-lg">{t("hero.description")}</p>
          <button className="bg-blue-700 text-white py-2.5 px-8 rounded-full hover:bg-blue-800 transition-colors text-sm font-medium">
            {t("hero.cta")}
          </button>
        </div>

        {/* Right Side Device Mockups */}
        <div className="w-full md:w-[70%] flex items-center justify-center md:justify-end">
          <img
            src="/images/devices.png"
            alt="Device mockups"
            className="w-full h-auto object-contain md:scale-150 md:origin-center"
          />
        </div>
      </div>
    </div>
  );
}
