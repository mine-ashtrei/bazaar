import React, { forwardRef, useImperativeHandle } from "react";
import {
  FormHandles,
  InputDefinition,
  SimpleFormProps,
  useForm,
  validateForm,
} from "./common";
import { notEmpty } from "../validations";
import { Box, Grid, Stack, Typography } from "@mui/material";
import SimpleInput from "./simpleInput";

// Define props for the UserForm component
const AddressForm = forwardRef<FormHandles, SimpleFormProps>((props, ref) => {
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
    <Stack spacing={2}>
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
