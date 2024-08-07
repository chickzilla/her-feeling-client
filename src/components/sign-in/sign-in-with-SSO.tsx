"use client";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { toast } from "../ui/use-toast";
import authWithSSO from "@/services/authWithSSO";
import { setItemToLocalStorage } from "@/lib/localstorage";
import { useRouter } from "next/navigation";
import { useGoogleLogin } from "@react-oauth/google";
import Image from "next/image";

export default function SignInWithSSO({
	setParentRedered,
}: {
	setParentRedered: (isRendered: boolean) => void;
}) {
	const [isRendered, setIsRendered] = useState(false);
	const router = useRouter();

	const onSuccess = async (response: any) => {
		const token = response.credential;

		if (token) {
			const decodedToken: any = jwtDecode(token);
			const userProfile = {
				email: decodedToken.email,
				picture: decodedToken.picture,
			};

			try {
				const email = userProfile.email;
				const response = await authWithSSO({ email });
				if (response.error) {
					toast({
						title: "Cannot sign in with Google",
						description: response.error,
						isError: true,
					});
				}

				setItemToLocalStorage({
					key: "profile_image",
					value: userProfile.picture,
				});

				toast({
					title: "Login success",
					description: "Welcome back",
					isError: false,
				});

				window.location.href = "/board/text";
			} catch (error) {
				console.log(error);
				toast({
					title: "Cannot sign in with Google",
					description: "Failed to sign in with Google",
					isError: true,
				});
			}
		}
	};

	const onFailure = () => {
		toast({
			title: "Cannot sign in",
			description: "Failed to sign in with Google",
			isError: true,
		});
	};

	const googleLogin = useGoogleLogin({
		onSuccess: onSuccess,
		onError: onFailure,
	});

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
				<button
					onClick={() => googleLogin()}
					className="w-[40vw] lg:w-[20vw] border-gray-500 rounded-lg border-[1px] px-4 py-4 flex flex-row justify-start space-x-3 font-light hover:bg-zinc-100 hover:cursor-pointer"
				>
					<Image
						src="/images/google-logo-2.svg"
						alt="Google Icon"
						width={25}
						height={25}
					/>
					<div>Continue With Google</div>
				</button>
			</div>
		</div>
	);
}
