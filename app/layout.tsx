import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Welcome to my portfolio website!",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#000000] text-white">
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}