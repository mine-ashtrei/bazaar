import Image from "next/image";
import SearchIcon from "../../public/icons/Search_light.svg";
import { Box, InputBase } from "@mui/material";

const SearchBar = () => {
  return (
    <Box
      sx={{
        position: "relative",
        borderRadius: "4px",
        backgroundColor: "rgb(255,255,255)",
        "&:hover": {
          backgroundColor: "rgba(255,255,255, 0.9)",
        },
        width: "50vw",
      }}
    >
      <InputBase
        sx={{
          pl: "14px",
          pr: "60px", // Adjust based on the size of the icon and any desired padding
          width: "100%",
          height: 40, // Adjust based on your design requirements
        }}
        placeholder="Search Brands or Products"
      />
      <Box
        sx={{
          position: "absolute",
          right: 2,
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <Image priority src={SearchIcon} alt="" className="w-10" />
      </Box>
    </Box>
  );
};

export default SearchBar;
