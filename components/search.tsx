"use client";
import { useServicesQuery } from "@/redux/api/serviceApi";
import { useDebounce } from "@/redux/hooks";
import { IService } from "@/types";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ModeToggle } from "./dark-light";
import { DropdownMenuItems } from "./dropdown-menu";
import { Card } from "./ui/card";
const SearchInput = () => {
  const [filteredServices, setFilteredServices] = useState<IService[]>([]);
  const [size, setSize] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const query: Record<string, any> = {};
  const router = useRouter();
  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const debouncedTerm = useDebounce({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }
  const { data: services } = useServicesQuery({ ...query });

  const handleSearchs = (filters: any) => {
    // Check if services is undefined and handle that case
    if (!services) {
      setFilteredServices([]);
      return;
    }

    // Implement the filtering logic based on the filters and your services data
    const filtered = services.services.filter((service: IService) => {
      const nameMatch =
        !filters.name ||
        service.name.toLowerCase().includes(filters.name.toLowerCase());
      return nameMatch;
    });

    setFilteredServices(filtered);
  };

  // Handle search on every change
  const handleSearchOnChange = (text: string) => {
    setSearchTerm(text); // Update the search term state
    handleSearchs({ name: text }); // Perform search as you type
  };

  return (
    <div className="flex gap-2">
      <div className="relative">
        <label className="sr-only" htmlFor="search">
          Search
        </label>
        <input
          className="h-10 w-full rounded-full border-none pe-10 ps-4 text-sm shadow-sm sm:w-56"
          id="search"
          type="search"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => handleSearchOnChange(e.target.value)}
        />
        <ul className="absolute z-10">
          {debouncedTerm &&
            filteredServices &&
            filteredServices.map((service) => (
              <Link key={service.id} href={`/service/${service.id}`}>
                <Card
                  onClick={() => router.push(`/service/${service.id}`)}
                  key={service.id}
                  className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
                >
                  <div className="flex items-center gap-x-4">
                    {/* <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                  <service.icon className={cn("w-8 h-8", tool.color)} />
                </div> */}
                    <div className="font-semibold">{service.name}</div>
                  </div>
                  <ArrowRight className="w-5 h-5" />
                </Card>
              </Link>
            ))}
        </ul>
      </div>
      <DropdownMenuItems />
      <ModeToggle />
    </div>
  );
};

export default SearchInput;
