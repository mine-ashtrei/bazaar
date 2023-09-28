import { Button, Stack } from "@mui/material";
import { ButtonMd } from "../buttons";

const SignUpRetailerSupplier = () => {
  return (
    <Stack direction={"row"} spacing={2}>
      {/* Become a seller */}
      <Button variant="contained" color="secondary" sx={{ ...ButtonMd }}>
        سجل كمشترى
      </Button>
      {/* Signup to shop */}
      <Button variant="contained" sx={{ ...ButtonMd }}>
        سجل كبائع
      </Button>
    </Stack>
  );
};

export default SignUpRetailerSupplier;
