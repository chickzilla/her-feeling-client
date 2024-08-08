import { Toaster } from "@/components/alert/toaster";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Navbar from "@/components/navbar/navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Login to HERFEEL - Text-Based Mood Prediction",
	description:
		"With HERFEEL, reveal the emotional insights concealed in words. You may improve your understanding of and relationships with the significant someone in your life by using our sophisticated mood prediction tool, which analyzes text to uncover underlying emotions. HERFEEL offers precise and customized mood forecasts to help you navigate relationships and strengthen bonds, whether you're just inquisitive or navigating a friendship.",
};

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
