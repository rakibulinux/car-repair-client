import CreatePost from "@/components/create-post";

export default function Page() {
  return (
    <>
      <div className="text-gray-900 mx-auto max-w-lg text-center mb-10">
        <h1 className="text-2xl font-bold sm:text-3xl">Create a Post</h1>
      </div>
      <CreatePost />
    </>
  );
}
