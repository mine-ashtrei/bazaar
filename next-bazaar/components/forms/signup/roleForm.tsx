import { useState } from "react";
import {
  Button,
  Stack,
  useTheme,
  Typography,
  Alert,
  InputBase,
} from "@mui/material";
import { UseFormReturn } from "react-hook-form";
import { SignUpFormData } from ".";

interface RoleFormProps {
  useFormVar: UseFormReturn<SignUpFormData, any, undefined>;
}

export default function RoleForm({ useFormVar }: RoleFormProps) {
  const { register, formState, clearErrors, setValue } = useFormVar;
  const [selectedRole, setSelectedRole] = useState("");
  const theme = useTheme();

  const handleRoleSelect = (role: string) => {
    clearErrors("role");
    setValue("role", role);
    setSelectedRole(role);
  };

  const isRetailer = () => {
    return selectedRole === "retailer";
  };

  const isSupplier = () => {
    return selectedRole === "supplier";
  };

  return (
    <Stack spacing={2}>
      <Stack
        spacing={2}
        alignItems={"center"}
        justifyContent={"center"}
        direction={"row"}
      >
        <Button
          variant={isRetailer() ? "contained" : "outlined"}
          color={isRetailer() ? "primary" : "inherit"}
          onClick={() => handleRoleSelect("retailer")}
          sx={{
            margin: 1,
            color: isRetailer() ? theme.palette.secondary.main : "",
          }}
        >
          Become a Retailer
        </Button>
        <Button
          variant={isSupplier() ? "contained" : "outlined"}
          color={isSupplier() ? "primary" : "inherit"}
          onClick={() => handleRoleSelect("supplier")}
          sx={{
            margin: 1,
            color: isSupplier() ? theme.palette.secondary.main : "",
          }}
        >
          Become a Supplier
        </Button>

        <InputBase
          type="hidden"
          {...register("role", {
            required: "Please select your role on Ashtrei",
          })}
          value={selectedRole}
        />
      </Stack>
      {formState.errors.role && (
        <Alert severity="error">
          {formState.errors.role.message?.toString()}
        </Alert>
      )}
      {isRetailer() && (
        <Typography>You can sell your products on Ashtrei</Typography>
      )}
      {isSupplier() && (
        <Typography>You can buy from all suppliers on Ashtrei</Typography>
      )}
    </Stack>
  );
}
