import React from "react";
import edit from "../../assets/edit.png";
import trash from "../../assets/trash.png";
import { Link, NavLink } from "react-router-dom";

const Card = ({
  id,
  title,
  lastEdited,
  onClose,
  category,
  content,
}) => {
  return (
    <div
      className="w-full p-4 mb-4"
      style={{
        backgroundColor: "#DCF8C6",
        borderRadius: "8px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        textAlign: "left",
      }}
    >

      <div className="flex items-center justify-end mt-2 mb-2">

        <button
          onClick={() => onClose(id)}
          className="mr-4 bg-white transition ease-in-out hover:bg-gray-100 p-2 rounded-full"
        >
          <img src={trash} alt="img" className="w-4" />
        </button>

        <Link to={`/notes/${id}`}>
          <button className="bg-white transition ease-in-out hover:bg-gray-100 p-2 rounded-full" >
            <img src={edit} alt="img" className="w-4" />
          </button>
        </Link>

      </div>

      <NavLink to={`/detail/${id}`} className="no-underline">
        <div
          className="link bg-white p-3 mb-2 rounded-lg"
          style={{
            borderRadius: "8px",
            boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)",
          }}
        >
          {title.length ? (
            <h1 className="text-black text-center text-lg font-bold mb-1">{title}</h1>
          ) : (
            <h1 className="text-black text-lg font-bold mb-1">NO TITLE</h1>
          )}
          <p className="text-black text-center">{content}</p>
        </div>
      </NavLink>
      <p className="text-gray-500 text-sm mb-2">
        Last edited: {lastEdited.split("", 10)}
      </p>

      {category.length ? (
        <p className="text-gray-600 text-center">{category.join(", ")}</p>
      ) : (
        <p className="text-gray-600 text-center">Without category</p>
      )}

    </div>
  );
};

export default Card;
