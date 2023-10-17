"use client";
import { useServiceQuery } from "@/redux/api/serviceApi";

const ServiceDetails = ({ params }: any) => {
  const { data } = useServiceQuery(params?.id);
  const service = data && data;
  console.log(service);

  return (
    <div className="w-11/12 mx-auto">
      <h1>{service?.name}</h1>
    </div>
  );
};

export default ServiceDetails;
