import { Dispatch, SetStateAction } from 'react';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import {
  Box,
  Button,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material';

import STEPS from '../../../../constants/steps';
import ProgressDesktopStepperStyles from './ProgressDesktopStepperStyles';

interface VerticalProgressDesktopStepperProps {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}
function VerticalProgressDesktopStepper({
  step,
  setStep,
}: VerticalProgressDesktopStepperProps) {
  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <Box width="364px">
      <Stepper
        sx={ProgressDesktopStepperStyles.verticalStepperDots}
        activeStep={step}
        orientation="vertical"
      >
        {STEPS.map((stepInfo, index) => (
          <Step key={stepInfo.label}>
            <StepLabel>
              <Typography
                letterSpacing="-0.1em"
                color={step === index ? 'white' : '#5D7FA3'}
                fontSize="16px"
                lineHeight="24px"
                fontWeight={500}
              >
                {stepInfo.label}
              </Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <Stack mt={12} justifyContent="space-between" direction="row">
        <Button
          sx={{
            background: '#134267',
            color: '#93A8C1',
          }}
          size="small"
          onClick={handleBack}
          disabled={step === 0}
        >
          <KeyboardArrowLeft />
          Back
        </Button>
        <Button
          sx={{
            background: '#134267',
            color: '#93A8C1',
          }}
          size="small"
          onClick={handleNext}
          disabled={step === 3}
        >
          Next
          <KeyboardArrowRight />
        </Button>
      </Stack>
    </Box>
  );
}
export default VerticalProgressDesktopStepper;
