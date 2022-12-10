import {
  Box,
  Button,
  Fade,
  Grow,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useAppDispatch } from '../../../hooks';
import { goNext } from '../../../store/slice/stepperSlice';
import { Shop } from '../../../types';

interface ShopConnectionResultProps {
  shop: Shop;
}

function ShopConnectionResult({ shop }: ShopConnectionResultProps) {
  const isTablet = useMediaQuery('(max-width:834px)');
  const dispatch = useAppDispatch();

  const handleContinue = () => dispatch(goNext());

  return (
    <Grow in mountOnEnter unmountOnExit>
      <Stack
        width={isTablet ? '100%' : '479px'}
        height={isTablet ? '100vh' : '519px'}
        marginX={isTablet ? '0' : 'auto'}
        marginTop={isTablet ? '0' : '8vh'}
        bgcolor="#fff"
        boxShadow="0px 5px 20px rgba(108, 117, 139, 0.2)"
        px="32px"
        pt="20px"
        pb="16px"
      >
        <Stack
          width="100%"
          pt="15vh"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            mb="22px"
            width="100px"
            height="100px"
            borderRadius="50%"
            overflow="hidden"
          >
            {shop?.shop_logo_url && (
              <img
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                src={shop.shop_logo_url}
                alt="shop img"
              />
            )}
          </Box>
          <Typography
            fontWeight={500}
            align="center"
            color="#134267"
            lineHeight="120%"
            fontSize="16px"
            pb="8px"
          >
            Store Connected
          </Typography>
          <Typography
            align="center"
            color="#4F637D"
            lineHeight="21px"
            fontSize="14px"
            pb="24px"
          >
            {`Chad is now able to manage customer support requests for ${shop?.shop_name}.`}
          </Typography>
          <Button
            sx={{
              width: '100%',
              background: '#32ABF2',
              borderRadius: '8px',
              fontWeight: '500',
              fontSize: '14px',
              lineHeight: '21px',
              textTransform: 'none',
            }}
            variant="contained"
            type="submit"
            onClick={handleContinue}
          >
            Continue
          </Button>
          <Typography
            pt="8px"
            align="center"
            color="#4F637D"
            lineHeight="18px"
            fontSize="12px"
          >
            Wrong store?
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
              {' '}
              Connect another one
            </Typography>
          </Typography>
        </Stack>
      </Stack>
    </Grow>
  );
}

export default ShopConnectionResult;
