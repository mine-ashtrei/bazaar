import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const LeftArrowSvg = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M30 12L18 24L30 36" stroke="#333333" />
      </svg>
    </SvgIcon>
  );
};

export default LeftArrowSvg;