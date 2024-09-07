import { useSearchParams } from "react-router-dom";

import Select from "./Select";

export default function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleChange(e) {
    setSearchParams(function (sp) {
      sp.set("sortBy", e.target.value);

      return sp;
    });
  }

  const sortBy = searchParams.get("sortBy") || "";

  return (
    <Select
      options={options}
      value={sortBy}
      onChange={handleChange}
      type="white"
    />
  );
}
