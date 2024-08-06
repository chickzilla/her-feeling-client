"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import NavbarDropdownItem from "./nav_bar_dropdown_item";
import Link from "next/link";

export default function LoginMenu() {
  return (
    <div className="flex flex-row space-x-5 text-xs : lg:text-base font-light">
      <Link
        href="sign-up"
        className="hover:bg-slate-200 px-4 rounded-xl hover:bg-opacity-20 transition duration-200"
      >
        <div className="hover:cursor-pointer ">Sign up</div>
      </Link>
      <Link
        href="sign-in"
        className="hover:bg-slate-200 px-4 rounded-xl hover:bg-opacity-20 transition duration-200"
      >
        <div className="hover:cursor-pointer ">Sign in</div>
      </Link>
    </div>
  );
}
