"use client";

import { Repeat } from "lucide-react";

import Loading from "@/app/loading";
import { DataTable } from "@/components/data-table";
import { Heading } from "@/components/heading";
import { useBookingsQuery } from "@/redux/api/bookingApi";
import { useDebounce } from "@/redux/hooks";
import { useState } from "react";
import { columns } from "./columns";

const BookingListPage = () => {
  const [size, setSize] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const query: Record<string, any> = {};

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

  const { data, isLoading } = useBookingsQuery({ ...query });
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="w-11/12 mx-auto">
      <Heading
        title="Booking List"
        description="Manage All Booking From Here."
        icon={Repeat}
        iconColor="text-orange-700"
        bgColor="bg-orange-700/10"
      />
      <DataTable columns={columns} data={(data && data.booking) || []} />
    </div>
  );
};

export default BookingListPage;
