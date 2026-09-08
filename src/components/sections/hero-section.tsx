import React from "react";
import { useTranslation } from "@/lib/i18n";

export default function HeroSection({
  locale,
}: {
  locale?: string;
}) {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <div className="mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-12 py-10">
        {/* Left Side Content */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-6 md:mb-0">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-800 mb-3 leading-tight">
            {t("hero.title1")}
            <br />
            {t("hero.title2")}
          </h1>
          <p className="text-gray-600 mb-4 leading-relaxed">{t("hero.description")}</p>
          <button className="bg-blue-700 text-white py-1.5 px-6 rounded-full hover:bg-blue-800 transition-colors text-sm">
            {t("hero.cta")}
          </button>
        </div>

        {/* Right Side Device Mockups */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative">
            <img
              src="/hero_images/Frame_638.png"
              alt="Laptop view of application"
              className="w-full max-w-[550px] h-auto z-10 relative block"
            />
            <div className="absolute -right-8 bottom-0 z-20 hidden md:block">
              <img
                src="/hero_images/Layer_1.png"
                alt="Tablet view of application"
                className="w-[280px] h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
