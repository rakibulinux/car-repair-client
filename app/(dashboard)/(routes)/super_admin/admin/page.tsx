"use client";

import { ShieldHalf } from "lucide-react";
import { useRouter } from "next/navigation";

import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const VideoPage = () => {
  const router = useRouter();

  return (
    <div>
      <Heading
        title="Admin List"
        description="Manage All Admins From Here."
        icon={ShieldHalf}
        iconColor="text-orange-700"
        bgColor="bg-orange-700/10"
      />
      <div className="px-4 lg:px-8">
        <Link href="/super_admin/admin/create">
          <Button
            className="col-span-12 lg:col-span-2 w-full"
            type="submit"
            // disabled={isLoading}
            size="icon"
          >
            Create
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default VideoPage;
