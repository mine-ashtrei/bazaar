import { Box, Stack } from "@mui/material";
import SignInForm from "../../components/forms/signin";
import MinimalLayout from "../../components/layouts/minimalLayout";

const Page = () => {
  return (
    <Box width={"40vw"}>
      <SignInForm />
    </Box>
  );
};

Page.layout = MinimalLayout;
export default Page;
