"use client";
import Loading from "@/app/loading";
import { usePostQuery } from "@/redux/api/postApi";
import Image from "next/image";
import { Preview } from "./preview";

const PostDetails = ({ params }: any) => {
  const { data, isLoading } = usePostQuery(params?.id);
  if (isLoading) {
    return <Loading />;
  }
  const post = data && data;
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-3xl ">{post?.title}</h1>
      <div className="flex justify-center items-center my-2">
        <Image src={post?.image} alt={post?.title} width={600} height={300} />
      </div>
      <Preview value={post?.content} />
    </div>
  );
};

export default PostDetails;
