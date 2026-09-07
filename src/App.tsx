import NavbarComponent from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import KhmerWebsitePage from "@/components/khmer-website-page";
import Footer from "@/components/footer";
import LanguageSwitch from "@/components/language-switch";
import { khmerSuwan } from "@/lib/fonts";
import "./index.css";

export function App() {
  return (
    <div className={`${khmerSuwan.className} flex flex-col min-h-screen`}>
      <LanguageSwitch locale="kh" />
      <NavbarComponent locale="kh" />
      <HeroSection locale="kh" />
      <main className="flex-grow">
        <KhmerWebsitePage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
