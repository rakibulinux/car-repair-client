import { BookOpen } from "lucide-react";
import { IconBadge } from "./icon-badge";
import { Preview } from "./preview";

interface ReviewProps {
  id: string;
  userId: string;
  serviceId: string;
  rating: number;
  comment: string | null;
}

export const ReviewCard = ({
  id,
  comment,
  userId,
  serviceId,
  rating,
}: ReviewProps) => {
  return (
    <div className="group hover:shadow-sm transition overflow-hidden border rounded-lg h-full  bg-white dark:bg-gray-900">
      {/* <div className="relative w-full aspect-video rounded-md overflow-hidden">
          <Image fill className="object-cover" alt={name} src={image} />
        </div> */}
      <div className="flex flex-col p-3 pt-2">
        <div className="text-lg md:text-base font-medium group-hover:text-sky-700 transition line-clamp-2">
          {userId}
        </div>
        {/* <p className="text-xs text-muted-foreground">{category}</p> */}
        <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
          <div className="flex items-center gap-x-1 text-slate-500">
            <IconBadge size="sm" icon={BookOpen} />
            <Preview value={comment!} />
          </div>
        </div>

        <p className="text-md md:text-sm font-medium text-slate-700">
          {rating}
        </p>
      </div>
    </div>
  );
};
