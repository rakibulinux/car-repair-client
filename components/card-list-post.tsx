import { PostCard } from "./post-card";

interface CardProps {
  items: any;
}

const CardListPost = ({ items }: CardProps) => {
  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
        {items &&
          items.map((item: any) => (
            <PostCard
              key={item?.id}
              id={item?.id}
              title={item?.title}
              image={item?.image}
              content={item?.content}
              category={item?.categories.name!}
            />
          ))}
      </div>
      {items?.length === 0 && (
        <div className="text-center text-sm text-muted-foreground mt-10">
          No Service found
        </div>
      )}
    </div>
  );
};

export default CardListPost;
