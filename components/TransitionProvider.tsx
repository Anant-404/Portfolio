"use client";

import { AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react"; // Import ReactNode for proper typing


export default function TransitionProvider({ children }: { children: ReactNode }) {
  const pathName = usePathname();

  // Prevent transition from applying on homepage ("/")
  if (!pathName || pathName === "/") {
    return (
        <div className="bg-[#000000] text-white">{children}</div>
    );
  }
  // if (!pathName || pathName === "/mywork") {
  //   return (
  //       <div>{children}</div>
  //   );
  // }

  

  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="min-h-screen bg-gradient-to-b from-blue-100 to-red-100"
      >
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {pathName === "/land" ? "Hi there!" : pathName.substring(1)}
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />
        <div className="h-24">
          <Header />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
}
