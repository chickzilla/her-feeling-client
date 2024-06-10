import ResultItem from "./result-item";
import { Bot } from "lucide-react";
import ResultHover from "./result-hover";

export default function HaveResult() {
  return (
    <div className=" items-center justify-center text-center text-black space-y-6 w-full py-10 ">
      <div className="flex items-center text-start text-4xl font-bold">
        Result
        <Bot size={50} className="ml-10" />
      </div>

      <div className="grid grid-cols-3 gap-y-5 py-10 ">
        <div className="">
          <ResultHover>
            <ResultItem
              mood="Sadness"
              percent={0.85}
              color="gray"
              sizeCircle={50}
            >
              <div className="text-4xl">😥</div>
            </ResultItem>
          </ResultHover>
        </div>

        <div className="">
          <ResultHover>
            <ResultItem
              mood="Joy"
              percent={0.51}
              color="yellowgreen"
              sizeCircle={50}
            >
              <div className="text-4xl">😂</div>
            </ResultItem>
          </ResultHover>
        </div>
        <div className="">
          <ResultHover>
            <ResultItem mood="Love" percent={0.5} color="pink" sizeCircle={50}>
              <div className="text-4xl">🥰</div>
            </ResultItem>
          </ResultHover>
        </div>
        <div className="">
          <ResultHover>
            <ResultItem mood="Angry" percent={0.5} color="red" sizeCircle={50}>
              <div className="text-4xl">👿</div>
            </ResultItem>
          </ResultHover>
        </div>
        <div className="">
          <ResultHover>
            <ResultItem
              mood="Fear"
              percent={0.5}
              color="purple"
              sizeCircle={50}
            >
              <div className="text-4xl">😨</div>
            </ResultItem>
          </ResultHover>
        </div>
        <div className="">
          <ResultHover>
            <ResultItem
              mood="Surprise"
              percent={0.5}
              color="orange"
              sizeCircle={50}
            >
              <div className="text-4xl">😦</div>
            </ResultItem>
          </ResultHover>
        </div>
      </div>
    </div>
  );
}
