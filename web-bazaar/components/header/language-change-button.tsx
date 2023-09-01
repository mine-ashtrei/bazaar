import { Select, MenuItem } from "@mui/material";

export default function LanguageChangeButton() {
  return (
    <Select
      sx={{ minWidth: "72px", maxHeight: "32px", textTransform: "none" }}
      value={"EN"}
    >
      <MenuItem value={"AR"}>AR</MenuItem>
      <MenuItem value={"EN"}>EN</MenuItem>
    </Select>
  );
}
