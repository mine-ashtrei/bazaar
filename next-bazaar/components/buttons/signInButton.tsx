import React from "react";
import { ClassNameProp } from "../common/types";

export default function SignInButton({ className }: ClassNameProp) {
  return (
    <a href="#" className={`underline ${className}`}>
      Sign In
    </a>
  );
}
