import {
  Button,
  ButtonGroup,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  Spacer,
  Stack,
  Text,
  useClipboard,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { Invitation } from "../../data/Invitations";

type InvitationModalProps = Pick<ModalProps, "isOpen" | "onClose"> & {
  invitation: Invitation;
};
export const InvitationModal = ({
  invitation,
  ...props
}: InvitationModalProps) => {
  const clipboard = useClipboard("shannaensam@gmail.com");
  const toast = useToast();
  const [isEnglish, setIsEnglish] = useState(false);

  const onEmail = () => {
    clipboard.onCopy();
    toast({ title: "E-mailadres gekopieerd.", status: "success" });
  };
  return (
    <Modal {...props} size={["full", "lg"]} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontFamily={"heading"} fontSize={["4xl", "5xl"]}>
          {!isEnglish
            ? "Kom je ook?" + invitation.aanspreking
            : "We're getting married!"}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody fontSize={["md", "lg"]}>
          {isEnglish ? (
            <MainContentEnglish onEmail={onEmail} />
          ) : (
            <MainContentEnglish onEmail={onEmail} />
          )}
          <Heading mt={5} fontSize={"3xl"}>
            Shanna & Sam
          </Heading>
        </ModalBody>

        <ModalFooter>
          <Spacer />
          <ButtonGroup isAttached>
            <Button
              fontSize={"lg"}
              isActive={!isEnglish}
              onClick={() => setIsEnglish(false)}
            >
              🇧🇪
            </Button>
            <Button
              fontSize={"lg"}
              isActive={isEnglish}
              onClick={() => setIsEnglish(true)}
            >
              🇬🇧
            </Button>
          </ButtonGroup>
          <Spacer />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const MainContentEnglish = ({ onEmail }: { onEmail(): void }) => {
  return (
    <Stack>
      <Text>
        Would you look at that! After 13 years of teenage love, we're now taking
        a step towards a serious, adult relationship.
      </Text>

      <Text>
        On <b>Friday the 29th of September</b> we'll be saying 'Ja', 'Oui, 'Si'
        and 'I do'. If you see this Save The Date, you're invited.
      </Text>

      <Text>
        The party will start in the late afternoon, in{" "}
        <b>Gasthof Ter Venne, Aarschot</b>. We'll send you more concrete
        information later on.
      </Text>
      <Text>
        If you can't make it, or already have questions, you can let us know via{" "}
        <Button
          variant="link"
          fontSize={"lg"}
          fontFamily={"body"}
          onClick={onEmail}
          colorScheme={"bermuda"}
        >
          shannaensam@gmail.com
        </Button>{" "}
        - or by messaging one of us.
      </Text>
      <Text>Hope to see you then!</Text>
    </Stack>
  );
};
