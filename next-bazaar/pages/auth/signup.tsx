import { Box } from "@mui/material";
import SignUpStepper from "../../components/forms/signup";
import MinimalLayout from "../../components/layouts/minimalLayout";

const Page = () => {
  return (
    <Box sx={{ width: "90vw", display: "flex", marginY: 4 }}>
      <SignUpStepper />
    </Box>
  );
};

Page.layout = MinimalLayout;
export default Page;
