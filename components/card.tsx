import { formatPrice } from "@/lib/format";
import { BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { IconBadge } from "./icon-badge";

interface CourseCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  category: string;
  availability: "Available" | "Upcoming";
}

export const Card = ({
  id,
  name,
  image,
  price,
  category,
  availability,
}: CourseCardProps) => {
  return (
    <Link href={`/service/${id}`}>
      <div className="group hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full">
        <div className="relative w-full aspect-video rounded-md overflow-hidden">
          <Image fill className="object-cover" alt={name} src={image} />
        </div>
        <div className="flex flex-col pt-2">
          <div className="text-lg md:text-base font-medium group-hover:text-sky-700 transition line-clamp-2">
            {name}
          </div>
          <p className="text-xs text-muted-foreground">{category}</p>
          <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
            <div className="flex items-center gap-x-1 text-slate-500">
              <IconBadge size="sm" icon={BookOpen} />
              <p>{availability}</p>
            </div>
          </div>

          <p className="text-md md:text-sm font-medium text-slate-700">
            {formatPrice(price)}
          </p>
        </div>
      </div>
    </Link>
  );
};
