import { Grid, InputAdornment, TextField, Typography } from "@mui/material";
import { UseFormReturn } from "react-hook-form";
import { NewProductFormData } from ".";

export default function ProductListingDimensionslGroup({
  useFormVar,
}: {
  useFormVar: UseFormReturn<NewProductFormData>;
}) {
  const { formState, register, clearErrors } = useFormVar;
  return (
    <>
      <Grid item xs={6} md={3}>
        <TextField
          label="Width"
          variant="outlined"
          fullWidth
          onFocus={() => clearErrors("dimensions.width")}
          {...register("dimensions.width", { required: true })}
          error={!!formState.errors.dimensions?.width}
          helperText={
            formState.errors.dimensions?.width?.message?.toString() ?? ""
          }
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">cm</InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={6} md={3}>
        <TextField
          label="Height"
          variant="outlined"
          fullWidth
          onFocus={() => clearErrors("dimensions.height")}
          {...register("dimensions.height", { required: true })}
          error={!!formState.errors.dimensions?.height}
          helperText={
            formState.errors.dimensions?.height?.message?.toString() ?? ""
          }
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">cm</InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={6} md={3}>
        <TextField
          label="Depth"
          variant="outlined"
          fullWidth
          onFocus={() => clearErrors("dimensions.depth")}
          {...register("dimensions.depth", { required: true })}
          error={!!formState.errors.dimensions?.depth}
          helperText={
            formState.errors.dimensions?.depth?.message?.toString() ?? ""
          }
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">cm</InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={6} md={3}>
        <TextField
          label="Weight"
          variant="outlined"
          fullWidth
          onFocus={() => clearErrors("dimensions.weight")}
          {...register("dimensions.weight", { required: true })}
          error={!!formState.errors.dimensions?.weight}
          helperText={
            formState.errors.dimensions?.weight?.message?.toString() ?? ""
          }
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">kg</InputAdornment>
            ),
          }}
        />
      </Grid>
    </>
  );
}
