import Image from "next/image";
import NavbarMiddleItem from "./navbar_middle_item";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav
      className={`fixed top-0 w-screen h-16 px-8 items-center z-50 
      bg-black bg-opacity-20 text-white fade-in-delay-0
      `}
    >
      <div className="text-center items-center font-bold flex flex-row justify-between h-full text-sm lg:text-base">
        <Link href="/">
          <div className="flex flex-row items-center">
            <Image
              alt="predict feelingtext"
              src="/images/logo/logo_white.png"
              width={50}
              height={50}
            />
            <div>HERFEEL</div>
          </div>
        </Link>

        <NavbarMiddleItem />
        <div>Login</div>
      </div>
    </nav>
  );
}
