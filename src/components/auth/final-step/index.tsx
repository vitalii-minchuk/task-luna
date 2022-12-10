import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Grow,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';

import checkMark from '../../../assets/images/checkMark.png';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { connectShop } from '../../../store/slice/authSlice';
import { setDisabledNext } from '../../../store/slice/stepperSlice';
import finalStepStyles from './FinalStepStyles';

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
      <Stack sx={finalStepStyles(isTablet).wrapper}>
        <Stack
          width="100%"
          pt="15vh"
          justifyContent="center"
          alignItems="center"
        >
          <Box sx={finalStepStyles(isTablet).imageBox}>
            <img
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              src={checkMark}
              alt="check mark"
            />
          </Box>
          <Typography sx={finalStepStyles(isTablet).title}>
            {`${user?.name}, You’re ready to go!`}
          </Typography>
          <Typography sx={finalStepStyles(isTablet).text}>
            Chad doesn’t support mobile browsers. To access your dashboard,
            login from your laptop or desktop computer.
          </Typography>
          <Button
            sx={finalStepStyles(isTablet).button}
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
