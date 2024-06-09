import { Frown } from "lucide-react";
import ResultItem from "./result-item";

export default function HaveResult() {
  return (
    <div className="flex flex-col items-center justify-center text-center text-gray-400 space-y-5">
      <div className="move-right-to-left-0">
        <ResultItem mood="Sadness" percent={0.85}>
          <Frown size={100} style={{ color: "GrayText" }} />
        </ResultItem>
      </div>
      <div className="move-right-to-left-1">
        <ResultItem mood="Sadness" percent={0.51}>
          <Frown size={100} style={{ color: "GrayText" }} />
        </ResultItem>
      </div>
      <div className="move-right-to-left-2">
        <ResultItem mood="Sadness" percent={0.0012}>
          <Frown size={100} style={{ color: "GrayText" }} />
        </ResultItem>
      </div>
      <div className="move-right-to-left-3">
        <ResultItem mood="Sadness" percent={0.0012}>
          <Frown size={100} style={{ color: "GrayText" }} />
        </ResultItem>
      </div>
      <div className="move-right-to-left-4">
        <ResultItem mood="Sadness" percent={0.0012}>
          <Frown size={100} style={{ color: "GrayText" }} />
        </ResultItem>
      </div>
      <div className="move-right-to-left-5">
        <ResultItem mood="Sadness" percent={0.0012}>
          <Frown size={100} style={{ color: "GrayText" }} />
        </ResultItem>
      </div>
    </div>
  );
}
