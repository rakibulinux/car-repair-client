import { useCategoriesQuery } from "@/redux/api/categoriesApi";
import { useState } from "react";
import { Button } from "../ui/button";

const SearchFilter = ({ onSearch }: any) => {
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const query: Record<string, any> = {};
  const { data: categoryData } = useCategoriesQuery(query);
  const handleSearch = () => {
    const filters = {
      name: searchText,
      category,
      location,
    };
    onSearch(filters);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        {categoryData?.categories?.map((option: any) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
        {/* Add more categories */}
      </select>
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <Button variant="premium" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
};

export default SearchFilter;
