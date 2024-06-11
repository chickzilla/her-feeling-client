import ResultItem from "./result-item";
import { Bot } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HelpSearchQuery from "./help-search-query";

export default function HaveResult() {
  return (
    <div className=" items-center justify-center text-center text-black space-y-6 w-full py-10 ">
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-y-5 py-10 ">
        <div className="">
          <ResultItem
            mood="Sadness"
            percent={0.85}
            color="gray"
            sizeCircle={50}
          >
            <div className="text-4xl">😥</div>
          </ResultItem>
        </div>

        <div className="">
          <ResultItem
            mood="Joy"
            percent={0.51}
            color="yellowgreen"
            sizeCircle={50}
          >
            <div className="text-4xl">😂</div>
          </ResultItem>
        </div>
        <div className="">
          <ResultItem mood="Love" percent={0.5} color="pink" sizeCircle={50}>
            <div className="text-4xl">🥰</div>
          </ResultItem>
        </div>
        <div className="">
          <ResultItem mood="Angry" percent={0.5} color="red" sizeCircle={50}>
            <div className="text-4xl">👿</div>
          </ResultItem>
        </div>
        <div className="">
          <ResultItem mood="Fear" percent={0.5} color="purple" sizeCircle={50}>
            <div className="text-4xl">😨</div>
          </ResultItem>
        </div>
        <div className="">
          <ResultItem
            mood="Surprise"
            percent={0.5}
            color="orange"
            sizeCircle={50}
          >
            <div className="text-4xl">😦</div>
          </ResultItem>
        </div>
      </div>
      <HelpSearchQuery />
    </div>
  );
}
