import {
  Box,
  Divider,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { ImageT } from "../../../lib/api/products";
import ProductPriceInput from "./productPriceInput";
import ProductListingGeneralGroup from "./generalGroup";
import ProductListingDimensionslGroup from "./dimensionsGroup";
import ProductListingPriceGroup from "./priceGroup";
import ProductListingMediaGroup from "./mediaGroup";

export type BatchPricing = {
  minQuantity: number;
  maxQuantity: number;
  pricePerProduct: number;
};

export interface NewProductFormData {
  title: string;
  subtitle: string;
  description: string;
  dimensions: {
    width: number;
    height: number;
    depth: number;
    weight: number;
  };
  batchPricing: BatchPricing[];
  images: ImageT[];
  msrpPrice: number;
  category: string;
}

const GroupDivider = ({ text }: { text: string }) => {
  return (
    <>
      <Grid sx={{ marginTop: 3 }} item xs={12}>
        {" "}
        <Divider />{" "}
      </Grid>
      <Grid item xs={12} sx={{ marginBottom: 1 }}>
        <Typography variant="h4">{text}</Typography>
      </Grid>
    </>
  );
};

const CreateListingPage = () => {
  const useFormVar = useForm<NewProductFormData>();
  const { formState, register, clearErrors } = useFormVar;
  return (
    <Box>
      <Grid container spacing={2} sx={{ maxWidth: "600px", paddingTop: 5 }}>
        <ProductListingGeneralGroup useFormVar={useFormVar} />
        <GroupDivider text="Price" />
        <ProductListingPriceGroup useFormVar={useFormVar} />
        <GroupDivider text="Dimensions" />
        <ProductListingDimensionslGroup useFormVar={useFormVar} />
        <GroupDivider text="Media" />
        <ProductListingMediaGroup useFormVar={useFormVar} />
      </Grid>
    </Box>
  );
};

export default CreateListingPage;
