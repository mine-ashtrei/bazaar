import { Stack } from "@mui/material";
import SignInForm from "../../components/forms/signin";
import MinimalLayout from "../../components/layouts/minimalLayout";

const Page = () => {
  return (
    <Stack alignItems={"center"} justifyContent={"center"}>
      <SignInForm />
    </Stack>
  );
};

Page.layout = MinimalLayout;
export default Page;
