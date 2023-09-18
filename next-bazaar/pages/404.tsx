import { Box } from "@mui/material";
import MinimalLayout from "../components/layouts/minimalLayout";

const NotFoundPage = () => {
  return <Box sx={{ alignSelf: "center" }}>Not found</Box>;
};

NotFoundPage.layout = MinimalLayout;

export default NotFoundPage;
