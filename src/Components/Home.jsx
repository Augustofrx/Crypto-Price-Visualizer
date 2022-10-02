import React from "react";
import { useCallback, useEffect, useState } from "react";
import { TableCoins } from "./Table_coins";
import fetchCurrency from "../Utils/fetchCurrency";

export const Home = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [currency, setCurrency] = useState("USD");

  const handleCurrencyChange = useCallback(
    (e) => {
      setCurrency(e ? e.target.value : currency);
      fetchCurrency(currency, setCoins);
    },
    [currency]
  );

  useEffect(() => {
    handleCurrencyChange();
  }, [coins, handleCurrencyChange]);

  return (
    <div className="container">
      <header className="mt-3 mb-4 text-center fs-5 fw-bolder bg-success bg-gradient py-3 rounded-2">
        Welcome to Crypto Price Visualizer, enjoy looking for information about
        your favorites cryptos !
      </header>
      <div className="d-flex mt-4">
        <label htmlFor="Currency" className="me-2 fs-5">
          <strong>Select currency exchange </strong>
        </label>
        <select
          name="Currency"
          onChange={handleCurrencyChange}
          className="bg-dark text-light border-0 rounded-2 p-1"
        >
          <option value="USD" defaultValue={true}>
            USD
          </option>
          <option value="ARS">ARS</option>
        </select>
      </div>
      <div className="row">
        <input
          type="text"
          placeholder="Search a coin"
          className="form-control bg-dark text-light border-0 mt-4 text-center"
          onChange={(e) => setSearch(e.target.value)}
        />
        <TableCoins coins={coins} search={search} currency={currency} />
      </div>
    </div>
  );
};
