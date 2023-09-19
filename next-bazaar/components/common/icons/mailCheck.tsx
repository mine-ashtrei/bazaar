import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const MailCheck = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg
        width="188"
        height="152"
        viewBox="0 0 188 152"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M172.334 82.3335V38.0002C172.334 34.6408 170.683 31.4189 167.745 29.0435C164.807 26.668 160.822 25.3335 156.667 25.3335H31.3337C27.1786 25.3335 23.1937 26.668 20.2557 29.0435C17.3176 31.4189 15.667 34.6408 15.667 38.0002V114C15.667 120.967 22.717 126.667 31.3337 126.667H94.0003"
          stroke="#121516"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M172.334 44.3335L102.069 80.4335C99.6503 81.6585 96.8541 82.3082 94.0003 82.3082C91.1465 82.3082 88.3504 81.6585 85.932 80.4335L15.667 44.3335"
          stroke="#121516"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M125.333 120.333L141 133L172.333 107.667"
          stroke="#121516"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

export default MailCheck;
