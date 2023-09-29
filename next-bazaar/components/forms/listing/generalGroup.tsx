import { Grid, TextField, Typography } from "@mui/material";
import { UseFormReturn } from "react-hook-form";
import { NewProductFormData } from ".";

export default function ProductListingGeneralGroup({
  useFormVar,
}: {
  useFormVar: UseFormReturn<NewProductFormData>;
}) {
  const { formState, register, clearErrors } = useFormVar;
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h4">General Information</Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          onFocus={() => clearErrors("title")}
          {...register("title", { required: true })}
          error={!!formState.errors.title}
          helperText={formState.errors.title?.message?.toString() ?? ""}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        {" "}
        <TextField
          label="Subtitle"
          variant="outlined"
          fullWidth
          onFocus={() => clearErrors("subtitle")}
          {...register("subtitle", { required: true })}
          error={!!formState.errors.subtitle}
          helperText={formState.errors.subtitle?.message?.toString() ?? ""}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2">
          Give your product a short and clear title.
        </Typography>
        <Typography variant="body2">
          50-60 characters is the recommended length for search engines.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        {" "}
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          multiline
          minRows={4}
          maxRows={4}
          onFocus={() => clearErrors("description")}
          {...register("description", { required: true, minLength: 120 })}
          error={!!formState.errors.description}
          helperText={formState.errors.description?.message?.toString() ?? ""}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2">
          Give your product a short and clear description.
        </Typography>
        <Typography variant="body2">
          120-160 characters is the recommended length for search engines.
        </Typography>
      </Grid>
    </>
  );
}
