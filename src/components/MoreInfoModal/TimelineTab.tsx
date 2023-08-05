import {
  Card,
  CardBody,
  chakra,
  Heading,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { useLanguage } from "../../context/LanguageContext";
import { trans, translations } from "../../translations";

export const TimelineTab = () => {
  const { language } = useLanguage();
  const h = trans(translations.hourAsLetter, language);

  return (
    <Stack>
      <Card variant="outline">
        <CardBody>
          <Stack spacing={3}>
            <Stack spacing={1}>
              <Heading size="md" fontFamily="Quicksand" color="bermuda.500">
                Stadhuis Diest
              </Heading>
              <Text color={"gray.500"}>Grote markt 1, 3290 Diest</Text>
            </Stack>
            <UnorderedList>
              <ListItem>
                {`13${h}30`} -{" "}
                {trans(translations.invitation.step3.civilWedding, language)}
              </ListItem>
            </UnorderedList>
          </Stack>
        </CardBody>
      </Card>

      <Card variant="outline">
        <CardBody>
          <Stack spacing={3}>
            <Stack spacing={1}>
              <Heading size="md" fontFamily="Quicksand" color="bermuda.500">
                Gasthof Ter Venne
              </Heading>
              <Text color={"gray.500"}>Diepvenstraat 2, 3201 Aarschot</Text>
            </Stack>
            <UnorderedList>
              <ListItem ml={2}>
                18{h} -{" "}
                {trans(translations.invitation.step3.ceremony, language)}
              </ListItem>
              <ListItem ml={2}>
                19{h} - {trans(translations.invitation.step3.diner, language)}
              </ListItem>
              <ListItem ml={2}>
                22{h} - {trans(translations.invitation.step3.party, language)}
              </ListItem>
            </UnorderedList>
          </Stack>
        </CardBody>
      </Card>

      <Text textAlign={"center"} fontSize={"md"} pt={4}>
        {trans(translations.moreInfo.tabs.overview.gift, language)}:{" "}
      </Text>
      <Text textAlign={"center"} fontSize="md">
        <chakra.span color={"bermuda.500"}>BE32 0636 2351 2702</chakra.span>{" "}
        {trans(translations.moreInfo.tabs.overview.orSupriseUs, language)}
      </Text>
    </Stack>
  );
};
