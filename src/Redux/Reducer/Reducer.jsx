const inititalState = {
  favorites: []
};

const rootReducer = (state = inititalState, action) => {
  switch (action.type) {
    case "SET_FAVORITES": {
      return {
         ...state,
         favorites: [...state.favorites, action.payload]
        };
    }
    case "DELETE_FAVORITES": {
      return {
         ...state,
         favorites:  action.payload
        };
    }

    default:
      return state;
  }
};
export default rootReducer;
