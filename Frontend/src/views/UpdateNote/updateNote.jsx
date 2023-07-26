import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {
  getCategorys,
  getDetail,
  updateNote,
} from "../../redux/actions";

const UpdateNote = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const categs = useSelector((state) => state.categorys);
  const detail = useSelector((state) => state.detail);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetail(id));
    dispatch(getCategorys());
  }, [dispatch, id]);

  const [input, setInput] = useState({
    id,
    title: "",
    content: "",
    category: [],
  });

  const handlerChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value === '' ? '' : e.target.value,
    });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();

    dispatch(updateNote(input, id));
    alert("Note updated successfully! You will be redirected to the start");
    setInput({
      id,
      title: "",
      content: "",
      category: [],
    });
    navigate("/");
  };

  const handlerSelectCateg = (e) => {
    if (!input.category.includes(e.target.value)) {
      setInput({
        ...input,
        category: [ e.target.value],
      });
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center min-h-screen " style={{
        width: "100%",
        backgroundImage:
          "url('https://media.discordapp.net/attachments/734432464398975006/1131964010787520643/Message_Background__Whatsapp_Message_Background.jpg')",

      }}>
        <h1 className="font-bold text-6xl mt-2 mb-3 text-black">Update Note</h1>
        <Link to="/">
          <button className="px-6 py-1 text-lg text-black bg-gray-100 border-2 border-gray-400 rounded-lg hover:bg-white transition-colors">
            Home
          </button>
        </Link>


        {detail.length && (
          <div className="flex flex-col items-center mt-7 w-4/5 max-w-md bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={(e) => handlerSubmit(e)} className="w-full flex flex-col items-center">
              {detail[0].category.length ? (
                <p className="text-xl mb-4 text-black">{`Previous category: ${detail[0].category}`}</p>
              ) : (
                <p className="text-xl mb-4 text-black">
                  Note without previous category
                </p>
              )}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                {categs?.map((obj) => {
                  return (
                    <div className="flex flex-col items-center rounded-lg py-1 px-3"
                      style={{
                        backgroundColor: "#DCF8C6",
                      }}
                      key={obj.id}
                    >
                      <label
                        htmlFor={obj.name}
                        className="text-lg flex flex-col items-center"
                      >
                        {obj.name}
                        <div className="selectss">
                          <input
                            type="radio" 
                            name="category" 
                            id={obj.id}
                            value={obj.name}
                            onChange={(e) => handlerSelectCateg(e)}
                            checked={input.category.includes(obj.name)} 
                            className="mt-2"
                          />
                        </div>
                      </label>
                    </div>
                  );
                })}
              </div>

              <div className="inputI mb-4">
                <label className="text-black mr-3">Title: </label>
                <input
                  type="text"
                  name="title"
                  value={input.title}
                  className="titleInput border border-gray-400 px-4 py-2 mt-2 rounded-md w-full sm:w-4/5 focus:outline-none focus:border-indigo-400"
                  onChange={(e) => handlerChange(e)}
                ></input>
              </div>

              <div className="inputI mb-4">
                <label>Content: </label>
                <textarea
                  type="text"
                  name="content"
                  value={input.content}
                  className="contentInput border border-gray-400 px-4 py-2 mt-2 rounded-md w-full h-24 resize-none focus:outline-none focus:border-indigo-400"
                  onChange={(e) => handlerChange(e)}
                ></textarea>
              </div>

              <div className="publicar">
                <button
                  type="submit"
                  className="px-6 py-2 text-lg text-white bg-indigo-500 border-2 border-indigo-500 rounded-lg hover:bg-indigo-600 transition-colors"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default UpdateNote;
