"use client";

import carRapair from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

import { getUserInfo } from "@/services/auth.service";
import { useState } from "react";
import Search from "./search";

export const LandingNavbar = () => {
  const user: any = getUserInfo();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const isSignedIn = user.role;
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
                <li>
                  <Link
                    className="text-gray-100 transition hover:text-gray-100/75"
                    href="/"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-100 transition hover:text-gray-100/75"
                    href="/"
                  >
                    Careers
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-100 transition hover:text-gray-100/75"
                    href="/"
                  >
                    History
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-100 transition hover:text-gray-100/75"
                    href="/"
                  >
                    Services
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-100 transition hover:text-gray-100/75"
                    href="/"
                  >
                    Projects
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-100 transition hover:text-gray-100/75"
                    href="/"
                  >
                    Blog
                  </Link>
                </li>
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
                <li>
                  <Link
                    className="text-gray-100 transition hover:text-gray-100/75"
                    href="/"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-100 transition hover:text-gray-100/75"
                    href="/"
                  >
                    Careers
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-100 transition hover:text-gray-100/75"
                    href="/"
                  >
                    History
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-100 transition hover:text-gray-100/75"
                    href="/"
                  >
                    Services
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-100 transition hover:text-gray-100/75"
                    href="/"
                  >
                    Projects
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-100 transition hover:text-gray-100/75"
                    href="/"
                  >
                    Blog
                  </Link>
                </li>
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
                  </>
                )}
              </div>
            </div>

            <div className="block md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
