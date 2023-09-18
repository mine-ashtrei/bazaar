import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const InstagramSvg = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_497_771)">
          <path
            d="M34 4H14C8.47715 4 4 8.47715 4 14V34C4 39.5228 8.47715 44 14 44H34C39.5228 44 44 39.5228 44 34V14C44 8.47715 39.5228 4 34 4Z"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M31.9999 22.74C32.2467 24.4045 31.9624 26.1044 31.1874 27.598C30.4124 29.0916 29.1862 30.3028 27.6832 31.0593C26.1801 31.8159 24.4768 32.0792 22.8155 31.8119C21.1542 31.5445 19.6194 30.7602 18.4296 29.5703C17.2397 28.3805 16.4554 26.8457 16.188 25.1844C15.9207 23.5231 16.184 21.8198 16.9406 20.3167C17.6971 18.8137 18.9083 17.5875 20.4019 16.8125C21.8955 16.0375 23.5954 15.7532 25.2599 16C26.9577 16.2518 28.5296 17.0429 29.7433 18.2566C30.957 19.4703 31.7481 21.0421 31.9999 22.74Z"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M35 13H35.02"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_497_771">
            <rect width="48" height="48" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};

export default InstagramSvg;