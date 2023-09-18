import {
  TextField,
  Typography,
  Link as MuiLink,
  Button,
  Divider,
  Stack,
  Snackbar,
  Alert,
  IconButton,
  Box,
} from "@mui/material";
import NextLink from "next/link";
import LoginWithGoogle from "../buttons/loginWithGoogle";
import { SignInResponse, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import LoginWithFacebook from "../buttons/loginWithFacebook";
import CloseIcon from "@mui/icons-material/Close";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState<string>("");
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

  const handleSnackClose = () => {
    setLoginError("");
  };

  return (
    <>
      {/* Error Display */}
      <Snackbar
        open={loginError != ""}
        autoHideDuration={6000}
        onClose={handleSnackClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          severity="error"
          variant="outlined"
          sx={{ bgcolor: "background.paper" }}
          action={
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleSnackClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        >
          {loginError}{" "}
        </Alert>
      </Snackbar>
      <Stack
        spacing={1}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ width: "100%" }}
      >
        {/*Welcome back */}
        <Typography variant="h3">مرحباً بك!</Typography>
        {/* Sign in to your account */}
        <Typography variant="h6">سجل دخول بحسابك</Typography>
        {/* email */}
        <TextField
          fullWidth
          value={email}
          type="email"
          size="small"
          margin="dense"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            backgroundColor: "background.paper",
          }}
        />
        {/* password */}
        <TextField
          fullWidth
          value={password}
          type="password"
          size="small"
          margin="dense"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            backgroundColor: "background.paper",
          }}
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
        <Divider flexItem>أو</Divider>
        {/* Login with Google*/}
        <LoginWithGoogle
          fullWidth
          onClick={(e) => loginFunc(e, signIn("google"))}
        />
        {/* Login with Facebook*/}
        <LoginWithFacebook fullWidth onClick={(e) => {}} />
      </Stack>
    </>
  );
};

export default SignInForm;
