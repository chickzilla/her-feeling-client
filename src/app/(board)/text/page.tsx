import FirstResult from "@/components/text-board/first-result";
import HelperPanel from "@/components/text-board/helper-panel";
import ResultItem from "@/components/text-board/result-item";
import ResultPane from "@/components/text-board/resultPane";
import TextAreaBoard from "@/components/text-board/text-area-board";
import { BsEmojiTear } from "react-icons/bs";

export default function BoardTextPage() {
  return (
    <>
      <main className="w-[100vw] px-20 pt-[100px] space-y-12 min-h-[100vh] overflow-y-hidden text-black bg-white overflow-x-hidden">
        <div className="flex flex-col justify-between">
          <div className="flex lg:flex-row flex-col lg:justify-between space-y-12 lg:space-y-0 pb-10">
            <TextAreaBoard />
            <div className="flex items-start justify-center text-center ">
              <FirstResult />
            </div>
          </div>
          <div className="">
            <ResultPane />
          </div>
        </div>
      </main>
    </>
  );
}
