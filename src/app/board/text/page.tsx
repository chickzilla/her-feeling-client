"use client";
import Footer from "@/components/footer/footer";
import HeaderTitle from "@/components/text-board/header-title";
import ResultPane from "@/components/text-board/resultPane";
import TextAreaSendPrompt from "@/components/text-board/text-area-send-prompt";
import { FeelingResponse } from "@/interface/feeling";
import { useEffect, useState } from "react";

export default function BoardTextPage() {
	const [promptResult, setPromptResult] = useState<FeelingResponse | undefined>(
		undefined
	);
	const [isOpenResult, setIsOpenResult] = useState<boolean | undefined>(
		undefined
	);

	return (
		<main className="w-[100vw] px-10 lg:px-20 space-y-12 h-[100vh] overflow-y-hidden text-black bg-coffeeBlack overflow-x-hidden pb-20 ">
			<div className="flex flex-col justify-center space-y-16 h-[100vh]">
				<div className="flex flex-col text-center items-center h-[50vh] justify-center ">
					<HeaderTitle />
					<TextAreaSendPrompt
						setResultPromptToParent={(prompt: FeelingResponse) => {
							setPromptResult(prompt);
						}}
						setOpenResultToParent={(isOpen: boolean) => {
							setIsOpenResult(!isOpen);
						}}
					/>
					<div className="text-xs mt-4 text-gray-400 text-start w-full">
						👉 The prediction could be slow on the first attempt.
					</div>
				</div>
				<div className="">
					<ResultPane
						resultPrompt={promptResult}
						openResultFromParent={isOpenResult}
					/>
				</div>
			</div>
		</main>
	);
}
