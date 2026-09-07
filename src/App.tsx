import { useState } from "react";
import { Header } from "@/components/layout/header";
import HeroSection from "@/components/sections/hero-section";
import KhmerWebsitePage from "@/components/sections/khmer-website-page";
import Footer from "@/components/layout/footer";
import { localeFonts } from "@/lib/fonts";
import { t, Locale } from "@/lib/i18n";
import "./index.css";

export function App() {
  const [locale, setLocale] = useState<Locale>("en");
  const fontClass = localeFonts[locale] || "font-sans";
  const messages = t(locale);

  return (
    <div className={`${fontClass} flex flex-col min-h-screen bg-white`}>
      <Header
        locale={locale}
        onLocaleChange={setLocale}
        nav={messages.nav}
      />
      <div className="max-w-5xl mx-auto w-full">
        <HeroSection locale={locale} t={messages.hero} />
        <main className="flex-grow">
          <KhmerWebsitePage t={messages.page} />
        </main>
      </div>
      <Footer t={messages.footer} />
    </div>
  );
}

export default App;
