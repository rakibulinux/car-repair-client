"use client";
import Loading from "@/app/loading";
import { usePostsQuery } from "@/redux/api/postApi";
import { useDebounce } from "@/redux/hooks";

import { getUserInfo } from "@/services/auth.service";
import { IUserInfoType } from "@/types";
import { useState } from "react";
import CardListPost from "./card-list-post";

const Post = () => {
  const [size, setSize] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const query: Record<string, any> = {};
  const { role } = getUserInfo() as IUserInfoType;
  console.log(role);
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

  const { data, isLoading } = usePostsQuery({ ...query });
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="mx-auto w-11/12 my-4">
      <CardListPost items={data?.posts} />
    </div>
  );
};

export default Post;
