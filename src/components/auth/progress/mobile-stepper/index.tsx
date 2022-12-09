import { Dispatch, SetStateAction } from 'react';

import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import MobileStepper from '@mui/material/MobileStepper';
import ProgressMobileStepperStyles from './ProgressMobileStepperStyles';

interface ProgressMobileStepperProps {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}

export default function ProgressMobileStepper({
  step,
  setStep,
}: ProgressMobileStepperProps) {
  const handleNext = () => {
    setStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={ProgressMobileStepperStyles.wrapper}>
      <Typography color="#4F637D" lineHeight="18px" fontSize="12px">
        Step {step + 1} of 4
      </Typography>
      <Box position="relative">
        <MobileStepper
          variant="progress"
          steps={4}
          position="static"
          activeStep={step}
          sx={ProgressMobileStepperStyles.progress}
          nextButton={
            <Button
              sx={ProgressMobileStepperStyles.nextButton}
              size="small"
              onClick={handleNext}
              disabled={step === 3}
            >
              Next
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button
              sx={ProgressMobileStepperStyles.backButton}
              size="small"
              onClick={handleBack}
              disabled={step === 0}
            >
              <KeyboardArrowLeft />
              Back
            </Button>
          }
        />
      </Box>
    </Box>
  );
}
