"use client";
import { BsEmojiTear } from "react-icons/bs";
import ResultItem from "./result-item";
import { useState } from "react";
import FirstResultItem from "./first-result-item";

export default function FirstResult() {
  const [isResult, setIsResult] = useState(false);

  return (
    <div className="flex flex-col space-y-9">
      {isResult ? (
        <div className=" flex flex-col space-y-10">
          <FirstResultItem mood="" percent={0.85} color="gray">
            <div className="text-[10em] lg:text-[15em]">😥</div>
          </FirstResultItem>
        </div>
      ) : (
        <FirstResultItem mood="" percent={0} color="gray">
          <div className="text-xs lg:text-[15em]">😦</div>
        </FirstResultItem>
      )}
    </div>
  );
}
