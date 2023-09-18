import { useState } from "react";
import { Box, Link, Modal, useTheme } from "@mui/material";
import SignInForm from "../forms/signin";

export default function SignInButton() {
  const theme = useTheme();
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Link underline="always" sx={{ cursor: "pointer" }} onClick={handleOpen}>
        تسجيل الدخول
      </Link>
      <Modal open={modalOpen} onClose={handleClose}>
        <Box
          sx={{
            width: "35vw",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: theme.palette.desert.main,
            border: "0",
            boxShadow: 24,
            outline: "none",
            p: 4,
          }}
        >
          <SignInForm />
        </Box>
      </Modal>
    </>
  );
}
