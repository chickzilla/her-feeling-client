import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const CircularContainer = styled("div")(({ theme }) => ({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
}));

const IconContainer = styled("div")(({ theme }) => ({
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
}));

export default function FirstResultItem({
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
  const [progress, setProgress] = useState(0);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const size = isSmallScreen || isMediumScreen ? 230 : 330; // 150 for small and medium screens, 330 for large screens

  useEffect(() => {
    const animateProgress = setTimeout(() => {
      setProgress(percent * 100);
    }, 200); // delay for starting the animation

    return () => clearTimeout(animateProgress);
  }, [percent]);

  return (
    <div className="flex-col items-center justify-center text-center text-gray-400 move-right-to-left">
      <CircularContainer>
        <CircularProgress
          variant="determinate"
          value={progress}
          size={size}
          sx={{
            color: color,
            transition: "value 1.5s ease-in-out", // smooth transition for progress
          }}
        />
        <IconContainer>{children}</IconContainer>
      </CircularContainer>
      <div
        className={`font-semibold text-center
          title-2 text-[#C2CFD9]
        `}
      >
        {mood}
      </div>
      <div>{null}</div>
    </div>
  );
}
