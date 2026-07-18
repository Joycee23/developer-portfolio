import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Nguyễn Đôn Quốc Tuấn — AI Engineer & Full Stack Developer",
  description:
    "Portfolio of Nguyễn Đôn Quốc Tuấn — AI Engineer, Full Stack Developer, and Computer Vision Enthusiast. Building intelligent software solutions with passion.",
  keywords: [
    "AI Engineer",
    "Full Stack Developer",
    "Computer Vision",
    "Machine Learning",
    "Portfolio",
    "Nguyễn Đôn Quốc Tuấn",
  ],
  authors: [{ name: "Nguyễn Đôn Quốc Tuấn" }],
  openGraph: {
    title: "Nguyễn Đôn Quốc Tuấn — AI Engineer & Full Stack Developer",
    description:
      "AI Engineer and Full Stack Developer building intelligent software solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <body className="font-sans antialiased noise-overlay">{children}</body>
    </html>
  );
}
