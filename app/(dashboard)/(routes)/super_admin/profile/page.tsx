"use client";

import { User2 } from "lucide-react";
import { useRouter } from "next/navigation";

import { Heading } from "@/components/heading";
import Profile from "@/components/profile";
import { cn } from "@/lib/utils";

const ProfilePage = () => {
  const router = useRouter();

  return (
    <div>
      <Heading
        title="Profile"
        description="Our most advanced Profile model."
        icon={User2}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <div className="px-4 lg:px-8">
        <div></div>
        <div className="space-y-4 mt-4">
          <div
            className={cn(
              "p-8 w-full flex items-start gap-x-8 rounded-lg bg-white border border-black/10 bg-muted"
            )}
          >
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
