import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByCateg, getCategorys } from "../../redux/actions";

const Filters = () => {
  const dispatch = useDispatch();
  let categs = useSelector((state) => state.categorys);

  useEffect(() => {
    dispatch(getCategorys());
  }, [dispatch]);

  const handlerFilterCategs = (e) => {
    dispatch(filterByCateg(e.target.value));
  };

  return (
    <div >
      <select
        onChange={(e) => handlerFilterCategs(e)}
        className=" px-3 py-1 text-lg  text-black bg-gray-100 border-2 border-gray-400 rounded-lg hover:bg-white transition-colors "
        id="categFilter"
      >
        <option hidden>Filter</option>
        <option value="all">All</option>
        {categs?.map((c) => (
          <option key={c.id} value={c.name}>
            {c.name}
          </option>
        ))}
      </select>

    </div>
  );
};

export default Filters;
