import { useEffect } from 'react';
import { Grow, Stack, Typography, useMediaQuery } from '@mui/material';

import ChadLogoSVG from '../../../assets/svgs/ChadLogoSVG';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { setDisabledNext } from '../../../store/slice/stepperSlice';
import ProgressStepper from '../progress';
import RegisterUserInputFields from './RegisterUserInputFields';

function RegisterUserForm() {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const isDesktop = useMediaQuery('(max-width:1194px)');
  const isTablet = useMediaQuery('(max-width:834px)');

  useEffect(() => {
    if (user) {
      dispatch(setDisabledNext(false));
    }
  }, [dispatch, user]);

  return (
    <Grow in mountOnEnter unmountOnExit>
      <Stack
        width={isTablet ? '100%' : '540px'}
        height={isTablet ? '100vh' : '700px'}
        marginX={isTablet ? '0' : 'auto'}
        marginTop={isTablet ? '0' : '8vh'}
        bgcolor="#fff"
        boxShadow="0px 5px 20px rgba(108, 117, 139, 0.2)"
        px="32px"
        pt="20px"
        pb="16px"
      >
        <Stack alignItems="center" direction="row" pb="16px">
          <ChadLogoSVG />
          <Typography fontWeight={700} lineHeight="32px" fontSize="24px">
            Chad
          </Typography>
        </Stack>

        {isDesktop && <ProgressStepper />}

        <Stack pt={isDesktop ? '48px' : '0'}>
          <Typography
            pb="8px"
            color="#134267"
            lineHeight="120%"
            fontWeight={600}
            fontSize="24px"
          >
            Welcome to Chad
          </Typography>
          <Typography lineHeight="21px" fontSize="14px" color="#4F637D">
            Go live in 10 minutes! Our self-service widget empowers your
            customers to manage orders and track shipments 24/7 without driving
            you crazy.
          </Typography>
        </Stack>

        <RegisterUserInputFields />

        <Typography
          align="center"
          color="#4F637D"
          lineHeight="18px"
          fontSize="12px"
        >
          Already have an account?
          <Typography
            color="skyblue"
            lineHeight="18px"
            fontSize="12px"
            component="span"
            sx={{
              cursor: 'pointer',
              ':hover': {
                textDecoration: 'underline',
              },
            }}
          >
            Login
          </Typography>
        </Typography>
      </Stack>
    </Grow>
  );
}

export default RegisterUserForm;
