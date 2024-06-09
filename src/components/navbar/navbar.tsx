"use client";

import Image from "next/image";
import NavbarMiddleItem from "./navbar_middle_item";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function Navbar() {
  const [isRoot, setIsRoot] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setIsRoot(pathname === "/");
  });
  return (
    <nav
      className={`fixed top-0 w-screen h-16 px-8 items-center z-50 ${
        !isRoot
          ? "bg-slate-50 border-slate-300 border-b-2 text-black"
          : "bg-transparent text-white"
      }`}
    >
      <div className="text-center items-center font-bold flex flex-row fade-in justify-between h-full text-sm lg:text-base">
        <Link href="/">
          <div className="flex flex-row items-center">
            <Image
              alt="her feeling"
              src={
                isRoot
                  ? "/images/logo/logo_white.png"
                  : "/images/logo/logo_black.png"
              }
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
