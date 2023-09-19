import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import {
  FormHandles,
  SimpleFormProps,
  InputDefinition,
  useForm,
  validateForm,
} from "./common";
import { isMobileNumber, notEmpty } from "../validations";
import {
  Alert,
  Box,
  Divider,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import SimpleInput from "./simpleInput";

const CustomToggleButton = styled(ToggleButton)(({ theme }) => ({
  "&.Mui-selected, &.Mui-selected:hover": {
    backgroundColor: theme.palette.primary.main,
  },
}));

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
  const theme = useTheme();

  const { data, errors, setErrors, handleChange } = useForm(
    inputs,
    props.initialState
  );
  let initialAccountType = "";
  if (props.initialState && props.initialState["accountType"]) {
    initialAccountType = props.initialState["accountType"];
  }
  const [accountType, setAccoutType] = useState<string>(initialAccountType);
  const [accountError, setAccountError] = useState("");

  // Expose the validate method for use with ref in the parent
  useImperativeHandle(ref, () => ({
    validate: () => {
      if (accountType !== "supplier" && accountType !== "retailer") {
        setAccountError("Please select an account type");
        return false;
      }
      setAccountError("");
      return validateForm(data, inputs, setErrors);
    },
    getData: () => ({ ...data, accountType: accountType }),
  }));

  return (
    <Stack spacing={4}>
      <Typography alignSelf={"center"} variant="h4">
        Let’s get started!
      </Typography>
      <Stack spacing={2}>
        <Typography variant="h5"> Do you want to buy or sell?</Typography>
        {accountError && <Alert severity="error"> {accountError}</Alert>}
        <ToggleButtonGroup
          value={accountType}
          exclusive
          onChange={(event, newType) => {
            setAccoutType(newType);
          }}
          sx={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <CustomToggleButton
            selected={accountType === "supplier"}
            color="secondary"
            sx={{
              border: "none",
            }}
            size="large"
            value="supplier"
          >
            <Typography variant="h5"> supplier</Typography>
          </CustomToggleButton>
          <CustomToggleButton
            selected={accountType === "retailer"}
            color="secondary"
            sx={{ border: "none" }}
            size="large"
            value="retailer"
          >
            <Typography variant="h5"> retailer</Typography>
          </CustomToggleButton>
        </ToggleButtonGroup>
      </Stack>
      <Divider />
      <Stack spacing={2}>
        <Typography variant="h5"> Tell us a little bit about you.</Typography>
        <Stack spacing={2}>
          {inputs.map((input, index) => (
            <SimpleInput
              sx={{ width: "100%" }}
              key={index}
              input={input}
              data={data}
              errors={errors}
              handleChange={handleChange}
            />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
});

UserForm.displayName = "UserForm";

export default UserForm;
