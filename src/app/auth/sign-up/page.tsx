import SignUpForm from "@/components/sign-up/sign-up-form";

export default function LoginPage() {
	return (
		<main className="w-[100vw] px-10 lg:px-20 pt-[20px] lg:pt-[100px] space-y-12 h-[100vh] overflow-y-hidden bg-white overflow-x-hidden pb-20 flex flex-col items-center justify-center text-center">
			<div className="space-y-4">
				<div className="">
					<div className="text-4xl font-semibold">Create an account</div>
				</div>
				<SignUpForm />
				<div className="border-t-2 description font-normal border-gray-400 pt-2 w-56">
					OR
				</div>
			</div>
		</main>
	);
}
