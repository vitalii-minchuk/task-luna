import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Box, Button, MobileStepper, Typography } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { goBack, goNext } from '../../../../store/slice/stepperSlice';
import ProgressMobileStepperStyles from './ProgressMobileStepperStyles';

export default function ProgressMobileStepper() {
  const { step, disabledNext } = useAppSelector((state) => state.stepper);
  const dispatch = useAppDispatch();

  const handleNext = () => dispatch(goNext());

  const handleBack = () => dispatch(goBack());

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
              disabled={disabledNext}
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
