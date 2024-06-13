"use client";
import HaveResult from "./have-result";
import NoResult from "./no-result";
import { useState } from "react";
export default function ResultPane() {
  const [isResult, setIsResult] = useState(true);
  return (
    <div className="flex flex-col text-center w-[100%] border-t-2 border-zinc-800">
      {isResult ? <HaveResult /> : <NoResult />}
    </div>
  );
}
