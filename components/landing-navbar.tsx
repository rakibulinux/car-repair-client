"use client";

import carRapair from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

import { getUserInfo } from "@/services/auth.service";
import { IUserInfoType } from "@/types";
import { Menu } from "lucide-react";
import { useState } from "react";
import { ModeToggle } from "./DarkLight";
import Search from "./search";

const navItems = [
  { name: "HOME", url: "/" },
  { name: "MENU", url: "/menu" },
  { name: "CONTACT", url: "/contact" },
];

export const LandingNavbar = () => {
  const user = getUserInfo() as IUserInfoType;
  const isSignedIn = user.role;

  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="px-4 bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Part */}
          <div className="md:flex md:items-center md:gap-12">
            <Link href="/" className="flex items-center">
              <Image
                src={carRapair}
                alt="car repair service"
                width={150}
                height={100}
              />
            </Link>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                {navItems.map((item) => (
                  <li
                    className="text-gray-100 transition hover:text-gray-100/75"
                    key={item.url}
                  >
                    <Link href={item.url}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Mobile Menu */}
          <div
            className={`absolute top-16 left-0 w-full bg-[#111827] md:hidden z-10 ${
              isMobileMenuOpen ? "block" : "hidden"
            }`}
          >
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm flex-col">
                {navItems.map((item) => (
                  <li
                    className="text-gray-100 transition hover:text-gray-100/75"
                    key={item.url}
                  >
                    <Link href={item.url}>{item.name}</Link>
                  </li>
                ))}
                <ModeToggle />
              </ul>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <div className="hidden sm:flex">
                {isSignedIn ? (
                  <Search />
                ) : (
                  <>
                    <Link
                      className="rounded-md bg-sky-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                      href="/sign-in"
                    >
                      Login
                    </Link>
                    <Link
                      className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-sky-600 ml-4"
                      href="/sign-up"
                    >
                      Register
                    </Link>
                    <div className="ml-4">
                      <ModeToggle />
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="block md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
              >
                <Menu />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
