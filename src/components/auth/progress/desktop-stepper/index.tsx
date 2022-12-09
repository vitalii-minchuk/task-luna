import { Dispatch, SetStateAction } from 'react';
import { Stack } from '@mui/material';

import HorizontalProgressDesktopStepper from './HorizontalProgressDesktopStepper';
import VerticalProgressDesktopStepper from './VerticalProgressDesktopStepper';
import ProgressDesktopStepperStyles from './ProgressDesktopStepperStyles';

interface ProgressDesktopStepperProps {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}
function ProgressDesktopStepper({
  step,
  setStep,
}: ProgressDesktopStepperProps) {
  return (
    <Stack
      alignItems="center"
      justifyContent="space-between"
      sx={ProgressDesktopStepperStyles.wrapper}
    >
      <VerticalProgressDesktopStepper step={step} setStep={setStep} />
      <HorizontalProgressDesktopStepper step={step} />
    </Stack>
  );
}
export default ProgressDesktopStepper;
