import { Box, Stack, useMediaQuery } from '@mui/material';

import AuthStepper from '../../components/auth/auth-stepper';
import ProgressStepper from '../../components/auth/progress';
import Loader from '../../components/common/loader';
import { useAppSelector } from '../../hooks';
import authPageStyles from './authPageStyles';

function AuthPage() {
  const { isLoading } = useAppSelector((state) => state.auth);
  const isDesktop = useMediaQuery('(max-width:1194px)');

  return (
    <>
      <Box sx={authPageStyles.wrapper}>
        <Box sx={authPageStyles.container}>
          {isLoading ? (
            <Loader />
          ) : (
            <Stack direction="row">
              {!isDesktop && <ProgressStepper />}
              <AuthStepper />
            </Stack>
          )}
        </Box>
      </Box>
    </>
  );
}

export default AuthPage;
