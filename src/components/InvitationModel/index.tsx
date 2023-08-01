import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  CheckboxGroup,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Input,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Spacer,
  Stack,
  StackDivider,
  Step,
  StepIcon,
  StepIndicator,
  StepNumber,
  Stepper,
  StepSeparator,
  StepStatus,
  Text,
  Textarea,
  UnorderedList,
  useSteps,
  VStack,
} from "@chakra-ui/react";
import React, { PropsWithChildren, useState } from "react";
import { Invitation } from "../../data/Invitations";
import { RSVP } from "../../data/RSVP";
import {
  SupportedLanguage,
  trans,
  translations,
} from "./InvitationModal.trans";

type InvitationModalProps = Pick<ModalProps, "isOpen" | "onClose"> & {
  invitation: Invitation;
};
export const InvitationModal = ({
  invitation,
  ...props
}: InvitationModalProps) => {
  const [language, setLanguage] = useState<SupportedLanguage>("nl");

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

  const rsvp: RSVP = {
    email: "jos@gielis.com",
    amountOfPeople: 2,
    names: ["Jos", "Greta"],
    notes: "Ja hallo wij zijn gelukkig",
    joinsCivilWedding: true,
    joinsCeremony: true,
    joinsDiner: true,
    joinsParty: false,
  };

  return (
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
            <form name="contact" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              <Hideable hidden={activeStep !== 0}>
                <Step1 language={language} onNext={() => setActiveStep(1)} />
              </Hideable>
              <Hideable hidden={activeStep !== 1}>
                <Step2 language={language} invitation={invitation} />
              </Hideable>
              <Hideable hidden={activeStep !== 2}>
                <Step3 language={language} invitation={invitation} />
              </Hideable>
              <Hideable hidden={activeStep !== 3}>
                <Step4
                  language={language}
                  invitation={invitation}
                  rsvp={rsvp}
                />
              </Hideable>
            </form>
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

type HideableProps = PropsWithChildren<{ hidden: boolean }>;

const Hideable = ({ children, hidden }: HideableProps) => {
  return (
    <Box overflow={"hidden"} height={hidden ? 0 : "unset"}>
      {children}
    </Box>
  );
};
const Step1 = ({
  language,
  onNext,
}: {
  language: SupportedLanguage;
  onNext: () => void;
}) => {
  return (
    <Stack border="1px solid" borderColor="gray.200" p={3} borderRadius={"lg"}>
      <Text>{trans(translations.invitation.step1.content, language)}</Text>
      <Heading fontSize={"3xl"}>Shanna & Sam</Heading>
      <ButtonGroup alignSelf={"end"} size={["sm", "md"]}>
        <Button colorScheme={"green"} onClick={onNext}>
          {trans(translations.invitation.step1.accept, language)}
        </Button>
        <Button colorScheme={"red"}>
          {trans(translations.invitation.step1.decline, language)}
        </Button>
      </ButtonGroup>
    </Stack>
  );
};

const Step2 = ({
  language,
  invitation,
}: {
  language: SupportedLanguage;
  invitation: Invitation;
}) => {
  const amountInputRef = React.createRef<HTMLInputElement>();
  const [amountOfPeople, setAmountOfPeople] = useState(1);
  return (
    <Stack
      spacing={4}
      border="1px solid"
      borderColor="gray.200"
      p={3}
      borderRadius={"lg"}
    >
      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input type="email" name="email" />
        <FormHelperText>
          {trans(translations.invitation.step2.inputs.email.helpText, language)}
        </FormHelperText>
      </FormControl>

      <Hideable hidden={!invitation.plusOne}>
        <FormControl isRequired>
          <FormLabel>
            {trans(translations.invitation.step2.inputs.amount.label, language)}
          </FormLabel>
          <NumberInput
            defaultValue={1}
            min={1}
            max={10}
            ref={amountInputRef}
            onChange={(_, valueAsNumber) =>
              setAmountOfPeople(Math.min(Math.max(valueAsNumber || 0, 1), 10))
            }
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
      </Hideable>

      <FormControl isRequired>
        <FormLabel>
          {trans(
            translations.invitation.step2.inputs.listOfPeople.label,
            language
          )}
        </FormLabel>
        <Stack>
          {Array.from(Array(amountOfPeople).keys()).map((index) => (
            <Input
              key={index}
              type="name"
              name="name"
              placeholder={`${trans(
                translations.invitation.step2.inputs.listOfPeople.placeholder,
                language
              )} ${index + 1}`}
              isRequired
            />
          ))}
        </Stack>
      </FormControl>
    </Stack>
  );
};

const Step3 = ({
  language,
  invitation,
}: {
  language: SupportedLanguage;
  invitation: Invitation;
}) => {
  const { tier } = invitation;
  const h = trans(translations.hourAsLetter, language);
  return (
    <Stack
      spacing={3}
      mt={1}
      border="1px solid"
      borderColor="gray.200"
      p={3}
      borderRadius={"lg"}
    >
      <FormControl>
        <CheckboxGroup
          colorScheme="green"
          defaultValue={["stadhuis", "ceremonie", "diner", "feest"]}
        >
          <Stack spacing={4} divider={<StackDivider />}>
            {tier === 1 && (
              <Stack spacing={3}>
                <Stack spacing={0}>
                  <Text fontSize={"lg"} fontWeight={"bold"}>
                    Stadhuis Diest
                  </Text>
                  <Text fontSize={"sm"} opacity=".8">
                    Grote markt 1, 3290 Diest
                  </Text>
                </Stack>
                <Checkbox ml={2} value="stadhuis">
                  {`13${h}30`} -{" "}
                  {trans(translations.invitation.step3.civilWedding, language)}
                </Checkbox>
              </Stack>
            )}
            <Stack spacing={3}>
              <Stack spacing={0}>
                <Text fontSize={"lg"} fontWeight={"bold"}>
                  Gasthof Ter Venne
                </Text>
                <Text fontSize={"sm"} opacity=".8">
                  Diepvenstraat 2, 3201 Aarschot
                </Text>
              </Stack>
              <Stack>
                {tier === 1 && (
                  <Checkbox ml={2} value="ceremonie">
                    18{h} -{" "}
                    {trans(translations.invitation.step3.ceremony, language)}
                  </Checkbox>
                )}
                {tier < 3 && (
                  <Checkbox ml={2} value="diner">
                    19{h} -{" "}
                    {trans(translations.invitation.step3.diner, language)}
                  </Checkbox>
                )}
                <Checkbox ml={2} value="feest">
                  22{h} - {trans(translations.invitation.step3.party, language)}
                </Checkbox>
              </Stack>
            </Stack>
          </Stack>
        </CheckboxGroup>
      </FormControl>
    </Stack>
  );
};

const Step4 = ({
  language,
  invitation,
  rsvp,
}: {
  language: SupportedLanguage;
  invitation: Invitation;
  rsvp: RSVP;
}) => {
  const { tier } = invitation;
  const h = trans(translations.hourAsLetter, language);
  return (
    <Stack
      spacing={3}
      mt={1}
      border="1px solid"
      borderColor="gray.200"
      p={3}
      borderRadius={"lg"}
    >
      <UnorderedList>
        <ListItem>
          {trans(translations.invitation.step4.canContact, language)}{" "}
          <b>{rsvp.email}</b>
        </ListItem>
        <ListItem>
          {rsvp.amountOfPeople === 1 ? (
            trans(translations.invitation.step4.peopleComing.single, language)
          ) : (
            <>
              <b>{rsvp.amountOfPeople}</b>{" "}
              {trans(
                translations.invitation.step4.peopleComing.multiple,
                language
              )}
            </>
          )}
          :
          <UnorderedList>
            {tier === 1 && (
              <ListItem>
                <ConfirmationEmoji joins={rsvp.joinsCivilWedding} />{" "}
                <b>
                  {trans(translations.invitation.step3.civilWedding, language)}
                </b>
              </ListItem>
            )}
            {tier === 1 && (
              <ListItem>
                <ConfirmationEmoji joins={rsvp.joinsCeremony} />{" "}
                <b>{trans(translations.invitation.step3.ceremony, language)}</b>
              </ListItem>
            )}
            {tier < 3 && (
              <ListItem>
                <ConfirmationEmoji joins={rsvp.joinsDiner} />{" "}
                <b>{trans(translations.invitation.step3.diner, language)}</b>
              </ListItem>
            )}
            <ListItem>
              <ConfirmationEmoji joins={rsvp.joinsParty} />{" "}
              <b>{trans(translations.invitation.step3.party, language)}</b>
            </ListItem>
          </UnorderedList>
        </ListItem>
      </UnorderedList>
      <FormControl>
        <FormLabel>
          {trans(translations.invitation.step4.notes.label, language)}
        </FormLabel>
        <Textarea
          placeholder={trans(
            translations.invitation.step4.notes.placeholder,
            language
          )}
        />
      </FormControl>

      <Button colorScheme={"green"}>
        {trans(translations.invitation.step4.confirm, language)}
      </Button>
    </Stack>
  );
};

const ConfirmationEmoji = ({ joins }: { joins: boolean }) => {
  return <span>{joins ? `✅` : `❌`}</span>;
};
