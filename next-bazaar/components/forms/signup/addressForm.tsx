import React, { forwardRef, useImperativeHandle } from "react";
import { FormHandles, InputDefinition, useForm, validateForm } from "./common";
import { isMobileNumber, notEmpty } from "../validations";
import SimpleInputs from "./simpleInputArray";
import { Box, Grid, Stack, TextField, Typography } from "@mui/material";
import SimpleInput from "./simpleInput";

// Define props for the UserForm component
const AddressForm = forwardRef<FormHandles, any>((_, ref) => {
  const inputs: InputDefinition[] = [
    {
      key: "address",
      label: "Address",
      validation: [notEmpty],
    },
    {
      key: "city",
      label: "City",
      validation: [notEmpty],
    },
    {
      key: "province",
      label: "Province",
      validation: [notEmpty],
    },
    {
      key: "zipCode",
      label: "Zip Code",
      validation: [notEmpty],
    },
  ];

  const gridXs = [12, 6, 6, 3];

  const { data, errors, setErrors, handleChange } = useForm(inputs);

  // Expose the validate method for use with ref in the parent
  useImperativeHandle(ref, () => ({
    validate: () => validateForm(data, inputs, setErrors),
  }));

  return (
    <Stack>
      <Box>
        <Typography variant="h6">Address</Typography>
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
    </Stack>
  );
});

AddressForm.displayName = "UserForm";

export default AddressForm;
