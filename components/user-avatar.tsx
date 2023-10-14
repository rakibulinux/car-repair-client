import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getUserInfo } from "@/services/auth.service";
import { IUserInfoType } from "@/types";

export const UserAvatar = () => {
  const user = getUserInfo() as IUserInfoType;

  return (
    <Avatar className="h-8 w-8">
      {/* <AvatarImage src={user?.profileImageUrl} /> */}
      <AvatarFallback>{user?.emailId}</AvatarFallback>
    </Avatar>
  );
};
