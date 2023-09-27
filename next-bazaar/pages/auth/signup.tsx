import { Box } from "@mui/material";
import MinimalLayout from "../../components/layouts/minimalLayout";
import EmailPasswordSignUpForm from "../../components/forms/signup/emailPasswordForm";
import SignUpStepper from "../../components/forms/signup";

const Page = () => {
  return (
    <Box sx={{ width: "500px", marginY: 4 }}>
      <EmailPasswordSignUpForm />
      {/* <SignUpStepper /> */}
    </Box>
  );
};

Page.layout = MinimalLayout;
export default Page;
