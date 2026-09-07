import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Moon, Sun } from "lucide-react";
import { Locale } from "@/lib/i18n";

interface HeaderProps {
  locale: Locale;
  onLocaleChange: (l: Locale) => void;
  nav: {
    purpose: string;
    about: string;
    contact: string;
  };
}

const localeLabels: Record<Locale, { flag: string; label: string }> = {
  en: { flag: "🇺🇸", label: "English" },
  kh: { flag: "🇰🇭", label: "Khmer" },
};

export function Header({ locale, onLocaleChange, nav }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img
            src="/images/MES-logo-horizontal.png"
            alt="MES Logo"
            className="h-10 w-auto"
          />
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#purpose"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            {nav.purpose}
          </a>
          <a
            href="#who-are-we"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            {nav.about}
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            {nav.contact}
          </a>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-2">
                <span className="text-lg">{localeLabels[locale].flag}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {(Object.keys(localeLabels) as Locale[]).map((loc) => (
                <DropdownMenuItem
                  key={loc}
                  onClick={() => onLocaleChange(loc)}
                  className={locale === loc ? "bg-accent" : ""}
                >
                  <span className="mr-2">{localeLabels[loc].flag}</span>
                  {localeLabels[loc].label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Theme Toggle */}
          <Button variant="ghost" size="icon">
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </header>
  );
}