import {
  Button,
  ButtonGroup,
  Flex,
  Heading,
  HStack,
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
  Step,
  StepIcon,
  StepIndicator,
  StepNumber,
  Stepper,
  StepSeparator,
  StepStatus,
  Text,
  useClipboard,
  useSteps,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { Invitation } from "../../data/Invitations";
import { SupportedLanguage, trans } from "./InvitationModal.trans";

type InvitationModalProps = Pick<ModalProps, "isOpen" | "onClose"> & {
  invitation: Invitation;
};
export const InvitationModal = ({
  invitation,
  ...props
}: InvitationModalProps) => {
  const clipboard = useClipboard("shannaensam@gmail.com");
  const toast = useToast();
  const [language, setLanguage] = useState<SupportedLanguage>("nl");

  const onEmail = () => {
    clipboard.onCopy();
    toast({ title: "E-mailadres gekopieerd.", status: "success" });
  };

  const steps = [
    { title: trans("invitation.step1.title", language) },
    { title: "Contactgegevens" },
    { title: "RSVP" },
    { title: "Samenvatting" },
  ];

  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  });

  return (
    <Modal
      {...props}
      size={["full", "lg"]}
      isCentered
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontFamily={"heading"} fontSize={["4xl", "5xl"]}>
          {trans("invitation.title", language)}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody fontSize={["md", "lg"]}>
          <Stack>
            <Text fontSize={"xl"}>
              <b>{steps[activeStep].title}</b>
            </Text>
            {activeStep === 0 && <Step1 language={language} />}
          </Stack>
        </ModalBody>

        <ModalFooter>
          <VStack w="full">
            <Stepper size="md" index={activeStep} gap="0" w="full">
              {steps.map((step, index) => (
                <Step
                  key={index}
                  onClick={() => setActiveStep(index)}
                  as={HStack}
                  gap={0}
                  spacing={0}
                  m={0}
                >
                  <StepIndicator ml={0} cursor="pointer">
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
            <Flex>
              <Spacer />
              <ButtonGroup isAttached>
                <Button
                  fontSize={"lg"}
                  isActive={language === "nl"}
                  onClick={() => setLanguage("nl")}
                >
                  🇧🇪
                </Button>
                <Button
                  fontSize={"lg"}
                  isActive={language === "en"}
                  onClick={() => setLanguage("en")}
                >
                  🇬🇧
                </Button>
              </ButtonGroup>
              <Spacer />
            </Flex>
          </VStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const Step1 = ({ language }: { language: SupportedLanguage }) => {
  return (
    <Stack>
      <Text>{trans("invitation.step1.content", language)}</Text>
      <Heading fontSize={"3xl"}>Shanna & Sam</Heading>
    </Stack>
  );
};
