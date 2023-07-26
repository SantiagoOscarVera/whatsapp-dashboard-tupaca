import React from "react";
import { useEffect } from "react";
import { deleteNote, getNotes, getCategorys } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../Card/Card";

const InProcess = () => {
  const dispatch = useDispatch();
  let notes = useSelector((state) => state.notes);
  let archived = notes.filter((note) => note.archived === false && note.category.includes("In progress"));

  useEffect(() => {
    dispatch(getNotes());
    dispatch(getCategorys());
  }, [dispatch]);

  const onClose = (id) => {
    let res = window.confirm("Are you sure to delete this note?");
    if (res === true) {
      dispatch(deleteNote(id));
    }
  };

  return (
    <div className=" h-full"
      style={{
        height: "100%",
        width: "17vw",
        backgroundImage:
          "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAA1BMVEW1srKXcx+7AAAASElEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABODcYhAAEl463hAAAAAElFTkSuQmCC')",
        backgroundSize: "cover",
      }}>
      <div className="flex justify-center items-center font-bold text-3xl p-2">
        <h1>In Progress</h1>
      </div>

      <div className="flex justify-center items-center mt-4 mb-7 ">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 "
          style={{ maxWidth: "300px", }}
        >
          {archived.length === 0 ? (
            <div className="flex justify-center items-center flex-col"
            style={{ height: "100%" }}
            >
              <h3 style={{ textAlign: "center" }}> You don't have any whatsapp notes on file 🤐</h3>
            </div>
          ) : (
            archived.map((card) => (
              <div key={card.id}>
                <Card
                  id={card.id}
                  onClose={onClose}
                  title={card.title}
                  category={card.category}
                  content={card.content}
                  lastEdited={card.fecha}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default InProcess;
