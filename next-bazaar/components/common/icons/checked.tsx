import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const CheckedSvg = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="24" cy="24" r="18" stroke="#333333" />
        <path d="M16 24L22 30L32 18" stroke="#333333" />
      </svg>
    </SvgIcon>
  );
};

export default CheckedSvg;
