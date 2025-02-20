"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      const lerpFactor = 0.1;
      currentX += (targetX - currentX) * lerpFactor;
      currentY += (targetY - currentY) * lerpFactor;

      document.body.style.setProperty("--mouse-x", `${currentX}px`);
      document.body.style.setProperty("--mouse-y", `${currentY}px`);

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(animate);

    

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      
    };
  }, []);

  

  return (
    <>
     
        <div className="relative min-h-screen text-white overflow-hidden">
          {/* Glow Effect */}
          <div className="fixed inset-0 bg-gradient-mouse"></div>
       
          {/* Main Content */}

         <main className=" container flex items-center justify-center min-h-screen text-white">
            <h1 className="text-5xl">Anant Mishra</h1>
           <div className="text-center space-y-4">
             <h1 className="text-5xl font-bold">
               Building <span className="text-gray-400">innovative</span>, scalable, and <span className="text-gray-400">efficient</span> solutions.
             </h1>
             <p className="text-gray-500 text-lg">Crafting digital experiences with code.</p>
        
             {/* Clickable Button  */} 
             <Link href="/home" className="inline-block mt-4 px-6 py-3 bg-white text-black text-lg font-medium rounded-full transition-transform transform hover:scale-105">
              Explore My Work →
             </Link>
           </div>
        </main>
        </div>
      
    </>
  );
}
