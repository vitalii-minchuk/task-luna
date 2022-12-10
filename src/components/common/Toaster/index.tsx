import { SyntheticEvent, useEffect, useState } from 'react';
import { Box, Slide, SlideProps, Snackbar } from '@mui/material';

import { useAppSelector } from '../../../hooks';

function TransitionLeft(props: SlideProps) {
  return <Slide {...props} direction="left" />;
}

function Toaster() {
  const [open, setOpen] = useState(false);
  const { fetchError, fetchSuccess } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (fetchError || fetchSuccess) {
      setOpen(true);
    }
  }, [fetchError, fetchSuccess]);

  const handleClose = (event: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      TransitionComponent={TransitionLeft}
    >
      <Box
        sx={{
          width: '300px',
          padding: '12px 24px',
          color: fetchSuccess ? '#65BD47' : '#D24646',
          border: fetchSuccess ? '1px solid #65BD47' : '1px solid #D24646',
          borderLeft: fetchSuccess ? '6px solid #65BD47' : '6px solid #D24646',
          backgroundColor: fetchSuccess ? '#F3FCF4;' : '#ff9e80',
          boxShadow: '0px 1px 5px rgba(108, 117, 139, 0.4)',
          borderRadius: '4px',
        }}
      >
        {fetchSuccess || fetchError || ''}
      </Box>
    </Snackbar>
  );
}

export default Toaster;
