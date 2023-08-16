import { InputAdornment } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  return (
    <TextField
      id="1"
      // label="Search"
      sx={{
        flexBasis: "56%",
      }}
      variant="outlined"
      fullWidth={true}
      size="small"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}
