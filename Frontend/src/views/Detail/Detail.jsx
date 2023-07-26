import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanDetail, getDetail } from "../../redux/actions";
import { Link, useParams } from "react-router-dom";

const Detail = () => {
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.detail);
  let { id } = useParams();

  useEffect(() => {
    dispatch(getDetail(id));
    return function () {
      dispatch(cleanDetail());
    };
  }, [dispatch, id]);

  return (
    <div
      className="h-screen w-full bg-cover"
      style={{
        backgroundImage:
          "url('https://media.discordapp.net/attachments/734432464398975006/1131964010787520643/Message_Background__Whatsapp_Message_Background.jpg')",
      }}
    >

      <div className="p-2">
        {detail.length ? (
          <div className="flex items-center justify-center space-x-4 ">
            <Link to="/">
              <button className=" px-6 py-1 text-lg text-black bg-gray-100 border-2 border-gray-400   rounded-lg hover:bg-white transition-colors">Home</button>
            </Link>
            <Link to={`/notes/${id}`}>
              <button className=" px-6 py-1 text-lg text-black bg-gray-100 border-2 border-gray-400 rounded-lg hover:bg-white transition-colors">Edit Note</button>
            </Link>
          </div>
        ) : (
          <div className="flex items-center justify-center mt-4">
            <Link to="/">
              <button className=" px-6 py-1 text-lg text-black bg-gray-200 border-2 border-gray-400 rounded-lg hover:bg-white transition-colors">Home</button>
            </Link>
          </div>
        )}
      </div>
      <div className="flex justify-center">
        {detail.length ? (
          <div className="w-96 h-60 shadow-md p-8 m-8 border bg-white rounded-lg">
            <div className="border-b  transition ease-in-out " style={{
              backgroundColor: "#DCF8C6",

            }}>
              <h1 className="flex items-center justify-center text-lg font-semibold">
                {detail[0].title}
              </h1>
            </div>
            <p className="mt-2">Last edited: {detail[0].fecha.split("", 10)}</p>
            <hr className="my-2" />
            <div className="contentBody">
              <p className="font-medium">Content: </p>
              <p>{detail[0].content}</p>
            </div>
          </div>
        ) : (
          <div className="w-96 h-60 flex items-center justify-center border m-8 bg-white rounded-lg">
            <h3>
              This note doesn't exist or has been deleted
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
