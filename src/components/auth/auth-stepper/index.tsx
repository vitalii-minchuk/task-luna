import { Dispatch, SetStateAction } from 'react';
import FinalStep from '../final-step';
import GoogleConnection from '../google-connection';
import RegisterUserForm from '../register-user-form';
import ShopConnection from '../shop-connection';

interface AuthStepperProps {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}

function AuthStepper({ step, setStep }: AuthStepperProps) {
  return (
    <>
      {step === 0 && <RegisterUserForm step={step} setStep={setStep} />}
      {step === 1 && <ShopConnection step={step} setStep={setStep} />}
      {step === 2 && <GoogleConnection step={step} setStep={setStep} />}
      {step === 3 && <FinalStep />}
    </>
  );
}

export default AuthStepper;
