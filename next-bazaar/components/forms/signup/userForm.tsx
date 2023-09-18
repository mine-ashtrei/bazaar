import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

const UserForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
  const [data, setData] = useState({ fieldOne: "", fieldTwo: "" });
  const [errors, setErrors] = useState({ fieldOne: "", fieldTwo: "" });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
    // Clear any existing error for the field
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
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

  const handleNext = () => {
    if (validate()) {
      onSubmit(data);
    }
  };

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
      <Button onClick={handleNext}>Next</Button>
    </div>
  );
};

export default UserForm;
