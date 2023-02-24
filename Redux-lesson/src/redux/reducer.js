import { ADD_BOOK, DELETE_BOOK, SET_FILTER } from "./types";

const initialState = {
  books: [],
  filter: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      const newBooks = [...state.books, action.payload];
      return { ...state, books: newBooks };
    case DELETE_BOOK:
      const result = state.books.filter((item) => item.id !== action.payload);
      return { ...state, books: result };
    case SET_FILTER:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

export default reducer;
