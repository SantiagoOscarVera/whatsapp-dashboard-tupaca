import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteNote,
  getNotes,
} from "../../../redux/actions";
import Card from "../../../components/Card/Card";
import archivedLogo from "../../../assets/archived.png";

const AllNotes = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);

  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);

  const onClose = (id) => {
    let res = window.confirm("Are you sure to delete this note?");
    if (res === true) {
      dispatch(deleteNote(id));
    }
  };

  return (
    <div className="h-full" style={{ height: "100%", width: "17vw", backgroundImage: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAA1BMVEW1srKXcx+7AAAASElEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABODcYhAAEl463hAAAAAElFTkSuQmCC')", backgroundSize: "cover" }}>
      <div className="flex justify-center items-center font-bold text-3xl p-2">
        <h1>All Notes</h1>
      </div>

      {notes.length === 0 && (
        <div className="flex justify-center items-center flex-col">
          <h3 className="font-bold">No note created</h3>
        </div>
      )}

      <div className="flex justify-center items-center mt-4 mb-7">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-1" style={{ maxWidth: "300px" }}>
          {notes.length > 0 &&
            notes.map((card) => (
              <Card
                id={card.id}
                onClose={onClose}

                title={card.title}
                category={card.category}
                content={card.content}
                lastEdited={card.fecha}
                archivedLogo={archivedLogo}
                key={card.id}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default AllNotes;
