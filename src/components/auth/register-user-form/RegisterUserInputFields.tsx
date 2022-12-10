import { useState } from 'react';
import { useFormik } from 'formik';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  Stack,
  Typography,
} from '@mui/material';

import { useAppDispatch } from '../../../hooks';
import { setUserData } from '../../../store/slice/authSlice';
import { setDisabledNext } from '../../../store/slice/stepperSlice';
import { RegisterUserInput } from '../../../types';
import registerUserValidationSchema from '../../../validation';
import RegisterUserStyles from './RegisterUserStyles';

const initialUserRegisterValues: RegisterUserInput = {
  name: '',
  email: '',
  password: '',
};

function RegisterUserInputFields() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik<RegisterUserInput>({
      initialValues: initialUserRegisterValues,
      validationSchema: registerUserValidationSchema,
      onSubmit: (payload, actions) => {
        dispatch(setUserData(payload));
        dispatch(setDisabledNext(false));
        actions.resetForm();
      },
    });
  return (
    <Stack
      pb="16px"
      pt="32px"
      component="form"
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <FormControl sx={{ paddingBottom: '24px' }}>
        <Typography pb="8px">Email</Typography>
        <Input
          id="email"
          sx={RegisterUserStyles(errors, touched, 'email').input}
          name="email"
          onBlur={handleBlur}
          disableUnderline
          onChange={handleChange}
          value={values.email}
          fullWidth
        />
        {errors.email && touched.email && (
          <Typography
            pt="8px"
            fontWeight={500}
            fontSize="12px"
            lineHeight="18px"
            color="#D24646"
          >
            {errors.email}
          </Typography>
        )}
      </FormControl>

      <FormControl
        variant="outlined"
        sx={{
          paddingBottom: '24px',
        }}
      >
        <Typography pb="8px">Your name</Typography>
        <Input
          id="name"
          name="name"
          sx={RegisterUserStyles(errors, touched, 'name').input}
          disableUnderline
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.name}
          fullWidth
        />
        {errors.name && touched.name && (
          <Typography
            pt="8px"
            fontWeight={500}
            fontSize="12px"
            lineHeight="18px"
            color="#D24646"
          >
            {errors.name}
          </Typography>
        )}
      </FormControl>

      <FormControl sx={{ paddingBottom: '32px' }}>
        <Typography pb="8px">Password</Typography>
        <Input
          id="password"
          name="password"
          sx={RegisterUserStyles(errors, touched, 'password').input}
          disableUnderline
          fullWidth
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        {errors.password && touched.password && (
          <Typography
            pt="8px"
            fontWeight={500}
            fontSize="12px"
            lineHeight="18px"
            color="#D24646"
          >
            {errors.password}
          </Typography>
        )}
      </FormControl>
      <Button
        sx={{
          background: '#32ABF2',
          borderRadius: '8px',
          fontWeight: '500',
          fontSize: '14px',
          lineHeight: '21px',
          textTransform: 'none',
        }}
        variant="contained"
        type="submit"
      >
        Create account
      </Button>
    </Stack>
  );
}

export default RegisterUserInputFields;
