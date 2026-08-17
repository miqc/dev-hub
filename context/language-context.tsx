"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Dictionary, Language, translations } from "@/translations";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pt");

  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-language") as Language | null;
    if (saved === "pt" || saved === "en") setLanguageState(saved);
  }, []);

  const setLanguage = (value: Language) => {
    setLanguageState(value);
    window.localStorage.setItem("portfolio-language", value);
    document.documentElement.lang = value === "pt" ? "pt-BR" : "en";
  };

  const value = useMemo(() => ({ language, setLanguage, t: translations[language] }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
