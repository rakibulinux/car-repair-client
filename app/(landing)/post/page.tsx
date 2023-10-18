import Post from "@/components/post";

export default function Page() {
  return (
    <>
      <div className="text-white mx-auto max-w-lg text-center my-10">
        <h1 className="text-2xl font-bold sm:text-3xl">Posts</h1>
      </div>
      <Post />
    </>
  );
}
