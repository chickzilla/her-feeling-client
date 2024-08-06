"use client";
import HeaderTitle from "@/components/text-board/header-title";
import ResultPane from "@/components/text-board/resultPane";
import TextAreaSendPrompt from "@/components/text-board/text-area-send-prompt";
import { FeelingResponse } from "@/interface/feeling";
import { useState } from "react";

export default function BoardTextPage() {
	const [promptResult, setPromptResult] = useState<FeelingResponse | undefined>(
		undefined
	);
	return (
		<>
			<main className="w-[100vw] px-10 lg:px-20 space-y-12 min-h-[100vh] overflow-y-hidden text-black bg-coffeeBlack overflow-x-hidden pb-20 ">
				<div className="flex flex-col justify-between space-y-16 ">
					<div className="flex flex-col space-y-12 text-center items-center h-[100vh] justify-center">
						<HeaderTitle />
						<TextAreaSendPrompt
							setResultPromptToParent={(prompt: FeelingResponse) => {
								setPromptResult(prompt);
							}}
						/>
					</div>
					<div className="">
						<ResultPane resultPrompt={promptResult} />
					</div>
				</div>
			</main>
		</>
	);
}
