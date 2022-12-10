import { Dispatch, SetStateAction } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';

interface StartModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
function StartModal({ open, setOpen }: StartModalProps) {
  const isTablet = useMediaQuery('(max-width:834px)');
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      sx={{ maxWidth: '434px', mx: 'auto' }}
      open={open}
      onClose={handleClose}
    >
      <DialogTitle
        mt="48px"
        align="center"
        fontWeight={700}
        lineHeight="18px"
        fontSize={isTablet ? '20px' : '24px'}
        color="#134267"
      >
        You’re ready to go! 🚀
      </DialogTitle>
      <Stack
        gap="20px"
        mb="20px"
        lineHeight="24px"
        fontSize={isTablet ? '14px' : '16px'}
        color="#134267"
        sx={{ px: isTablet ? '20px' : '40px' }}
      >
        <Typography component="span">
          A fully loaded self-service portal is now ready to deploy on your
          Shopify store.
        </Typography>
        <Typography component="span">
          We’ve programmed it to follow industry best practices for shipping,
          return & exchange, and payment policy.
        </Typography>
        <Typography component="span">
          You can customize these settings to fit your store policy anytime.
        </Typography>
        <Typography component="span">
          Lastly,nothing is live until you hit “Go Live”!
        </Typography>
      </Stack>
      <DialogActions>
        <Button
          sx={{
            mb: '46px',
            width: '90%',
            mx: 'auto',
            background: '#32ABF2',
            borderRadius: '8px',
            fontWeight: '500',
            fontSize: '14px',
            lineHeight: '21px',
            textTransform: 'none',
          }}
          variant="contained"
          onClick={handleClose}
        >
          Start customizing
        </Button>
      </DialogActions>
    </Dialog>
  );
}
export default StartModal;
