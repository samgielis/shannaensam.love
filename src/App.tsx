import * as React from "react";
import {
  ChakraProvider,
  Box,
  VStack,
  Heading,
  Stack,
  Button,
  useDisclosure,
  Switch,
  HStack,
} from "@chakra-ui/react";
import { customTheme } from "./theme";
import { MoreInfoModal } from "./components/MoreInfoModal";

export const App = () => {
  
  const {isOpen, onClose, onOpen} = useDisclosure();

  return <ChakraProvider theme={customTheme}>
  <Box>
      <Box
        textAlign="center"
        color="white"
        fontSize="xl"
        h="100vh"
        bgImage={"bg3.jpg"}
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
                shadow={"lg"}
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