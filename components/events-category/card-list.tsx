import { useCategoriesQuery } from "@/redux/api/categoriesApi";
import { Card } from "../service/card";

interface CardProps {
  items: any;
  setCategoryId?: (e: any) => void;
}

const EventCategoryCardList = ({ items, setCategoryId }: CardProps) => {
  const query: Record<string, any> = {};
  const { data: categoryData } = useCategoriesQuery(query);
  return (
    <div>
      <div className="flex justify-center items-center gap-3">
        <select
          className="h-10 w-full rounded-full border-none pe-10 ps-4 text-sm shadow-sm sm:w-56 my-4"
          onChange={(e) => setCategoryId && setCategoryId(e.target.value)}
        >
          <option value="">All Categories</option>
          {categoryData?.categories?.map((option: any) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
        {items &&
          items?.map((item: any) => (
            <Card
              key={item?.id}
              id={item?.id}
              name={item?.name}
              image={item?.image}
              price={item?.price}
              availability={item?.availability}
              category={item?.category.name!}
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

export default EventCategoryCardList;
