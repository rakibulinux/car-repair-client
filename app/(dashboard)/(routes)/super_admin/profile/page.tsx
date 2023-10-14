"use client";

import { MessageSquare } from "lucide-react";
import { useRouter } from "next/navigation";

import { Heading } from "@/components/heading";
import { cn } from "@/lib/utils";

const ProfilePage = () => {
  const router = useRouter();

  return (
    <div>
      <Heading
        title="Profile"
        description="Our most advanced Profile model."
        icon={MessageSquare}
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
            <p className="text-sm"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
