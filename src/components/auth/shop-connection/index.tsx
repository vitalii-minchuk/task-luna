import {
  Box,
  Button,
  Fade,
  Grow,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useEffect } from 'react';
import ChadLogoSVG from '../../../assets/svgs/ChadLogoSVG';
import TickSVG from '../../../assets/svgs/TickSVG';
import CHOP_INFO from '../../../constants/shop-connection-info';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { registerUser } from '../../../store/slice/authSlice';
import { setDisabledNext } from '../../../store/slice/stepperSlice';
import ProgressStepper from '../progress';
import ShopConnectionResult from './ShopConnectionResult';

function ShopConnection() {
  const { shop } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const isDesktop = useMediaQuery('(max-width:1194px)');
  const isTablet = useMediaQuery('(max-width:834px)');

  const handleShopConnection = () => {
    dispatch(registerUser());
  };

  useEffect(() => {
    if (shop) {
      dispatch(setDisabledNext(false));
    } else {
      dispatch(setDisabledNext(true));
    }
  }, [dispatch, shop]);

  return (
    <>
      {shop ? (
        <ShopConnectionResult shop={shop} />
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
                Connect to Shopify Store
              </Typography>
              <Typography lineHeight="21px" fontSize="14px" color="#4F637D">
                Installs the Chad widget in your Shopify store and sets it up to
                display your customers’ order information and self-serve
                options.
              </Typography>
            </Stack>
            <Stack
              bgcolor="#F8F9FC"
              borderRadius="8px"
              my="32px"
              p="16px"
              gap="16px"
            >
              {CHOP_INFO.map((item) => (
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
            <Button
              sx={{
                background: '#32ABF2',
                borderRadius: '8px',
                fontWeight: '500',
                fontSize: '14px',
                lineHeight: '21px',
                textTransform: 'none',
              }}
              variant="contained"
              onClick={handleShopConnection}
            >
              Connect store
            </Button>
            <Typography
              mt="16px"
              align="center"
              color="#4F637D"
              lineHeight="18px"
              fontSize="12px"
            >
              I don’t use Shopify
            </Typography>
          </Stack>
        </Grow>
      )}
    </>
  );
}

export default ShopConnection;
