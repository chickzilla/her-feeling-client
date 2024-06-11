"use client";
import { BsEmojiTear } from "react-icons/bs";
import ResultItem from "./result-item";
import { useState } from "react";

export default function FirstResult() {
  const [isResult, setIsResult] = useState(true);

  return (
    <div className="flex flex-col space-y-9">
      {isResult ? (
        <div className=" flex flex-col space-y-10">
          <ResultItem
            mood="Sadness"
            percent={0.85}
            color="gray"
            sizeCircle={300}
          >
            <div className="text-[15em]">😥</div>
          </ResultItem>
        </div>
      ) : (
        <ResultItem
          mood="Just tell me bro don't be shy"
          percent={0}
          color="gray"
          sizeCircle={300}
        >
          <div className="text-[15em]">😦</div>
        </ResultItem>
      )}

      <div className="text-white text-2xl font-semibold">85 %</div>
    </div>
  );
}
