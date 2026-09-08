import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslation } from "@/lib/i18n";

export function Footer() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen relative overflow-hidden rounded-b-3xl" style={{ backgroundImage: `url(/images/transparent-half-M.png)`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 opacity-80 rounded-b-3xl" />
      <div className="absolute inset-0 opacity-30 rounded-b-3xl">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-200 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-300 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
            {/* Left Section - Logo & Info */}
            <div className="space-y-6">
              {/* Logo */}
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

                {/* Social Icons */}
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

            {/* Center Section - Illustration */}
            <div className="flex justify-center">
              <img
                src="/images/book.png"
                alt="Book illustration"
                className="w-48 h-48 object-contain"
              />
            </div>

            {/* Right Section - Recommendation */}
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

              {/* Version Number */}
              <div className="flex justify-end">
                <img
                  src="/images/version-2.0.png"
                  alt="Version 2.0"
                  className="h-16 w-auto"
                />
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-6 border-t border-gray-200">
            <p className="text-center text-gray-400 text-sm">
              {t("footer.copyright").replace("{year}", String(new Date().getFullYear()))}
            </p>
          </div>
        </div>
      </div>
    );
}