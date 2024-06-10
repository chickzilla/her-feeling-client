"use client";
import { BsEmojiTear } from "react-icons/bs";
import ResultItem from "./result-item";
import { useState } from "react";

export default function FirstResult() {
  const [isResult, setIsResult] = useState(true);
  return (
    <div className="flex flex-col">
      {isResult ? (
        <div className=" flex flex-col space-y-10">
          <ResultItem
            mood="Sadness"
            percent={0.85}
            color="gray"
            sizeCircle={250}
          >
            <div className="text-9xl">😥</div>
          </ResultItem>
          <div className="text-xl font-semibold text-gray-500">85%</div>
        </div>
      ) : (
        <ResultItem mood="" percent={0} color="gray" sizeCircle={250}>
          <div className="text-9xl">😦</div>
        </ResultItem>
      )}
    </div>
  );
}
