"use client";

import { authClient, useSession } from "@/app/lib/auth-client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

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

  // Handle scroll detection for sticky navbar background styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open to prevent page scrolling behind drawer
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

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
       <div className="bg-white text-orange-600 font-extrabold text-xl px-6 py-2 rounded-lg w-fit shadow-md">
              LOGO
            </div>

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
            <AuthButtons pending={pending} user={data?.user} onLogout={handleLogout} />
          </div>

          {/* Hamburger Toggle Button */}
          <button
            aria-label="Toggle navigation menu"
            className="z-50 cursor-pointer text-black md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <RxCross2 size={28} /> : <RxHamburgerMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed right-0 top-0 z-40 flex h-dvh w-64 flex-col gap-6 overflow-y-auto bg-amber-50 p-6 pt-24 shadow-xl transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-5">
          {navLinks.map((nav) => {
            const isActive = pathname === nav.link;

            return (
              <li key={nav.link}>
                <Link
                  href={nav.link}
                  onClick={() => setIsOpen(false)}
                  className={`block transition-colors ${
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

        {/* Mobile Auth */}
        <div className="mt-auto border-t border-amber-200 pt-5">
          <AuthButtons
            pending={pending}
            user={data?.user}
            onLogout={handleLogout}
            isMobile
            onMobileClose={() => setIsOpen(false)}
          />
        </div>
      </div>
    </nav>
  );
};

/* Auth Component */
interface AuthButtonsProps {
  pending: boolean;
  user?: { name?: string | null };
  onLogout: () => void;
  isMobile?: boolean;
  onMobileClose?: () => void;
}

const AuthButtons = ({
  pending,
  user,
  onLogout,
  isMobile = false,
  onMobileClose,
}: AuthButtonsProps) => {
  if (pending) {
    return <span className="text-sm text-gray-600">Loading...</span>;
  }

  if (user) {
    return (
      <div className={`flex ${isMobile ? "flex-col gap-3" : "items-center gap-3"}`}>
        <span className="font-medium text-black">Hi, {user.name}</span>
        <button
          onClick={onLogout}
          className="rounded-full border border-amber-600 px-4 py-2 text-sm text-black transition hover:bg-amber-200"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className={`flex ${isMobile ? "flex-col gap-3 text-center" : "items-center gap-3"}`}>
      <Link
        href="/Sign-up"
        onClick={onMobileClose}
        className="rounded-xl border border-amber-600 px-5 py-2 text-sm font-medium text-black transition hover:bg-amber-100"
      >
        Sign Up
      </Link>
      <Link
        href="/Sign-in"
        onClick={onMobileClose}
        className="rounded-xl bg-gradient-to-r from-orange-500 to-amber-700 px-5 py-2 text-sm font-medium text-white transition hover:opacity-90"
      >
        Sign In
      </Link>
    </div>
  );
};

export default Navbar;