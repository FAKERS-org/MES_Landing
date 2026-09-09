import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslation } from "@/lib/i18n";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-white mt-8 pt-6 rounded-t-2xl">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center px-6">

          <div className="space-y-6">
            <a href="/" className="flex items-center gap-2">
              <img
                src="/images/MES-logo-horizontal.png"
                alt="MES Logo"
                className="h-10 w-auto"
              />
            </a>

            <div className="space-y-3">
              <h3 className="text-gray-700 font-medium">{t("footer.contact")}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t("footer.description")}
              </p>
              <div className="flex gap-3">
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <img src="/images/facebook.png" alt="Facebook" className="w-5 h-5" />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <img src="/images/telegram.png" alt="Telegram" className="w-5 h-5" />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <img src="/images/youtube.png" alt="YouTube" className="w-5 h-5" />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <img src="/images/instagram.png" alt="Instagram" className="w-5 h-5" />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <img src="/images/tik-tok.png" alt="TikTok" className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="/images/book.png"
              alt="Book illustration"
              className="w-48 h-48 object-contain"
            />
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <label className="text-gray-600 text-sm font-medium">
                {t("footer.recommendation")}
              </label>
              <div className="flex gap-2">
                <Input
                  type="text"
                  placeholder={t("footer.commentPlaceholder")}
                  className="flex-1 bg-white border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
                  {t("footer.submit")}
                </Button>
              </div>
            </div>

            <div className="flex justify-end">
              <img
                src="/images/version-2.0.png"
                alt="Version 2.0"
                className="h-16 w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}