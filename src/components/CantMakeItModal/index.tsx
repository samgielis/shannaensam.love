import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { SupportedLanguage, trans, translations } from "../../translations";
import { LanguageToggle } from "../LanguageToggle";

type CantMakeItModalProps = Pick<ModalProps, "isOpen" | "onClose"> & {};
export const CantMakeItModal = ({ ...props }: CantMakeItModalProps) => {
  const [language, setLanguage] = useState<SupportedLanguage>("nl");
  const initialRef = React.useRef(null);

  return (
    <Modal {...props} size={"md"} isCentered closeOnOverlayClick={false}>
      <ModalOverlay />
      <ModalContent maxH={"full"} overflow="auto">
        <ModalHeader>
          {trans(translations.cantMakeIt.title, language)}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <VStack spacing={4}>
            <Text>{trans(translations.cantMakeIt.message, language)}</Text>
            <FormControl isRequired>
              <FormLabel>{trans(translations.name, language)}</FormLabel>
              <Input ref={initialRef} />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>{trans(translations.email, language)}</FormLabel>
              <Input />
            </FormControl>

            <FormControl>
              <FormLabel>
                {trans(translations.invitation.step4.notes.label, language)}
              </FormLabel>
              <Textarea />
            </FormControl>
          </VStack>
        </ModalBody>

        <ModalFooter>
          <VStack w="full">
            <ButtonGroup alignSelf={"end"} size={"md"}>
              <Button colorScheme="gray" onClick={props.onClose}>
                {trans(translations.cancel, language)}
              </Button>
              <Button colorScheme="green">
                {trans(translations.confirm, language)}
              </Button>
            </ButtonGroup>
            <LanguageToggle
              currentLanguage={language}
              onLanguageChange={setLanguage}
            />
          </VStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
