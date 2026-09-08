/**
 * Application configuration
 *
 * All configurable values are centralized here.
 * Components and services reference these constants instead of hard-coded values.
 */

export const APP_CONFIG = {
  name: "MES Landing",
  version: "0.1.0",
  environment: process.env.NODE_ENV ?? "development",
  isProduction: process.env.NODE_ENV === "production",
} as const;

export const THEME_CONFIG = {
  storageKey: "theme",
  defaultTheme: "light" as const,
  darkClass: "dark",
} as const;

export const LANGUAGE_CONFIG = {
  storageKey: "lang",
  defaultLanguage: "kh" as const,
  supportedLanguages: ["kh", "en"] as const,
} as const;

export const NAVIGATION_CONFIG = {
  sidebar: {
    collapsedWidth: "w-0",
    expandedWidth: "w-64",
    transitionDuration: "duration-300",
  },
  breadcrumbs: {
    separator: "/",
    maxItems: 5,
  },
} as const;

export const UI_CONFIG = {
  card: {
    variants: ["default", "outlined", "filled"] as const,
    padding: ["none", "sm", "md", "lg"] as const,
  },
  button: {
    variants: ["default", "destructive", "outline", "secondary", "ghost", "link"] as const,
    sizes: ["default", "sm", "lg", "icon", "icon-sm", "icon-lg"] as const,
  },
} as const;