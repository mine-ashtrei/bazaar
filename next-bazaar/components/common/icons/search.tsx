import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const SearchSvg = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="22" cy="22" r="12" stroke="#333333" />
        <path d="M40 40L34 34" stroke="#333333" stroke-linecap="round" />
      </svg>
    </SvgIcon>
  );
};

export default SearchSvg;
