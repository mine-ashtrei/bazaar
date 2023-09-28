import { UseFormReturn } from "react-hook-form";
import { TextField, Button, Stack, Typography, Grid } from "@mui/material";
import { SignUpFormData } from ".";
import { isZipCode } from "../validations";

interface AddressFormProps {
  useFormVar: UseFormReturn<SignUpFormData, any, undefined>;
}

export default function AddressForm({ useFormVar }: AddressFormProps) {
  const { register, formState } = useFormVar;
  return (
    <Stack spacing={2} component={"form"}>
      <Typography variant="h4">Business Address</Typography>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <TextField
            label="Address"
            variant="outlined"
            fullWidth
            {...register("address", { required: true })}
            error={!!formState.errors.address}
            helperText={formState.errors.address?.message?.toString() ?? ""}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="City"
            variant="outlined"
            fullWidth
            {...register("city", { required: true })}
            error={!!formState.errors.city}
            helperText={formState.errors.city?.message?.toString() ?? ""}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Province"
            variant="outlined"
            fullWidth
            {...register("province", { required: true })}
            error={!!formState.errors.province}
            helperText={formState.errors.province?.message?.toString() ?? ""}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Zip Code"
            variant="outlined"
            fullWidth
            {...register("zipCode", { required: true, validate: isZipCode })}
            error={!!formState.errors.zipCode}
            helperText={formState.errors.zipCode?.message?.toString() ?? ""}
          />
        </Grid>
      </Grid>
    </Stack>
  );
}
