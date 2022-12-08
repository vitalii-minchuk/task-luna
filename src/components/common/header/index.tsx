import { useLocation } from 'react-router-dom';
import { Box, Button, Container, Stack, Typography } from '@mui/material';

import GitSvg from '../../../assets/svgs/GitSvg';

function Header() {
  const { pathname } = useLocation();

  return (
    <Box bgcolor="#0288d1">
      <Container maxWidth="lg">
        <Stack
          height="50px"
          color="whitesmoke"
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography fontSize="28px" fontFamily="Caveat">
            task-Luna-Edge
          </Typography>
          <Button
            size="small"
            color="inherit"
            endIcon={<GitSvg width="18px" height="18px" />}
            onClick={() =>
              window.open(
                'https://github.com/vitalii-minchuk/task-luna',
                '_blank'
              )
            }
            variant="outlined"
          >
            View code
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

export default Header;
