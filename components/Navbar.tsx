'use client'

import React from 'react'
import Image from 'next/image'
import Link from "next/link"
import { usePathname } from 'next/navigation'
const Navbar = () => {

    const pathname = usePathname();

    const links = [
        { href: "/", label: "START" },
        { href: "/innenarchitektur", label: "innenarchitektur" },
        { href: "/alte-bauten", label: "alte Bauten" },
        { href: "/natuerlich-bauen", label: "natürlich bauen" },
        { href: "/flexess", label: "flexess" },
        { href: "/lebendige-architektur", label: "lebendige Architektur" },
        { href: "/design", label: "design" },
        { href: "/kontakt", label: "kontakt" }
    ]

  return (
    <div className=' flex items-center flex-col'>
        <Image
        src="/logo.jpg"
        alt="logo"
        width={315}
        height={315}
        className='mt-16'/>
<ul className="flex flex-col mt-8 w-[350px]">
  {links.map((link, index) => (
    <li
      key={link.href}
      className={`
        ${pathname === link.href ? 'font-bold' : ''} 
        hover:font-bold
        ${index === 0 ? 'mb-6' : ''}       /* START Link */
        ${index === links.length - 1 ? 'mt-6' : ''} /* Kontakt Link */
        py-1                               /* alle anderen Links enger zusammen */
      `}
    >
      <Link href={link.href}>{link.label}</Link>
    </li>
  ))}
</ul>
    </div>
  )
}

export default Navbar