
export const setFavorites = (payload) => {
    return {
      type: "SET_FAVORITES",
      payload
    };
  };

  export const deleteFavorites = (payload) => {
    return {
      type: "DELETE_FAVORITES",
      payload
    };
  };