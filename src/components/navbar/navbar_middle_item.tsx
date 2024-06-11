"use client";
import { useRouter } from "next/navigation";
import NavbarMiddleSubItem from "./navbar_middle_sub_item";
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

export default function NavbarMiddleItem() {
  const router = useRouter();
  return (
    <div className="text-center items-center font-light flex flex-row space-x-7">
      <div className="hover:cursor-pointer">Forum</div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className="">
            <NavigationMenuTrigger className="font-light text-base">
              AI classifier
            </NavigationMenuTrigger>
            <NavigationMenuContent className="">
              <div className=" bg-black rounded-2xl border-2 border-gray-600 bg-opacity-30 p-3 flex flex-row space-x-5 ">
                <NavbarDropdownItem
                  name="Text"
                  href="/text"
                  description="From text alone, we can gauge her feelings."
                />
                <NavbarDropdownItem
                  name="Image"
                  href="/image"
                  description="By looking at her image, we can determine her feelings."
                />
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
