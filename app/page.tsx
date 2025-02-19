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
      const lerpFactor = 0.1;
      currentX += (targetX - currentX) * lerpFactor;
      currentY += (targetY - currentY) * lerpFactor;

      document.body.style.setProperty("--mouse-x", `${currentX}px`);
      document.body.style.setProperty("--mouse-y", `${currentY}px`);

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(animate);

    document.body.style.overflow = "hidden"; // Disable body scroll



    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      
      document.body.style.overflow = "";
    };
  }, []);

  return (
      <>
      <div className="container">
        <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
    {/* Glow Effect */}
    <div className="fixed inset-0 bg-gradient-mouse"></div>

    {/* Main Content */}
    <main className="container mx-auto relative z-10 flex items-center justify-center min-h-screen px-8">
        <section className="w-full max-w-6xl grid grid-cols-2 gap-16">
            
            {/* Left Section - Fixed */}
            <div className="flex flex-col justify-start text-left space-y-6 sticky top-0 h-screen">
                {/* Name & Title */}
                <h1 className="text-5xl font-bold">Anant Mishra</h1>
                <h2 className="text-xl text-gray-300">Software Developer</h2>

                {/* Short Summary */}
                <p className="text-gray-400">
                    Passionate about Data Structures, Algorithms, and Full-stack Web Development.
                </p>

                {/* Navigation */}
                <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                        <span className="w-3 h-3 bg-white rounded-full"></span>
                        <p className="text-white">About</p>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500">
                        <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
                        <p>Projects</p>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500">
                        <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
                        <p>Experience</p>
                    </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-6 text-gray-400 text-2xl">
                    <a href="https://github.com/Anant-404" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="mailto:anantm4796@gmail.com">
                        <i className="fas fa-envelope"></i>
                    </a>
                    <a href="https://leetcode.com/u/Anant_002/" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-code"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/anant-mishra-a1809b1b2/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>

            {/* Right Section - Scrollable */}
              <div className="scrollable-section flex flex-col justify-start text-left space-y-10 pr-8 h-screen">
 
                {/* About */}
                <div>
                    <h3 className="text-lg font-bold text-white">About</h3>
                    <p className="text-gray-400">
                        I specialize in full-stack development and have a strong foundation in algorithms and data structures.
                    </p>
                </div>

                {/* Skills & Technologies */}
                <div>
                    <h3 className="text-lg font-bold text-white">Technical Skills</h3>
                    <p className="text-gray-400">
                        <strong>Languages:</strong> C++, C, Java, JavaScript, Python, SQL<br />
                        <strong>Frontend:</strong> Next.js, React.js, Tailwind CSS<br />
                        <strong>Backend:</strong> Node.js, Express, Appwrite<br />
                        <strong>Databases:</strong> MongoDB, MySQL, PostgreSQL<br />
                        <strong>Tools:</strong> Git, Linux, Sentry
                    </p>
                </div>

                {/* Achievements */}
                <div>
                    <h3 className="text-lg font-bold text-white">Achievements</h3>
                    <ul className="text-gray-400 list-disc pl-5 space-y-1">
                        <li>1400+ CodeChef rating, active in contests.</li>
                        <li>Solved 200+ problems on LeetCode.</li>
                    </ul>
                </div>

                {/* Projects */}
                <div>
                    <h3 className="text-lg font-bold text-white">Projects</h3>
                    <p className="text-gray-400">A few notable projects:</p>

                    <div className="space-y-2">
                        <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                            <span className="text-white font-bold">Healthcare Platform</span>
                            <span className="text-gray-500">2024</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                            <span className="text-white font-bold">Blog Application</span>
                            <span className="text-gray-500">2023</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                            <span className="text-white font-bold">Personal Website</span>
                            <span className="text-gray-500">2024</span>
                        </div>
                    </div>
                </div>

                {/* Experience */}
                <div>
                    <h3 className="text-lg font-bold text-white">Experience</h3>
                    <p className="text-gray-400">
                        Web Development Intern at BanksBuddy, developing and optimizing web applications for financial services using Next.js, TypeScript, and Tailwind CSS.
                    </p>
                </div>
            </div>
        </section>
    </main>
</div>
</div>
</>


  
  );
}
