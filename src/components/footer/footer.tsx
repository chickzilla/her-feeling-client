import Link from "next/link";
import { IoLogoGithub } from "react-icons/io5";

export default function Footer() {
	return (
		<footer className="bg-transparent text-white text-center pb-5 fixed bottom-0">
			<div className="flex justify-center space-x-4 w-[100vw] items-center">
				<div className="text-xs">
					Created By {process.env.NEXT_PUBLIC_GITHUB_NAME || "mig"}
				</div>
				<Link href={process.env.NEXT_PUBLIC_GITHUB_LINK || "#"} target="_blank">
					<IoLogoGithub className="text-2xl hover:cursor-pointer" />
				</Link>
			</div>
		</footer>
	);
}
