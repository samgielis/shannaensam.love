import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Stack,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { trans, translations } from "../../translations";
import { Hideable, StepProps } from "./index";

export const Step2 = ({ language, invitation, onNext }: StepProps) => {
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
