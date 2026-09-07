export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "MES Landing",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    { label: "Home", href: "/" },
    { label: "Docs", href: "/docs" },
    { label: "Pricing", href: "/pricing" },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
  },
};
