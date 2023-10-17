"use client";
import { getUserInfo } from "@/services/auth.service";
import { IUserInfoType } from "@/types";
import { DropdownMenuItems } from "./dropdown-menu";
import { MobileSidebar } from "./mobile-sidebar";

export const DashboardNavbar = () => {
  const { role } = getUserInfo() as IUserInfoType;

  // const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  // const toggleMobileMenu = () => {
  //   setMobileMenuOpen(!isMobileMenuOpen);
  // };

  return (
    <div className="flex items-center p-4">
      <MobileSidebar />
      <div className="flex w-full justify-end">
        {role && (
          <>
            <DropdownMenuItems />
          </>
        )}
      </div>
    </div>
  );
};
