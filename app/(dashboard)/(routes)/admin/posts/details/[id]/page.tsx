import PostDetails from "@/components/post-details";

export default function Page({ params }: any) {
  return (
    <>
      <div className="text-gray-900 mx-auto max-w-lg text-center mb-10">
        <h1 className="text-2xl font-bold sm:text-3xl">Service Details</h1>
      </div>
      <PostDetails params={params} />
    </>
  );
}
