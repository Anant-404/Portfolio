"use client";

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
      const lerpFactor = 0.1; // Smooth movement
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
    <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Glow Effect */}
      <div className="fixed inset-0 bg-gradient-mouse"></div>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl mb-4">Glow</h1>
        <p className="text-xl">Mouse-tracing glow effect</p>
      </main>
    </div>
  );
}
