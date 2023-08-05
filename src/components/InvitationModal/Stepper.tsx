import {
  HStack,
  Step,
  StepIcon,
  StepIndicator,
  StepNumber,
  Stepper,
  StepSeparator,
  StepStatus,
} from "@chakra-ui/react";

interface InvitationStepperProps {
  activeStep: number;
  setActiveStep(step: number): void;
}

export const InvitationStepper = ({
  activeStep,
  setActiveStep,
}: InvitationStepperProps) => {
  return (
    <Stepper
      size="md"
      index={activeStep}
      gap="0"
      w="full"
      colorScheme={"bermuda"}
    >
      {[0, 1, 2, 3].map((index) => (
        <Step
          key={index}
          onClick={
            index < 2 || index < activeStep
              ? () => setActiveStep(index)
              : undefined
          }
          as={HStack}
          gap={0}
          spacing={0}
          m={0}
        >
          <StepIndicator
            ml={0}
            cursor={index < 2 || index < activeStep ? "pointer" : "unset"}
          >
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>
          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
};
