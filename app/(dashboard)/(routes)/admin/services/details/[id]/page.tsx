import ServiceDetails from "@/components/service/service-details";

export default function Page({ params }: any) {
  return (
    <>
      <ServiceDetails params={params} />
    </>
  );
}
