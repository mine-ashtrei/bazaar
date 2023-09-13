import Button from "../common/buttons/button";
import { signOut } from "next-auth/react";

const SignOutButton = () => {
  return (
    <Button onClick={() => signOut({ callbackUrl: "/" })}>Sign Out</Button>
  );
};

export default SignOutButton;
