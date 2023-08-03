export type SupportedLanguage = "nl" | "en";
type Translation = {
  [lang in SupportedLanguage]: string;
};
export const translations = {
  next: {
    nl: "Verder",
    en: "Continue",
  },
  hourAsLetter: {
    nl: "u",
    en: "h",
  },
  invitation: {
    title: {
      nl: "Kom je mee vieren?",
      en: "Are you joining us?",
    },
    step1: {
      title: {
        nl: "Uitnodiging",
        en: "Invitation",
      },
      content: {
        nl: `Op 29 september 2023 geven wij elkaar het jawoord. Dat willen we samen met jou vieren!
                
                Gelieve je aanwezigheid te bevestigen voor 20 augustus via deze tool.`,
        en: `We're getting married on September 29th 2023. We'd love to celebrate with you!
                
                Please RSVP before August 20th using this tool.`,
      },
      accept: {
        nl: "Ik kom!",
        en: "I'll join!",
      },
      decline: {
        nl: "Ik kan niet",
        en: "I can't",
      },
    },
    step2: {
      title: {
        nl: "Contactgegevens",
        en: "Contact info",
      },
      inputs: {
        email: {
          helpText: {
            nl: "Hierop contacteren we je indien nodig.",
            en: "We'll use this to contact you if necessary.",
          },
        },
        amount: {
          label: {
            nl: "Aantal personen",
            en: "Amount of people",
          },
        },
        listOfPeople: {
          label: {
            nl: "Naam",
            en: "Name",
          },
          placeholder: {
            nl: "Naam persoon",
            en: "Name person",
          },
        },
        decline: {
          nl: "Ik kan niet",
          en: "Can't make it",
        },
      },
    },

    step3: {
      title: {
        nl: "Ik kom naar...",
        en: "I'll attend...",
      },
      civilWedding: {
        nl: "Burgerlijk huwelijk 🖋️",
        en: "Civil wedding 🖋️",
      },
      ceremony: {
        nl: "Ceremonie 💍",
        en: "Ceremony 💍",
      },
      diner: {
        nl: "Receptie en diner 🍴",
        en: "Reception and diner 🍴",
      },
      party: {
        nl: "Avondfeest 🥳",
        en: "Party 🥳",
      },
    },

    step4: {
      title: {
        nl: "Samenvatting",
        en: "Summary",
      },
      notes: {
        label: {
          nl: "Nog opmerkingen?",
          en: "Other remarks?",
        },
        placeholder: {
          nl: "Uitzonderingen, allergieën, voorkeuren, ...",
          en: "Exceptions, allergies, preferences, ...",
        },
      },
      peopleComing: {
        single: {
          nl: "Je komt naar",
          en: `You're attending`,
        },
        multiple: {
          nl: "personen komen naar",
          en: "people are attending",
        },
      },
      canContact: {
        nl: "We kunnen je contacteren op",
        en: "We can contact you through",
      },
      confirm: {
        nl: "Bevestigen",
        en: "Confirm",
      },
    },
  },
};

export function trans(
  translation: Translation,
  language: SupportedLanguage
): string {
  return translation[language];
}
