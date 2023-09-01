import Image from "next/image";
import React from "react";

export default function LogoHeader() {
  // return <link rel="icon" href="public/logo-header.svg" />;
  return (
    <React.Fragment>
      {/* Mobile */}
      <div className="block md:hidden">
        <Image
          width={41}
          height={87}
          src="./logo-sm-secondary.svg"
          alt="Logo"
        />
      </div>
      {/* Web */}
      <div className="hidden md:block">
        <Image
          width={151}
          height={87}
          src="./logo-lg-secondary.svg"
          alt="Logo"
        />
      </div>
    </React.Fragment>
  );
}
