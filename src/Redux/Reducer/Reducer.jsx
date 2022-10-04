const inititalState = {
  favorites: [],
  coin: []
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
    case "SET_COINS": {
      return {
         ...state,
         coin:  action.payload
        };
    }
    case "SET_CURRENCY": {
      return {
         ...state,
         currency:  action.payload
        };
    }

    default:
      return state;
  }
};
export default rootReducer;
