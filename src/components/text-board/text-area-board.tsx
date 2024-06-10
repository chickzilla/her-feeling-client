"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function TextAreaBoard() {
  const [message, setMessage] = useState<string>("");
  const [isText, setIsText] = useState<boolean>(false);

  useEffect(() => {
    if (message.length > 0) {
      setIsText(true);
    } else {
      setIsText(false);
    }
  }, [message]);
  return (
    <div className="space-y-4 flex flex-col pt-28 w-[100%] lg:w-[80%] pr-40">
      <div className="font-semibold text-black text-5xl move-up">
        Her Speech
      </div>
      <div className="flex w-[90%] lg:w-[30vw] move-up ">
        Advanced mood detection technology. Understand your text, understand
        her.
      </div>
      <textarea
        placeholder="Enter her message here!"
        className="fade-in-delay-0 bg-white bg-opacity-70 rounded-3xl p-5 w-[100%] h-[5vh] lg:h-[15vh] border-slate-300 border-2 placeholder-gray-500"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ resize: "none" }}
      />

      <button
        className={`bg-black text-white py-2 px-5 rounded-3xl font-normal fade-in-delay-0  
         w-40 hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-300 ${
           isText
             ? "hover:bg-white hover:text-black hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
             : ""
         }
          `}
        disabled={!isText}
      >
        Predict
      </button>
    </div>
  );
}
