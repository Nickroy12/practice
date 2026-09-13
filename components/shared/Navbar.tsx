"use client";

import { authClient, useSession } from "@/app/lib/auth-client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { usePathname } from "next/navigation";

interface NavLink {
  name: string;
  link: string;
}

const navLinks: NavLink[] = [
  { name: "Home", link: "/" },
  { name: "Services", link: "/services" },
  { name: "Blog", link: "/blog" },
  { name: "About Us", link: "/about" },
  { name: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();
  const { data, pending } = useSession();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = async () => {
    await authClient.signOut();
    window.location.reload();
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 shadow-md backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-black">Logo</h1>

        {/* Desktop Navigation */}
        <ul className="hidden gap-6 md:flex">
          {navLinks.map((nav) => {
            const isActive = pathname === nav.link;

            return (
              <li key={nav.link}>
                <Link
                  href={nav.link}
                  className={`transition-colors ${
                    isActive
                      ? "font-semibold text-amber-700"
                      : "text-black hover:text-amber-700"
                  }`}
                >
                  {nav.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Desktop Auth */}
          <div className="hidden items-center gap-3 md:flex">
            {pending ? (
              <span className="text-black">Loading...</span>
            ) : data?.user ? (
              <>
                <span className="text-black">
                  Hi, {data.user.name}
                </span>

                <button
                  onClick={handleLogout}
                  className="rounded-4xl border border-amber-600 px-4 py-2 text-black transition hover:bg-amber-200"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/SignUp"
                  className="rounded-2xl border border-amber-600 px-6 py-2 text-black transition hover:bg-amber-200"
                >
                  Sign Up
                </Link>

                <Link
                  href="/Sign-in"
                  className="rounded-2xl bg-gradient-to-r from-orange-500 to-amber-700 px-6 py-2 text-white transition hover:opacity-90"
                >
                  Sign In
                </Link>
              </>
            )}
          </div>

          {/* Hamburger */}
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
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navLinks.map((nav) => {
          const isActive = pathname === nav.link;

          return (
            <li key={nav.link}>
              <Link
                href={nav.link}
                onClick={() => setIsOpen(false)}
                className={`transition-colors ${
                  isActive
                    ? "font-semibold text-amber-700"
                    : "text-black hover:text-amber-700"
                }`}
              >
                {nav.name}
              </Link>
            </li>
          );
        })}

        {/* Mobile Auth */}
        <li className="border-t border-amber-300 pt-5">
          {pending ? (
            <span className="text-black">Loading...</span>
          ) : data?.user ? (
            <div className="flex flex-col gap-4">
              <span className="text-black">
                Hi, {data.user.name}
              </span>

              <button
                onClick={handleLogout}
                className="w-fit rounded-4xl border border-amber-600 px-4 py-2 text-black transition hover:bg-amber-200"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-4 text-center">
              <Link
                href="/SignUp"
                className="rounded-2xl border border-amber-600 px-6 py-2 text-black transition hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-700 hover:text-white"
              >
                Sign Up
              </Link>

              <Link
                href="/Sign-in"
                className="rounded-2xl bg-gradient-to-r from-orange-500 to-amber-700 px-6 py-2 text-white transition hover:opacity-90"
              >
                Sign In
              </Link>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;