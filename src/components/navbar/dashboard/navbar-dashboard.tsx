"use client";

import {
	Trash2,
	MessageSquareWarning,
	BookType,
	Images,
	ChevronsRight,
	ChevronsLeft,
} from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import NavbarItem from "./navbar-item";
import { useTheme, useMediaQuery } from "@mui/material";

export default function NavbarDashBoard() {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
	const [expanded, setExpanded] = useState(false); // Default to unexpanded

	useEffect(() => {
		if (!isSmallScreen) {
			const expandedDefault =
				typeof window !== "undefined"
					? localStorage.getItem("navbarExpanded")
					: "false";
			setExpanded(expandedDefault === "true");
		}
	}, [isSmallScreen]);

	const pathname = usePathname();

	return (
		<aside className="h-screen bg-blackGray flex-none sticky top-0 py-16 ">
			{!isSmallScreen && (
				<button
					onClick={() => {
						localStorage.setItem("navbarExpanded", String(!expanded));
						setExpanded((curr) => !curr);
					}}
					className="p-1.5 rounded-xl absolute -right-4 top-20 text-gray-400 fade-in-delay-0"
				>
					{expanded ? <ChevronsLeft /> : <ChevronsRight />}
				</button>
			)}
			<nav
				className={`h-full flex flex-col max-w-60 justify-between overflow-x-hidden transition-all overflow-y-hidden no-scrollbar py-14 ${
					expanded ? "px-10" : "px-4"
				} fade-in-delay-0 border-r-2 border-neutral-800`}
			>
				<div className="flex flex-col justify-between items-center gap-3.5 px-2">
					<span
						className={`text-white text-sm text-center font-semibold overflow-hidden text-nowrap ${
							expanded ? "w-full" : "w-0"
						}`}
					>
						Tell us by
					</span>
					<hr className="w-full bg-[#041016] my-5" />
				</div>
				<ul className="flex-1 flex gap-2.5 flex-col">
					<NavbarItem
						icon={<BookType size={20} />}
						text="Text"
						expanded={expanded}
						active={pathname.startsWith("/board/text")}
						href="/board/text"
					/>
					{/*
					TODO Version 2.0
						<NavbarItem
							icon={<Images size={20} />}
							text="Image"
							active={pathname.startsWith("/image")}
							href="/board/image"
							expanded={expanded}
						/>*/}
				</ul>
			</nav>
		</aside>
	);
}
