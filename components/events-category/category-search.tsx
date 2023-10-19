import { useCategoriesQuery } from "@/redux/api/categoriesApi";
import { useState } from "react";

const SearchFilter = () => {
  const [category, setCategory] = useState("");
  const query: Record<string, any> = {};
  const { data: categoryData } = useCategoriesQuery(query);

  return (
    <div>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        {categoryData?.categories?.map((option: any) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
        {/* Add more categories */}
      </select>
    </div>
  );
};

export default SearchFilter;
