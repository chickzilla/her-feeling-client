"use client";
import { useRouter } from "next/navigation";
export default function Button() {
  const router = useRouter();
  return (
    <button
      className={`bg-white text-black py-3 px-5 rounded-full font-normal
         min-w-40 hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 
            hover:bg-black hover:text-white hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110
          `}
      onClick={() => {
        router.push("/text");
      }}
    >
      Get start
    </button>
  );
}
