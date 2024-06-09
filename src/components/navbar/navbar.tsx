import Image from "next/image";
import NavbarMiddleItem from "./navbar_middle_item";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-screen h-16 px-8 items-center z-50">
      <div className="text-white text-center items-center font-bold flex flex-row fade-in justify-between">
        <div className="flex flex-row items-center">
          <Image
            alt="her feeling"
            src="/images/logo/logo_white.png"
            width={50}
            height={50}
          />
          <div>HERFEEL</div>
        </div>

        <NavbarMiddleItem />
        <div>Login</div>
      </div>
    </nav>
  );
}
