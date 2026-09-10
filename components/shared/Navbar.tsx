'use client'

import { authClient, useSession } from '@/app/lib/auth-client'

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
  const [isOpen, setIsOpen] = useState(false)

  const { data, pending } = useSession()

  // Logout handler

  const handleLogout = async () => {
  await authClient.signOut()
 window.location.reload()
 
}

  return (
    <nav className="fixed top-0 z-50 w-full bg-amber-100 shadow-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4">

        {/* Logo */}
        <h1 className="text-3xl font-bold text-black">
          Logo
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden gap-6 md:flex">
          {navLinks.map((nav) => (
            <li key={nav.link}>
              <Link
                href={nav.link}
                className="text-black transition-colors hover:text-amber-700"
              >
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Desktop Auth */}
          <div className="hidden items-center gap-3 md:flex">

            {pending ? (
              <span className="text-black">
                Loading...
              </span>
            ) : data?.user ? (
              <>
                {/* Logged User */}
                <span className="text-black">
                  Hi, {data.user.name}
                </span>

                {/* Logout */}
                <button
                  onClick={handleLogout}
                  className="rounded-4xl border border-amber-600 px-4 py-2 text-black transition hover:bg-amber-200"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                {/* Sign Up */}
                <Link
                  href="/SignUp"
                  className="rounded-4xl border border-amber-600 px-4 py-2 text-black transition hover:bg-amber-200"
                >
                  Sign Up
                </Link>

                {/* Sign In */}
                <Link
                  href="/Sign-in"
                  className="rounded-4xl border border-amber-600 px-4 py-2 text-black transition hover:bg-amber-200"
                >
                  Sign In
                </Link>
              </>
            )}

          </div>

          {/* Hamburger Button */}
          <button
            className="z-[100] cursor-pointer md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <RxHamburgerMenu size={28} />
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`fixed right-0 top-0 z-50 flex h-full w-64 flex-col gap-6 bg-amber-100 p-6 pt-24 shadow-lg transition-transform duration-500 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >

        {/* Mobile Navigation Links */}
        {navLinks.map((nav) => (
          <li key={nav.link}>
            <Link
              href={nav.link}
              onClick={() => setIsOpen(false)}
              className="text-black transition-colors hover:text-amber-700"
            >
              {nav.name}
            </Link>
          </li>
        ))}

        {/* Mobile Auth */}
        <li className="border-t border-amber-300 pt-5">

          {pending ? (
            <span className="text-black">
              Loading...
            </span>
          ) : data?.user ? (
            <div className="flex flex-col gap-4">

              {/* Logged User */}
              <span className="text-black">
                Hi, {data.user.name}
              </span>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="w-fit rounded-4xl border border-amber-600 px-4 py-2 text-black transition hover:bg-amber-200"
              >
                Logout
              </button>

            </div>
          ) : (
            <div className="flex flex-col gap-4">

              {/* Sign Up */}
              <Link
                href="/SignUp"
                onClick={() => setIsOpen(false)}
                className="w-fit rounded-4xl border border-amber-600 px-4 py-2 text-black"
              >
                Sign Up
              </Link>

              {/* Sign In */}
              <Link
                href="/Sign-in"
                onClick={() => setIsOpen(false)}
                className="w-fit rounded-4xl border border-amber-600 px-4 py-2 text-black"
              >
                Sign In
              </Link>

            </div>
          )}

        </li>
      </ul>
    </nav>
  )
}

export default Navbar