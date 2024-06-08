import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-screen h-16 flex flex-row px-8 items-center z-50">
      <div className="text-white text-center items-center font-bold flex flex-row">
        <Image
          alt="her feeling"
          src="/images/logo/logo_white.png"
          width={50}
          height={50}
        />
        <div>HERFEEL</div>
      </div>
    </nav>
  );
}
