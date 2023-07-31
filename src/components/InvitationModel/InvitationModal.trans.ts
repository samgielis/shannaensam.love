export type SupportedLanguage = "nl" | "en";
type Translation = {
  [lang in SupportedLanguage]: string;
};
const translations: {
  [key: string]: Translation;
} = {
  "invitation.title": {
    nl: "Kom je ook?",
    en: "Are you coming?",
  },
  "invitation.step1.title": {
    nl: "Uitnodiging",
    en: "Invitation",
  },
  "invitation.step1.content": {
    nl: `Op 29 september 2023 geven wij elkaar het jawoord. Dat willen we samen met jou vieren!
    
    Gelieve je aanwezigheid te bevestigen voor 20 augustus via deze tool.`,
    en: `We're getting married on September 29th 2023. We'd love to celebrate with you!
    
    Please RSVP before August 20th using this tool.`,
  },
};

export function trans(key: string, lang: SupportedLanguage): string {
  return translations[key]![lang];
}
