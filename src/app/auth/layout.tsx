import { Toaster } from "@/components/alert/toaster";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Navbar from "@/components/navbar/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div className="flex">
				<Navbar isTextBlack={true} />
				<GoogleOAuthProvider
					clientId={process.env.NEXT_PUBLIC_GOOGLE_CREDENTIALS_LOGIN || ""}
				>
					{children}
				</GoogleOAuthProvider>
				<Toaster />
			</div>
		</>
	);
}
