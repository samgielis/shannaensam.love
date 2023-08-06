import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { trans, translations } from "../../translations";
import { StepProps } from "./index";

export const Step1 = ({
  language,
  onNext,
  onCantMakeIt,
  invitation,
}: StepProps & { onCantMakeIt(): void }) => {
  const beforeDate =
    invitation.tier === 3
      ? translations.invitation.step1.beforeDate.tier3
      : translations.invitation.step1.beforeDate.default;
  return (
    <Card variant="outline">
      <CardBody>
        <Stack>
          <Text>
            {`${trans(translations.invitation.step1.content, language)} ${trans(
              beforeDate,
              language
            )}.`}
          </Text>
          <Heading fontSize={"3xl"}>Shanna & Sam</Heading>
          <ButtonGroup alignSelf={"center"}>
            <Button colorScheme={"bermuda"} onClick={() => onNext({})}>
              {trans(translations.invitation.step1.accept, language)}
            </Button>
            <Button colorScheme={"loveCopper"} onClick={onCantMakeIt}>
              {trans(translations.invitation.step1.decline, language)}
            </Button>
          </ButtonGroup>
        </Stack>
      </CardBody>
    </Card>
  );
};
