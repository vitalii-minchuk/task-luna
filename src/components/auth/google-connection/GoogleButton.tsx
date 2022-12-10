import { Box, Button } from '@mui/material';

import GoogleLogoSVG from '../../../assets/svgs/GoogleLogoSVG';

interface GoogleButtonProps {
  handleGoogleConnection: () => void;
}

function GoogleButton({ handleGoogleConnection }: GoogleButtonProps) {
  return (
    <Button
      variant="contained"
      sx={{
        p: '0',
        width: '100%',
        height: '50px',
        backgroundColor: '#5383EC',
        border: '1px solid #5383EC',
        borderRadius: '2px',
        display: 'flex',
        alignItems: 'center',
        textTransform: 'none',
        color: 'white',
      }}
      onClick={handleGoogleConnection}
    >
      <Box width="48px" height="48px" borderRadius="1px">
        <GoogleLogoSVG />
      </Box>
      <Box flexGrow={1}>Connect Gmail account</Box>
    </Button>
  );
}

export default GoogleButton;
