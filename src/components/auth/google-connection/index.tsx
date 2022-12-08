import { Button } from '@mui/material';
import { useAppDispatch } from '../../../hooks';
import { fetchGoogleToken } from '../../../store/slice/authSlice';

function GoogleConnection() {
  const dispatch = useAppDispatch();

  const handleGoogleConnection = () => {
    dispatch(fetchGoogleToken());
  };

  return (
    <div>
      <Button onClick={handleGoogleConnection}>google</Button>
    </div>
  );
}

export default GoogleConnection;
