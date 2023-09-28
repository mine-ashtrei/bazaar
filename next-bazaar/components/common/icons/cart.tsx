import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const CartSvg = (props: SvgIconProps) => {
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
          d="M32 36C33.0609 36 34.0783 36.4214 34.8284 37.1716C35.5786 37.9217 36 38.9391 36 40C36 41.0609 35.5786 42.0783 34.8284 42.8284C34.0783 43.5786 33.0609 44 32 44C30.9391 44 29.9217 43.5786 29.1716 42.8284C28.4214 42.0783 28 41.0609 28 40C28 38.9391 28.4214 37.9217 29.1716 37.1716C29.9217 36.4214 30.9391 36 32 36ZM32 38C31.4696 38 30.9609 38.2107 30.5858 38.5858C30.2107 38.9609 30 39.4696 30 40C30 40.5304 30.2107 41.0391 30.5858 41.4142C30.9609 41.7893 31.4696 42 32 42C32.5304 42 33.0391 41.7893 33.4142 41.4142C33.7893 41.0391 34 40.5304 34 40C34 39.4696 33.7893 38.9609 33.4142 38.5858C33.0391 38.2107 32.5304 38 32 38ZM14 36C15.0609 36 16.0783 36.4214 16.8284 37.1716C17.5786 37.9217 18 38.9391 18 40C18 41.0609 17.5786 42.0783 16.8284 42.8284C16.0783 43.5786 15.0609 44 14 44C12.9391 44 11.9217 43.5786 11.1716 42.8284C10.4214 42.0783 10 41.0609 10 40C10 38.9391 10.4214 37.9217 11.1716 37.1716C11.9217 36.4214 12.9391 36 14 36ZM14 38C13.4696 38 12.9609 38.2107 12.5858 38.5858C12.2107 38.9609 12 39.4696 12 40C12 40.5304 12.2107 41.0391 12.5858 41.4142C12.9609 41.7893 13.4696 42 14 42C14.5304 42 15.0391 41.7893 15.4142 41.4142C15.7893 41.0391 16 40.5304 16 40C16 39.4696 15.7893 38.9609 15.4142 38.5858C15.0391 38.2107 14.5304 38 14 38ZM36 12H8.54L13.64 24H30C30.66 24 31.24 23.68 31.6 23.2L37.6 15.2C37.86 14.86 38 14.44 38 14C38 13.4696 37.7893 12.9609 37.4142 12.5858C37.0391 12.2107 36.5304 12 36 12ZM30 26H13.74L12.2 29.12L12 30C12 30.5304 12.2107 31.0391 12.5858 31.4142C12.9609 31.7893 13.4696 32 14 32H36V34H14C12.9391 34 11.9217 33.5786 11.1716 32.8284C10.4214 32.0783 10 31.0609 10 30C9.99941 29.3214 10.1715 28.6538 10.5 28.06L11.94 25.12L4.68 8H2V6H6L7.7 10H36C37.0609 10 38.0783 10.4214 38.8284 11.1716C39.5786 11.9217 40 12.9391 40 14C40 15 39.66 15.84 39.1 16.52L33.28 24.3C32.56 25.32 31.36 26 30 26Z"
          fill="#121516"
        />
      </svg>
    </SvgIcon>
  );
};

export default CartSvg;