
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


  export const set_coins = (payload) => {
    return {
      type: "SET_COINS",
      payload
    }
  }

  export const setCurrencyType = (payload) => {
    return {
      type: "SET_CURRENCY",
      payload
    }
  }