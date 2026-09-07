import React from "react";

interface HeroT {
  title1: string;
  title2: string;
  description: string;
  cta: string;
}

export default function HeroSection({
  locale,
  t,
}: {
  locale?: string;
  t: HeroT;
}) {
  return (
    <div className="w-full bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-12 py-16">
        {/* Left Side Content */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-800 mb-4 leading-tight">
            {t.title1}
            <br />
            {t.title2}
          </h1>
          <p className="text-gray-600 mb-6 leading-relaxed">{t.description}</p>
          <button className="bg-blue-700 text-white py-2 px-8 rounded-full hover:bg-blue-800 transition-colors">
            {t.cta}
          </button>
        </div>

        {/* Right Side Device Mockups */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative">
            {/* Laptop Mockup */}
            <img
              src="/hero_images/Frame_638.png"
              alt="Laptop view of application"
              className="w-full max-w-[700px] h-auto z-10 relative block"
            />
            {/* Tablet Mockup - Positioned to overlap */}
            <div className="absolute -right-10 bottom-0 z-20 hidden md:block">
              <img
                src="/hero_images/Layer_1.png"
                alt="Tablet view of application"
                className="w-[350px] h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
