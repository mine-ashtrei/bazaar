import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";

const SignUpFinish = () => {
  return (
    <Stack
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ width: "100%" }}
      spacing={4}
    >
      <Image width={188} height={152} alt="mail" src="/mail-check.svg" />
      <Typography variant="h3">Verify your email.</Typography>
      <Typography align="center" variant="body1">
        We’ve sent an email to yourname@business.com. Click on the link in the
        email we sent you to finish setting up your account.
      </Typography>
      <Button href="/dashboard" variant="contained" color="primary">
        <Typography variant="body1"> Go To Dashboard</Typography>{" "}
      </Button>
    </Stack>
  );
};

export default SignUpFinish;
