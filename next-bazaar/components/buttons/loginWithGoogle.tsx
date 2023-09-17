import { Button, SvgIcon } from "@mui/material";

type LoginWithGoogleProps = React.ComponentProps<typeof Button> & {
  onClick: (e: React.FormEvent) => void;
};

const LoginWithGoogle: React.FC<LoginWithGoogleProps> = ({
  onClick,
  ...props
}) => {
  return (
    <Button
      startIcon={<img src="https://authjs.dev/img/providers/google.svg" />}
      variant="outlined"
      sx={{
        backgroundColor: "#fff",
        color: "#000",
      }}
      onClick={onClick}
      {...props} // Spread additional props onto the Button
    >
      المتابعه بحساب Google
    </Button>
  );
};

export default LoginWithGoogle;
