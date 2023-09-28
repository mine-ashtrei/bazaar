import { Button, SvgIcon } from "@mui/material";

type LoginWithFacebookProps = React.ComponentProps<typeof Button> & {
  onClick: (e: React.FormEvent) => void;
};

const LoginWithFacebook: React.FC<LoginWithFacebookProps> = ({
  onClick,
  ...props
}) => {
  return (
    <Button
      startIcon={<img src="https://authjs.dev/img/providers/facebook.svg" />}
      variant="outlined"
      sx={{
        backgroundColor: "#fff",
        color: "#000",
      }}
      onClick={onClick}
      {...props} // Spread additional props onto the Button
    >
      المتابعه بحساب Facebook
    </Button>
  );
};

export default LoginWithFacebook;
