"use client";
import { useState, useEffect } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { toast } from "../ui/use-toast";

export default function SignInWithSSO({
	setParentRedered,
}: {
	setParentRedered: (isRendered: boolean) => void;
}) {
	const [isRendered, setIsRendered] = useState(false);

	const onSuccess = (response: any) => {
		try {
			const token = response.credential;

			if (token) {
				const decodedToken: any = jwtDecode(token);
				const userProfile = {
					name: decodedToken.name,
					email: decodedToken.email,
					picture: decodedToken.picture,
				};
			}
		} catch (error) {
			toast({
				title: "Cannot sign in",
				description: "Failed to decode credentials",
				isError: true,
			});
		}
	};

	const onFailure = (response: any) => {
		toast({
			title: "Cannot sign in",
			description: response.error,
			isError: true,
		});
	};

	useEffect(() => {
		setIsRendered(true);
		setParentRedered(true);
	}, []);

	if (!isRendered) return null;
	return (
		<div className="flex flex-col space-y-4 ">
			<div className="flex items-center">
				<div className="flex-grow border-t-2 border-gray-400"></div>
				<span className="mx-4">OR</span>
				<div className="flex-grow border-t-2 border-gray-400"></div>
			</div>
			<div className="w-full items-center flex flex-col">
				<GoogleLogin
					onSuccess={onSuccess}
					text="continue_with"
					size="large"
					width="300px"
				/>
			</div>
		</div>
	);
}
