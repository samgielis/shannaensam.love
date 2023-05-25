import * as React from "react";
import {
  ChakraProvider,
  Box,
  VStack,
  Heading,
  Stack,
  Button,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import { customTheme } from "./theme";
import { MoreInfoModal } from "./components/MoreInfoModal";

export const App = () => {
  
  const {isOpen, onClose, onOpen} = useDisclosure();

  return <ChakraProvider theme={customTheme}>
  <Box>
    <Image pos='absolute' w='100vw' h='100vh' objectFit={'cover'} src={`bg-xs.jpg`}  zIndex='-1' filter='blur(2px)'/>
    <Image pos='absolute' w='100vw' h='100vh' objectFit={'cover'} srcSet={`bg-md.jpg 2048w, bg-lg.jpg 4096w, bg-full.jpg 4096w`}/>
      <Box
        textAlign="center"
        color="white"
        fontSize="xl"
        h="100vh"
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
            <Stack spacing={[-2, -4, -5]} >
              <Heading
                fontSize={['7xl','8xl',"9xl"]}
                fontFamily={"Euphoria Script"}
                >
                Shanna & Sam
              </Heading>
              <Heading
                fontSize={['2xl', '4xl',"5xl"]}
                color="bermuda.200"
                fontFamily={"Quicksand"}
                >
                29 September 2023
              </Heading>
            </Stack>
            <Button colorScheme={'loveCopper'} size={['md',"lg"]} onClick={onOpen}>
              Meer info
            </Button>
            <MoreInfoModal isOpen={isOpen} onClose={onClose}/>
          </VStack>
        </Box>
      </Box>
    </Box>
  </ChakraProvider>
  
}