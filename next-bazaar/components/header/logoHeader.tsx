import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function LogoHeader() {
  // return <link rel="icon" href="public/logo-header.svg" />;
  return (
    <React.Fragment>
      <Link href="/">
        {/* Mobile */}
        <div className="block md:hidden">
          <Image width={41} height={87} src="/logo-sm-white.svg" alt="Logo" />
        </div>
        {/* Web */}
        <div className="hidden md:block">
          <Image width={151} height={87} src="/logo-lg-white.svg" alt="Logo" />
        </div>
      </Link>
    </React.Fragment>
  );
}
