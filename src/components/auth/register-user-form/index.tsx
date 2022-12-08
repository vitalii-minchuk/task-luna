import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box,
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Stack,
  Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useAppDispatch } from '../../../hooks';
import { registerUser } from '../../../store/slice/authSlice';
import { RegisterUserInput } from '../../../types';
import registerUserValidationSchema from '../../../validation';

const initialUserRegisterValues: RegisterUserInput = {
  name: '',
  email: '',
  password: '',
};

function RegisterUserForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik<RegisterUserInput>({
      initialValues: initialUserRegisterValues,
      validationSchema: registerUserValidationSchema,
      onSubmit: (payload, actions) => {
        dispatch(registerUser(payload));
        actions.resetForm();
      },
    });

  return (
    <Stack component="form" autoComplete="off" onSubmit={handleSubmit}>
      <FormControl variant="standard">
        <InputLabel htmlFor="name">Name</InputLabel>
        <Input
          id="name"
          name="name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
          fullWidth
        />
        {errors.name && touched.name && (
          <Typography color="error">{errors.name}</Typography>
        )}
      </FormControl>

      <FormControl variant="standard">
        <InputLabel htmlFor="email">Email</InputLabel>
        <Input
          id="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          fullWidth
        />
        {errors.email && touched.email && (
          <Typography color="error">{errors.email}</Typography>
        )}
      </FormControl>

      <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
        <Input
          id="password"
          name="password"
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
          <Typography color="error">{errors.password}</Typography>
        )}
      </FormControl>
      <Button type="submit">ok</Button>
    </Stack>
  );
}

export default RegisterUserForm;
