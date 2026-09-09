import HeroSection from "@/components/sections/hero-section";
import { Footer } from "@/components/layout/footer";
import InfoCards from "@/components/sections/section-info";
import { SectionFeature } from "@/components/sections/section-feature";
import { localeFonts } from "@/lib/fonts";
import { useTranslation } from "@/lib/i18n";
import "./index.css";
import { Header } from "@/components/layout/header";

export function App() {
  const { lang, setLang, t } = useTranslation();
  const fontClass = localeFonts[lang] || "font-sans";

  const testimonials = [
    { name: t("page.testimonial1Name"), text: t("page.testimonial1Text"), initials: "A" },
    { name: t("page.testimonial2Name"), text: t("page.testimonial2Text"), initials: "B" },
    { name: t("page.testimonial3Name"), text: t("page.testimonial3Text"), initials: "C" },
  ];

  return (
    <div className={`${fontClass} flex flex-col min-h-screen bg-blue-50`}>
      <Header locale={lang} onLocaleChange={setLang} />
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto w-full">
          <HeroSection locale={lang} t={t} />
          <main className="flex-grow">
            <div className="container mx-auto px-4 py-6">
              <div className="bg-white p-4 rounded-lg shadow flex items-center mb-4">
                <div className="flex-1">
                  <h2 className="text-lg font-bold text-blue-700 mb-3">{t("page.goalTitle")}</h2>
                  <p className="text-gray-700 mb-1 text-sm">{t("page.goalText")}</p>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg shadow mb-4">
                <h2 className="text-lg font-bold text-blue-700 mb-3">{t("page.featuresTitle")}</h2>
                <div className="bg-white p-3 rounded-lg shadow flex items-start mb-3">
                  <div className="w-2 h-2 mt-1.5 mr-3 bg-blue-700 rounded-full flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 text-sm">{t("page.feature1Title")}</h3>
                    <p className="text-xs text-gray-600">{t("page.feature1Desc")}</p>
                  </div>
                </div>
                <div className="bg-white p-3 rounded-lg shadow flex items-start mb-3">
                  <div className="w-2 h-2 mt-1.5 mr-3 bg-blue-700 rounded-full flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 text-sm">{t("page.feature2Title")}</h3>
                    <p className="text-xs text-gray-600">{t("page.feature2Desc")}</p>
                  </div>
                </div>
                <div className="bg-white p-3 rounded-lg shadow flex items-start mb-3">
                  <div className="w-2 h-2 mt-1.5 mr-3 bg-blue-700 rounded-full flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 text-sm">{t("page.feature3Title")}</h3>
                    <p className="text-xs text-gray-600">{t("page.feature3Desc")}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow mb-4">
                <h2 className="text-lg font-bold text-blue-700 mb-3">{t("page.howToTitle")}</h2>
                <ol className="list-decimal list-inside space-y-1.5 text-sm text-gray-700">
                  <li>{t("page.howTo1")}</li>
                  <li>{t("page.howTo2")}</li>
                  <li>{t("page.howTo3")}</li>
                  <li>{t("page.howTo4")}</li>
                </ol>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg shadow mb-4">
                <h2 className="text-lg font-bold text-blue-700 mb-3">{t("page.testimonialsTitle")}</h2>
                {testimonials.map((testimonial) => (
                  <div key={testimonial.name} className="flex items-start gap-3 mb-3 last:mb-0">
                    <div className="w-8 h-8 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold text-sm">
                      {testimonial.initials}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700 text-sm">{testimonial.name}</h3>
                      <p className="text-xs text-gray-600">{testimonial.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white p-4 rounded-lg shadow mb-4">
                <h2 className="text-lg font-bold text-blue-700 mb-3">{t("page.aboutTitle")}</h2>
                <p className="text-gray-700 mb-1 text-sm">{t("page.aboutText")}</p>
              </div>
            </div>
          </main>
          <InfoCards />
          <SectionFeature />
          <Footer t={t} fontClass={fontClass} />
        </div>
      </div>
    </div>
  );
}

export default App;
