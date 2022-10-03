import React from "react";
import { deleteFavorites, setFavorites } from "../Redux/Actions/Actions";
import {Toaster, toast} from 'react-hot-toast'
import { useDispatch, useSelector } from "react-redux";

function FavoriteBtn(name) {
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
  return (
    <div>
      <button
        onClick={() => {
            toast('Hellow World')
          handleAddFavorites( name, favorites);
        }}
        className="favorite_btn"
      >
        <ion-icon name="star" />
      </button>
    <Toaster/>
    </div>
  );
}

export default FavoriteBtn;
