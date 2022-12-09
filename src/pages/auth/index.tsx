import { useState } from 'react';
import { Box, Stack, Typography, useMediaQuery } from '@mui/material';

import AuthStepper from '../../components/auth/auth-stepper';
import ProgressStepper from '../../components/auth/progress';
import authPageStyles from './authPageStyles';
import ChadLogoSVG from '../../assets/svgs/ChadLogoSVG';

function AuthPage() {
  const [step, setStep] = useState(0);
  const isDesktop = useMediaQuery('(max-width:1194px)');

  return (
    <Box sx={authPageStyles.wrapper}>
      <Box sx={authPageStyles.container}>
        <Stack direction={isDesktop ? 'column' : 'row'}>
          {step === 0 && (
            <Stack
              bgcolor="#fff"
              px="32px"
              pt="20px"
              pb="16px"
              alignItems="center"
              direction="row"
            >
              <ChadLogoSVG />
              <Typography fontWeight={700} lineHeight="32px" fontSize="24px">
                Chad
              </Typography>
            </Stack>
          )}
          <ProgressStepper step={step} setStep={setStep} />
          <AuthStepper step={step} />
        </Stack>
      </Box>
    </Box>
  );
}

export default AuthPage;
