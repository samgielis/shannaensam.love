import {
  Box,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  Stack,
  Step,
  StepIcon,
  StepIndicator,
  StepNumber,
  Stepper,
  StepSeparator,
  StepStatus,
  Text,
  useDisclosure,
  useSteps,
  VStack,
} from "@chakra-ui/react";
import { PropsWithChildren, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { Invitation } from "../../data/Invitations";
import { RSVP } from "../../data/RSVP";
import { SupportedLanguage, trans, translations } from "../../translations";
import { CantMakeItModal } from "../CantMakeItModal";
import { LanguageToggle } from "../LanguageToggle";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";
import { Step4 } from "./Step4";

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
  return (
    <>
      <CantMakeItModal isOpen={isCantMakeItOpen} onClose={onCloseCantMakeIt} />
      <Modal
        {...props}
        size={["full", "lg"]}
        isCentered
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent maxH={"full"} overflow="auto">
          <ModalHeader fontFamily={"heading"} fontSize={["4xl", "4xl"]}>
            {trans(translations.invitation.title, language)}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody fontSize={["md", "lg"]}>
            <Stack spacing={4}>
              <Text fontSize={"lg"}>
                <b>{steps[activeStep].title}</b>
              </Text>
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
            </Stack>
          </ModalBody>

          <ModalFooter>
            <VStack w="full">
              <Stepper size="md" index={activeStep} gap="0" w="full">
                {steps.map((step, index) => (
                  <Step
                    key={index}
                    onClick={
                      index < 2 || index < activeStep
                        ? () => setActiveStep(index)
                        : undefined
                    }
                    as={HStack}
                    gap={0}
                    spacing={0}
                    m={0}
                  >
                    <StepIndicator
                      ml={0}
                      cursor={
                        index < 2 || index < activeStep ? "pointer" : "unset"
                      }
                    >
                      <StepStatus
                        complete={<StepIcon />}
                        incomplete={<StepNumber />}
                        active={<StepNumber />}
                      />
                    </StepIndicator>
                    <StepSeparator />
                  </Step>
                ))}
              </Stepper>
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
