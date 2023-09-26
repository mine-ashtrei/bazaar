import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

const SelectQuantity = ({
  handleChange,
  values,
}: {
  handleChange: (value: number) => void;
  values: number[];
}) => {
  const [value, setValue] = useState(values[0]);
  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel htmlFor="quantity-label">Quantity</InputLabel>
      <Select
        value={value}
        label="Quantity"
        onChange={(e) => {
          setValue(e.target.value as number);
          handleChange(e.target.value as number);
        }}
      >
        {values.map((value, index) => (
          <MenuItem key={index} value={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectQuantity;
