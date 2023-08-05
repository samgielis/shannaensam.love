import {
  Card,
  CardBody,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  ModalProps,
  Spacer,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { EmailLink } from "../EmailLink";
import { LanguageToggle } from "../LanguageToggle";
import { HotelsTab } from "./HotelsTab";
import { TimelineTab } from "./TimelineTab";

export const MoreInfoModal = (
  props: Pick<ModalProps, "isOpen" | "onClose">
) => {
  return (
    <Modal {...props} size={["full", "xl"]} isCentered>
      <ModalOverlay />
      <ModalContent maxH={["full", "70vh"]} display={"flex"} overflow="hidden">
        <ModalCloseButton />
        <ModalBody
          fontSize={["lg", "lg"]}
          px={0}
          flex={1}
          maxH={["full", "70vh"]}
          display="flex"
        >
          <Tabs
            colorScheme={"loveCopper"}
            size="lg"
            px={0}
            flex={1}
            overflow="auto"
            display="flex"
            flexDir={"column"}
          >
            <TabList>
              <Tab>Overzicht</Tab>
              <Tab>Overnachten</Tab>
              <Tab>Contact</Tab>
            </TabList>

            <TabPanels flex={1} overflow="auto">
              <TabPanel>
                <TimelineTab />
              </TabPanel>
              <TabPanel px={[2, 4]}>
                <HotelsTab />
              </TabPanel>
              <TabPanel>
                <Card variant={"outline"}>
                  <CardBody>
                    <Stack>
                      <Text>
                        Heb je nog vragen? Heb je je uitnodiging al beantwoord,
                        maar is er toch nog iets gewijzigd?
                      </Text>
                      <Text>
                        Contacteer ons via{" "}
                        <EmailLink email="shannaensam@gmail.com" />
                      </Text>
                    </Stack>
                  </CardBody>
                </Card>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>

        <ModalFooter>
          <Spacer />
          <LanguageToggle />
          <Spacer />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
