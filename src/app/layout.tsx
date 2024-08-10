import type { Metadata } from "next";
import { Prompt } from "next/font/google";

import "./globals.css";

const inter = Prompt({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "TextMoods - Text-Based Mood Prediction",
	description:
		"With TextMoods, reveal the emotional insights concealed in words. You may improve your understanding of and relationships with the significant someone in your life by using our sophisticated mood prediction tool, which analyzes text to uncover underlying emotions. TextMoods offers precise and customized mood forecasts to help you navigate relationships and strengthen bonds, whether you're just inquisitive or navigating a friendship.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" type="x-icon" href="/images/logo/logo.svg" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
