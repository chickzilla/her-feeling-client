"use client";
import { BsEmojiTear } from "react-icons/bs";
import ResultItem from "./result-item";
import { useState } from "react";

export default function FirstResult() {
  const [isResult, setIsResult] = useState(false);
  return (
    <div className="flex flex-col">
      {isResult ? (
        <ResultItem mood="Sadness" percent={0.85} color="gray" sizeCircle={250}>
          <div className="text-9xl">😥</div>
        </ResultItem>
      ) : (
        <div className="text-9xl">😦</div>
      )}
    </div>
  );
}
