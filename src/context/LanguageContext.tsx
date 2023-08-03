import { createContext, useContext } from "react";
import { SupportedLanguage } from "../translations";

interface LanguageContextValue {
  language: SupportedLanguage;
  setLanguage(language: SupportedLanguage): void;
}
export const LanguageContext = createContext<LanguageContextValue>({
  language: "nl",
  setLanguage: (language: SupportedLanguage) => {},
});

export const useLanguage = () => useContext(LanguageContext);
