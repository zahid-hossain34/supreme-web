'use client';
import Image from "next/image";
import fplLogo from "../../public/logos/fpl-logo.png";

export default function Logo() {
    return (
        <Image
        src={fplLogo}
        width={100}
        height={160}
        alt="fpl logo"
      />
    );
  }
  