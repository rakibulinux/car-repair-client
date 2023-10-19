import { formatPrice } from "@/lib/format";
import { BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Booking from "../booking/booking";
import { IconBadge } from "../icon-badge";

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
    <div className="group hover:shadow-sm transition overflow-hidden border rounded-lg h-full  bg-white dark:bg-gray-900">
      <Link className="mb-4" href={`/service/${id}`}>
        <div className="relative w-full aspect-video rounded-md overflow-hidden">
          <Image fill className="object-cover" alt={name} src={image} />
        </div>
        <div className="flex flex-col p-6">
          <div className="text-lg md:text-base font-medium group-hover:text-sky-700 transition line-clamp-2">
            {name}
          </div>
          {/* <p className="text-xs text-muted-foreground">{category}</p> */}
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
      </Link>
      {availability === "Available" && (
        <div className="flex justify-end p-3">
          <Booking id={id} />
        </div>
      )}
    </div>
  );
};
