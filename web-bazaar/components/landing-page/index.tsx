import { Button, Stack, Typography } from "@mui/material";
import InformationPanel from "./information-panel";
import { right } from "@popperjs/core";

const LANDING_PAGE_TEXT = [
  {
    left: {
      variant: "h2",
      text: "Quality products are just around the corner.",
    },
    right: {
      variant: "body1",
      text: "Ashtrei connects local retailers and wholesalers directly to provide the best quality products and selling experiences for small business owners",
      button: {
        text: "Lear more",
        href: "#",
      },
    },
  },
  {},
];

export default function LandingPage() {
  return (
    <InformationPanel>
      <Typography variant="h2">
        Quality products are just around the corner.
      </Typography>
      <Stack alignItems="left" justifyContent="space-around">
        <Typography variant="body1">
          Ashtrei connects local retailers and wholesalers directly to provide
          the best quality products and selling experiences for small business
          owners. Learn more
        </Typography>
        <Button
          sx={{ textTransform: "none", maxHeight: "32px", maxWidth: "72%" }}
          disableElevation
          variant="contained"
        >
          {" "}
          <Typography>Learn more</Typography>
        </Button>
      </Stack>
    </InformationPanel>
  );
}
