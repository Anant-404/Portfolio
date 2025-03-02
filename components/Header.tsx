'use client';
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import github from "@/assets/github.png";
import instagram from "@/assets/instagram.png";
import linkdln from "@/assets/linkedin.png";
import Headerlink from "./Headerlink";


const links = [
  { url: "/land", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/mywork", title: "My work" },
  { url: "/contact", title: "Contact" },
];

 const Header = () => {

 const [open,setopen] = useState(false)

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
          <Link href="#">
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
          <Link href="#">
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
           <div className="w-10 h-1 bg-black rounded"></div>
           <div className="w-10 h-1 bg-black rounded"></div>
           <div className="w-10 h-1 bg-black rounded"></div>
        </button>
        {/* LIST */}
        { open && 
          
        <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
          {links.map(link => (
            <Link href={link.url} key={link.title}>{link.title}</Link>
          ))}
        </div>
        }
       </div>
       </div>
    
   
  )
}
export default Header;
