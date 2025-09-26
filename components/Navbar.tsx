'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from "next/link"
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
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
    <>
      {/* Mobile Navbar */}
      <nav className="md:hidden bg-white shadow-md px-4 py-3">
        <div className="flex justify-between items-center">
          <Image
            src="/h_website/logo.jpg"
            alt="logo"
            width={200}
            height={200}
          />
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
              }`}></span>
              <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
              }`}></span>
            </div>
          </button>
        </div>

        <div className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="pt-4 pb-2">
            {links.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 hover:bg-gray-100 rounded-md transition-colors
                  ${pathname === link.href ? 'font-bold' : ''}
                  hover:font-bold
                  ${index === 0 ? 'mb-2' : ''}
                  ${index === links.length - 1 ? 'mt-2' : ''}
                `}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Desktop Sidebar - Original Design */}
      <div className='hidden md:flex items-center flex-col'>
        <Image
          src="/h_website/logo.jpg"
          alt="logo"
          width={315}
          height={315}
          className='mt-16'
        />
        <ul className="flex flex-col mt-8 w-[350px]">
          {links.map((link, index) => (
            <li
              key={link.href}
              className={`
                ${pathname === link.href ? 'font-bold' : ''}
                hover:font-bold
                ${index === 0 ? 'mb-6' : ''}
                ${index === links.length - 1 ? 'mt-6' : ''}
                py-1
              `}
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Navbar