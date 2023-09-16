import { useState } from "react";
import LoginModal from "./loginModal";
import { Link } from "@mui/material";

export default function SignInButton() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Link
        underline="always"
        sx={{ cursor: "pointer" }}
        onClick={() => setShowModal(true)}
      >
        تسجيل الدخول
      </Link>
      {showModal && <LoginModal onClose={() => setShowModal(false)} />}
    </>
  );
}
