import PostDetails from "@/components/post-details";

export default function Page({ params }: any) {
  return (
    <div className="mx-auto max-w-11/12 text-center my-10">
      <PostDetails params={params} />
    </div>
  );
}
