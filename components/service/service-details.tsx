"use client";
import Loading from "@/app/loading";
import { useReviewsQuery } from "@/redux/api/reviewApi";
import { useServiceQuery } from "@/redux/api/serviceApi";
import { Preview } from "../preview";
import Review from "../review";
import ReviewList from "../review-list";

const ServiceDetails = ({ params }: any) => {
  const { data, isLoading } = useServiceQuery(params?.id);
  const { data: reviews, isLoading: reviewsIsLoading } = useReviewsQuery({});
  if (isLoading && reviewsIsLoading) {
    return <Loading />;
  }
  const service = data;
  const serviceReviews = reviews?.reviews.filter(
    (review) => review.serviceId === params?.id
  );
  //console.log(serviceReviews);
  return (
    <div className="w-11/12 mx-auto text-start">
      <h1 className="text-2xl">{service?.name}</h1>
      <Preview value={service?.description} />
      {service?.availability === "Available" && (
        <Review serviceId={service?.id} />
      )}
      {service?.availability === "Available" && (
        <ReviewList items={serviceReviews} />
      )}
    </div>
  );
};

export default ServiceDetails;
