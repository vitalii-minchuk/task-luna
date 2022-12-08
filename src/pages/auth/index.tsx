import { useState } from 'react';
import { Box } from '@mui/material';

import AuthStepper from '../../components/auth/auth-stepper';
import ProgressStepper from '../../components/auth/progress';
import authPageStyles from './authPageStyles';

function AuthPage() {
  const [step, setStep] = useState(0);
  return (
    <Box sx={authPageStyles.wrapper}>
      <Box sx={authPageStyles.container}>
        <ProgressStepper step={step} setStep={setStep} />
        <AuthStepper step={step} />
      </Box>
    </Box>
  );
}

export default AuthPage;
