'use client';
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import github from "@/assets/github.png";
import instagram from "@/assets/instagram.png";
import linkdln from "@/assets/linkedin.png";
import Headerlink from "./Headerlink";
import { motion } from "framer-motion";


const links = [
  { url: "/land", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/mywork", title: "My work" },
  { url: "/contact", title: "Contact" },
];

 const Header = () => {

 const [open,setopen] = useState(false)

 const topVar = {
  closed: {
    rotate: 0,
  },
  opened: {
    rotate: 45,
    backgroundColor: "rgb(255,255,255)",
  },
};
const centerVar = {
  closed: {
    opacity: 1,
  },
  opened: {
    opacity: 0,
  },
};

const bottomVar = {
  closed: {
    rotate: 0,
  },
  opened: {
    rotate: -45,
    backgroundColor: "rgb(255,255,255)",
  },
};

const listVar = {
  closed: {
    x: "100vw",
  },
  opened: {
    x: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const listItemVar = {
  closed: {
    x: -10,
    opacity: 0,
  },
  opened: {
    x: 0,
    opacity: 1,
  },
};

  return (
  
       <div className='h-24 flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
         <div className="hidden md:flex gap-4 w-1/3">
           {links.map(link => (
            <Headerlink link={link} key={link.title} />
           ))}
         </div>

        {/* LOGO */}
        <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
          <Link href="/land" className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center">
           <span className="text-white mr-1">Anant</span>
           <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">.dev</span>
          </Link>
        </div>

        {/* LINKS AND SOCIALS */}
        <div className="hidden md:flex gap-4 w-1/3">
          <Link href="https://github.com/Anant-404">
           <Image 
            src={github}
            alt=""
            width={24}
            height={24}
           
           />
          </Link>
          <Link href="#">
           <Image 
            src={instagram}
            alt=""
            width={24}
            height={24}
           
           />
          </Link>
          <Link href="https://www.linkedin.com/in/anant-mishra-a1809b1b2/">
           <Image 
            src={linkdln}
            alt=""
            width={24}
            height={24}
           
           />
          </Link>
        </div>


       {/* HAMBURGER */}
       <div className="md:hidden">
        <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={(() => setopen(!open))}> 
        <motion.div
            variants={topVar}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVar}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVar}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* LIST */}
      {/* MENU LIST */}
      {open && (
          <motion.div
            variants={listVar}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-[60]"
          >
            {links.map((link) => (
              <motion.div
                variants={listItemVar}
                className=""
                key={link.title}
              >
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
       </div>
       </div>
    
   
  )
}
export default Header;
