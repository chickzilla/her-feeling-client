"use client";
import { BsEmojiTear } from "react-icons/bs";
import ResultItem from "./result-item";
import { useState } from "react";
import FirstResultItem from "./first-result-item";

export default function FirstResult() {
  const [isResult, setIsResult] = useState(true);

  return (
    <div className="flex flex-col space-y-9">
      {isResult ? (
        <div className=" flex flex-col space-y-10">
          <FirstResultItem mood="Sadness" percent={0.85} color="gray">
            <div className="text-[15em]">😥</div>
          </FirstResultItem>
        </div>
      ) : (
        <ResultItem mood="lmao" percent={0} color="gray" sizeCircle={300}>
          <div className="text-[15em]">😦</div>
        </ResultItem>
      )}

      <div className="text-white text-2xl font-semibold"></div>
    </div>
  );
}
