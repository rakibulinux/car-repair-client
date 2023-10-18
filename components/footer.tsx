import carRapair from "@/assets/logo.png";
import carRapairBlack from "@/assets/logo_black.png";
import { Dribbble, Facebook, Github, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="">
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex justify-center text-teal-600 sm:justify-start">
              <Image
                className="hidden dark:block"
                src={carRapair}
                alt="car repair service"
                width={200}
                height={600}
              />
              <Image
                className="mb-4 block dark:hidden"
                src={carRapairBlack}
                alt="car repair service"
                width={200}
                height={600}
              />
            </div>

            <p className="mt-6 max-w-md text-center leading-relaxed sm:max-w-xs sm:text-left">
              The Best Car Repair Service for Toyota, Hyundai, Mazda,
              Volkswagen, and More... Get fixed your favorite Car 10x faster
              ever.
            </p>

            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              <li>
                <Link
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-teal-700 transition hover:text-teal-700/75"
                >
                  <span className="sr-only">Facebook</span>
                  <Facebook />
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-teal-700 transition hover:text-teal-700/75"
                >
                  <span className="sr-only">Instagram</span>
                  <Instagram />
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-teal-700 transition hover:text-teal-700/75"
                >
                  <span className="sr-only">Twitter</span>
                  <Twitter />
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-teal-700 transition hover:text-teal-700/75"
                >
                  <span className="sr-only">GitHub</span>
                  <Github />
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-teal-700 transition hover:text-teal-700/75"
                >
                  <span className="sr-only">Dribbble</span>
                  <Dribbble />
                </Link>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium ">About Us</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <Link className="transition hover:text-gray-600/75" href="/">
                    Company History
                  </Link>
                </li>

                <li>
                  <Link className="transition hover:text-gray-600/75" href="/">
                    Meet the Team
                  </Link>
                </li>

                <li>
                  <Link className="transition hover:text-gray-600/75" href="/">
                    Employee Handbook
                  </Link>
                </li>

                <li>
                  <Link className="transition hover:text-gray-600/75" href="/">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium ">Our Services</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <Link className="transition hover:text-gray-600/75" href="/">
                    Web Development
                  </Link>
                </li>

                <li>
                  <Link className="transition hover:text-gray-600/75" href="/">
                    Web Design
                  </Link>
                </li>

                <li>
                  <Link className="transition hover:text-gray-600/75" href="/">
                    Marketing
                  </Link>
                </li>

                <li>
                  <Link className="transition hover:text-gray-600/75" href="/">
                    Google Ads
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium ">Helpful Links</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <Link className="transition hover:text-gray-600/75" href="/">
                    FAQs
                  </Link>
                </li>

                <li>
                  <Link className="transition hover:text-gray-600/75" href="/">
                    Support
                  </Link>
                </li>

                <li>
                  <Link
                    className="group flex justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href="/"
                  >
                    <span className="transition group-hover:text-gray-600/75">
                      Live Chat
                    </span>

                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"></span>
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500"></span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium ">Contact Us</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <Link
                    className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href="/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 shrink-0 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>

                    <span className="flex-1">john@doe.com</span>
                  </Link>
                </li>

                <li>
                  <Link
                    className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href="/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 shrink-0 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>

                    <span className="flex-1">0123456789</span>
                  </Link>
                </li>

                <li className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 shrink-0 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  <address className="-mt-0.5 flex-1 not-italic">
                    213 Lane, London, United Kingdom
                  </address>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-600 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm">
              <span className="block sm:inline">All rights reserved.</span>

              <Link
                className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
                href="/"
              >
                Terms & Conditions
              </Link>

              <span>&middot;</span>

              <Link
                className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
                href="/"
              >
                Privacy Policy
              </Link>
            </p>

            <p className="mt-4 text-sm sm:order-first sm:mt-0">
              &copy; 2023 Car Repair
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
