"use client";

import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { authKey } from "@/constants/storageKey";
import { useGetSingleUserQuery } from "@/redux/api/userApi";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import { IUserInfoType } from "@/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function DropdownMenuItems() {
  const { setTheme } = useTheme();
  const router = useRouter();

  const { role, userId } = getUserInfo() as IUserInfoType;
  const { data } = useGetSingleUserQuery(userId);
  const profilePic = data?.profile?.profileImg;
  const userSignOut = () => {
    removeUserInfo(authKey);
    router.push("/sign-in");
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Avatar>
            <AvatarImage
              src={profilePic ? profilePic : "https://github.com/shadcn.png"}
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {/* <DropdownMenuItem onChange={() => setTheme()}>Light</DropdownMenuItem>
        <DropdownMenuItem onChange={setTheme}>Dark</DropdownMenuItem> */}

        <DropdownMenuItem>
          <Link href="/dashboard">Dashboard</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={`/${role}/settings`}>Settings</Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={userSignOut}>SignOut</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
