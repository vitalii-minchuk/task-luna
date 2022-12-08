import { Dispatch, SetStateAction } from 'react';

import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Typography } from '@mui/material';

interface ProgressMobileStepperProps {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}

export default function ProgressMobileStepper({
  step,
  setStep,
}: ProgressMobileStepperProps) {
  const theme = useTheme();

  const handleNext = () => {
    setStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <Typography>Step {step + 1}</Typography>
      <MobileStepper
        variant="progress"
        steps={4}
        position="static"
        activeStep={step}
        sx={{ maxWidth: 400, flexGrow: 1 }}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={step === 3}>
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={step === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </>
  );
}
