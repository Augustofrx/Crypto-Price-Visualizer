import React from "react";
import { deleteFavorites, setFavorites } from "../Redux/Actions/Actions";
import { showNotify } from "../Utils/showNotify";
import { useDispatch, useSelector } from "react-redux";

export const FavoriteBtn = ({ name }) => {
  let favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const handleAddFavorites = (e, name, favorites) => {
    e.preventDefault();
    if (favorites.includes(name)) {
      let filter = favorites.filter((c) => c !== name);
      dispatch(deleteFavorites(filter));
    } else if (name) {
      dispatch(setFavorites(name));
    }
  };

  
  localStorage.setItem('favorites', JSON.stringify(favorites))
  
  return (
    <button
      onClick={(e) => { showNotify(favorites, name); handleAddFavorites(e, name, favorites)}}
      className="favorite_btn"
    >
      <ion-icon name="star" />
    </button>
  );
}


