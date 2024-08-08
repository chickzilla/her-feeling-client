import Feeling, { FeelingResponse } from "@/interface/feeling";

export default async function getFeeling({
  prompt,
}: {
  prompt: string;
}): Promise<FeelingResponse> {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  
  const encodedprompt = encodeURIComponent(prompt);
  const response = await fetch(
    `${API_URL}/result-text`, {
      method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt : encodedprompt }),
      credentials: 'include'
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch feeling");
  }

  return await response.json();
}
