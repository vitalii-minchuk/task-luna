import {
  Box,
  Button,
  Grow,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import checkMark from '../../../assets/images/checkMark.png';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { connectShop } from '../../../store/slice/authSlice';
import { setDisabledNext } from '../../../store/slice/stepperSlice';

function FinalStep() {
  const { user, accessToken } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const isTablet = useMediaQuery('(max-width:834px)');
  const navigate = useNavigate();

  const handleContinue = () => dispatch(connectShop());

  useEffect(() => {
    if (accessToken) {
      navigate('/');
    }
  }, [accessToken, navigate]);

  useEffect(() => {
    dispatch(setDisabledNext(true));
  }, [dispatch]);

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
            <img
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              src={checkMark}
              alt="check mark"
            />
          </Box>
          <Typography
            fontWeight={500}
            align="center"
            color="#134267"
            lineHeight="120%"
            fontSize="16px"
            pb="8px"
          >
            {`${user?.name}, You’re ready to go!`}
          </Typography>
          <Typography
            align="center"
            color="#4F637D"
            lineHeight="21px"
            fontSize="14px"
            pb="24px"
          >
            Chad doesn’t support mobile browsers. To access your dashboard,
            login from your laptop or desktop computer.
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
            Ok
          </Button>
        </Stack>
      </Stack>
    </Grow>
  );
}

export default FinalStep;
