"use client";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Button from "./button";

export default function TextArea() {
  const [message, setMessage] = useState<string>("");
  const [isText, setIsText] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (message.length > 0) {
      setIsText(true);
    } else {
      setIsText(false);
    }
  }, [message]);
  return (
    <div className="mt-44 move-up-delay-2 w-[60vw] lg:flex space-y-5 lg:space-y-0 justify-center items-center text-center lg:space-x-10 move-up-delay-2">
      <div className="space-x-5">
        <Button />
      </div>
    </div>
  );
}
