"use client";
import { authKey } from "@/constants/storageKey";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import { IUserInfoType } from "@/types";
import { useRouter } from "next/navigation";

export const DashboardNavbar = () => {
  const { role } = getUserInfo() as IUserInfoType;
  const router = useRouter();
  // const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  // const toggleMobileMenu = () => {
  //   setMobileMenuOpen(!isMobileMenuOpen);
  // };

  const userSignOut = () => {
    removeUserInfo(authKey);
    router.push("/sign-in");
  };

  return (
    <header className="pb-6">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-end">
          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <div className="hidden sm:flex ">
                {role && (
                  <button
                    className="rounded-md bg-sky-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                    onClick={() => userSignOut()}
                  >
                    Sign Out
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
