import { Grow, Stack, Typography } from '@mui/material';
import MobileStepper from '@mui/material/MobileStepper';

import STEPS from '../../../../constants/steps';
import ProgressDesktopStepperStyles from './ProgressDesktopStepperStyles';

interface HorizontalProgressDesktopStepperProps {
  step: number;
}

function HorizontalProgressDesktopStepper({
  step,
}: HorizontalProgressDesktopStepperProps) {
  return (
    <Stack alignItems="center" width="364px" gap={2}>
      <Grow in>
        <Stack
          direction="row"
          gap={4}
          alignItems="center"
          sx={ProgressDesktopStepperStyles.description}
        >
          <Typography fontWeight={700} fontSize="32px">
            5X
          </Typography>
          <Typography>{STEPS[step].description}</Typography>
        </Stack>
      </Grow>
      <MobileStepper
        sx={ProgressDesktopStepperStyles.horizontalStepperDots}
        steps={4}
        position="static"
        activeStep={step}
        nextButton={null}
        backButton={null}
      />
    </Stack>
  );
}

export default HorizontalProgressDesktopStepper;
