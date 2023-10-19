import { ReviewCard } from "./review-card";

interface ReviewCardProps {
  items: any;
}

const ReviewList = ({ items }: ReviewCardProps) => {
  return (
    <div>
      <div className="">
        {items &&
          items.map((item: any) => (
            <ReviewCard
              key={item?.id}
              id={item?.id}
              comment={item?.comment}
              rating={item?.rating}
              userId={item?.userId}
              serviceId={item?.serviceId}
            />
          ))}
      </div>
      {items?.length === 0 && (
        <div className="text-center text-sm text-muted-foreground mt-10">
          No Reviews found
        </div>
      )}
    </div>
  );
};

export default ReviewList;
