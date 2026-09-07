'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'

interface NavLink {
  name: string
  link: string
}

const navLinks: NavLink[] = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'About',
    link: '/about',
  },
  {
    name: 'Contact',
    link: '/contact',
  },
]

const Navbar = () => {
    const [isOpen , setIsOpen] = useState(false)
  return (
    <nav className="fixed w-full bg-amber-100 shadow-md">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center px-4 py-4">

        <h1 className="text-3xl text-black">
          Logo
        </h1>

        <ul className="hidden md:flex gap-6">
          {navLinks.map((nav) => (
            <li key={nav.link}>
              <Link
                href={nav.link}
                className="text-black hover:text-amber-700 transition-colors"
              >
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className='flex gap-4'>
<button className='border border-amber-600 rounded-4xl px-4'><Link href={'/Sign-in'}>Sign In</Link> </button>
        <button className='flex md:hidden cursor-pointer z-100' onClick={()=> setIsOpen(!isOpen)}>
            <RxHamburgerMenu />
        </button>
        </div>
         

      </div>
      <ul>
        
      </ul> 
    <ul
  className={`md:hidden fixed top-0 right-0 h-full w-64 bg-amber-100shadow-lg z-50 p-6 flex flex-col gap-6 transition-transform transform duration-500 ease-in-out
  ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
>
          {navLinks.map((nav) => (
            <li key={nav.link}>
              <Link
                href={nav.link}
                className="text-black hover:text-amber-700 transition-colors"
              >
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>
      
    </nav>

    
  )
}

export default Navbar