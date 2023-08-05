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
import { useLanguage } from "../../context/LanguageContext";
import { trans, translations } from "../../translations";
import { EmailLink } from "../EmailLink";
import { LanguageToggle } from "../LanguageToggle";
import { HotelsTab } from "./HotelsTab";
import { TimelineTab } from "./TimelineTab";

export const MoreInfoModal = (
  props: Pick<ModalProps, "isOpen" | "onClose">
) => {
  const { language } = useLanguage();
  return (
    <Modal {...props} size={["full", "xl"]} isCentered>
      <ModalOverlay />
      <ModalContent maxH={["full", "80vh"]} display={"flex"} overflow="hidden">
        <ModalCloseButton />
        <ModalBody
          fontSize={["lg", "lg"]}
          px={0}
          pb={0}
          maxH={["100vh", "80vh"]}
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
              <Tab>
                {trans(translations.moreInfo.tabs.overview.title, language)}
              </Tab>
              <Tab>
                {trans(translations.moreInfo.tabs.hotels.title, language)}
              </Tab>
              <Tab>Contact</Tab>
            </TabList>

            <TabPanels flex={1} overflow="auto" maxH="full">
              <TabPanel pb={0} px={[2, 4]}>
                <TimelineTab />
              </TabPanel>
              <TabPanel px={[2, 4]}>
                <HotelsTab />
              </TabPanel>
              <TabPanel pb={0} px={[2, 4]}>
                <Card variant={"outline"}>
                  <CardBody>
                    <Stack>
                      <Text>
                        {trans(
                          translations.moreInfo.tabs.contact.questions,
                          language
                        )}
                      </Text>
                      <Text>
                        {trans(
                          translations.moreInfo.tabs.contact.letUsKnow,
                          language
                        )}{" "}
                        <EmailLink email="shannaensam@gmail.com" />
                      </Text>
                    </Stack>
                  </CardBody>
                </Card>
              </TabPanel>
              <ModalFooter>
                <Spacer />
                <LanguageToggle />
                <Spacer />
              </ModalFooter>
            </TabPanels>
          </Tabs>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
