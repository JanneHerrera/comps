import { useState } from "react";
function useSort(data, config) {
  const [sortOrder, setSortOrder] = useState(null);
  const [SortBy, setSortBy] = useState(null);

  const setSortColumn = (label) => {
    if (SortBy && label !== SortBy) {
      setSortBy(label);
      setSortOrder("asc");
      return;
    }

    if (sortOrder === null) {
      setSortBy(label);
      setSortOrder("asc");
    } else if (sortOrder === "asc") {
      setSortBy(label);
      setSortOrder("desc");
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
  };
  // Only sort data if SortOrder && sortBy are not null
  // Make a copy of the data
  // Find the correct sortName function and use it for sorting
  let sortedData = data;
  if (sortOrder && SortBy) {
    const { sortName } = config.find((column) => column.label === SortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = sortName(a);
      const valueB = sortName(b);

      const reverseOrder = sortOrder === "asc" ? 1 : -1;

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  return {
    sortOrder,
    SortBy,
    sortedData,
    setSortColumn,
  };
}
export default useSort;
