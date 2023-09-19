import React, { forwardRef, useImperativeHandle } from "react";
import {
  FormHandles,
  SimpleFormProps,
  InputDefinition,
  useForm,
  validateForm,
} from "./common";
import { isMobileNumber, notEmpty } from "../validations";
import SimpleInputArray from "./simpleInputArray";
import { Box, Stack, Typography } from "@mui/material";
import SimpleInput from "./simpleInput";

// Define props for the UserForm component
const UserForm = forwardRef<FormHandles, SimpleFormProps>((props, ref) => {
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

  const { data, errors, setErrors, handleChange } = useForm(
    inputs,
    props.initialState
  );

  // Expose the validate method for use with ref in the parent
  useImperativeHandle(ref, () => ({
    validate: () => validateForm(data, inputs, setErrors),
    getData: () => data,
  }));

  return (
    <Stack sx={{ width: "33vw" }} spacing={4}>
      <Box>
        <Typography variant="h4">Let’s get started!</Typography>
        <Typography variant="h6"> Tell us a little bit about you.</Typography>
      </Box>
      <Stack spacing={2}>
        {inputs.map((input, index) => (
          <SimpleInput
            key={index}
            input={input}
            data={data}
            errors={errors}
            handleChange={handleChange}
          />
        ))}
      </Stack>
    </Stack>
  );
});

UserForm.displayName = "UserForm";

export default UserForm;
