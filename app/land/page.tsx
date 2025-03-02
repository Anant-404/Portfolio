'use client';
import Image from 'next/image';
import hero from "@/assets/hero.png";
import {motion} from "framer-motion";

const Main = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
      {/* IMAGE */}
      <div className='h-1/2 lg:h-full lg:w-1/2 relative'>
       <Image
        src={hero}
        alt='hero'
        fill
        className='object-contain'
       />
      </div>

      {/* TEXT */}
      <div className='h-auto lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center'>
        {/* TITLE */}
        <h1 className="text-4xl md:text-6xl font-bold text-black">
            Crafting Digital Experiences, Designing Tomorrow.
        </h1>
        {/* DESC */}
        <p className="md:text-xl text-black">
            Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence.
        </p>

         {/* BUTTONS */}
         <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View My Work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black text-black">
              Contact Me
            </button>
        </div>
      </div>

    </div>
    </motion.div>
    
  );
};

export default Main;
