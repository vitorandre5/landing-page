import { createContext, createElement, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type SiteLanguage = "pt" | "en";

const LANGUAGE_STORAGE_KEY = "bettagger-language";

const detectBrowserLanguage = (): SiteLanguage => {
  if (typeof navigator === "undefined") return "pt";

  const preferred = [
    ...(navigator.languages ?? []),
    navigator.language,
  ].filter(Boolean);

  const hasEnglish = preferred.some((lang) => lang.toLowerCase().startsWith("en"));
  return hasEnglish ? "en" : "pt";
};

const getInitialLanguage = (): SiteLanguage => {
  if (typeof window === "undefined") return "pt";

  const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (storedLanguage === "pt" || storedLanguage === "en") {
    return storedLanguage;
  }

  return detectBrowserLanguage();
};

type SiteLanguageContextValue = {
  language: SiteLanguage;
  isEn: boolean;
  setLanguage: (language: SiteLanguage) => void;
};

const SiteLanguageContext = createContext<SiteLanguageContextValue | null>(null);

export const SiteLanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<SiteLanguage>(getInitialLanguage);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    }
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      isEn: language === "en",
      setLanguage,
    }),
    [language],
  );

  return createElement(SiteLanguageContext.Provider, { value }, children);
};

export const useSiteLanguage = () => {
  const context = useContext(SiteLanguageContext);

  if (!context) {
    const fallbackLanguage = detectBrowserLanguage();
    return {
      language: fallbackLanguage,
      isEn: fallbackLanguage === "en",
      setLanguage: () => {
        // No-op fallback for usage outside the provider.
      },
    };
  }

  return context;
};
