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
import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { trans, translations } from "../../translations";

type CantMakeItModalProps = Pick<ModalProps, "isOpen" | "onClose"> & {};
export const CantMakeItModal = ({ ...props }: CantMakeItModalProps) => {
  const { language } = useLanguage();
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
          </VStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
