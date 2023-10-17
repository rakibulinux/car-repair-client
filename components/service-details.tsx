"use client";
import { useServiceQuery } from "@/redux/api/serviceApi";
import { Preview } from "./preview";

const ServiceDetails = ({ params }: any) => {
  const { data } = useServiceQuery(params?.id);
  const service = data && data;
  return (
    <div className="w-11/12 mx-auto">
      <h1>{service?.name}</h1>
      <Preview value={service?.description} />
    </div>
  );
};

export default ServiceDetails;
