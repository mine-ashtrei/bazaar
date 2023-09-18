import React, { useState, forwardRef, useImperativeHandle } from "react";
import TextField from "@mui/material/TextField";
import useForm, { FormHandles } from "./common";

// Define props for the UserForm component
const UserForm = forwardRef<FormHandles, any>((_, ref) => {
  const { data, errors, setErrors, handleChange } = useForm({
    fieldOne: "",
    fieldTwo: "",
  });

  const validateForm = (): boolean => {
    let valid = true;
    const newErrors = { fieldOne: "", fieldTwo: "" };

    if (!data.fieldOne) {
      newErrors.fieldOne = "Field One is required";
      valid = false;
    }

    if (!data.fieldTwo) {
      newErrors.fieldTwo = "Field Two is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Expose the validate method for use with ref in the parent
  useImperativeHandle(ref, () => ({
    validate: validateForm,
  }));

  return (
    <div>
      <TextField
        name="fieldOne"
        label="Field One"
        value={data.fieldOne}
        onChange={handleChange}
        helperText={errors.fieldOne}
        error={Boolean(errors.fieldOne)}
      />
      <TextField
        name="fieldTwo"
        label="Field Two"
        value={data.fieldTwo}
        onChange={handleChange}
        helperText={errors.fieldTwo}
        error={Boolean(errors.fieldTwo)}
      />
    </div>
  );
});

UserForm.displayName = "UserForm";

export default UserForm;
