import { Frown } from "lucide-react";
import ResultItem from "./result-item";

export default function HaveResult() {
  return (
    <div className="flex flex-col items-center justify-center text-center text-gray-400 space-y-5">
      <ResultItem mood="Sadness" percent={0.95}>
        <Frown size={100} style={{ color: "GrayText" }} />
      </ResultItem>
      <ResultItem mood="Sadness" percent={0.95}>
        <Frown size={100} style={{ color: "GrayText" }} />
      </ResultItem>
      <ResultItem mood="Sadness" percent={0.95}>
        <Frown size={100} style={{ color: "GrayText" }} />
      </ResultItem>
    </div>
  );
}
