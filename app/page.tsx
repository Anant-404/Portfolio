    "use client";

    import Link from "next/link";
    import { useEffect,useState } from "react";
    import Image from "next/image";
    import pic from "@/assets/def.png";

    export default function Home() {
      const [copied, setCopied] = useState(false);
      const email = "anantm4796@gmail.com";

      const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      };

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
        <div className="mx-[40px] mt-[32px]">
        <div className="absolute top-6 left-6 flex items-center gap-3 border border-white  px-2 py-2 rounded-full">
            <span className="text-sm ">{email}</span>
            <button 
              onClick={handleCopy} 
              className="px-3 py-1 bg-white text-black text-sm font-medium rounded-full hover:scale-105 transition">
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>

          {/* Top Right: Social Media Links */}
          <div className="absolute top-6  right-[80px] flex gap-4 text-gray-400 text-sm ">
            <Link href="https://linkedin.com/in/anant-mishra" className="hover:text-white transition">LinkedIn</Link>
            <span>/</span>
            <Link href="https://dribbble.com/anant-mishra" className="hover:text-white transition">X (Twitter)</Link>
            <span>/</span>
            <Link href="https://instagram.com/anant_mishra" className="hover:text-white transition">Instagram</Link>
          </div>
          </div>

        
            <div className="relative min-h-screen text-white overflow-hidden">
              {/* Glow Effect */}
              <div className="fixed inset-0 bg-gradient-mouse"></div>

              
          
          
              {/* Main Content */}

            <main className=" container flex  flex-col items-center justify-center min-h-screen text-white">
                
              <div className="text-center space-y-4">
              
          <div className="relative flex flex-col items-center mb-4">
            <Image 
              src={pic} // Replace with your actual image path
              width={100} 
              height={100} 
              className="rounded-full border-4 border-gray-800"
              alt="Anant Mishra"
            />
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-gray-800 px-3 py-1 text-sm rounded-full">
              Anant Mishra 👋
            </div>
          </div>
        
                
             
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
