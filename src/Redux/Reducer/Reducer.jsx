const inititalState = { 
    favorites : []
 };


const rootReducer = (state = inititalState, action) => {
  switch (action.type) {
    case "SET_FAVORITES": {
      return { ...state, favorites: action.payload };
    }
  }
  return state;
};
export default rootReducer;
