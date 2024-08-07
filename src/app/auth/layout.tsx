import { Toaster } from "@/components/alert/toaster";
import NavbarDashBoard from "@/components/navbar/dashboard/navbar-dashboard";
import Navbar from "@/components/navbar/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div className="flex">
				<Navbar isTextBlack={true} />
				{children}
			</div>
		</>
	);
}
