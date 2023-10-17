import { isSuperAdmin } from "@/lib/super-admin";
import { getUserInfo } from "@/services/auth.service";
import { IUserInfoType } from "@/types";
import { redirect } from "next/navigation";

const SuperAdminLayout = ({ children }: { children: React.ReactNode }) => {
  const { role } = getUserInfo() as IUserInfoType;
  if (!isSuperAdmin(role)) {
    return redirect("/");
  }

  return <>{children}</>;
};

export default SuperAdminLayout;
