import React from "react";
import { useSelector } from "react-redux";
import { setCurrencySymbol } from "../Utils/setCurrencySymbol";
// import { setCurrencySymbol } from "../Utils/setCurrencySymbol";

export const Favorites = () => {
  let coinsFiltered = [];
  let currency = useSelector((state) => state.currency)
 
  // let currency = JSON.parse(localStorage.getItem('currency'))
 let getLocalStorage = () => {
   let favorites = JSON.parse(localStorage.getItem("favorites"));
   let coins = JSON.parse(localStorage.getItem("coins"));
   for (let i = 0; i < favorites.length; i++) {
     coinsFiltered = [
       ...coinsFiltered,
       ...coins.filter((c) => c.name === favorites[i]),
      ];
    }
 }

 getLocalStorage()

  const Titles = ["Coin", "Price", "Price Change", "24h Volume"];

  return (
    <div className="container d-flex flex-column justify-content-center w-100">
      <div className="d-flex justify-content-center mt-4">
        <h1>Enjoy your favorites</h1>
      </div>
    <table className="table table-dark mt-4 table-hover">
      <thead>
        <tr>
          {Titles.map((title, index) => (
            <td key={index}>{title}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {coinsFiltered.map((c) => (
          <tr key={c.name}>
            <td>
              <img
                src={c.image ? c.image : ""}
                alt={c.name}
                style={{ width: "5%" }}
                className=" img-container img-fluid me-4"
              />
              <span>{c.name}</span>
              <span className="ms-3 text-muted text-uppercase">{c.symbol}</span>
            </td>
            <td>{setCurrencySymbol(currency)} {c.current_price}</td>
            <td
              className={
                c.price_change_percentage_24h > 0
                  ? "text-success"
                  : "text-danger"
              }
            >
              {c.price_change_percentage_24h} %
            </td>
            <td>{setCurrencySymbol(currency)} {c.total_volume}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};
