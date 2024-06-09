import { Frown } from "lucide-react";
import React from "react";

export default function ResultItem({
  mood,
  percent,
  children,
}: {
  mood: string;
  percent: number;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-start text-center text-gray-400  space-x-5 p-2">
      <div>{children}</div>
      <div className="flex flex-col space-y-2 bg-white rounded-full text-black py-5 px-10 w-[40vw] items-start border-slate-300 border-2">
        <div className="font-semibold text-lg">{mood}</div>
        <div>PERCENT</div>
      </div>
    </div>
  );
}
