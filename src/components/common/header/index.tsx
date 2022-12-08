import { Button, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import GitSvg from '../../../assets/svgs/GitSvg';

function Header() {
  const { pathname } = useLocation();

  return (
    <header>
      <Button
        endIcon={<GitSvg width="24px" height="24px" />}
        onClick={() =>
          window.open('https://github.com/vitalii-minchuk/task-luna', '_blank')
        }
        variant="contained"
      >
        <Typography>View code</Typography>
      </Button>
    </header>
  );
}

export default Header;
