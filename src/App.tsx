import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { InvitationModal } from "./components/InvitationModal";
import { LanguageContext } from "./context/LanguageContext";
import { Invitation, INVITATIONS } from "./data/Invitations";
import { Layout } from "./Layout";
import { customTheme } from "./theme";
import { SupportedLanguage } from "./translations";

export const App = () => {
  const [language, setLanguage] = useState<SupportedLanguage>("nl");
  return (
    <ChakraProvider theme={customTheme}>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <RouterProvider router={router} />
      </LanguageContext.Provider>
    </ChakraProvider>
  );
};

interface InvitationScreenProps {
  invitation: Invitation;
  rsvpSuccess?: boolean;
  cancellationSucces?: boolean;
}
const InvitationScreen = (props: InvitationScreenProps) => {
  const modalProps = useDisclosure({ defaultIsOpen: true });

  return (
    <Layout>
      <InvitationModal {...props} {...modalProps} />
    </Layout>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
  {
    path: "/save-the-date",
    element: <Layout />,
  },
  {
    path: "/info",
    element: <Layout openInfo />,
  },
  {
    path: "/confirmed",
    element: (
      <InvitationScreen
        rsvpSuccess
        invitation={{ aanspreking: "Bedankt", tier: 3, plusOne: false }}
      />
    ),
  },
  {
    path: "/cancelled",
    element: (
      <InvitationScreen
        cancellationSucces
        invitation={{ aanspreking: "Bedankt", tier: 3, plusOne: false }}
      />
    ),
  },
  ...INVITATIONS.map((invitation) => {
    return {
      path: invitationSlug(invitation),
      element: <InvitationScreen invitation={invitation} />,
    };
  }),
]);

function invitationSlug(invitation: Invitation): string {
  return `/uitnodiging-${encodeURIComponent(
    invitation.aanspreking.replaceAll(" ", "-")
  )}`;
}
