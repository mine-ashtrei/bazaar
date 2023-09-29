import { Grid, InputAdornment, TextField, Typography } from "@mui/material";
import { UseFormReturn } from "react-hook-form";
import { NewProductFormData } from ".";
import ProductPriceInput from "./productPriceInput";

export default function ProductListingPriceGroup({
  useFormVar,
}: {
  useFormVar: UseFormReturn<NewProductFormData>;
}) {
  const { formState, register, clearErrors } = useFormVar;
  return (
    <>
      <Grid item xs={12}>
        <ProductPriceInput useFormVar={useFormVar} />
      </Grid>
      <Grid item xs={12}>
        Priceing Description
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="MSRP Price"
          variant="outlined"
          fullWidth
          onFocus={() => clearErrors("msrpPrice")}
          {...register("msrpPrice", { required: true })}
          error={!!formState.errors.msrpPrice}
          helperText={formState.errors.msrpPrice?.message?.toString() ?? ""}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">EGP</InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={12}>
        MSRP Description
      </Grid>
    </>
  );
}
