export const initialState = {
  data: [],
  loading: false,
  error: {
    open: false,
    message: "",
  },
  fav: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "GET_DATA":
      return { ...state, data: [...action.payload] };
    case "REMOVE_FROM_FAV": {
      let tempArray = state.fav.filter((i) => i.id !== action.payload.id);
      return { ...state, fav: [...tempArray] };
    }
    case "ADD_TO_FAV": {
      let tempArray = [...state.fav, action.payload];
      return { ...state, fav: tempArray };
    }
    case "ERROR_OCCURED":
      return { ...state, error: { open: true, message: action.payload } };
    case "CLOSE_ERROR":
      return { ...state, error: { open: false, message: "" } };
    default:
      return { ...state };
  }
};
