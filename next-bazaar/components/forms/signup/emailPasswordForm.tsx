import {
  Alert,
  Box,
  Button,
  Divider,
  InputAdornment,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { isEmail, isPassword } from "../validations";
import PasswordRequirementsHelper from "./passwordHelpperPop";

interface FormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

const EmailPasswordSignUpForm = ({ onSubmit }: { onSubmit: VoidFunction }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const _onSubmit = (data: FormValues) => {
    console.log(data);
    onSubmit();
  };

  return (
    <Stack
      sx={{ width: "350px" }}
      spacing={2}
      component="form"
      onSubmit={handleSubmit(_onSubmit)}
    >
      <Typography variant="h5">Login to Ashtrei</Typography>
      <TextField
        label="Email"
        variant="outlined"
        error={Boolean(errors.email?.message)}
        helperText={errors.email?.message}
        fullWidth
        {...register("email", {
          required: true,
          validate: (value) => isEmail(value),
        })}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        error={Boolean(errors.password?.message)}
        helperText={errors.password?.message}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <PasswordRequirementsHelper />
            </InputAdornment>
          ),
        }}
        fullWidth
        {...register("password", {
          required: true,
          validate: (value) => isPassword(value),
        })}
      />
      <TextField
        label="Confirm Password"
        type="password"
        variant="outlined"
        error={Boolean(errors.confirmPassword?.message)}
        helperText={errors.confirmPassword?.message}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <PasswordRequirementsHelper />
            </InputAdornment>
          ),
        }}
        fullWidth
        {...register("confirmPassword", {
          required: true,
          validate: {
            matchesPreviousPassword: (value, formValues) => {
              const { password } = formValues;
              return password === value || "Passwords should match!";
            },
            validPassword: (value) => isPassword(value),
          },
        })}
      />
      <Button fullWidth variant="contained" type="submit">
        Submit
      </Button>
    </Stack>
  );
};

export default EmailPasswordSignUpForm;
