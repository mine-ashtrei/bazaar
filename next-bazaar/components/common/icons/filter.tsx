import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const FilterSvg = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M24 14L40 14" stroke="#333333" stroke-linecap="round" />
        <path d="M8 14L16 14" stroke="#333333" stroke-linecap="round" />
        <path d="M34 34L40 34" stroke="#333333" stroke-linecap="round" />
        <path d="M8 34L24 34" stroke="#333333" stroke-linecap="round" />
        <circle
          cx="20"
          cy="14"
          r="4"
          transform="rotate(90 20 14)"
          stroke="#333333"
          stroke-linecap="round"
        />
        <circle
          cx="30"
          cy="34"
          r="4"
          transform="rotate(90 30 34)"
          stroke="#333333"
          stroke-linecap="round"
        />
      </svg>
    </SvgIcon>
  );
};

export default FilterSvg;
