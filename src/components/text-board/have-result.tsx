import {
  BsEmojiLaughing,
  BsEmojiTear,
  BsEmojiKiss,
  BsEmojiAngry,
  BsEmojiAstonished,
  BsEmojiDizzy,
} from "react-icons/bs";
import ResultItem from "./result-item";

export default function HaveResult() {
  return (
    <div className="flex flex-col items-center justify-center text-center text-gray-400 space-y-5">
      <div className="move-right-to-left-0">
        <ResultItem mood="Sadness" percent={0.85} color="gray">
          <BsEmojiTear size={50} style={{ color: "black" }} />
        </ResultItem>
      </div>
      <div className="move-right-to-left-1">
        <ResultItem mood="Joy" percent={0.51} color="yellowgreen">
          <BsEmojiLaughing size={50} style={{ color: "black" }} />
        </ResultItem>
      </div>
      <div className="move-right-to-left-2">
        <ResultItem mood="Love" percent={0.5} color="pink">
          <BsEmojiKiss size={50} style={{ color: "black" }} />
        </ResultItem>
      </div>
      <div className="move-right-to-left-3">
        <ResultItem mood="Angry" percent={0.5} color="red">
          <BsEmojiAngry size={50} style={{ color: "black" }} />
        </ResultItem>
      </div>
      <div className="move-right-to-left-4">
        <ResultItem mood="Fear" percent={0.5} color="purple">
          <BsEmojiDizzy size={50} style={{ color: "black" }} />
        </ResultItem>
      </div>
      <div className="move-right-to-left-5">
        <ResultItem mood="Surprise" percent={0.5} color="orange">
          <BsEmojiAstonished size={50} style={{ color: "black" }} />
        </ResultItem>
      </div>
    </div>
  );
}
