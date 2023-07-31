import {
  Box,
  Button,
  Heading,
  Image,
  Stack,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { MoreInfoModal } from "./components/MoreInfoModal";

const fullcreenProps = {
  h: "100vh",
  w: "100vw",
  minH: "-webkit-fill-available",
};

export const Layout = ({ children }: PropsWithChildren) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Box>
      <Image
        pos="absolute"
        {...fullcreenProps}
        objectFit={"cover"}
        src={`bg-xs.jpg`}
        zIndex="-1"
        filter="blur(2px)"
      />
      <Image
        pos="absolute"
        {...fullcreenProps}
        objectFit={"cover"}
        srcSet={`bg-md.jpg 2048w, bg-lg.jpg 4096w, bg-full.jpg 4096w`}
      />
      <Box
        textAlign="center"
        color="white"
        fontSize="xl"
        {...fullcreenProps}
        //bgImage={`image-set(url("bg-xs.jpg") .2x, url("bg-sm.jpg") .5x, url("bg-md.jpg") .8x, url("bg-lg.jpg") 1x, url("bg-full.jpg") 2x)`}
        bgSize={"cover"}
        bgPos={"center"}
      >
        <Box
          pos="absolute"
          pb={16}
          bottom={0}
          w="full"
          bg="linear-gradient(0deg, rgba(0,0,0,.7) 0%, rgba(0,212,255,0) 100%);"
        >
          <VStack fontWeight={"bold"} w="full" spacing={5}>
            <Stack spacing={[-2, -4, -5]}>
              <Heading
                fontSize={["7xl", "8xl", "9xl"]}
                fontFamily={"Euphoria Script"}
              >
                Shanna & Sam
              </Heading>
              <Heading
                fontSize={["2xl", "4xl", "5xl"]}
                color="bermuda.200"
                fontFamily={"Quicksand"}
              >
                29 September 2023
              </Heading>
            </Stack>
            <Button
              colorScheme={"loveCopper"}
              size={["md", "lg"]}
              onClick={onOpen}
            >
              Meer info
            </Button>
            <MoreInfoModal isOpen={isOpen} onClose={onClose} />
            {children}
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};
