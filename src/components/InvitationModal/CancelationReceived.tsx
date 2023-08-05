import { Center, Spacer, Text, VStack } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";
import { trans, translations } from "../../translations";

export const CancellationReceived = () => {
  const { language } = useLanguage();
  return (
    <VStack flex={1}>
      <Spacer />
      <VStack>
        <Center color="loveGreen.600" fontSize={"5xl"} mb={5}>
          <FaCheckCircle></FaCheckCircle>
        </Center>
        <Text fontSize={"lg"} textAlign="center">
          {trans(translations.cancellationReceived.message, language)}
        </Text>
      </VStack>
      <Spacer />
    </VStack>
  );
};
