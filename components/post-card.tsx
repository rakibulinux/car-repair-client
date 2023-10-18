import { BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { IconBadge } from "./icon-badge";
import { Preview } from "./preview";

interface CourseCardProps {
  id: string;
  title: string;
  image: string;
  content: string;
  category: string;
}

export const PostCard = ({
  id,
  title,
  image,
  category,
  content,
}: CourseCardProps) => {
  return (
    <Link href={`/post/${id}`}>
      <div className="group hover:shadow-sm transition overflow-hidden border rounded-lg h-full  bg-white dark:bg-gray-900">
        <div className="relative w-full aspect-video rounded-md overflow-hidden">
          <Image fill className="object-cover" alt={title} src={image} />
        </div>
        <div className="flex flex-col p-3 pt-2">
          <div className="text-lg md:text-base font-medium group-hover:text-sky-700 transition line-clamp-2">
            {title}
          </div>
          <p className="text-xs text-muted-foreground">{category}</p>
          <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
            <div className="flex items-center gap-x-1 text-slate-500">
              <IconBadge size="sm" icon={BookOpen} />
              <Preview value={content.slice(0, 50)} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
