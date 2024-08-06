"use client";
import { useEffect, useState } from "react";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
} from "@/components/ui/drawer";

import { isUseCookies } from "@/lib/is-use-cookies";

export default function CookiePanel() {
	const [isOpen, setIsOpen] = useState(false);
	const isCookieAccepted = isUseCookies();

	useEffect(() => {
		if (isCookieAccepted) {
			setIsOpen(true);
		}
	}, [isCookieAccepted]);

	return (
		<Drawer open={isOpen} onOpenChange={setIsOpen}>
			<DrawerContent className="bg-white px-6 py-2">
				<DrawerHeader>
					<DrawerTitle>Cookie needed</DrawerTitle>
					<DrawerDescription>
						Our website relies on essential cookies for functionality. With your
						permission, we also use non-essential cookies to enhance user
						experience and analyze traffic. By selecting "Accept," you consent
						to our use of cookies as detailed in our Cookie Policy. You can
						modify your cookie preferences anytime by choosing "Reject."
					</DrawerDescription>
				</DrawerHeader>
				<DrawerFooter className="flex justify-end flex-row space-x-5">
					<div className="flex flex-row space-x-10">
						<button
							className={`bg-orange-700 text-white py-2 px-5 rounded-xl font-normal fade-in-delay-0  
         hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-orange-400 hover:bg-black hover:text-white hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-xs lg:text-base w-[100%] lg:w-40 
        `}
						>
							Accept
						</button>
						<DrawerClose className="text-center flex items-center">
							<button
								className={`bg-gray-200 text-black py-2 px-5 rounded-xl font-normal fade-in-delay-0  
         hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-orange-400 hover:bg-gray- hover:text-black hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-xs lg:text-base w-[100%] lg:w-40 
        `}
							>
								Reject
							</button>
						</DrawerClose>
					</div>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}
