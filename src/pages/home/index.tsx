import { useEffect, useState } from 'react';
import { Box, Container } from '@mui/material';

import StartModal from '../../components/common/modals/StartModal';
import homePageStyles from './homePageStyles';

function HomePage() {
  const [openStartModal, setOpenStartModal] = useState(false);

  useEffect(() => {
    setOpenStartModal(true);
  }, []);

  return (
    <>
      <Box sx={homePageStyles.wrapper}>
        <Container maxWidth="lg">
          <Box>Home page</Box>
        </Container>
      </Box>
      <StartModal open={openStartModal} setOpen={setOpenStartModal} />
    </>
  );
}

export default HomePage;
