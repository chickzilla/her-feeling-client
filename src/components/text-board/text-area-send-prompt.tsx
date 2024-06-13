"use client";
import Feeling from "@/interface/feeling";
import getFeeling from "@/services/getFeeling";
import { useEffect, useState } from "react";
export default function TextAreaSendPrompt() {
  const [message, setMessage] = useState("");
  const [result, setResult] = useState<Feeling | null>(null);
  const [isText, setIsText] = useState<boolean>(false);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useEffect(() => {
    if (message.length > 0) {
      setIsText(true);
    } else {
      setIsText(false);
    }
  }, [message]);

  const sendPrompt = async () => {
    if (!isText) {
      return;
    }
    try {
      setIsFetching(true);
      const res: Feeling = await getFeeling({ prompt: message });
      console.log(res);
      setIsFetching(false);
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message);
        setIsFetching(false);
      }
    }
  };

  return (
    <>
      <textarea
        placeholder="Enter her message here!"
        className="fade-in-delay-0 bg-neutral-800 bg-opacity-70 rounded-3xl p-5 w-[100%] h-[20vh] lg:h-[15vh] border-zinc-800 border-2 placeholder-gray-500 text-white description"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ resize: "none" }}
      />

      <button
        className={`bg-orange-700 text-white py-2 px-5 rounded-xl font-normal fade-in-delay-0  
           hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-600 enabled:hover:bg-white enabled:hover:text-black enabled:hover:shadow-lg transition duration-300 ease-in-out transform enabled:hover:-translate-y-1 enabled:hover:scale-110 text-xs lg:text-base w-[100%] lg:w-40
          `}
        onClick={sendPrompt}
        disabled={isFetching}
      >
        {isFetching ? "Predicting..." : "Predict"}
      </button>
    </>
  );
}
