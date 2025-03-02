'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const Headerlink = ({ link }: { link: { url: string; title: string } }) => {

const path= usePathname()

  return (
    <Link href={link.url} className={` text-black rounded p-1 ${path === link.url && "bg-black text-white"}`}>{link.title}</Link>
  )
}

export default Headerlink