/* eslint-disable @typescript-eslint/naming-convention */
import { useEffect } from 'react';
import { Box, Grow, Stack, Typography, useMediaQuery } from '@mui/material';

import ChadLogoSVG from '../../../assets/svgs/ChadLogoSVG';
import TickSVG from '../../../assets/svgs/TickSVG';
import GOOGLE_INFO from '../../../constants/google-connection-info';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { fetchGoogleToken } from '../../../store/slice/authSlice';
import { setDisabledNext } from '../../../store/slice/stepperSlice';
import ProgressStepper from '../progress';
import GoogleButton from './GoogleButton';
import GoogleConnectionResult from './GoogleConnectionResult';

function GoogleConnection() {
  const { google_token } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const isDesktop = useMediaQuery('(max-width:1194px)');
  const isTablet = useMediaQuery('(max-width:834px)');

  const handleGoogleConnection = () => dispatch(fetchGoogleToken());

  useEffect(() => {
    if (google_token) {
      dispatch(setDisabledNext(false));
    } else {
      dispatch(setDisabledNext(true));
    }
  }, [dispatch, google_token]);

  return (
    <>
      {google_token ? (
        <GoogleConnectionResult />
      ) : (
        <Grow in mountOnEnter unmountOnExit>
          <Stack
            width={isTablet ? '100%' : '540px'}
            height={isTablet ? '100vh' : '617px'}
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
                Connect to customer support email
              </Typography>
              <Typography lineHeight="21px" fontSize="14px" color="#4F637D">
                Allows Chad to send automated responses on your behalf from your
                usual support mailbox
              </Typography>
            </Stack>
            <Stack
              bgcolor="#F8F9FC"
              borderRadius="8px"
              my="32px"
              p="16px"
              gap="16px"
            >
              {GOOGLE_INFO.map((item) => (
                <Stack key={item.title} direction="row" gap="14px">
                  <Box mt="-2px">
                    <TickSVG />
                  </Box>
                  <Stack>
                    <Typography
                      color="#134267"
                      fontWeight={500}
                      lineHeight="21px"
                      fontSize="14px"
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      color=" #4F637D"
                      lineHeight="18px"
                      fontSize="12px"
                    >
                      {item.description}
                    </Typography>
                  </Stack>
                </Stack>
              ))}
            </Stack>
            <GoogleButton handleGoogleConnection={handleGoogleConnection} />
            <Typography
              mt="16px"
              align="center"
              color="#4F637D"
              lineHeight="18px"
              fontSize="12px"
            >
              I don’t use Gmail
            </Typography>
          </Stack>
        </Grow>
      )}
    </>
  );
}

export default GoogleConnection;
