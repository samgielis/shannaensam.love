import {
  Button,
  Card,
  CardBody,
  Checkbox,
  CheckboxGroup,
  FormControl,
  Heading,
  Stack,
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
    <Stack>
      {tier === 1 && (
        <Card variant="outline">
          <CardBody>
            <Stack spacing={3}>
              <Stack spacing={0}>
                <Heading size="md" fontFamily="Quicksand" color="bermuda.500">
                  Stadhuis Diest
                </Heading>
                <Text color={"gray.500"}>Grote markt 1, 3290 Diest</Text>
              </Stack>
              <Checkbox
                ml={2}
                value="stadhuis"
                ref={joinsCivilWeddingInputRef}
                colorScheme={"bermuda"}
              >
                {`13${h}30`} -{" "}
                {trans(translations.invitation.step3.civilWedding, language)}
              </Checkbox>
            </Stack>
          </CardBody>
        </Card>
      )}
      <Card variant="outline">
        <CardBody>
          <Stack spacing={3}>
            <FormControl>
              <CheckboxGroup
                colorScheme="green"
                defaultValue={["stadhuis", "ceremonie", "diner", "feest"]}
              >
                <Stack spacing={3}>
                  <Stack spacing={0}>
                    <Heading
                      size="md"
                      fontFamily="Quicksand"
                      color="bermuda.500"
                    >
                      Gasthof Ter Venne
                    </Heading>
                    <Text color={"gray.500"}>
                      Diepvenstraat 2, 3201 Aarschot
                    </Text>
                  </Stack>
                  <Stack>
                    {tier === 1 && (
                      <Checkbox
                        colorScheme={"bermuda"}
                        ml={2}
                        value="ceremonie"
                        ref={joinsCeremonyInputRef}
                      >
                        18{h} -{" "}
                        {trans(
                          translations.invitation.step3.ceremony,
                          language
                        )}
                      </Checkbox>
                    )}
                    {tier < 3 && (
                      <Checkbox
                        ml={2}
                        value="diner"
                        ref={joinsDinerInputRef}
                        colorScheme={"bermuda"}
                      >
                        19{h} -{" "}
                        {trans(translations.invitation.step3.diner, language)}
                      </Checkbox>
                    )}
                    <Checkbox
                      ml={2}
                      value="feest"
                      ref={joinsPartyInputRef}
                      colorScheme={"bermuda"}
                    >
                      22{h} -{" "}
                      {trans(translations.invitation.step3.party, language)}
                    </Checkbox>
                  </Stack>
                </Stack>
              </CheckboxGroup>
            </FormControl>
          </Stack>
        </CardBody>
      </Card>
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
        colorScheme={"bermuda"}
      >
        {trans(translations.next, language)}
      </Button>
    </Stack>
  );
};
