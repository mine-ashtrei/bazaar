import Box from "@mui/material/Box";
import SignInForm from "../../components/forms/signin";
import MinimalLayout from "../../components/layouts/minimalLayout";

const Page = () => {
  return (
    <Box sx={{ width: "40vw", maxWidth: "400px", alignSelf: "center" }}>
      <SignInForm />
    </Box>
  );
};

Page.layout = MinimalLayout;
export default Page;
