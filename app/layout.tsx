import TransitionProvider from "@/components/TransitionProvider";
import "./globals.css";
import type { Metadata } from "next";

import { Inter } from "next/font/google";

// Load Google Fonts
const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });


export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Welcome to my portfolio website!",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}