import React from "react";
import { useEffect } from "react";
import { getNotes } from "../../redux/actions";
import { useDispatch } from "react-redux";
import Filters from "../../components/Filters/Filters";
import SearchBar from "../../components/SearchBar/SearchBar";
import NoteCreateButton from "../../views/NoteCreate/NoteCreateButton";
import ToDo from "../../components/Dashboard/ToDo/ToDo";
import InProcess from "../../components/Dashboard/InProcess/InProcess";
import Made from "../../components/Dashboard/Made/Made";
import OrderByName from "../../components/Orders/OrderByName";
import AllNotes from "../../components/Dashboard/AllNotes/AllNotes";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);


  return (
    <div
      className="w-full h-full"
      style={{
        height: "200vh",
        width: "100%",
        backgroundImage: "url('https://media.discordapp.net/attachments/734432464398975006/1131964010787520643/Message_Background__Whatsapp_Message_Background.jpg')",
        backgroundSize: "cover",
      }}
    >
      <div style={{ padding: "20px" }}>
        <div className="flex justify-center items-center font-bold text-3xl mb-4">
          <h1>Whatsapp Dashboard</h1>
        </div>

        <SearchBar />

        <div className="flex justify-center items-center mt-7 mb-7 ml-12">
          <div className="grid grid-cols-3 gap-4">
            <NoteCreateButton />
            <Filters />
            <OrderByName />

          </div>
        </div>

        <div className="">
          <div className="flex justify-center items-center mt-7 mb-7 ">
            <div className="grid grid-cols-4 gap-4">
              <AllNotes />
              <ToDo />
              <InProcess />
              <Made />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
