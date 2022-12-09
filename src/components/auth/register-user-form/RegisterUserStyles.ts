import { FormikErrors, FormikTouched } from 'formik';
import { RegisterUserInput } from '../../../types';

const RegisterUserStyles = (
  errors: FormikErrors<RegisterUserInput>,
  touched: FormikTouched<RegisterUserInput>,
  field: keyof RegisterUserInput
) => ({
  wrapper: {
    background: '#fff',
    mx: 'auto',
    width: '100%',
  },
  input: {
    transition: 'all .5s',
    border:
      !!errors[field] && touched[field]
        ? '1px solid #D24646'
        : '1px solid transparent',
    ':hover': {
      border: '1px solid #32ABF2',
      backgroundColor: 'transparent',
    },
    ':active': {
      border:
        !!errors.email && touched.email
          ? '1px solid #D24646'
          : '1px solid #32ABF2',
      backgroundColor: 'transparent',
    },
    height: '45px',
    backgroundColor: ' #F8F9FC',
    padding: '10px 10px 10px 17px',
    borderRadius: '8px',
    fontSize: '12px',
    lineHeight: '18px',
  },
});

export default RegisterUserStyles;
