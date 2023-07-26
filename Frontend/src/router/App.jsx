import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "../views/home/home"
import NoteCreate from "../views/NoteCreate/NoteCreate";
import UpdateNote from "../views/UpdateNote/updateNote";
import Detail from "../views/Detail/Detail";

/* axios.defaults.baseURL = "https://whatsapp-dashboard-santiago-vera.up.railway.app/"; */
axios.defaults.baseURL = "http://localhost:3001";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/notes" element={<NoteCreate />} />
      <Route path="/notes/:id" element={<UpdateNote />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  )
}


export default App