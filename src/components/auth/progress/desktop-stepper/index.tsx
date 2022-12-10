import { Grow, Stack } from '@mui/material';

import HorizontalProgressDesktopStepper from './HorizontalProgressDesktopStepper';
import ProgressDesktopStepperStyles from './ProgressDesktopStepperStyles';
import VerticalProgressDesktopStepper from './VerticalProgressDesktopStepper';

function ProgressDesktopStepper() {
  return (
    <Grow in mountOnEnter unmountOnExit>
      <Stack
        alignItems="center"
        justifyContent="space-between"
        sx={ProgressDesktopStepperStyles.wrapper}
      >
        <VerticalProgressDesktopStepper />
        <HorizontalProgressDesktopStepper />
      </Stack>
    </Grow>
  );
}
export default ProgressDesktopStepper;
