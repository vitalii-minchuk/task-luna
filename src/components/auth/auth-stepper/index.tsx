import GoogleConnection from '../google-connection';
import RegisterUserForm from '../register-user-form';
import ShopConnection from '../shop-connection';

interface AuthStepperProps {
  step: number;
}

function AuthStepper({ step }: AuthStepperProps) {
  return (
    <>
      {step === 0 && <RegisterUserForm />}
      {step === 1 && <ShopConnection />}
      {step === 2 && <GoogleConnection />}
    </>
  );
}

export default AuthStepper;
