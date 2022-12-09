import { Box, Button, Stack, Typography, useMediaQuery } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import checkMark from '../../../assets/images/checkMark.png';

interface GoogleConnectionResultProps {
  setStep: Dispatch<SetStateAction<number>>;
}

function GoogleConnectionResult({ setStep }: GoogleConnectionResultProps) {
  const isTablet = useMediaQuery('(max-width:834px)');

  const handleContinue = () => {
    setStep((prevStep) => prevStep + 1);
  };

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
          Response received
        </Typography>
        <Typography
          align="center"
          color="#4F637D"
          lineHeight="21px"
          fontSize="14px"
          pb="24px"
        >
          Thank you for your interest in Chad! We’ll be hard at work building
          integrations to support your email client.
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
          Done
        </Button>
      </Stack>
    </Stack>
  );
}

export default GoogleConnectionResult;
