/* eslint-disable no-useless-escape */
import * as Yup from 'yup';

const ANTI_XSS_REGEX =
  /^(\s|\w|\d|\.|\,|\;|\:|\?|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\_|\~|\`|\'|\\|\-|\/|\+)*?$/;

const registerUserValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Username is required')
    .min(2, 'Username must be at least 2 characters')
    .max(64, 'Username must not exceed 64 characters')
    .matches(ANTI_XSS_REGEX, 'Dangerous scripts'),
  email: Yup.string()
    .required('Email is required')
    .email('Email is invalid')
    .matches(ANTI_XSS_REGEX, 'Dangerous scripts'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(64, 'Password must not exceed 64 characters')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase character')
    .matches(
      /([a-z])/,
      'Password must contain at least one lowercase character'
    )
    .matches(/(\d)/, 'Password must contain at least one number')
    .matches(ANTI_XSS_REGEX, 'Dangerous scripts'),
});

export default registerUserValidationSchema;
