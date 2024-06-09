"use client";
import { useRouter } from "next/navigation";

export default function NavbarMiddleItem() {
  const router = useRouter();
  return (
    <div className="text-white text-center items-center font-light flex flex-row fade-in space-x-7">
      <div className="hover:cursor-pointer">Forum</div>
      <div
        className="hover:cursor-pointer"
        onClick={() => router.push("/text")}
      >
        Board
      </div>
    </div>
  );
}
