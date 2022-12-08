import { Box, Container } from '@mui/material';
import homePageStyles from './homePageStyles';

function HomePage() {
  return (
    <Box sx={homePageStyles.wrapper}>
      <Container maxWidth="lg">
        <Box>Home page</Box>
      </Container>
    </Box>
  );
}

export default HomePage;
