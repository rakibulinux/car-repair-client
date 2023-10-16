import { useCategoriesQuery } from "@/redux/api/categoriesApi";
import { SelectOptions } from "@/types";
import FormSelectField from "./FormSelectField";

type CategoriesProps = {
  name: string;
  label?: string;
  setSelectedCategoryId: (el: any) => void;
};

const Categories = ({
  name,
  label,
  setSelectedCategoryId,
}: CategoriesProps) => {
  const query: Record<string, any> = {};
  const { data: categoryData } = useCategoriesQuery(query);

  const categories = categoryData?.categories;
  const categoryOptions = categories?.map((category) => {
    return {
      label: category?.name,
      value: category?.id,
    };
  });
  return (
    <>
      <FormSelectField
        name={name}
        label={label}
        options={categoryOptions as SelectOptions[]}
        handleChange={setSelectedCategoryId}
      />
    </>
  );
};

export default Categories;
