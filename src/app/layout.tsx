import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";

const inter = Prompt({ weight: "200", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Her Feeling",
  description: "I you want to understand her feeling, let me help you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        {children}
      </body>
    </html>
  );
}
