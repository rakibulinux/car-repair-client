import myPic from "@/assets/my-bg2.png";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
export const BotAvatar = () => {
  return (
    <Avatar className="h-8 w-8">
      <AvatarImage className="p-1" src={`${myPic}`} />
    </Avatar>
  );
};
