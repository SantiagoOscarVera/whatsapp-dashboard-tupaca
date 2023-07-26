import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { searchXtitle, getNotes } from "../../redux/actions";
import img from "../../assets/lupa.png";

const SearchBar = () => {
  const [state, setState] = useState("");
  const dispatch = useDispatch();

  const fnState = (event) => {
    setState(event.target.value);
  };

  const limpiarState = () => {
    dispatch(searchXtitle(state));
    setState("");
  };

  const handlerAllNotes = () => {
    dispatch(getNotes());
    document.getElementById("categFilter").value = "all";
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-1/3 mx-auto relative rounded-full overflow-hidden shadow-lg bg-white" style={{ marginRight: "50px" }}>
        <input
          type="text"
          placeholder="Search notes by title..."
          onChange={fnState}
          value={state}
          className="w-full h-12 pl-12 pr-6 text-gray-900 placeholder-gray-500 outline-none focus:placeholder-gray-400"
        />
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <button
            type="submit"
            onClick={limpiarState}
            className="absolute top-0 right-0 h-12 w-12 flex items-center justify-center text-gray-600 hover:text-gray-900"
          >
            <img className="w-6" alt="" src={img} />
          </button>
        </NavLink>
      </div>

      <div style={{ marginRight: "280px" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <button onClick={handlerAllNotes}
            className=" px-3  text-lg text-black bg-gray-100 border-2 border-gray-400 rounded-lg hover:bg-white transition-colors">
            Recharge
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SearchBar;
