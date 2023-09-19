import React, { forwardRef } from "react";
import { FormHandles, InputDefinition } from "./common";
import { isMobileNumber, notEmpty } from "../validations";
import SimpleInputArray from "./simpleInputArray";
import { Box, Stack, Typography } from "@mui/material";

// Define props for the UserForm component
const UserForm = forwardRef<FormHandles, any>((_, ref) => {
  const inputs: InputDefinition[] = [
    {
      key: "firstName",
      label: "First Name",
      validation: [notEmpty],
    },
    {
      key: "lastName",
      label: "Last Name",
      validation: [notEmpty],
    },
    {
      key: "mobileNumber",
      label: "Mobile Number",
      validation: [notEmpty, isMobileNumber],
    },
  ];

  return (
    <Stack sx={{ width: "33vw" }} spacing={4}>
      <Box>
        <Typography variant="h4">Let’s get started!</Typography>
        <Typography variant="h6"> Tell us a little bit about you.</Typography>
      </Box>
      <Stack spacing={2}>
        <SimpleInputArray inputs={inputs} ref={ref} />
      </Stack>
    </Stack>
  );
});

UserForm.displayName = "UserForm";

export default UserForm;
