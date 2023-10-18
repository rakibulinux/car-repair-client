"use client";

import { Button } from "@/components/ui/button";
import { getUserInfo } from "@/services/auth.service";
import { IUserInfoType } from "@/types";
import Link from "next/link";
import TypewriterComponent from "typewriter-effect";

export const LandingHero = () => {
  const user = getUserInfo() as IUserInfoType;

  const isSignedIn = user.role;
  return (
    <section className="relative bg-[url('/assets/bg-auto-service.jpg')] bg-cover bg-center bg-no-repeat  flex justify-center">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0 bg-black opacity-20 sm:bg-transparent sm:from-black/95 sm:to-black/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
      <div className=" font-bold py-36 text-center">
        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold">
          <h1>The Best Car Repair Service for</h1>
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            <TypewriterComponent
              options={{
                strings: [
                  "Toyota.",
                  "Hyundai.",
                  "Mazda.",
                  "Volkswagen.",
                  "And More...",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <div className="text-sm md:text-xl font-light text-zinc-400">
          Get fixed your favorite Car 10x faster ever.
        </div>
        <div>
          <Link
            href={isSignedIn === "customer" ? "/customer/profile" : "/sign-up"}
          >
            <Button
              variant="premium"
              className="md:text-lg p-4 md:p-6 rounded-full font-semibold"
            >
              Get an Appointment
            </Button>
          </Link>
        </div>
        <div className="text-zinc-400 text-xs md:text-sm font-normal">
          No credit card required.
        </div>
      </div>
    </section>
  );
};
