import { Button, useClipboard, useToast } from "@chakra-ui/react";

export const EmailLink = ({ email }: { email: string }) => {
  const clipboard = useClipboard(email);
  const toast = useToast();

  const onEmail = () => {
    clipboard.onCopy();
    toast({ title: "E-mailadres gekopieerd.", status: "success" });
  };
  return (
    <Button
      variant="link"
      fontSize={"lg"}
      fontFamily={"body"}
      onClick={onEmail}
      colorScheme={"bermuda"}
      display="inline-block"
    >
      {email}
    </Button>
  );
};
