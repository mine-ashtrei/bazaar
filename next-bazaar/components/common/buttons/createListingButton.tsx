import { Button } from "@mui/material";
import { signOut } from "next-auth/react";
import AddSvg from "../icons/add";

const CreateListingButton = () => {
  return (
    <Button
      variant="contained"
      onClick={() => signOut({ callbackUrl: "/listing" })}
      component="label"
      startIcon={<AddSvg inheritViewBox htmlColor="white" />}
    >
      Create Listing
    </Button>
  );
};

export default CreateListingButton;
