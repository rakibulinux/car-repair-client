import { useCategoriesQuery } from "@/redux/api/categoriesApi";
import { Input } from "../ui/input";
import { Card } from "./card";

interface CardProps {
  items: any;
  setSearchTerm: (e: any) => void;
  setCategoryId: (e: any) => void;
  setLocation: (e: any) => void;
}

const CardList = ({
  items,
  setSearchTerm,
  setCategoryId,
  setLocation,
}: CardProps) => {
  const query: Record<string, any> = {};
  const { data: categoryData } = useCategoriesQuery(query);
  return (
    <div>
      <div className="flex justify-center items-center gap-3">
        <Input
          className="h-10 w-full rounded-full border-none dark:bg-gray-500 pe-10 ps-4 text-sm shadow-sm sm:w-56 my-4 text-center"
          id="search"
          type="search"
          placeholder="Search by name"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <select
          className="h-10 w-full rounded-full border-none pe-10 ps-4 text-sm shadow-sm sm:w-56 my-4"
          onChange={(e) => setCategoryId(e.target.value)}
        >
          <option value="">All Categories</option>
          {categoryData?.categories?.map((option: any) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
        <Input
          className="h-10 w-full rounded-full border-none dark:bg-gray-500 pe-10 ps-4 text-sm shadow-sm sm:w-56 my-4 text-center"
          type="text"
          placeholder="Location"
          onChange={(e) => setLocation(e.target.value)}
        />
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

export default CardList;
