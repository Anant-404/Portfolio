
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Candidate Evaluation Platform",
    desc: "A Next.js app for candidate assessment using resume parsing, vector search, and AI evaluation.",
    img: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://your-candidate-eval-app.com", // Replace with actual link
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Healthcare Platform",
    desc: "A web-based platform for managing patient records, appointments, and prescriptions efficiently.",
    img: "https://images.pexels.com/photos/7088481/pexels-photo-7088481.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://your-healthcare-platform.com", // Replace with actual link
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Live Location Tracker",
    desc: "A real-time location tracking app using GPS and web technologies for live monitoring.",
    img: "https://images.pexels.com/photos/4425557/pexels-photo-4425557.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://your-location-tracker.com", // Replace with actual link
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Banking Dashboard (Internship)",
    desc: "A financial analytics dashboard built for BanksBuddy using modern web technologies.",
    img: "https://images.pexels.com/photos/5473958/pexels-photo-5473958.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://your-banking-dashboard.com", // Replace with actual link
  },
];


const PortfolioPage = () => {
  const ref = useRef<HTMLDivElement>(null); // Fix useRef typing

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-center">
                    {/* <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
                      See Demo
                    </button> */}
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
