import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const AddSvg = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.5 23.9995C6.5 22.3867 6.50044 21.611 6.55469 20.9612C7.1955 13.2855 13.286 7.19498 20.9617 6.55417C21.6115 6.49992 22.3872 6.49948 24 6.49948C25.6128 6.49948 26.3884 6.49992 27.0382 6.55417C34.714 7.19498 40.8045 13.2855 41.4453 20.9612C41.4996 21.611 41.5 22.3867 41.5 23.9995C41.5 25.6123 41.4996 26.3879 41.4453 27.0377C40.8045 34.7135 34.714 40.804 27.0382 41.4448C26.3884 41.499 25.6128 41.4995 24 41.4995C22.3872 41.4995 21.6115 41.499 20.9617 41.4448C13.286 40.804 7.1955 34.7135 6.55469 27.0377C6.50044 26.3879 6.5 25.6123 6.5 23.9995Z"
          stroke={props.htmlColor || "#121516"}
        />
        <path
          d="M24 16.0039L24 32.0039"
          stroke={props.htmlColor || "#121516"}
          stroke-linejoin="round"
        />
        <path
          d="M32 23.9979L16 23.9979"
          stroke={props.htmlColor || "#121516"}
          stroke-linejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

export default AddSvg;
