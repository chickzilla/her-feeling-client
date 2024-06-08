"use client";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";

export default function TextArea() {
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
    <div className="mt-44 move-up-delay-2 w-[60vw] flex justify-center items-center text-center space-x-10">
      <Textarea
        placeholder="Enter her message here!"
        className="bg-white bg-opacity-70 rounded-3xl p-5"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        className={`bg-black text-white py-5 px-5 rounded-2xl font-normal
         min-w-40 hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 ${
           isText
             ? "hover:bg-white hover:text-black hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
             : ""
         }
          `}
        disabled={!isText}
      >
        Get Start
      </button>
    </div>
  );
}
