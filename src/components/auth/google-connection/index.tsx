import { Button, Stack, useMediaQuery } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { fetchGoogleToken } from '../../../store/slice/authSlice';
import ProgressStepper from '../progress';
import GoogleConnectionResult from './GoogleConnectionResult';

interface GoogleConnectionProps {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}
function GoogleConnection({ step, setStep }: GoogleConnectionProps) {
  const { shop } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const isDesktop = useMediaQuery('(max-width:1194px)');

  const handleGoogleConnection = () => {
    dispatch(fetchGoogleToken());
  };
  return (
    <Stack width="100%" bgcolor="#fff" px="32px" pt="20px" pb="16px">
      sjdflsjd
      {isDesktop && <ProgressStepper step={step} setStep={setStep} />}
      <Button onClick={handleGoogleConnection}>google</Button>
    </Stack>
  );
}

export default GoogleConnection;
