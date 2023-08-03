import { Button, ButtonGroup, Flex, Spacer } from "@chakra-ui/react";
import { useLanguage } from "../../context/LanguageContext";

export const LanguageToggle = (): JSX.Element => {
  const { language, setLanguage } = useLanguage();
  return (
    <Flex>
      <Spacer />
      <ButtonGroup isAttached>
        <Button
          fontSize={"lg"}
          isActive={language === "nl"}
          onClick={() => setLanguage("nl")}
        >
          🇧🇪
        </Button>
        <Button
          fontSize={"lg"}
          isActive={language === "en"}
          onClick={() => setLanguage("en")}
        >
          🇬🇧
        </Button>
      </ButtonGroup>
      <Spacer />
    </Flex>
  );
};
