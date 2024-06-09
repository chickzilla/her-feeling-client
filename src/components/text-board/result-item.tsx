import React from "react";

import { styled } from "@mui/material/styles";

import LinearProgress from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 10,
  borderRadius: 5,
}));

export default function ResultItem({
  mood,
  percent,
  children,
  color,
}: {
  mood: string;
  percent: number;
  children: React.ReactNode;
  color: string;
}) {
  return (
    <div className="flex items-center justify-start text-center text-gray-400  space-x-8 px-2 move-right-to-left">
      <div>{children}</div>
      <div className="flex flex-col space-y-2 bg-white rounded-full text-black py-5 px-10 w-[35vw] items-start border-slate-300 border-2">
        <div className="flex flex-row space-x-7 items-center justify-center">
          <div className="font-semibold text-2xl">{mood}</div>
          <div className="text-center text-sm text-gray-500">
            {(percent * 100).toFixed(2)}
            {" %"}
          </div>
        </div>
        <div className="w-[100%]">
          <BorderLinearProgress
            variant="determinate"
            value={percent * 100}
            sx={{
              backgroundColor: "whitesmoke",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "black",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
