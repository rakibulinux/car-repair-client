import ServiceDetails from "@/components/service-details";

export default function Page({ params }: any) {
  return (
    <>
      <div className=" mx-auto max-w-lg text-center my-10">
        <h1 className="text-2xl font-bold sm:text-3xl">Service Details</h1>
      </div>
      <ServiceDetails params={params} />
    </>
  );
}
