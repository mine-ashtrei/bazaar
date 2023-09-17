import {
  Box,
  TextField,
  Typography,
  Link as MuiLink,
  Button,
  Divider,
  Stack,
} from "@mui/material";
import NextLink from "next/link";
import LoginWithGoogle from "../buttons/loginWithGoogle";
import { SignInResponse, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import LoginWithFacebook from "../buttons/loginWithFacebook";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState<string | null>(null);
  const router = useRouter();
  const loginFunc = async (
    e: React.FormEvent,
    signInPromise: Promise<SignInResponse | undefined>
  ) => {
    e.preventDefault();
    const res = await signInPromise;
    if (res?.error) {
      setLoginError(res.error);
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <Stack
      spacing={1}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ width: "33%" }}
    >
      {/*Welcome back */}
      <Typography variant="h2">مرحباً بك!</Typography>
      {/* Sign in to your account */}
      <Typography variant="h5">سجل دخول بحسابك</Typography>
      {/* email */}
      <TextField
        fullWidth
        value={email}
        size="small"
        margin="dense"
        variant="outlined"
      />
      {/* password */}
      <TextField
        fullWidth
        value={password}
        type="password"
        size="small"
        margin="dense"
        variant="outlined"
      />
      {/* forgot password link */}
      <MuiLink alignSelf={"self-end"} component={NextLink} href="/">
        نسيت كلمة السر؟
      </MuiLink>
      {/* sign-in */}
      <Button
        fullWidth
        variant="contained"
        onClick={(e) =>
          loginFunc(
            e,
            signIn("login", {
              username: email,
              password: password,
              redirect: false,
            })
          )
        }
      >
        تسجيل الدخول
      </Button>
      {/* Divider */}
      <Divider>أو</Divider>
      {/* Login with Google*/}
      <LoginWithGoogle
        fullWidth
        onClick={(e) => loginFunc(e, signIn("google"))}
      />
      {/* Login with Facebook*/}
      <LoginWithFacebook fullWidth onClick={(e) => {}} />
    </Stack>
  );
};

export default SignInForm;
