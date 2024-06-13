import Feeling from "@/interface/feeling";

export default async function getFeeling({
  prompt,
}: {
  prompt: string;
}): Promise<Feeling> {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  console.log(API_URL);

  const encodedprompt = encodeURIComponent(prompt);
  const response = await fetch(
    `${API_URL}/result-text?prompt=${encodedprompt}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch feeling");
  }

  return await response.json();
}
