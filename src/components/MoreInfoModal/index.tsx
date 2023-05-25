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

export const MoreInfoModal = (
  props: Pick<ModalProps, "isOpen" | "onClose">
) => {
  const clipboard = useClipboard("shannaensam@gmail.com");
  const toast = useToast();
  const [isEnglish, setIsEnglish] = useState(false);

  const onEmail = () => {
    clipboard.onCopy();
    toast({ title: "E-mailadres gekopieerd.", status: "success" });
  };
  return (
    <Modal {...props} size={['full',"lg"]} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontFamily={"heading"} fontSize={['4xl',"5xl"]}>
          {!isEnglish ? "Wij gaan trouwen!" : "We're getting married!"}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody fontSize={['md',"lg"]}>
          {isEnglish ? (
            <MainContentEnglish onEmail={onEmail} />
          ) : (
            <MainContentDutch onEmail={onEmail} />
          )}
                      <Heading mt={5} fontSize={'3xl'}>Shanna & Sam</Heading>

        </ModalBody>

        <ModalFooter>
              <Spacer />
          <ButtonGroup isAttached >
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

const MainContentDutch = ({ onEmail }: { onEmail(): void }) => {
  return (
    <Stack>
      <Text>
        Ja ja, 't is zover! Na 13 jaar als pubers aan elkaar te kleven, zetten
        we nu de stap naar een serieuze, volwassen relatie.
      </Text>

      <Text>
        Op <b>vrijdag 29 september</b> zeggen wij 'Ja', 'Oui', 'Si' en 'Da'
        tegen elkaar. Als je deze Save The Date leest, ben je alvast uitgenodigd.
      </Text>

      <Text>
        Het feest zal beginnen in de vooravond, in{" "}
        <b>Gasthof Ter Venne in Aarschot</b>. Concrete info sturen we binnenkort
        door.
      </Text>
      <Text>
        Als je er niet bij kan zijn of al vragen hebt, mag je ons al iets laten
        weten via{" "}
        <Button
          variant="link"
          fontSize={"lg"}
          fontFamily={"body"}
          onClick={onEmail}
          colorScheme={"bermuda"}
          >
          shannaensam@gmail.com
        </Button>{" "}
        - of door één van ons een bericht te sturen.
      </Text>
      <Text>Hopelijk tot dan!</Text>
    </Stack>
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
        If you can't make it, or already have questions, you can let us
        know via{" "}
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
