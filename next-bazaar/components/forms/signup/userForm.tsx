import React, { useState, forwardRef, useImperativeHandle } from "react";
import TextField from "@mui/material/TextField";
import { useForm, validateForm, FormHandles, InputDefinition } from "./common";
import { Box, Stack, Typography } from "@mui/material";
import { isMobileNumber, notEmpty } from "../validations";

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

  const { data, errors, setErrors, handleChange } = useForm(inputs);

  // Expose the validate method for use with ref in the parent
  useImperativeHandle(ref, () => ({
    validate: () => validateForm(data, inputs, setErrors),
  }));

  return (
    <Stack sx={{ width: "33vw" }} spacing={4}>
      <Box>
        <Typography variant="h4">Let’s get started!</Typography>
        <Typography variant="h6"> Tell us a little bit about you.</Typography>
      </Box>
      <Stack spacing={2}>
        {inputs.map((input, index) => (
          <TextField
            key={index}
            name={input.key}
            label={input.label}
            value={data[input.key]}
            type="text"
            onChange={handleChange}
            helperText={errors[input.key]}
            error={Boolean(errors[input.key])}
          />
        ))}
      </Stack>
    </Stack>
  );
});

UserForm.displayName = "UserForm";

export default UserForm;
