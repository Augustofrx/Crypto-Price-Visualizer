import { useCallback, useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { TableCoins } from "./Components/Table_coins";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [currency, setCurrency] = useState("USD");

  const handleCurrencyChange = useCallback(
    (e) => {
      setCurrency(e ? e.target.value : currency);
      fetchCurrency(currency);
    },
    [currency]
  );

  const fetchCurrency = async (currency) => {
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${
        currency === "USD" ? "USD" : "ARS"
      }&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    );
    setCoins(res.data);
  };

  useEffect(() => {
    handleCurrencyChange();
  }, [coins, handleCurrencyChange]);

  return (
    <div className="container">
      <header className="mt-3 mb-4 text-center fs-5 fw-bolder bg-success bg-gradient py-3 rounded-2">
   Welcome to Crypto Price Visualizer, enjoy looking for information about your favorites cryptos ! 
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
}

export default App;
