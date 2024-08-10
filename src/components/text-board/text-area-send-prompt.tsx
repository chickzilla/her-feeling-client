"use client";
import Feeling, { FeelingResponse } from "@/interface/feeling";
import getFeeling from "@/services/getFeeling";
import { useEffect, useState } from "react";
import { useToast } from "../ui/use-toast";
import { Send, Award } from "lucide-react";
import { Skeleton } from "../ui/skeleton";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";

export default function TextAreaSendPrompt({
	setResultPromptToParent,
	setOpenResultToParent,
}: {
	setResultPromptToParent: (result: FeelingResponse) => void;
	setOpenResultToParent: (isOpen: boolean) => void;
}) {
	const [message, setMessage] = useState("");
	const [isFetching, setIsFetching] = useState<boolean>(false);
	const [isOpenResult, setIsOpenResult] = useState<boolean>(false);

	const { toast } = useToast();

	const sendOpenResultToParent = () => {
		setOpenResultToParent(isOpenResult);
		setIsOpenResult(!isOpenResult);
	};

	const sendPrompt = async () => {
		if (message.trim() === "") {
			toast({
				title: "Text Predict: Invalid Input",
				description: "Please enter a prompt message",
				isError: true,
			});
		} else {
			try {
				setIsFetching(true);
				const res: FeelingResponse = await getFeeling({ prompt: message });
				setIsFetching(false);
				setResultPromptToParent(res);
			} catch (e) {
				if (e instanceof Error) {
					console.log(e.message);
					toast({
						title: "Error",
						description: "cannot send prompt to server",
						isError: true,
					});
					setIsFetching(false);
				}
			}
		}
	};

	return (
		<div className="w-[100%] bg-neutral-800 bg-opacity-70 rounded-3xl p-4 flex flex-row mt-12">
			<div className="relative w-full">
				{isFetching ? (
					<div className="absolute inset-0 flex items-center justify-center bg-neutral-800 bg-opacity-70 rounded-3xl">
						<CircularProgress className="text-yellow-600" />
					</div>
				) : null}
				<textarea
					placeholder="Enter her message here!"
					className="fade-in-delay-0 bg-transparent p-5 w-[100%] max-h-[20vh] h-[20vh] placeholder-gray-500 text-white description focus:border-none focus:outline-none disabled:blur-sm"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					disabled={isFetching}
					style={{ resize: "none" }}
				/>
			</div>

			<div className="flex justify-end p-2 items-end flex-col space-y-4">
				{isFetching ? (
					<>
						<Skeleton className="w-12 h-12 rounded-full bg-orange-700" />
						<Skeleton className="w-12 h-12 rounded-full bg-orange-800" />
					</>
				) : (
					<>
						<button
							className={`bg-red-800 text-white w-12 h-12 rounded-full font-normal fade-in-delay-0  
           hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-600 enabled:hover:bg-white enabled:hover:text-black enabled:hover:shadow-lg transition duration-300 ease-in-out transform enabled:hover:-translate-y-1 enabled:hover:scale-110
          flex justify-center items-center`}
							onClick={sendOpenResultToParent}
						>
							<Award size={20} />
						</button>
						<button
							className={`bg-orange-700 text-white w-12 h-12 rounded-full font-normal fade-in-delay-0  
				   hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-800 enabled:hover:bg-white enabled:hover:text-black enabled:hover:shadow-lg transition duration-300 ease-in-out transform enabled:hover:-translate-y-1 enabled:hover:scale-110
				  flex justify-center items-center`}
							onClick={sendPrompt}
							disabled={isFetching || message.trim() === ""}
						>
							<Send size={20} />
						</button>
					</>
				)}
			</div>
		</div>
	);
}
