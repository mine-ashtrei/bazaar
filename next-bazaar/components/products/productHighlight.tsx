import {
  Box,
  Card,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import { Product } from "../../lib/products";
import { Supplier } from "../../lib/suppliers";
import AddToCartButton from "../buttons/addToCartButton";
import SelectQuantity from "../buttons/selectQuantity";
import { useState } from "react";
import NextLink from "next/link";
import RaitingOneStar from "../common/raitingOneStar";

const ProductHighlight = ({
  product,
  supplier,
}: {
  product: Product;
  supplier: Supplier;
}) => {
  const quantityValues = Array.from({ length: 5 }, (_, i) => (i + 1) * 25);

  const [quantity, setQuantity] = useState(quantityValues[0]);

  const handleValueChange = (quantity: number) => {
    setQuantity(quantity);
  };

  return (
    <Stack
      variant="outlined"
      component={Card}
      sx={{ width: "400px", margin: 5, padding: 5 }}
      spacing={2}
    >
      <Typography> MSMR Price: ${product.msrpPrice}</Typography>
      <Stack direction={"row"} spacing={2}>
        <Typography>
          {" "}
          Sold by{" "}
          <MuiLink
            component={NextLink}
            href={`/suppliers/${supplier.supplierId}`}
          >
            {" "}
            {supplier.name}
          </MuiLink>{" "}
        </Typography>
        <RaitingOneStar value={supplier.rating} />
      </Stack>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography>Min Quantity</Typography>
              </TableCell>
              <TableCell>
                {" "}
                <Typography> Max Quantity</Typography>
              </TableCell>
              <TableCell>
                <Typography>Price per Item (EGP)</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {product.batchPricing.map((batch, index) => (
              <TableRow key={index}>
                <TableCell>
                  {" "}
                  <Typography>{batch.minQuantity}</Typography>
                </TableCell>
                <TableCell>
                  {" "}
                  <Typography>{batch.maxQuantity}</Typography>
                </TableCell>
                <TableCell>
                  {" "}
                  <Typography>{batch.pricePerProduct}</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <SelectQuantity
        values={quantityValues}
        handleChange={handleValueChange}
      />
      <AddToCartButton product={product} quantity={quantity} />
    </Stack>
  );
};

export default ProductHighlight;
