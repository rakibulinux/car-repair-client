"use client";
import Loading from "@/app/loading";
import { useServiceQuery } from "@/redux/api/serviceApi";
import { Preview } from "./preview";
import Review from "./review";

const ServiceDetails = ({ params }: any) => {
  const { data, isLoading } = useServiceQuery(params?.id);
  const service = data && data;
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="w-11/12 mx-auto">
      <h1>{service?.name}</h1>
      <Preview value={service?.description} />
      {service?.availability === "Available" && (
        <Review serviceId={service?.id} />
      )}
    </div>
  );
};

export default ServiceDetails;
