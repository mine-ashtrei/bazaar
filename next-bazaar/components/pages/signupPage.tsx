import { useEffect, useState } from "react";
import SignUpStepper from "../forms/signup";
import EmailPasswordForm from "../forms/signup/emailPasswordForm";
import { Box } from "@mui/material";
import { useRouter } from "next/router";

export default function SignUpPage() {
  const router = useRouter();
  const skipEmailSignUp = router.query.skipEmailSignUp === "true";
  const [showStepper, setShowStepper] = useState(skipEmailSignUp);

  useEffect(() => {
    const skipEmailSignUp = router.query.skipEmailSignUp === "true";
    setShowStepper(skipEmailSignUp);
  }, [router.query.skipEmailSignUp]);

  const handleEmailPasswordSubmit = () => {
    setShowStepper(true);
  };

  return (
    <Box sx={{ width: "350px", marginTop: 2 }}>
      {showStepper ? (
        <SignUpStepper />
      ) : (
        <EmailPasswordForm onSubmit={handleEmailPasswordSubmit} />
      )}
    </Box>
  );
}
