import React, { forwardRef, useImperativeHandle } from "react";
import { FormHandles, InputDefinition, useForm, validateForm } from "./common";
import { isEmail, isMobileNumber, isUrl, notEmpty } from "../validations";
import { Box, Grid, Stack, TextField, Typography } from "@mui/material";
import SimpleInput from "./simpleInput";

// Define props for the UserForm component
const BusinessForm = forwardRef<FormHandles, any>((_, ref) => {
  const inputs: InputDefinition[] = [
    {
      key: "businessName",
      label: "Business Name",
      validation: [notEmpty],
    },
    {
      key: "website",
      label: "Website",
      validation: [notEmpty, isUrl],
    },
    {
      key: "about",
      label: "About",
      validation: [notEmpty],
      isMultiline: true,
    },
    {
      key: "contactNumber",
      label: "Contact Number",
      validation: [notEmpty, isMobileNumber],
    },
    {
      key: "contactEmail",
      label: "Contact Email",
      validation: [notEmpty, isEmail],
    },
    {
      key: "taxId",
      label: "Tax Id",
      validation: [notEmpty],
    },
  ];

  const gridXs = [12, 12, 12, 6, 6, 4];

  const { data, errors, setErrors, handleChange } = useForm(inputs);

  // Expose the validate method for use with ref in the parent
  useImperativeHandle(ref, () => ({
    validate: () => validateForm(data, inputs, setErrors),
  }));

  return (
    <Stack spacing={4}>
      <Box>
        <Typography variant="h4">Tell us about your business!</Typography>
      </Box>
      <Grid container spacing={2} sx={{ width: "50vw" }}>
        {inputs.map((input, index) => (
          <Grid item key={index} xs={gridXs[index]}>
            <SimpleInput
              sx={{ width: "100%" }}
              key={index}
              input={input}
              data={data}
              errors={errors}
              handleChange={handleChange}
            />
          </Grid>
        ))}
      </Grid>
      {/* <Stack sx={{ width: "33vw" }} spacing={2}>
        <SimpleInputArray inputs={inputs} ref={ref} />
      </Stack> */}
    </Stack>
  );
});

BusinessForm.displayName = "UserForm";

export default BusinessForm;
