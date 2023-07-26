import {
  GET_NOTES,
  DELETE_NOTE,
  GET_DETAIL,
  CLEAN_DETAIL,
  GET_CATEGORYS,
  FILTER_BY_CATEG,
  SEARCHxTITLE,
} from "./actions";

const initialState = {
  notes: [],
  detail: [],
  categorys: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTES: {
      return {
        ...state,
        notes: action.payload,
        copyNotes: action.payload,
      };
    }
    case GET_CATEGORYS: {
      return {
        ...state,
        categorys: action.payload,
      };
    }

    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };

    case CLEAN_DETAIL:
      return {
        ...state,
        detail: [],
      };

    case DELETE_NOTE: {
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
        copyNotes: state.copyNotes.filter((note) => note.id !== action.payload),
      };
    }

    case FILTER_BY_CATEG:
      const noteCateg =
        action.payload === "all"
          ? state.copyNotes
          : state.copyNotes.filter((elem) =>
            elem.category?.includes(action.payload)
          );
      return {
        ...state,
        notes: noteCateg,
      };

    case SEARCHxTITLE: {
      let title = action.payload.toLowerCase();
      const notesFilter = state.copyNotes.filter((note) =>
        note.title.toLowerCase().includes(title)
      );
      return {
        ...state,
        notes: [...notesFilter],
      };
    }



    default:
      return { ...state };
  }
};

export default rootReducer;
