import { UseFormReturn } from "react-hook-form";
import { TextField, Typography, Divider, Stack } from "@mui/material";
import { SignUpFormData } from ".";
import RoleForm from "./roleForm";

interface UserFormProps {
  useFormVar: UseFormReturn<SignUpFormData, any, undefined>;
}

export default function UserForm({ useFormVar }: UserFormProps) {
  const { register, formState, clearErrors } = useFormVar;
  return (
    <Stack spacing={2} component={"form"}>
      <Typography alignSelf={"center"} variant="h4">
        Let’s get started!
      </Typography>
      <RoleForm useFormVar={useFormVar} />
      <Divider />
      <Typography variant="h5"> Tell us a little bit about you.</Typography>
      <Stack spacing={1}>
        <TextField
          label="First Name"
          variant="outlined"
          fullWidth
          onFocus={() => clearErrors("firstName")}
          {...register("firstName", { required: true })}
          error={!!formState.errors.firstName}
          helperText={formState.errors.firstName?.message?.toString() ?? ""}
        />
        <TextField
          label="Last Name"
          variant="outlined"
          fullWidth
          onFocus={() => clearErrors("lastName")}
          {...register("lastName", { required: true })}
          error={!!formState.errors.lastName}
          helperText={formState.errors.lastName?.message?.toString() ?? ""}
        />
        <TextField
          label="Mobile Number"
          variant="outlined"
          fullWidth
          onFocus={() => clearErrors("mobileNumber")}
          {...register("mobileNumber", { required: true })}
          error={!!formState.errors.mobileNumber}
          helperText={formState.errors.mobileNumber?.message?.toString() ?? ""}
        />
      </Stack>
    </Stack>
  );
}
