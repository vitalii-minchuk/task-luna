import { useMediaQuery } from '@mui/material';

import ProgressDesktopStepper from './desktop-stepper';
import ProgressMobileStepper from './mobile-stepper';

function ProgressStepper() {
  const isDesktop = useMediaQuery('(max-width:1194px)');
  return isDesktop ? <ProgressMobileStepper /> : <ProgressDesktopStepper />;
}

export default ProgressStepper;
