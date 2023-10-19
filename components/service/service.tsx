"use client";
import { useServicesQuery } from "@/redux/api/serviceApi";
import { useDebounce } from "@/redux/hooks";
import { useState } from "react";
import CardList from "./card-list";

const Service = () => {
  const [size, setSize] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [categoryId, setCategoryId] = useState<string>("");
  const [location, setLocation] = useState("");
  const query: Record<string, any> = {};
  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  if (categoryId) {
    query["categoryId"] = categoryId;
  }
  if (location) {
    query["location"] = location;
  }
  //
  const debouncedTerm = useDebounce({
    searchQuery: searchTerm,
    delay: 600,
  });
  if (!!debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }

  const { data } = useServicesQuery({ ...query });

  return (
    <div className="mx-auto w-11/12 my-4">
      <CardList
        setSearchTerm={setSearchTerm}
        setCategoryId={setCategoryId}
        setLocation={setLocation}
        items={data?.services}
      />
    </div>
  );
};

export default Service;
