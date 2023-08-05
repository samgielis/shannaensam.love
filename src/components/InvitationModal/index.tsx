import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  Stack,
  Text,
  useDisclosure,
  useSteps,
  VStack,
} from "@chakra-ui/react";
import { PropsWithChildren, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { Invitation } from "../../data/Invitations";
import { RSVP } from "../../data/RSVP";
import { SupportedLanguage, trans, translations } from "../../translations";
import { CantMakeItModal } from "../CantMakeItModal";
import { LanguageToggle } from "../LanguageToggle";
import { CancellationReceived } from "./CancelationReceived";
import { RSVPReceived } from "./RSVPReceived";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";
import { Step4 } from "./Step4";
import { InvitationStepper } from "./Stepper";

type InvitationModalProps = Pick<ModalProps, "isOpen" | "onClose"> & {
  invitation: Invitation;
};
export const InvitationModal = ({
  invitation,
  ...props
}: InvitationModalProps) => {
  const { language } = useLanguage();
  const {
    isOpen: isCantMakeItOpen,
    onOpen: onOpenCantMakeIt,
    onClose: onCloseCantMakeIt,
  } = useDisclosure();

  const [searchParams] = useSearchParams();

  const rsvpSuccess = searchParams.get("rsvpd") === "true";
  const cancellationSucces = searchParams.get("cancelled") === "true";

  const steps = [
    { title: trans(translations.invitation.step1.title, language) },
    { title: trans(translations.invitation.step2.title, language) },
    { title: trans(translations.invitation.step3.title, language) },
    { title: trans(translations.invitation.step4.title, language) },
  ];

  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  });

  const stepProps = { language, invitation };
  const [rsvp, setRSVP] = useState<RSVP>({
    email: "",
    amountOfPeople: 1,
    names: [],
    notes: "",
    joinsCivilWedding: false,
    joinsCeremony: false,
    joinsDiner: false,
    joinsParty: false,
  });

  const headerText = rsvpSuccess
    ? trans(translations.confirmationReceived.title, language)
    : cancellationSucces
    ? trans(translations.cancellationReceived.title, language)
    : trans(translations.invitation.title, language);

  const showSteps = !rsvpSuccess && !cancellationSucces;

  return (
    <>
      <CantMakeItModal isOpen={isCantMakeItOpen} onClose={onCloseCantMakeIt} />
      <Modal
        {...props}
        size={["full", "lg"]}
        isCentered
        closeOnOverlayClick={!showSteps}
      >
        <ModalOverlay />
        <ModalContent maxH={"full"} overflow="auto">
          <ModalHeader
            fontFamily={"heading"}
            fontSize={["4xl", "4xl"]}
            px={[4, 6]}
          >
            {headerText}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody fontSize={["md", "lg"]} display="flex" px={[4, 6]}>
            <Stack flex={1}>
              {rsvpSuccess && <RSVPReceived />}
              {cancellationSucces && <CancellationReceived />}
              {showSteps && (
                <Text fontSize={["md", "lg"]}>
                  <b>{steps[activeStep].title}</b>
                </Text>
              )}
              {showSteps && (
                <div>
                  <Hideable hidden={activeStep !== 0}>
                    <Step1
                      {...stepProps}
                      onNext={(rsvpUpdate) => {
                        setRSVP({ ...rsvp, ...rsvpUpdate });
                        setActiveStep(1);
                      }}
                      onCantMakeIt={onOpenCantMakeIt}
                    />
                  </Hideable>
                  <Hideable hidden={activeStep !== 1}>
                    <Step2
                      {...stepProps}
                      onNext={(rsvpUpdate) => {
                        setRSVP({ ...rsvp, ...rsvpUpdate });
                        setActiveStep(2);
                      }}
                    />
                  </Hideable>
                  <Hideable hidden={activeStep !== 2}>
                    <Step3
                      {...stepProps}
                      onNext={(rsvpUpdate) => {
                        setRSVP({ ...rsvp, ...rsvpUpdate });
                        setActiveStep(3);
                      }}
                    />
                  </Hideable>
                  <Hideable hidden={activeStep !== 3}>
                    <Step4
                      {...stepProps}
                      rsvp={rsvp}
                      onNext={(rsvpUpdate) => {
                        setRSVP({ ...rsvp, ...rsvpUpdate });
                        alert(JSON.stringify(rsvp));
                      }}
                      onNoteChange={(notes) =>
                        setRSVP({ ...rsvp, notes: notes || "" })
                      }
                    />
                  </Hideable>
                </div>
              )}
            </Stack>
          </ModalBody>

          <ModalFooter>
            <VStack w="full">
              {showSteps && (
                <InvitationStepper
                  activeStep={activeStep}
                  setActiveStep={setActiveStep}
                />
              )}
              <LanguageToggle />
            </VStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

type HideableProps = PropsWithChildren<{ hidden: boolean }>;

export const Hideable = ({ children, hidden }: HideableProps) => {
  return (
    <Box overflow={"hidden"} height={hidden ? 0 : "unset"}>
      {children}
    </Box>
  );
};

export interface StepProps {
  language: SupportedLanguage;
  onNext: (rsvpUpdate: Partial<RSVP>) => void;
  invitation: Invitation;
}
