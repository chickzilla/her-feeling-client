import {
  BsEmojiLaughing,
  BsEmojiTear,
  BsEmojiKiss,
  BsEmojiAngry,
  BsEmojiAstonished,
  BsEmojiDizzy,
} from "react-icons/bs";
import ResultItem from "./result-item";
import { Bot } from "lucide-react";

export default function HaveResult() {
  return (
    <div className=" items-center justify-center text-center text-black space-y-12 w-full py-10 ">
      <div className="flex items-center text-start text-4xl font-bold">
        Result
        <Bot size={50} className="ml-10" />
      </div>

      <div className="grid grid-cols-3 gap-y-5 py-10 ">
        <div className="">
          <ResultItem
            mood="Sadness"
            percent={0.85}
            color="gray"
            sizeCircle={50}
          >
            <BsEmojiTear size={50} style={{ color: "black" }} />
          </ResultItem>
        </div>
        <div className="">
          <ResultItem
            mood="Joy"
            percent={0.51}
            color="yellowgreen"
            sizeCircle={50}
          >
            <BsEmojiLaughing size={50} style={{ color: "black" }} />
          </ResultItem>
        </div>
        <div className="">
          <ResultItem mood="Love" percent={0.5} color="pink" sizeCircle={50}>
            <BsEmojiKiss size={50} style={{ color: "black" }} />
          </ResultItem>
        </div>
        <div className="">
          <ResultItem mood="Angry" percent={0.5} color="red" sizeCircle={50}>
            <BsEmojiAngry size={50} style={{ color: "black" }} />
          </ResultItem>
        </div>
        <div className="">
          <ResultItem mood="Fear" percent={0.5} color="purple" sizeCircle={50}>
            <BsEmojiDizzy size={50} style={{ color: "black" }} />
          </ResultItem>
        </div>
        <div className="">
          <ResultItem
            mood="Surprise"
            percent={0.5}
            color="orange"
            sizeCircle={50}
          >
            <BsEmojiAstonished size={50} style={{ color: "black" }} />
          </ResultItem>
        </div>
      </div>
    </div>
  );
}
