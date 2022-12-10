import { Dispatch, SetStateAction } from 'react';
import { useAppSelector } from '../../../hooks';
import FinalStep from '../final-step';
import GoogleConnection from '../google-connection';
import RegisterUserForm from '../register-user-form';
import ShopConnection from '../shop-connection';

function AuthStepper() {
  const { step } = useAppSelector((state) => state.stepper);
  return (
    <>
      {step === 0 && <RegisterUserForm />}
      {step === 1 && <ShopConnection />}
      {step === 2 && <GoogleConnection />}
      {step === 3 && <FinalStep />}
    </>
  );
}

export default AuthStepper;
