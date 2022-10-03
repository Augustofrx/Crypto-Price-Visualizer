import React, { useCallback, useEffect, useState } from "react";
import fetchCurrency from "../Utils/fetchCurrency";
import { TableCoins } from "./Table_coins";
import { Link } from "react-router-dom";
export const CurrencyFormAndSearch = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [currency, setCurrency] = useState("USD");

  const handleCurrencyChange = useCallback(
    (e) => {
      setCurrency(e ? e.target.value : currency);
      fetchCurrency(currency, setCoins);
    },
    [currency, setCoins, setCurrency]
  );

  useEffect(() => {
    handleCurrencyChange();
  }, [handleCurrencyChange]);

  return (
    <div className="d-flex flex-column justify-content-center w-100">
      <div className="d-flex flex-column justify-content-center align-items-center w-100 mb-4 mt-0">
        <input
          type="text"
          placeholder="Search a coin"
          className="form-control bg-dark text-light border-0 mt-4 text-center"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <form className="d-flex justify-content-between w-100">
        {" "}
      <div>  <label htmlFor="Currency" className="me-2 fs-5">
          Select currency exchange
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
        <div>
      <Link to="/favorites" className="link fs-6">
            My favorites <ion-icon name="star" />
          </Link>
          </div>
      </form>
        <TableCoins coins={coins} search={search} currency={currency} />
    </div>
  );
};
