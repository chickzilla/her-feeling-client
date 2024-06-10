"use client";
import { useRouter } from "next/navigation";
import NavbarMiddleSubItem from "./navbar_middle_sub_item";

export default function NavbarMiddleItem() {
  const router = useRouter();
  return (
    <div className="text-center items-center font-light flex flex-row space-x-7">
      <div className="hover:cursor-pointer">Forum</div>
      <NavbarMiddleSubItem name="Board" isActive={true} href="/text" />
    </div>
  );
}
