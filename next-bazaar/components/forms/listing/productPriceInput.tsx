import { useState } from "react";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { UseFormReturn, set } from "react-hook-form";
import { NewProductFormData } from ".";
import AddSvg from "../../common/icons/add";

export default function ProductPriceInput({
  useFormVar,
}: {
  useFormVar: UseFormReturn<NewProductFormData>;
}) {
  const {
    getValues,
    clearErrors,
    register,
    trigger,
    formState,
    resetField,
    setValue,
  } = useFormVar;
  const [rows, setRows] = useState([1]);

  //   const [nbRows, setNbRows] = useState<number>(1);

  const handleAddRow = async () => {
    if (!(await trigger("batchPricing"))) return;
    setRows([...rows, 1]);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <caption>
          <Button onClick={handleAddRow}>
            <AddSvg />
            Add Price
          </Button>
        </caption>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography>Minimum Quantity</Typography>
            </TableCell>
            <TableCell>
              {" "}
              <Typography> Maximum Quantity</Typography>
            </TableCell>
            <TableCell>
              <Typography>Price per Item (EGP)</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((batch, index) => (
            <TableRow key={index}>
              <TableCell>
                <TextField
                  label="Min Quantity"
                  variant="standard"
                  fullWidth
                  onFocus={() =>
                    clearErrors(`batchPricing.${index}.minQuantity`)
                  }
                  {...register(`batchPricing.${index}.minQuantity`, {
                    required: true,
                  })}
                  error={!!formState.errors.batchPricing?.[index]?.minQuantity}
                  helperText={
                    formState.errors.batchPricing?.[
                      index
                    ]?.minQuantity?.toString() ?? ""
                  }
                />
              </TableCell>
              <TableCell>
                <TextField
                  label="Max Quantity"
                  variant="standard"
                  fullWidth
                  onFocus={() =>
                    clearErrors(`batchPricing.${index}.maxQuantity`)
                  }
                  {...register(`batchPricing.${index}.maxQuantity`, {
                    required: true,
                  })}
                  error={!!formState.errors.batchPricing?.[index]?.maxQuantity}
                  helperText={
                    formState.errors.batchPricing?.[
                      index
                    ]?.maxQuantity?.toString() ?? ""
                  }
                />
              </TableCell>
              <TableCell>
                <TextField
                  label="Price"
                  variant="standard"
                  fullWidth
                  onFocus={() =>
                    clearErrors(`batchPricing.${index}.pricePerProduct`)
                  }
                  {...register(`batchPricing.${index}.pricePerProduct`, {
                    required: true,
                  })}
                  error={
                    !!formState.errors.batchPricing?.[index]?.pricePerProduct
                  }
                  helperText={
                    formState.errors.batchPricing?.[
                      index
                    ]?.pricePerProduct?.toString() ?? ""
                  }
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
