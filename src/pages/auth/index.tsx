import { Box, Stack, useMediaQuery } from '@mui/material';
import { useState } from 'react';

import AuthStepper from '../../components/auth/auth-stepper';
import ProgressStepper from '../../components/auth/progress';
import authPageStyles from './authPageStyles';

function AuthPage() {
  const [step, setStep] = useState(0);
  const isDesktop = useMediaQuery('(max-width:1194px)');

  return (
    <Box sx={authPageStyles.wrapper}>
      <Box sx={authPageStyles.container}>
        <Stack direction="row">
          {!isDesktop && <ProgressStepper step={step} setStep={setStep} />}
          <AuthStepper step={step} setStep={setStep} />
        </Stack>
      </Box>
    </Box>
  );
}

export default AuthPage;
