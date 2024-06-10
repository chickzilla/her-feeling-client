"use client";
import { BsEmojiTear } from "react-icons/bs";
import ResultItem from "./result-item";

export default function FirstResult() {
  return (
    <div className="flex flex-col">
      <ResultItem mood="Sadness" percent={0.85} color="gray" sizeCircle={250}>
        <BsEmojiTear size={200} style={{ color: "black" }} />
      </ResultItem>
      <div>85 %</div>
    </div>
  );
}
