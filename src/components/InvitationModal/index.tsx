import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  CheckboxGroup,
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
  useDisclosure,
  useSteps,
  VStack,
} from "@chakra-ui/react";
import React, { PropsWithChildren, useRef, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { Invitation } from "../../data/Invitations";
import { RSVP } from "../../data/RSVP";
import { SupportedLanguage, trans, translations } from "../../translations";
import { CantMakeItModal } from "../CantMakeItModal";
import { LanguageToggle } from "../LanguageToggle";

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
              <form name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
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

const Hideable = ({ children, hidden }: HideableProps) => {
  return (
    <Box overflow={"hidden"} height={hidden ? 0 : "unset"}>
      {children}
    </Box>
  );
};

interface StepProps {
  language: SupportedLanguage;
  onNext: (rsvpUpdate: Partial<RSVP>) => void;
  invitation: Invitation;
}

const Step1 = ({
  language,
  onNext,
  onCantMakeIt,
}: StepProps & { onCantMakeIt(): void }) => {
  return (
    <Stack border="1px solid" borderColor="gray.200" p={3} borderRadius={"lg"}>
      <Text>{trans(translations.invitation.step1.content, language)}</Text>
      <Heading fontSize={"3xl"}>Shanna & Sam</Heading>
      <ButtonGroup alignSelf={"end"} size={["sm", "md"]}>
        <Button colorScheme={"green"} onClick={() => onNext({})}>
          {trans(translations.invitation.step1.accept, language)}
        </Button>
        <Button colorScheme={"red"} onClick={onCantMakeIt}>
          {trans(translations.invitation.step1.decline, language)}
        </Button>
      </ButtonGroup>
    </Stack>
  );
};

const Step2 = ({ language, invitation, onNext }: StepProps) => {
  const emailInputRef = React.createRef<HTMLInputElement>();
  const [amountOfPeople, setAmountOfPeople] = useState(1);
  const nameInputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const [canContinue, setCanContinue] = useState(false);

  const updateValidity = () => {
    if (!emailInputRef.current || !nameInputRefs.current) return;

    const validEmail = !!emailInputRef.current?.checkValidity();
    const validAmount = amountOfPeople > 0 && amountOfPeople < 11;
    const amountOfValidNames = nameInputRefs.current.reduce(
      (acc, input) => acc + (!!input?.checkValidity() ? 1 : 0),
      0
    );

    setCanContinue(
      validEmail && validAmount && amountOfValidNames >= amountOfPeople
    );
  };

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
        <Input
          ref={emailInputRef}
          type="email"
          name="email"
          onChange={updateValidity}
        />
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
            onChange={(_, valueAsNumber) => {
              setAmountOfPeople(Math.min(Math.max(valueAsNumber || 0, 1), 10));
              setTimeout(updateValidity);
            }}
          >
            <NumberInputField onChange={() => setTimeout(updateValidity)} />
            <NumberInputStepper>
              <NumberIncrementStepper
                onClick={() => setTimeout(updateValidity)}
              />
              <NumberDecrementStepper
                onClick={() => setTimeout(updateValidity)}
              />
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
              ref={(el) => (nameInputRefs.current[index] = el)}
              onChange={updateValidity}
            />
          ))}
        </Stack>
      </FormControl>
      <Button
        onClick={() => {
          onNext({
            email: emailInputRef.current?.value,
            amountOfPeople,
            names:
              nameInputRefs.current.map((input) => input?.value || "") || [],
          });
        }}
        colorScheme={"green"}
        isDisabled={!canContinue}
      >
        {trans(translations.next, language)}
      </Button>
    </Stack>
  );
};

const Step3 = ({ language, invitation, onNext }: StepProps) => {
  const { tier } = invitation;
  const h = trans(translations.hourAsLetter, language);

  const joinsCivilWeddingInputRef = React.createRef<HTMLInputElement>();
  const joinsCeremonyInputRef = React.createRef<HTMLInputElement>();
  const joinsDinerInputRef = React.createRef<HTMLInputElement>();
  const joinsPartyInputRef = React.createRef<HTMLInputElement>();

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
                <Checkbox
                  ml={2}
                  value="stadhuis"
                  ref={joinsCivilWeddingInputRef}
                >
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
                  <Checkbox
                    ml={2}
                    value="ceremonie"
                    ref={joinsCeremonyInputRef}
                  >
                    18{h} -{" "}
                    {trans(translations.invitation.step3.ceremony, language)}
                  </Checkbox>
                )}
                {tier < 3 && (
                  <Checkbox ml={2} value="diner" ref={joinsDinerInputRef}>
                    19{h} -{" "}
                    {trans(translations.invitation.step3.diner, language)}
                  </Checkbox>
                )}
                <Checkbox ml={2} value="feest" ref={joinsPartyInputRef}>
                  22{h} - {trans(translations.invitation.step3.party, language)}
                </Checkbox>
              </Stack>
            </Stack>
          </Stack>
        </CheckboxGroup>
      </FormControl>
      <Button
        onClick={() => {
          onNext({
            joinsCivilWedding:
              joinsCivilWeddingInputRef.current?.checked || false,
            joinsCeremony: joinsCeremonyInputRef.current?.checked || false,
            joinsDiner: joinsDinerInputRef.current?.checked || false,
            joinsParty: joinsPartyInputRef.current?.checked || false,
          });
        }}
        colorScheme={"green"}
      >
        {trans(translations.next, language)}
      </Button>
    </Stack>
  );
};

const Step4 = ({
  language,
  invitation,
  rsvp,
  onNext,
}: StepProps & { rsvp: RSVP }) => {
  const { tier } = invitation;
  const notesInputRef = React.createRef<HTMLTextAreaElement>();
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
          ref={notesInputRef}
          placeholder={trans(
            translations.invitation.step4.notes.placeholder,
            language
          )}
        />
      </FormControl>

      <Button
        colorScheme={"green"}
        onClick={() => {
          onNext({ notes: notesInputRef.current?.value || "" });
        }}
      >
        {trans(translations.confirm, language)}
      </Button>
    </Stack>
  );
};

const ConfirmationEmoji = ({ joins }: { joins: boolean }) => {
  return <span>{joins ? `✅` : `❌`}</span>;
};
