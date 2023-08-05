import {
  Button,
  Checkbox,
  CheckboxGroup,
  FormControl,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { trans, translations } from "../../translations";
import { StepProps } from "./index";

export const Step3 = ({ language, invitation, onNext }: StepProps) => {
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
