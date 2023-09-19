import { SxProps, TextField, Theme } from "@mui/material";
import { InputDefinition, FormState, FormErrors } from "./common";

const SimpleInput = ({
  input,
  data,
  errors,
  sx,
  handleChange,
}: {
  sx?: SxProps<Theme> | undefined;
  input: InputDefinition;
  data: FormState;
  errors: FormErrors;
  key: any;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <TextField
      sx={{ ...sx }}
      name={input.key}
      label={input.label}
      value={data[input.key]}
      type={input.isPassword ? "password" : "text"}
      multiline={input.isMultiline ? true : false}
      minRows={input.isMultiline ? 3 : 1}
      maxRows={input.isMultiline ? 3 : 1}
      onChange={handleChange}
      helperText={errors[input.key]}
      error={Boolean(errors[input.key])}
    />
  );
};

export default SimpleInput;
