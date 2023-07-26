import React from 'react';
import { Link } from "react-router-dom";
const NoteCreateButton = () => {
    return (
        <div>
          <Link to="/notes">
            <button className=" px-6 py-1 text-lg text-black bg-gray-100 border-2 border-gray-400 rounded-lg hover:bg-white transition-colors">
              Create Note
            </button>
          </Link>
        </div>
    );
};

export default NoteCreateButton;