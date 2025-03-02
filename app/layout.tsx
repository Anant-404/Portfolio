import TransitionProvider from "@/components/TransitionProvider";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Welcome to my portfolio website!",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}