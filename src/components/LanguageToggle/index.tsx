import { Button, ButtonGroup, Flex, Spacer } from "@chakra-ui/react";
import { SupportedLanguage } from "../../translations";

interface LanguageToggleProps {
  currentLanguage: SupportedLanguage;
  onLanguageChange(newLanguage: SupportedLanguage): void;
}
export const LanguageToggle = ({
  currentLanguage,
  onLanguageChange,
}: LanguageToggleProps): JSX.Element => {
  return (
    <Flex>
      <Spacer />
      <ButtonGroup isAttached>
        <Button
          fontSize={"lg"}
          isActive={currentLanguage === "nl"}
          onClick={() => onLanguageChange("nl")}
        >
          🇧🇪
        </Button>
        <Button
          fontSize={"lg"}
          isActive={currentLanguage === "en"}
          onClick={() => onLanguageChange("en")}
        >
          🇬🇧
        </Button>
      </ButtonGroup>
      <Spacer />
    </Flex>
  );
};
