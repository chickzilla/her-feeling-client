"use client";
import HaveResult from "./have-result";
import NoResult from "./no-result";
import { useState } from "react";
export default function ResultPane() {
  const [isResult, setIsResult] = useState(true);
  return (
    <div className="flex flex-col items-center justify-center text-center border-t-2 border-slate-300 w-[50vw] py-10">
      {isResult ? <HaveResult /> : <NoResult />}
    </div>
  );
}
