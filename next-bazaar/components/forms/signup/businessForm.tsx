import { UseFormReturn } from "react-hook-form";
import { TextField, Button, Stack, Box, Typography, Grid } from "@mui/material";
import { SignUpFormData } from ".";

interface BusinessFormProps {
  useFormVar: UseFormReturn<SignUpFormData, any, undefined>;
}

export default function BusinessForm({ useFormVar }: BusinessFormProps) {
  const { register, formState } = useFormVar;
  return (
    <Stack spacing={2} component={"form"} alignItems={"center"}>
      <Typography variant="h4">Tell us about your business!</Typography>
      {/*  */}
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <TextField
            label="Business Name"
            variant="outlined"
            fullWidth
            {...register("businessName", { required: true })}
            error={!!formState.errors.businessName}
            helperText={
              formState.errors.businessName?.message?.toString() ?? ""
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Website"
            variant="outlined"
            fullWidth
            {...register("website", { required: true })}
            error={!!formState.errors.website}
            helperText={formState.errors.website?.message?.toString() ?? ""}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="About"
            variant="outlined"
            fullWidth
            {...register("about", { required: true })}
            error={!!formState.errors.about}
            helperText={formState.errors.about?.message?.toString() ?? ""}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Contact Email"
            variant="outlined"
            fullWidth
            {...register("constactEmail", { required: true })}
            error={!!formState.errors.constactEmail}
            helperText={
              formState.errors.constactEmail?.message?.toString() ?? ""
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Contact Phone"
            variant="outlined"
            fullWidth
            {...register("constactNumber", { required: true })}
            error={!!formState.errors.constactNumber}
            helperText={
              formState.errors.constactNumber?.message?.toString() ?? ""
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Tax ID"
            variant="outlined"
            fullWidth
            {...register("taxId", { required: true })}
            error={!!formState.errors.taxId}
            helperText={formState.errors.taxId?.message?.toString() ?? ""}
          />
        </Grid>
      </Grid>
    </Stack>
  );
}
