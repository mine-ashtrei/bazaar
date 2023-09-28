import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const SortSvg = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 14H38" stroke="#333333" stroke-linecap="round" />
        <path d="M10 24H30" stroke="#333333" stroke-linecap="round" />
        <path d="M10 34H22" stroke="#333333" stroke-linecap="round" />
      </svg>
    </SvgIcon>
  );
};

export default SortSvg;
