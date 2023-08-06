export type SupportedLanguage = "nl" | "en";
type Translation = {
  [lang in SupportedLanguage]: string;
};
export const translations = {
  next: {
    nl: "Verder",
    en: "Continue",
  },
  cancel: {
    nl: "Terug",
    en: "Back",
  },
  confirm: {
    nl: "Verzend",
    en: "Submit",
  },
  hourAsLetter: {
    nl: "u",
    en: "h",
  },
  name: {
    nl: "Naam",
    en: "Name",
  },
  email: {
    nl: "E-mail",
    en: "Email",
  },
  moreInfo: {
    buttonLabel: {
      nl: "Meer info",
      en: "More info",
    },
    tabs: {
      overview: {
        title: {
          nl: "Overzicht",
          en: "Overview",
        },
        gift: {
          nl: "Cadeautip",
          en: `Gift idea`,
        },
        orSupriseUs: {
          nl: "of verras ons!",
          en: `or suprise us!`,
        },
      },
      hotels: {
        title: {
          nl: "Overnachten",
          en: "Hotels",
        },
      },
      contact: {
        questions: {
          nl: `Heb je nog vragen? Heb je je uitnodiging al beantwoord, maar is er toch nog iets gewijzigd?`,
          en: `Do you have questions? Already responded to the invitation, but something changed?`,
        },
        letUsKnow: {
          nl: `Contacteer ons via`,
          en: `Let us know at`,
        },
      },
    },
  },
  cantMakeIt: {
    title: {
      nl: `Da's jammer!`,
      en: `Sorry you can't make it!`,
    },
    message: {
      nl: `We zullen je missen op de dansvloer! Laat ons nog even weten wie je bent, dan noteren we dat je er niet bij kan zijn.`,
      en: `You’ll be missed on the dance floor! Please let us know your name, so we can note you can’t be there.`,
    },
    inputs: {},
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
                
                Gelieve je aanwezigheid te bevestigen voor 20 augustus.`,
        en: `We're getting married on September 29th 2023. We'd love to celebrate with you!
                
                Please RSVP before August 20th.`,
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
    },
  },
  confirmationReceived: {
    title: {
      nl: `Bedankt om te bevestigen`,
      en: `Thanks for confirming`,
    },
    happyYoullBeThere: {
      nl: `Fijn dat je erbij zal zijn!`,
      en: `We’re glad you’ll be there!`,
    },
    infoEmailSoon: {
      nl: `Je krijgt binnenkort van ons een bevestigingsmail waarin je alle info terugvindt. Tot snel!`,
      en: `We’ll send you a confirmation email soon, where you can find all the information needed. See you soon!`,
    },
  },
  cancellationReceived: {
    title: {
      nl: `Bedankt om iets te laten weten`,
      en: `Thanks for letting us know`,
    },
    message: {
      nl: `We hebben je informatie goed ontvangen. Jammer dat je er niet bij kan
      zijn!`,
      en: `We’ve received your information. We’re sorry you can’t be there!`,
    },
  },
};

export function trans(
  translation: Translation,
  language: SupportedLanguage
): string {
  return translation[language];
}
