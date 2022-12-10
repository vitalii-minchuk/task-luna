import { Box, CircularProgress, Stack, useMediaQuery } from '@mui/material';

function Loader() {
  const isTablet = useMediaQuery('(max-width:834px)');

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100vh"
    >
      <CircularProgress />
    </Stack>
  );
}

export default Loader;
