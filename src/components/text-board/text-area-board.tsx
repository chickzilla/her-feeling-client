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
    <div className="space-y-8 flex flex-col pt-28 w-[100%] lg:w-[80%] lg:pr-40">
      <div className="title-1 move-up w-[100%] lg:w-auto">Predict Her Text</div>
      <div className="flex w-[90%] lg:w-[30vw] move-up description">
        Advanced mood detection technology. Understand your text, understand
        her.
      </div>
      <textarea
        placeholder="Enter her message here!"
        className="fade-in-delay-0 bg-neutral-800 bg-opacity-70 rounded-3xl p-5 w-[100%] h-[20vh] lg:h-[15vh] border-gray-800 border-2 placeholder-gray-500 text-white description"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ resize: "none" }}
      />

      <button
        className={`bg-orange-700 text-white py-2 px-5 rounded-xl font-normal fade-in-delay-0  
           hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-orange-400 hover:bg-white hover:text-black hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-xs lg:text-base w-[100%] lg:w-40 
          `}
      >
        Predict
      </button>
    </div>
  );
}
