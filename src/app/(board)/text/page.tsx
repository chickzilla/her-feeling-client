import FirstResult from "@/components/text-board/first-result";
import HelperPanel from "@/components/text-board/helper-panel";
import ResultItem from "@/components/text-board/result-item";
import ResultPane from "@/components/text-board/resultPane";
import TextAreaBoard from "@/components/text-board/text-area-board";
import TextAreaSendPrompt from "@/components/text-board/text-area-send-prompt";
import { BsEmojiTear } from "react-icons/bs";

export default function BoardTextPage() {
	return (
		<>
			<main className="w-[100vw] px-10 lg:px-20 pt-[20px] lg:pt-[100px] space-y-12 min-h-[100vh] overflow-y-hidden text-black bg-coffeeBlack overflow-x-hidden pb-20 ">
				<div className="flex flex-col justify-evenly space-y-16 ">
					<div className="flex flex-col lg:justify-between space-y-12 text-center items-center">
						<div className="title-1 move-up w-[100%] lg:w-auto leading-snug">
							Understand Her Emotions <br /> Make Her Proud 😦
						</div>
						<div className="flex w-[70%] move-up description">
							By leveraging a text classifier model, we can determine her
							emotional state. If you have a problem on how to tell someone
							feeling, I am here to help you.
						</div>
						<TextAreaSendPrompt />
					</div>
					<div className="">
						<ResultPane />
					</div>
				</div>
			</main>
		</>
	);
}
