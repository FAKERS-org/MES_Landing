import HeroSection from "@/components/sections/hero-section";
import { Footer } from "@/components/layout/footer";
import { SectionFeature } from "@/components/sections/section-feature";
import { localeFonts } from "@/lib/fonts";
import { useTranslation } from "@/lib/i18n";
import "./index.css";
import { Header } from "@/components/layout/header";

export function App() {
  const { lang } = useTranslation();
  const fontClass = localeFonts[lang] || "font-sans";

  return (
    <div className={`${fontClass} flex flex-col min-h-screen bg-blue-50`}>
      <Header />
      <div className="flex-grow">
        <div className="max-w-8xl mx-auto w-full">
          <HeroSection />
          <SectionFeature />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
