import { Button, Stack, Typography } from "@mui/material";
import InformationPanel from "./information-panel";
import React from "react";

export default function LandingPage() {
  return (
    <React.Fragment>
      <InformationPanel>
        <Typography variant="h3">
          Quality products are just around the corner.
        </Typography>
        <Stack alignItems="left" justifyContent="space-around">
          <Typography variant="body1">
            Ashtrei connects local retailers and wholesalers directly to provide
            the best quality products and selling experiences for small business
            owners. Learn more
          </Typography>
          <Button
            sx={{ textTransform: "none", maxHeight: "44px", maxWidth: "72%" }}
            disableElevation
            variant="contained"
          >
            {" "}
            <Typography>Learn more</Typography>
          </Button>
        </Stack>
      </InformationPanel>
      {/* <InformationPanel>
        <Typography></Typography>
        <Stack>
          <Typography variant="h6">
            Quality products are just around the corner.
          </Typography>
          <Typography variant="body1">
            At Ashtrei, we are dedicated to providing quality products that
            exceed our customers' expectations. With a commitment to excellence,
            we strive to ensure that the finest products are always just around
            the corner, ready to enhance and improve the lives of our valued
            customers. By consistently ensuring exceptional quality, innovative
            designs, and superior craftsmanship, we aim to be the trusted choice
            for individuals seeking top-tier products in retail.
          </Typography>
        </Stack>
      </InformationPanel> */}
    </React.Fragment>
  );
}
