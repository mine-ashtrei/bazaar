import { Button, ButtonProps } from "@mui/material";

type SignUpButtonVariant = "auto" | "sm" | "md" | "lg";

interface SignUpButtonProps extends ButtonProps {
  signupVariant?: SignUpButtonVariant;
}

const widthMapping: Record<SignUpButtonVariant, string | undefined> = {
  auto: undefined,
  sm: "72px",
  md: "144px",
  lg: "192px",
};

export default function SignUpButton({
  signupVariant = "auto",
  ...props
}: SignUpButtonProps) {
  return (
    <Button
      disableElevation
      sx={{ minWidth: widthMapping[signupVariant], textTransform: "none" }}
      variant="contained"
      {...props}
    >
      Sign up
    </Button>
  );
}
