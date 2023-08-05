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
}: StepProps & { onCantMakeIt(): void }) => {
  return (
    <Card variant="outline">
      <CardBody>
        <Stack>
          <Text>{trans(translations.invitation.step1.content, language)}</Text>
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
