"use client";
import carRapair from "@/assets/logo.png";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  adminRoutes,
  customerRoutes,
  superAdminRoutes,
} from "@/constants/sidebar";
import { cn } from "@/lib/utils";
import { getUserInfo } from "@/services/auth.service";
import { IUserInfoType } from "@/types";

export const Sidebar = () => {
  const pathname = usePathname();
  const { role } = getUserInfo() as IUserInfoType;
  return (
    <div className="space-y-4 pb-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/" className="flex justify-center mb-4">
          <Image
            src={carRapair}
            alt="car repair service"
            width={150}
            height={100}
          />
        </Link>
        <div className="space-y-1">
          {role === "super_admin" &&
            superAdminRoutes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                  pathname === route.href
                    ? "text-white bg-white/10"
                    : "text-zinc-400"
                )}
              >
                <div className="flex items-center flex-1">
                  <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                  {route.label}
                </div>
              </Link>
            ))}
          {role === "admin" &&
            adminRoutes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                  pathname === route.href
                    ? "text-white bg-white/10"
                    : "text-zinc-400"
                )}
              >
                <div className="flex items-center flex-1">
                  <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                  {route.label}
                </div>
              </Link>
            ))}
          {role === "customer" &&
            customerRoutes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                  pathname === route.href
                    ? "text-white bg-white/10"
                    : "text-zinc-400"
                )}
              >
                <div className="flex items-center flex-1">
                  <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                  {route.label}
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};
