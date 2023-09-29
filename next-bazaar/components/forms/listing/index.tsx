import {
  Box,
  Button,
  Divider,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { ImageT, Product } from "../../../lib/api/products";
import ProductPriceInput from "./productPriceInput";
import ProductListingGeneralGroup from "./generalGroup";
import ProductListingDimensionslGroup from "./dimensionsGroup";
import ProductListingPriceGroup from "./priceGroup";
import ProductListingMediaGroup from "./mediaGroup";
import { useState } from "react";
import ProductListingSuccess from "./success";
import ProductListingPreview from "./preview";

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

interface PageStatus {
  submitted: boolean;
  preview: boolean;
  editing: boolean;
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
  const { handleSubmit } = useFormVar;
  const onSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    handleSubmit((data: NewProductFormData) => {
      console.log(data);
      setProduct({
        name: data.title,
        description: data.description,
        supplierId: "1", // this should be from the user's session
        categoryId: "1", // add categoriy
        msrpPrice: data.msrpPrice,
        batchPricing: [...data.batchPricing],
        availableQuantity: 100, // need to add
        images: [
          { url: "/products-mock/first.jpg", alt: "خاطئة" },
          { url: "/products-mock/second.png", alt: "خاطئة" },
        ], // get it from the backend??
        supplierName: "متجر العربي", // this should be from the user's session
      });
      setPreview();
    })();
  };

  const setSubmitted = () => {
    setPageStatus({
      submitted: true,
      preview: false,
      editing: false,
    });
  };
  const setPreview = () => {
    setPageStatus({
      submitted: false,
      preview: true,
      editing: false,
    });
  };

  const setEditing = () => {
    setPageStatus({
      submitted: false,
      preview: false,
      editing: true,
    });
  };

  const [product, setProduct] = useState<Product>();
  const [pageStatus, setPageStatus] = useState<PageStatus>({
    submitted: false,
    preview: false,
    editing: true,
  });

  return (
    <Box sx={{ maxWidth: pageStatus.preview ? "1200px" : "600px" }}>
      {pageStatus.editing && (
        <>
          <Grid container spacing={2} sx={{ paddingTop: 5 }}>
            <ProductListingGeneralGroup useFormVar={useFormVar} />
            <GroupDivider text="Price" />
            <ProductListingPriceGroup useFormVar={useFormVar} />
            <GroupDivider text="Dimensions" />
            <ProductListingDimensionslGroup useFormVar={useFormVar} />
            <GroupDivider text="Media" />
            <ProductListingMediaGroup useFormVar={useFormVar} />
          </Grid>
          <Box sx={{ marginY: 2 }}>
            <Button variant="contained" onClick={onSubmit}>
              Save & Continue
            </Button>
          </Box>
        </>
      )}
      {pageStatus.preview && (
        <Stack spacing={2}>
          <ProductListingPreview product={product} />
          <Stack direction={"row"} spacing={2}>
            <Button variant="contained" onClick={setSubmitted}>
              Publish
            </Button>
            <Button variant="outlined" onClick={setEditing}>
              Edit
            </Button>
          </Stack>
        </Stack>
      )}
      {pageStatus.submitted && <ProductListingSuccess product={product} />}
    </Box>
  );
};

export default CreateListingPage;
