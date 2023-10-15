import React from "react";

type Option = {
  label: string;
  value: string;
};

type SelectFormProps = {
  label?: string;
  options: Option[];
  value: string;
  defaultValue: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const SelectForm = ({
  label,
  options,
  value,
  onChange,
  defaultValue,
}: SelectFormProps) => {
  return (
    <div className="mb-4">
      <select
        id={label}
        name={label}
        className="block w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectForm;
