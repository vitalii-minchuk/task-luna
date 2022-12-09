import { useMediaQuery } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import ProgressDesktopStepper from './desktop-stepper';
import ProgressMobileStepper from './mobile-stepper';

interface ProgressStepperProps {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}

function ProgressStepper({ step, setStep }: ProgressStepperProps) {
  const isDesktop = useMediaQuery('(max-width:1194px)');
  return isDesktop ? (
    <ProgressMobileStepper step={step} setStep={setStep} />
  ) : (
    <ProgressDesktopStepper step={step} setStep={setStep} />
  );
}

export default ProgressStepper;
