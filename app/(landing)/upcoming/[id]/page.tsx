import ServiceDetails from "@/components/service-details";

export default function Page({ params }: any) {
  return (
    <div className="mx-auto max-w-11/12 text-center my-10">
      <ServiceDetails params={params} />
    </div>
  );
}
