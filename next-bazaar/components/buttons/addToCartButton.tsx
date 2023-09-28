import { Button } from "@mui/material";
import { Product } from "../../lib/api/products";

const AddToCartButton = ({
  product,
  quantity,
}: {
  product: Product;
  quantity: number;
}) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => {
        console.log("Add to Cart: ", product);
        // addToCart(product);
      }}
    >
      Add to Cart
    </Button>
  );
};

export default AddToCartButton;
