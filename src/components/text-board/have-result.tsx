import ResultItem from "./result-item";
import { Bot } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HelpSearchQuery from "./help-search-query";
import { HoverCard } from "../ui/hover-card";
import ResultHover from "./result-hover";
import { Rating } from "@mui/material";
import RatingResult from "./rating-result";
import ResultDescription from "./result-description";

export default function HaveResult() {
  return (
    <div className=" items-center justify-center text-center text-black space-y-6 w-full py-10 ">
      <ResultDescription />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-5 py-10 ">
        <div className="">
          <ResultHover>
            <ResultItem
              mood="Sadness"
              percent={0.85}
              color="gray"
              sizeCircle={50}
            >
              <div className="text-4xl">😥</div>
            </ResultItem>
          </ResultHover>
        </div>

        <div className="">
          <ResultHover>
            <ResultItem
              mood="Joy"
              percent={0.51}
              color="yellowgreen"
              sizeCircle={50}
            >
              <div className="text-4xl">😂</div>
            </ResultItem>
          </ResultHover>
        </div>
        <div className="">
          <ResultHover>
            <ResultItem mood="Love" percent={0.5} color="pink" sizeCircle={50}>
              <div className="text-4xl">🥰</div>
            </ResultItem>
          </ResultHover>
        </div>
        <div className="">
          <ResultHover>
            <ResultItem mood="Angry" percent={0.5} color="red" sizeCircle={50}>
              <div className="text-4xl">😤</div>
            </ResultItem>
          </ResultHover>
        </div>
        <div className="">
          <ResultHover>
            <ResultItem
              mood="Fear"
              percent={0.5}
              color="purple"
              sizeCircle={50}
            >
              <div className="text-4xl">😨</div>
            </ResultItem>
          </ResultHover>
        </div>
        <div className="">
          <ResultHover>
            <ResultItem
              mood="Surprise"
              percent={0.5}
              color="orange"
              sizeCircle={50}
            >
              <div className="text-4xl">😦</div>
            </ResultItem>
          </ResultHover>
        </div>
      </div>
      <div className="space-y-12">
        <HelpSearchQuery />
      </div>
    </div>
  );
}
