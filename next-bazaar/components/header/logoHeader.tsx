import Image from "next/image";

export default function LogoHeader() {
  // return <link rel="icon" href="public/logo-header.svg" />;
  return <Image width={208} height={87} src="./logo-header.svg" alt="Logo" />;
}
