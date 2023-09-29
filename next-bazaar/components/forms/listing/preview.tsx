import { Box, Stack, Typography } from "@mui/material";
import ProductPage from "../../products/productPage";
import { Product } from "../../../lib/api/products";
import { Supplier } from "../../../lib/api/suppliers";

export default function ProductListingPreview({
  product,
}: {
  product: Product | undefined;
}) {
  const supplier = {
    supplierId: "1",
    name: "سى - تاون للسيراميك",
    imgUrl: "/suppliers-mock/first.jpg",
    categories: ["المنزل والديكور", "إكسسوارات"],
    // geography: ["القاهرة ", " مصر"],
    rating: 3.4,
    about:
      "هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر",
    email: "test@example.com",
    enstablished: "2020",
  };
  return (
    <>
      <Typography sx={{ alignSelf: "center" }} variant="h2">
        Preview
      </Typography>
      {product && <ProductPage product={product} supplier={supplier} />}
    </>
  );
}
