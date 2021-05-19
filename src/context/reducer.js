export const initialState = {
  titles: [],
  title: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_VALUE":
      return {
        ...state,
        title: action.title,
      };
    default:
      return state;
  }
};

export default reducer;
