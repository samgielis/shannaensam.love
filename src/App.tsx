import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { InvitationModal } from "./components/InvitationModal";
import { Invitation, INVITATIONS } from "./data/Invitations";
import { Layout } from "./Layout";
import { customTheme } from "./theme";

export const App = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
};

interface InvitationScreenProps {
  invitation: Invitation;
}
const InvitationScreen = ({ invitation }: InvitationScreenProps) => {
  const props = useDisclosure({ defaultIsOpen: true });
  return (
    <Layout>
      <InvitationModal invitation={invitation} {...props} />
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
  ...INVITATIONS.map((invitation) => {
    return {
      path: invitationSlug(invitation),
      element: <InvitationScreen invitation={invitation} />,
    };
  }),
]);

function invitationSlug(invitation: Invitation): string {
  return `/uitnodiging-${invitation.aanspreking.replaceAll(" ", "-")}`;
}
