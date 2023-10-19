"use client";
import { usePostsQuery } from "@/redux/api/postApi";
import { useDebounce } from "@/redux/hooks";

import { useState } from "react";
import CardListPost from "./card-list-post";

const Post = () => {
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

  const { data } = usePostsQuery({ ...query });

  return (
    <div className="mx-auto w-11/12 my-4">
      <CardListPost items={data?.posts} />
    </div>
  );
};

export default Post;
