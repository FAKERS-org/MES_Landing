import HeroSection from "@/components/sections/hero-section";
import KhmerWebsitePage from "@/components/sections/khmer-website-page";
import { Footer } from "@/components/layout/footer";
import InfoCards from "@/components/sections/section-info";
import { localeFonts } from "@/lib/fonts";
import { useTranslation } from "@/lib/i18n";
import "./index.css";
import { Header } from "@/components/layout/header";

export function App() {
  const { lang, setLang, t } = useTranslation();
  const fontClass = localeFonts[lang] || "font-sans";

  return (
    <div className={`${fontClass} flex flex-col min-h-screen bg-blue-50`}>
      <Header locale={lang} onLocaleChange={setLang} />
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto w-full">
<HeroSection locale={lang} t={t} />
            <main className="flex-grow">
              <KhmerWebsitePage t={t} />
            </main>
            <InfoCards />
            <Footer t={t} fontClass={fontClass} />
        </div>
      </div>
    </div>
  );
}

export default App;
