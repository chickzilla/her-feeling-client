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
import Link from "next/link";

export default function NavbarMiddleItem({
	isTextBlack,
}: {
	isTextBlack: boolean;
}) {
	const router = useRouter();
	return (
		<div
			className={`text-center items-center font-light flex flex-row space-x-7 ${
				isTextBlack ? "text-black" : "text-white"
			}`}
		>
			<Link
				href="/board/history"
				className="hover:bg-slate-200 px-4 rounded-xl hover:bg-opacity-20 transition duration-200"
			>
				<div className="hover:cursor-pointer ">History</div>
			</Link>
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem className="">
						<NavigationMenuTrigger className="font-light text-xs : lg:text-base">
							Our service
						</NavigationMenuTrigger>
						<NavigationMenuContent className="">
							<div className=" bg-black rounded-2xl border-2 border-borderColor bg-opacity-30 p-3 flex flex-row space-x-5 ">
								<NavbarDropdownItem
									name="Text"
									href="/board/text"
									description="From text alone, we can gauge her feelings."
								/>
								{/*
								TODO version 2.0	
									<NavbarMiddleSubItem
										name="Image"
										href="/board/image"
										description="By looking at her image, we can determine her feelings."
									/>*/}
							</div>
						</NavigationMenuContent>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
			{/*
				<Link
					href="https://github.com/chickzilla/her-feeling-client"
					className="hover:bg-slate-200 px-4 rounded-xl hover:bg-opacity-20 transition duration-200"
				>
					<div className="hover:cursor-pointer ">Github</div>
				</Link>*/}
		</div>
	);
}
