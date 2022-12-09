import { Box, Button, Stack, Typography, useMediaQuery } from '@mui/material';
import { Shop } from '../../../types';

interface ShopConnectionResultProps {
  shop: Shop;
}

function ShopConnectionResult({ shop }: ShopConnectionResultProps) {
  const isTablet = useMediaQuery('(max-width:834px)');

  return (
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
      <Stack width="100%" pt="15vh" justifyContent="center" alignItems="center">
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
          Use your desktop to access Chad
        </Typography>
        <Typography
          align="center"
          color="#4F637D"
          lineHeight="21px"
          fontSize="14px"
          pb="24px"
        >
          Chad doesn’t support mobile browsers. To access your dashboard, login
          from your laptop or desktop computer.
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
        >
          Ok
        </Button>
        <Typography
          pt="8px"
          align="center"
          color="#4F637D"
          lineHeight="18px"
          fontSize="12px"
        >
          Not xyz@triceps.com?
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
            Login
          </Typography>
        </Typography>
      </Stack>
    </Stack>
  );
}

export default ShopConnectionResult;
