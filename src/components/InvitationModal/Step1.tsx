import { Button, ButtonGroup, Heading, Stack, Text } from "@chakra-ui/react";
import { trans, translations } from "../../translations";
import { StepProps } from "./index";

export const Step1 = ({
  language,
  onNext,
  onCantMakeIt,
}: StepProps & { onCantMakeIt(): void }) => {
  return (
    <Stack border="1px solid" borderColor="gray.200" p={3} borderRadius={"lg"}>
      <Text>{trans(translations.invitation.step1.content, language)}</Text>
      <Heading fontSize={"3xl"}>Shanna & Sam</Heading>
      <ButtonGroup alignSelf={"center"}>
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
