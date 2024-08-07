"use client";
import { signUpSchema } from "@/schema/sign-up-form-schema";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo } from "react";
import TextField from "@mui/material/TextField/TextField";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form";
import { textFieldWhiteStyle } from "@/style/text-field-mui-style";

export default function SignUpForm() {
	const form = useForm<z.infer<typeof signUpSchema>>({
		resolver: zodResolver(signUpSchema),
	});

	const isDisabled = useMemo(
		() => form.formState.isSubmitting || !form.formState.isValid,
		[form.formState.isSubmitting, form.formState.isValid]
	);

	async function onSubmit() {
		try {
			console.log(form.getValues());
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="p-5 flex flex-col space-y-8"
			>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<TextField
									{...field}
									label="Email"
									variant="outlined"
									sx={textFieldWhiteStyle}
									className="w-[20vw]"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<TextField
									{...field}
									label="Password"
									variant="outlined"
									sx={textFieldWhiteStyle}
									className="w-[20vw]"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="confirmPassword"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<TextField
									{...field}
									label="Confirm Password"
									variant="outlined"
									sx={textFieldWhiteStyle}
									className="w-[20vw]"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<button
					disabled={isDisabled}
					className={`text-white hover:cursor-pointer border w-[20vw] h-10 bg-orange-400 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-80 duration-75 transition`}
					onClick={onSubmit}
				>
					Sign Up
				</button>
			</form>
		</Form>
	);
}
