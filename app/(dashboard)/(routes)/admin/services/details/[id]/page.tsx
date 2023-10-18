import ServiceDetails from "@/components/service-details";

export default function Page({ params }: any) {
  return (
    <>
      <ServiceDetails params={params} />
    </>
  );
}
