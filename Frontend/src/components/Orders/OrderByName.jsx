import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNotes } from "../../redux/actions";

const OrderByName = () => {
  const dispatch = useDispatch();
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSortOrderChange = (order) => {
    setSortOrder(order);
    dispatch(getNotes(order));
  };

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={() => handleSortOrderChange("asc")}
        className={`px-3 py-1 text-lg text-black bg-gray-100 border-2 border-gray-400 rounded-lg hover:bg-white transition-colors ${sortOrder === "asc" ? "bg-indigo-500 text-white" : ""
          }`}
      >
        A-Z
      </button>
      <button
        onClick={() => handleSortOrderChange("desc")}
        className={`px-3 py-1 text-lg text-black bg-gray-100 border-2 border-gray-400 rounded-lg hover:bg-white transition-colors ${sortOrder === "desc" ? "bg-indigo-500 text-white" : ""
          }`}
      >
        Z-A
      </button>
    </div>
  );
};

export default OrderByName;

