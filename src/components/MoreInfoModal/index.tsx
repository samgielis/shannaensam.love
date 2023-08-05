import {
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
import { HotelCard } from "./HotelCard";

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
              <Tab>Timeline</Tab>
              <Tab>Overnachten</Tab>
              <Tab>Contact</Tab>
            </TabList>

            <TabPanels flex={1} overflow="auto">
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel px={2}>
                <Stack>
                  <HotelCard
                    name="B & B “De Meren”"
                    address="Merenstraat 40, Langdorp"
                    distanceKm={1}
                    url="demeren.com"
                  />
                  <HotelCard
                    name="B & B “Zinnen en minnen”"
                    address="Kipdorp 11, Herselt"
                    distanceKm={7}
                    url="zinnenenminnen.be"
                  />
                  <HotelCard
                    name="Hotel ‘s Hertogenmolens"
                    address="Demerstraat 1, Aarschot"
                    distanceKm={6}
                    url="lodge-hotels.be/nl/hotels/b/s-hertogenmolens-aarschot"
                  />
                  <HotelCard
                    name="B & B “De Zil”"
                    address="Zillekespad 2, Herselt"
                    distanceKm={6}
                    url="dezil.be"
                  />
                  <HotelCard
                    name="B & B Ramslo"
                    address="Oude Steenovenweg 35, Ramsel"
                    distanceKm={7}
                    url="ramslo.be"
                  />
                  <HotelCard
                    name="Charmehotel “Pluimpapaver”"
                    address="Nopstal 51, Rillaar"
                    distanceKm={8}
                    url="pluimpapaver.eu"
                  />
                  <HotelCard
                    name="B & B “De Winning”"
                    address="Brielstraat 35, Messelbroek"
                    distanceKm={10}
                    url="dewinningmesselbroek.be"
                  />
                  <HotelCard
                    name="B & B “Vossendries”"
                    address="Grootveld 1, Nieuwrode"
                    distanceKm={11}
                    url="vossendries.com"
                  />
                  <HotelCard
                    name="B & B “Mon Dieu”"
                    address="Molenstraat 36, Scherpenheuvel"
                    distanceKm={12}
                    url="mon-dieu.be"
                  />
                </Stack>
              </TabPanel>
              <TabPanel>
                <Stack>
                  <Text>
                    Heb je nog vragen? Heb je je uitnodiging al beantwoord, maar
                    is er toch nog iets gewijzigd?
                  </Text>
                  <Text>
                    Contacteer ons via{" "}
                    <EmailLink email="shannaensam@gmail.com" />
                  </Text>
                </Stack>
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
