import { Box } from "@mui/material";
import TextButton from "../common/buttons/textButton";
import NextLink from "next/link";
import { Link as MuiLink } from "@mui/material";

export default function MinimalFooter() {
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <MuiLink component={NextLink} href="/" underline="always">
        تراخيص
      </MuiLink>
      <Box
        sx={{
          marginBottom: 2,
          marginTop: 4,
        }}
      >
        &#xA9; كل الحقوق محفوظة 2023 Ashtrei.com
      </Box>
    </Box>
  );
}
