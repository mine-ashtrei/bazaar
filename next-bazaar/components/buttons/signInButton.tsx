import React from "react";
import { ClassNameProp } from "../common/types";
import Button from "../common/buttons/button";

import { useState } from "react";
import LoginModal from "./loginModal";

export default function SignInButton({ className }: ClassNameProp) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Button
        color="underline"
        className={` ${className}`}
        onClick={() => setShowModal(true)}
      >
        تسجيل الدخول
      </Button>
      {showModal && <LoginModal onClose={() => setShowModal(false)} />}
    </>
  );
}
